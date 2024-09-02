function init(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.zomBuff.init(npc, event);
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.zomBuff.damaged(npc, event);
}

function killed(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.zomBuff.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.zomBuff.timer(npc, event);
}