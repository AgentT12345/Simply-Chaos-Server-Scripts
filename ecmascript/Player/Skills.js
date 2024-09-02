function tick(event) {
    var player = event.getPlayer();
    var dbcPlayer = event.getPlayer().getDBCPlayer();
    var maxHealth = dbcPlayer.getStat("con") * 20;
    var sat = player.getSaturation();
    var bod = dbcPlayer.getBody();
    
    if (bod < maxHealth && sat > 2 && bod > maxHealth / 100){
    
    dbcPlayer.setBody(bod + (maxHealth / 1500));
    
    player.setSaturation(sat - 0.1);
    }
}