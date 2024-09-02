function damaged(event) {
    if (event.getPlayer().getPotionEffect(19)!=-1&&event.getPlayer().getDBCPlayer().getHP()>Math.round((event.getPlayer().getDBCPlayer().getStat("Con")*22)/2)) {
    var player = event.getPlayer();
    var dbc = player.getDBCPlayer();
    var dmg = Math.round(dbc.getBody()/10);
    dbc.setHP(dbc.getHP()-dmg);
    }
}
