function init(event) {

    var npc = event.getNpc();

    AgentNPCStore.naturalSpawners.mythicalCreatures.cheip.init(npc, event); 
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.cheip.damaged(npc, event);
}

function killed(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.cheip.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.cheip.timer(npc, event);
}

function target(event) {

    var npc = event.getNpc();

    AgentNPCStore.naturalSpawners.mythicalCreatures.cheip.target(npc, event);
}

function targetLost(event) {

    var npc = event.getNpc();

    AgentNPCStore.naturalSpawners.mythicalCreatures.cheip.targetLost(npc, event);
}