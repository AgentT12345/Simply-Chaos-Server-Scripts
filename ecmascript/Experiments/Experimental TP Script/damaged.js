var enemy = event.getSource();

var type = enemy.getType();

if (enemy != null && type == 1 || type == 2){

    var enemies = npc.getTempData("enemies");
    
    var DamTakArr = npc.getTempData("DamTakArr");

    switch (type) {
    
    case 1:
    
    npc.setTempData("PlaEn", enemy);
    
    var DamTak0 = npc.getHealth();

    npc.setTempData("DamTak0", DamTak0);

    event.npc.timers.forceStart(1,1,false);
    
    break;
    
    case 2:
   
        var index = enemies.indexOf(enemy);
        
        switch (index) {

        case -1:

        enemies.push(enemy);
        
        var DamTak = event.getDamage();

        npc.say(DamTak);
        
        DamTakArr.push(DamTak);
        
        index = enemies.indexOf(enemy);
        
        npc.setTempData("enemies", enemies);

        npc.setTempData("DamTakArr", DamTakArr);
        
        npc.say("This " + enemies[index] + " hit me for " + DamTakArr[index]);

        break;

        default:
        
        var TPGot = DamTakArr[index];
        
        var DamTak = event.getDamage();
        
        DamTakArr[index] = TPGot + DamTak;
        
        npc.say(DamTakArr[index]);
        
        }
    
    break;
    
    default:
    
    break;
    
    }

}