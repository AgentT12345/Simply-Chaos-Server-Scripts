function init(event) {
    
	var AgentAiCore = {

        varCapture: function (npc, howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight) {

            //This section captures AI Variables

            var powTypRatio = npc.getStoredData("PowerTypRatio");

            var target = npc.getAttackTarget();

            var DamDelt = (npc.getMeleeStrength() + npc.getRangedStrength()) / 2;

            if (target.getType() == 1){

                var TarHel = target.getDBCPlayer().    getBody();

                var TarMaxHel = target.getDBCPlayer().getStat("con") * 20;

            } else if (target.getType() == 2){

                var TarHel = target.getHealth();

                var TarMaxHel = target.getMaxHealth();

            } else {

                var TarHel = 0;

                var TarMaxHel = 0;

            }

            if (npc.getStoredData("DamTak") > 0){

                var DamTak = npc.getStoredData("DamTak");
    
            }else {

                var DamTak = 1;

            }

            var npcPos = npc.getPosition();

            var PlaPos = target.getPosition();

                var npcX = npcPos.x !== undefined ? npcPos.x : npcPos[0];
                var npcY = npcPos.y !== undefined ? npcPos.y : npcPos[1];
                var npcZ = npcPos.z !== undefined ? npcPos.z : npcPos[2];

                var plaX = PlaPos.x !== undefined ? PlaPos.x : PlaPos[0];
                var plaY = PlaPos.y !== undefined ? PlaPos.y : PlaPos[1];
                var plaZ = PlaPos.z !== undefined ? PlaPos.z : PlaPos[2];

                var TarDist = Math.sqrt(Math.pow((plaX - npcX), 2) + Math.pow((plaY - npcY), 2) + Math.pow((plaZ - npcZ), 2));

            var howFarFinal = howFar * (passiveWeight / ((npc.getStoredData("MeleePower") + npc.getStoredData("RangedPower") / 2)));
            
            var RelDam = DamTak / DamDelt;

            var RelMaxHel =  TarMaxHel / npc.getMaxHealth;

            var RelHel = npc.getHealth / TarHel;

            var IsClose = Boolean(TarDist > howFarFinal);

            var WinExch = Boolean((npc.getHealth / DamTak) > (TarHel / DamDelt));

            var IsIWeak = Boolean(npc.getHealth < npc.getMaxHealth / howMeweak);

            var IsTarWeak = Boolean(TarHel < TarMaxHel / howTarWeak);

            //combat preference

            var ratio = (npc.getMeleeStrength() * meleeWeight) / (npc.getRangedStrength() * ranWeight);

            if (ratio > 1){
                var prefWeight = ratio - neutralWeight;
            }else if (ratio < 1){
                var prefWeight = ratio + neutralWeight;
            }

            const aiVars = [prefWeight, TarHel, TarMaxHel, RelMaxHel, RelHel, DamTak, DamDelt, RelDam, WinExch, TarDist, IsClose, IsIWeak, IsTarWeak, combaStyleSwitch, PlaPos, npc];

            //                  1           2         3         4        5        6       7       8        9        10       11       12        13        14          15(array), 16

                return aiVars;

        },
        
        behaviorCalculator: function (aiVars, tpLogic, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight){

            //ai vars

            var prefWeight = aiVars[1];

            var tarHel = aiVars[2];

            var tarMaxHel = aiVars[3];

            var relMaxHel = aiVars[4];

            var relHel = aiVars[5];

            var damTak = aiVars[6];

            var damDelt = aiVars[7];

            var relDam = aiVars[8];

            var winExch = aiVars[9];

            var tarDist = aiVars[10];
            
            var isClose = aiVars[11];

            var iWeak = aiVars[12];

            var tarWeak = aiVars[13];

            var combatStyleSwitch = aiVars[14];

            var plaPos = aiVars[15];

            var npc = aiVars[16];

            //retaliation calculations

            var choiceValue = (((2 * isClose) / prefWeight) + ((iWeak - tarWeak) + winExch + relMaxHel + relDam) / 4);

            if (choiceValue > combatStyleSwitch) {
                var retaliationType = 2;
            } else if (combatStyleSwitch > choiceValue){
                var retaliationType = 0;
            }

            //tactical variant calculations

            var tactVariant = 4;

            //tactical radius calculations

            var tactRadius = 5;

            //regen calculations

            if (iWeak == true){
                var regen =  npc.getMaxHealth() / 200;
                var combatRegen =  npc.getMaxHealth() / 200;
            }

            //speed calculations

            var speed = npc.getSpeed();
            var flySpeed = npc.getFlySpeed();

            //tp calculations

            if (tarDist > 96) {
                tpPos = plaPos;
            }

            //returned values

            const aiCalcs = [retaliationType, tactVariant, tactRadius, regen, combatRegen, speed, flySpeed, tpPos]

            return aiCalcs;

        },

        aiBehaviorsSet: function (aiCalcs) {

            npc.setRetaliateType(aiCalcs[1]);
            npc.setTacticalVariant(aiCalcs[2]);
            npc.setTacticalRadius(aiCalcs[3]);
            npc.setCombatRegen(aiCalcsp[4]);
            npc.setRegen(aiCalcs[5]);
            npc.setSpeed(aiCalcs[6]);
            npc.setFlySpeed(aiCalcs[7]);

        },

        rangedAttack: function (npc, event, aiVars, funcOn ){

        },

        kiAttack: function (npc, event, aiVars, funcOn ){

        },

    }

	API.addGlobalObject("AgentAiCore", AgentAiCore);
}