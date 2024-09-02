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

            //                  0          1       2          3         4       5       6        7       8        9        10       11       12            13            14(array) 15

                return aiVars;

        },
        
        behaviorCalculator: function (aiVars, tpLogic, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight){

            //ai vars

            var prefWeight = aiVars[0];

            var tarHel = aiVars[1];

            var tarMaxHel = aiVars[2];

            var relMaxHel = aiVars[3];

            var relHel = aiVars[4];

            var damTak = aiVars[5];

            var damDelt = aiVars[6];

            var relDam = aiVars[7];

            var winExch = aiVars[8];

            var tarDist = aiVars[9];
            
            var isClose = aiVars[10];

            var iWeak = aiVars[11];

            var tarWeak = aiVars[12];

            var combatStyleSwitch = aiVars[13];

            var plaPos = aiVars[14];

            var npc = aiVars[15];

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

            if (tarDist > npc.getAggroRange() + 10) {

                var x = plaPos[0];
                var y = plaPos[1];
                var z = plaPos[2];

                var randX = Math.round(Math.random());
                var randZ = Math.round(Math.random());

                switch (randX) {

                    case 0:
                        var negateX = -1;
                        break;
                    
                    case 1:
                        var negateX = 1;
                        break;
                }
                switch (randZ) {

                    case 0:
                        var negateZ = -1;
                        break;
                    
                    case 1:
                        var negateZ = 1;
                        break;
                }

                var newX = x + 10 + (Math.random() * 5 * negateX);
                var newZ = z + 10 + (Math.random() * 5 * negateZ);

                var tempY = y;
                var world = npc.getWorld();

                switch (world.getBlock(newX, tempY, newZ)){
                    case 0:
                        var newY = tempY;
                        return;
                    default:
                        var newY = tempY + 10;
                        break;

                }

                const finalPos = [newX, newY, newZ];

                tpPos = finalPos;
            }

            //returned values

            const aiCalcs = [retaliationType, tactVariant, tactRadius, regen, combatRegen, speed, flySpeed, willTp, tpPos]

            return aiCalcs;

        },

        aiBehaviorsSet: function (aiCalcs) {

            npc.setRetaliateType(aiCalcs[0]);
            npc.setTacticalVariant(aiCalcs[1]);
            npc.setTacticalRadius(aiCalcs[2]);
            npc.setCombatRegen(aiCalcsp[3]);
            npc.setRegen(aiCalcs[4]);
            npc.setSpeed(aiCalcs[5]);
            npc.setFlySpeed(aiCalcs[6]);
            switch (aiCalcs[7]){
                case 1:
                    npc.setPosition(aiCalcs[8]);
                    break;
                default:
                    break;
            }

        },

        rangedAttack: function (npc, event, aiVars, funcOn ){

        },

        kiAttack: function (npc, event, aiVars, funcOn ){

        },

    }

	API.addGlobalObject("AgentAiCore", AgentAiCore);
}