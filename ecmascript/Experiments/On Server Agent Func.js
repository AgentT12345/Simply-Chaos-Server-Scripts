function init(event) {
    
    var AgentFunc  = {

        natSpawnInit: function (npc, MaxLevel, MinLevel, MaxPowerBoost, MinPowerBoost, MelStrRan, RanStrRan, despawntime, MixAggrWeight, MelAggrWeight, RanAggrWeight, MelPasUpper, MelPasLower, RanPasUpper, RanPassLower, MixPasAllow, DividedLevel, LevelDivider ) {

                    var TitleClass = Math.round(Math.random() * (MaxLevel - MinLevel + 1) + MinLevel);

                    switch (DividedLevel) {

                        case 1:
                            var TitleClass = TitleClass / LevelDivider;
                            break;
                        
                        default:
                            break; 

                    }
            
                    npc.setStoredData("TitleClass", TitleClass);
            
                    var tier = TitleClass * 1000;
            
                    var maxPower = tier * MaxPowerBoost;
                    var minPower = tier * MinPowerBoost;
            
                    var PowerRandomizer = Math.random() * (maxPower - minPower + 1) + minPower;
            
                    var MeleeRandomizer= Math.random() * MelStrRan + 0.5;
            
                    var RangedRandomizer= Math.random() * RanStrRan + 0.5;
            
                    npc.setStoredData("PowerLevel", PowerRandomizer);
            
                    npc.setStoredData("MeleePower", MeleeRandomizer);
            
                    npc.setStoredData("RangedPower", RangedRandomizer);
            
                    npc.setMaxHealth(Math.round(PowerRandomizer));
            
                    npc.setMeleeStrength(Math.round(PowerRandomizer * 0.1 * MeleeRandomizer));
            
                    npc.setRangedStrength(Math.round(PowerRandomizer * 0.15 * RangedRandomizer));
            
                    npc.setHealth(Math.round(PowerRandomizer));

                    if (MeleeRandomizer > MixAggrWeight && RangedRandomizer > MixAggrWeight) {
                        var CombatPreference = "MixAggr";
                        } else if (MeleeRandomizer > RangedRandomizer && MeleeRandomizer > MelAggrWeight) {
                        var CombatPreference = "MelAggr";
                        } else if (RangedRandomizer > MeleeRandomizer && RangedRandomizer > RanAggrWeight){
                        var CombatPreference = "RanAggr";
                        } else if (RangedRandomizer > MeleeRandomizer && RangedRandomizer < RanPasUpper && RangedRandomizer > RanPassLower){
                        var CombatPreference = "RanPas";
                        } else if (MeleeRandomizer > RangedRandomizer && MeleeRandomizer < MelPasUpper && MeleeRandomizer > MelPasLower) {
                        var CombatPreference = "MelPas";
                        } else if (MixPasAllow == true && CombatPreference == null){
                        var CombatPreference = "MixPas";
                        }
                    npc.setStoredData("CombatPreference", CombatPreference);
            
                    npc.setMovingType(1);
            
                    npc.setNaturallyDespawns(1);
            
                    npc.setStoredData("DamTak", 0);
                    
                    npc.setStoredData("TP", 0);
            
                    npc.timers.forceStart(127, despawntime, 1);
            
                    npc.setTitle("LV " + TitleClass + " " + npc.getFaction().getName());
            
                    
        },

        bossChance: function (npc, Boss, BossCap, BossLimit, OnFail) {
            //This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

            var BossChance = Math.random() * BossCap;

            if (BossChance < BossLimit) {
                
                var world = npc.getWorld();

                world.spawnClone(npc.getPosition(),5,Boss,1);

                npc.timers.clear();
                npc.clearStoredData();
                npc.clearTempData();
                npc.despawn();
                return 1;

            } else {
                OnFail(npc);
                return 0;
            }
        },

        damCapture: function (npc) {
            var DamTak0 = npc.getHealth();

            npc.setTempData("DamTak0", DamTak0);

            npc.timers.forceStart(1,1,false);
        },

        natSpawnTimers: function (npc, TimerID, despawntime) {

            switch (TimerID) {

                case 1: 
                
                    npc.removeStoredData("DamTak");
                
                    var DamTak0 = npc.getTempData("DamTak0");
                
                    var DamTak1 = npc.getHealth();
                
                    var DamTak = DamTak0 - DamTak1;
                
                    npc.setStoredData("DamTak", DamTak);
                
                    npc.removeTempData("DamTak0");
                
                    break;
                
                case 2:
                
                    npc.setCombatRegen(1);
                
                    npc.setHealthRegen(1);
                
                    break;
                
                case 127:
                
                    switch (npc.timers.ticks(127)) {
                
                    case despawntime:
                
                        npc.timers.clear();
                        npc.clearStoredData();
                        npc.clearTempData();
                        npc.despawn();
                
                        break;
                
                        default:
                
                        break;
                
                    }
                
                break;
                
                }

        },

        npcLeveler: function (npc, TpRatio, NpcLevelRate, NpcCanEvolve, EvolutionLevel, Evolution) {

            var CurrentTP = npc.getStoredData("TP");

            var PowerLevel = npc.getStoredData("PowerLevel");

            if (CurrentTP > PowerLevel / TpRatio) {

                var PowerLevel = CurrentTP + PowerLevel;
        
                var MeleePower = npc.getStoredData("MeleePower");

                var RangedPower = npc.getStoredData("RangedPower");

                npc.setMaxHealth(Math.round(PowerLevel));

                npc.setCombatRegen = Math.round(Math.round(PowerLevel / 200));

                npc.setHealthRegen = Math.round(Math.round(PowerLevel / 200));

                npc.timers.forceStart(2,4000,0);

                npc.setMeleeStrength(Math.round(PowerLevel * 0.1 * MeleePower));

                npc.setRangedStrength(Math.round(PowerLevel * 0.15 * RangedPower));

                npc.setStoredData("PowerLevel", PowerLevel);

                npc.setStoredData("TP", 0);
    

            }

            var TitleClass = Number(npc.getStoredData("TitleClass"));

            while (TitleClass < PowerLevel / 10000) {

                var TitleClass = TitleClass + NpcLevelRate;

                npc.setStoredData("TitleClass", TitleClass);

                npc.setTitle("LV " + TitleClass + " " + npc.getFaction().getName());

                
            }

            if (TitleClass > EvolutionLevel && NpcCanEvolve == true) {

                var world = npc.getWorld();

                world.spawnClone(npc.getPosition(),2,Evolution,1);
        
                npc.timers.clear();
                npc.clearStoredData();
                npc.clearTempData();
                npc.despawn();
        
            }

            
        },

        npcGiveTp: function (npc, event, HealthTpRate, MeleeTpRate, RangedTpRate) {
            var reward = (HealthTpRate * npc.getMaxHealth()) + (MeleeTpRate * npc.getMeleeStrength()) + (RangedTpRate * npc.getRangedStrength());

            reward = Math.round(reward)

            var attacker = event.getSource().getType();

            switch (attacker) {

                case 1:

                    var player = event.getSource();

                    var PowerLevel = npc.getMaxHealth() * 0.4;
                    
                    var PlayerPower = ((player.getDBCPlayer().getFullAttribute("str") + player.getDBCPlayer().getFullAttribute("wil")) / 5) * 16;

                    if (PlayerPower > PowerLevel * 0.9) {
                    var reward = reward * 0.45;
                    }

                    if (PlayerPower > PowerLevel * 1.35) {
                    var reward = reward * 0.20;
                    }

                    reward = Math.round(reward)
            
                    var dbcPlayer = player.getDBCPlayer()
                    
                    var CurrentTP = dbcPlayer.getTP();

                    dbcPlayer.setTP(CurrentTP + reward);

                    player.sendMessage("You got " + reward + " TP!");

                    break;

                case 2:
        
                    var NPC = event.getSource();

                    var CurrentTP = NPC.getStoredData("TP");

                    NPC.setStoredData("TP", CurrentTP + reward);

                    break;
    
                defualt:

                    break;

            }

        },

        npcDies: function (npc) {

            npc.timers.clear();
            npc.clearStoredData();
            npc.clearTempData();

        }

    
    }

    API.addGlobalObject("AgentFunc", AgentFunc);
}