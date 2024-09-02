function login(event) {
    event.getPlayer().timers.forceStart(1,100,1);
}

function timer(event) {
    var Id = event.getId();
    var player = event.getPlayer();
    if (Id == 1){
        var Y = player.getY();
        var Dim = player.getDimension();
            if (Y >= 328) {
                switch (Dim) {
                case 0:
                    var x = player.getX();
                    var z = player.getZ();
                    player.setPosition((x + 3750000), 10, (z + 3750000), -2);
                break;
                case 1:
                    var x = player.getX();
                    var z = player.getZ();
                    player.setPosition((x + -4250000), 10, (z + 3500000), -2);
                break;
                case 20:
                    var x = player.getX();
                    var z = player.getZ();
                    player.setPosition((x + 4250000), 10, (z + -4250000), -2);
                break;
                case 21:
                    var x = player.getX();
                    var z = player.getZ();
                    player.setPosition((x + -4000000), 10, (z + -3750000), -2);
                break;
                default:
                    player.sendMessage("You feel weightless.");
            }               
}
    } else {
    player.sendMessage("Wut");
    }
}
