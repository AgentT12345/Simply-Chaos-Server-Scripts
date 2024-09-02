function init(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.krystalVieh.init(npc, event);
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.krystalVieh.damaged(npc, event);
}

function killed(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.krystalVieh.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.krystalVieh.timer(npc, event);
}