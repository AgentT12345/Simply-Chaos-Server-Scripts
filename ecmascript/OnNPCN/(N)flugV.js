function init(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.flugVieh.init(npc, event);
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.flugVieh.damaged(npc, event);
}

function killed(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.flugVieh.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.flugVieh.timer(npc, event);
}

function target(event) {

    var npc = event.getNpc();

    AgentNPCStore.naturalSpawners.mythicalCreatures.flugVieh.target(npc, event);
}

function targetLost(event) {

    var npc = event.getNpc();

    AgentNPCStore.naturalSpawners.mythicalCreatures.flugVieh.targetLost(npc, event);
}