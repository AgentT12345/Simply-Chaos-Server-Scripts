function init(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.hamlin.init(npc, event);
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.hamlin.damaged(npc, event);
}

function killed(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.hamlin.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.hamlin.timer(npc, event);
}