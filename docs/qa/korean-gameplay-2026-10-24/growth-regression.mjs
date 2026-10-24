import { chromium } from 'playwright';import fs from 'node:fs';import assert from 'node:assert/strict';
const out='../qa/ko-complete';fs.mkdirSync(out,{recursive:true});const browser=await chromium.launch();
const results=[];const errors=[];
for(const [width,height,touch] of [[390,844,true],[844,390,true],[1280,900,false]]){
 const context=await browser.newContext({viewport:{width,height},hasTouch:touch,isMobile:touch});const page=await context.newPage();page.on('pageerror',e=>errors.push(String(e)));
 await page.goto('http://127.0.0.1:4183/ko/');await page.waitForFunction(()=>!!window.ps);
 await page.evaluate(async()=>{await window.ps.startRun('charmander');window.advanceTime(100)});
 await page.locator('.offer').first().waitFor();await page.waitForTimeout(500);await page.locator('.offer').first().click();await page.evaluate(()=>window.advanceTime(500));
 await page.waitForFunction(()=>window.ps.run().game.phase==='playing');
 // Check English -> Korean switching through the same source messages.
 await page.evaluate(async()=>{(await import('/src/i18n/index.ts')).setLocale('en');window.ps.fork('ember',4);window.advanceTime(50)});await page.locator('.offer').first().waitFor();assert.match(await page.locator('#ui').innerText(),/Ember|Flame/);
 await page.evaluate(async()=>{window.ps.run().game.phase='playing';window.advanceTime(50);(await import('/src/i18n/index.ts')).setLocale('ko');window.advanceTime(50);window.ps.fork('ember',4);window.advanceTime(50)});
 await page.waitForTimeout(500);await page.locator('.offer').first().click();await page.evaluate(()=>window.advanceTime(50));
 await page.waitForTimeout(200);const fork=await page.locator('#ui').innerText();assert.match(fork,/추적 불꽃/);assert.match(fork,/불씨 자취/);assert.doesNotMatch(fork,/Homing|Ember|damage|cooldown/);
 await page.screenshot({path:`${out}/fork-${width}.png`});await page.waitForTimeout(500);await page.locator('.offer').first().click();await page.evaluate(()=>window.advanceTime(50));
 await page.waitForFunction(()=>window.ps.run().game.phase==='playing');
 await page.evaluate(async()=>{const {openTm}=await import('/src/game/tms.ts');openTm(window.ps.run().game,['iceBeam'],'boss');window.advanceTime(50)});await page.waitForTimeout(500);
 const tm=await page.locator('#ui').innerText();assert.match(tm,/기술머신|냉동빔/);assert.doesNotMatch(tm,/Ice Beam|TM!|Leave it/);
 await page.screenshot({path:`${out}/tm-${width}.png`});await page.locator('.offer').first().click();await page.evaluate(()=>window.advanceTime(50));
 await page.waitForFunction(()=>window.ps.run().game.phase==='playing');await page.waitForTimeout(200);const learned=await page.locator('#ui').innerText();assert.match(learned,/냉동빔/);assert.doesNotMatch(learned,/Ice Beam|Learned/);
 await page.screenshot({path:`${out}/learned-${width}.png`});
 // Render all data-driven growth cards and hover details through the production UI functions.
 const audit=await page.evaluate(async()=>{
 const {MOVES}=await import('/src/game/moves.ts'),{offerTile}=await import('/src/ui/screens.ts'),{moveCard}=await import('/src/ui/moveCard.ts');const g=window.ps.run().game,failures=[];let cards=0;
 const check=(el,label)=>{const text=el.textContent??'';const words=(text.match(/[A-Za-z]{2,}/g)??[]).filter(w=>!['HP','Lv','DPS','PC','TM','DD','Shift'].includes(w));if(words.length)failures.push({label,text,words});cards++;el.remove()};
 for(const [id,def]of Object.entries(MOVES)){
 check(moveCard(g,id,{level:1,describe:true}),id+' detail');
 check(offerTile(g,{kind:'move',id,level:1}),id+' new');
 for(let i=0;i<def.upgrades.length;i++){const level=i+2;check(offerTile(g,{kind:'move',id,level}),id+' '+level);if('fork' in def.upgrades[i])for(const branch of [0,1])check(offerTile(g,{kind:'branch',id,level,branch}),id+' branch '+level+'/'+branch);}
 }
 for(const id of ['lifeOrb','choiceBand','flameOrb','ironBall'])check(offerTile(g,{kind:'curse',id,take:true}),id);
 check(offerTile(g,{kind:'berry'}),'berry');
 return {cards,failures};
 });assert.deepEqual(audit.failures,[]);results.push({width,height,touch,cards:audit.cards,fork,tm,learned,state:JSON.parse(await page.evaluate(()=>window.render_game_to_text()))});
 await context.close();
}
await browser.close();fs.writeFileSync(`${out}/results.json`,JSON.stringify({results,errors},null,2));assert.deepEqual(errors,[]);console.log(JSON.stringify({viewports:results.map(({width,cards})=>({width,cards})),errors}));
