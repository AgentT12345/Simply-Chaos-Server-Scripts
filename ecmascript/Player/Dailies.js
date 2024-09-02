function login(event) {
    var date = new Date().toUTCString();
var datecut = date.slice(4,-12);
var player = event.getPlayer();
player.sendMessage(datecut);
var Curdate = player.getStoredData("DateLine");

if (Curdate != datecut){
    player.removeQuest(1);
    player.removeQuest(15);
    player.removeQuest(20);
    player.removeQuest(21);

}

player.setStoredData("DateLine", datecut); 
}