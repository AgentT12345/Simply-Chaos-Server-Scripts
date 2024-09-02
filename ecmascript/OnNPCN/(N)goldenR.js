function init(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.goldenRam.init(npc, event);
}

function attack(event) {
    
    var npc = event.getNpc();
    
    
}

function damaged(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.goldenRam.damaged(npc, event);
}

function killed(event) {

    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.goldenRam.killed(npc, event);
}

function timer(event) {
    
    var npc = event.getNpc();
    
    AgentNPCStore.naturalSpawners.mythicalCreatures.goldenRam.timer(npc, event);
}