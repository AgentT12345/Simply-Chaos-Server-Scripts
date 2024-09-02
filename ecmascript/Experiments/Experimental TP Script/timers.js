npc.removeStoredData("DamTak");

var DamTak0 = npc.getTempData("DamTak0");

var DamTak1 = npc.getHealth();

var DamTak = DamTak0 - DamTak1;

npc.setStoredData("DamTak", DamTak);

npc.removeTempData("DamTak0");

var enemies = npc.getTempData("enemies");

var DamTakArr = npc.getTempData("DamTakArr");

var enemy = npc.getTempData("PlaEn");

var index = enemies.indexOf(enemy);

switch (index) {

case -1:

enemies.push(enemy);

npc.say(DamTak);

DamTakArr.push(DamTak);

index = enemies.indexOf(enemy);

npc.setTempData("enemies", enemies);

npc.setTempData("DamTakArr", DamTakArr);

npc.say("This " + enemies[index] + " hit me for " + DamTakArr[index]);

break;

default:

var TPGot = DamTakArr[index];

DamTakArr[index] = TPGot + DamTak;

npc.say(DamTakArr[index]);

}
