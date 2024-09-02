function init(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.enderMarcher.init(npc, event);
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.enderMarcher.damaged(npc, event);
}

function killed(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.enderMarcher.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.evolvedMobs.enderMarcher.timer(npc, event);
}