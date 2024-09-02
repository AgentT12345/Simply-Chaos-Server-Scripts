function questTurnIn(event) {
    var quest = event.getQuest();
    
    var reward = Number(quest.getLogText());
    
    var dbcPlayer = event.getPlayer().getDBCPlayer();
    
    var CurrentTP = dbcPlayer.getTP();
    
    dbcPlayer.setTP(CurrentTP + reward);
    
    var player = event.getPlayer();
    
    player.sendMessage("Quest Complete: " + reward + " TP");
    
    }