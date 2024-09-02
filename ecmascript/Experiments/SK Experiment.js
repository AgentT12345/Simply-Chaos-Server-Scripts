var SK = false;
function keyPressed(event) {
    var player = event.getPlayer();
    var dbc = player.getDBCPlayer();
    if (event.getKey()==49&&event.keyDown) {
    player.setTempData("SK", 1);
    }
    if (event.getKey()==51&&event.keyDown) {
        SK=false;
        player.setTempData("SK", 0);
    }
}

function tick(event) {
var player = event.getPlayer();
var dbc = player.getDBCPlayer();
var x = dbc.x;
var y = dbc.y;
var z = dbc.z;
var healthdrain = Math.round(dbc.getStat("Con")/10);
var kidrain = Math.round(dbc.getStat("Spi")/5);
   var SK = player.getTempData("SK");
    switch (SK){
    
        case 1:
        dbc.world.spawnParticle("reddust",x,y,z,1,1.5,1,0,1000);
        dbc.world.spawnParticle("splash",x,y,z,0.5,1.5,0.5,1,1000);
        if (dbc.getRace()!=4){
            dbc.setRacialFormMastery(0,40);
        } else {
            dbc.setRacialFormMastery(4,40);
        }
        dbc.setHP(dbc.getHP()-healthdrain);
        dbc.setKi(dbc.getKi()-kidrain);
        if (dbc.getHP()<=healthdrain||dbc.getKi()<=kidrain){
            SK=false;
            }
            
            break;
            
         case 0:
            
             if (dbc.getRace()!=4){
            dbc.setRacialFormMastery(0,0);
        } else {
            dbc.setRacialFormMastery(4,0);
        }
        
        break;
        
        }
        
    }

