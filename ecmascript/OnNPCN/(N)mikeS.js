function init(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.mikeShepson.init(npc, event);
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.mikeShepson.damaged(npc, event);
}

function killed(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.mikeShepson.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.mikeShepson.timer(npc, event);
}