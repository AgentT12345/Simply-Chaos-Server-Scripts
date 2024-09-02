function init(event) {
    
	var AgentNPCStore = {

		naturalSpawners: {

			mythicalCreatures: {
			
			cheip: {

					init: function (npc, event) {
						
						AgentFunc.natSpawnInit(npc, 10, 1, 10, 4, 1, 1, 19200, 1, 10);

					},

					damaged: function (npc, event) {

						//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

						var OnFail = function(npc, event) {

							npc.setMeleeStrength(Math.round(npc.getMeleeStrength() + npc.getMeleeStrength() / 100));

						}

						AgentFunc.bossChance(npc, "Hathor", 10000, 1, OnFail);

						//resets manual despawn timer

						npc.timers.setTicks(127,19200);

						//This section is a component in Damage Taken Capturing

						AgentFunc.damCapture(npc);

						//This section will cause the NPC to get more powerful as they collect TP

						AgentFunc.npcLeveler(npc, 10000, 0.1, 1, 1, "Golden Ram");

					},

					killed: function (npc, event) {
						
						AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

						AgentFunc.npcDies(npc);
						
					},

					timer: function (npc, event) {
						
						var ID = event.getId();

						AgentFunc.natSpawnTimers(npc, ID, 19200);

						const howFar = 5;
						const howMeweak = 10;
						const howTarWeak = 10;
						const combaStyleSwitch = 3;
						const meleeWeight = 10;
						const ranWeight = 0;
						const neutralWeight = 0;
						const passiveWeight = 1;
						const chargeRatio = 1;
						const retWeight = 1;
						const tactVWeight = 1;
						const tactRWeight = 1;
						const regWeight = 1;
						const combatRegWeight = 1;
						const speedWeight = 1;
						const flySpeedWeight = 1;
						const tpPosWeight = 1;

						const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];

						function tpLogic () {

						}

						AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);


					},

					target: function (npc, event) {

						AgentAiCore.aiStart(npc, 20);

					},

					targetLost: function (npc, event) {

						AgentAiCore.aiStop(npc);
						
					},

					properties: []

			},

			flugVieh: {
					init: function (npc, event) {
						
						AgentFunc.natSpawnInit(npc, 35, 10, 10, 4, 1, 1, 19200, 1, 10);

					},

					damaged: function (npc, event) {

						//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

						//resets manual despawn timer

						npc.timers.setTicks(127,19200);

						//This section is a component in Damage Taken Capturing

						AgentFunc.damCapture(npc);

						//This section will cause the NPC to get more powerful as they collect TP

						AgentFunc.npcLeveler(npc, 10000, 0.1, 1, 4, "Krystal Vieh");

					},

					killed: function (npc, event) {
						
						AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

						AgentFunc.npcDies(npc);

					},

					timer: function (npc, event) {
						
						var ID = event.getId();

						AgentFunc.natSpawnTimers(npc, ID, 19200);

						const howFar = 5;
						const howMeweak = 10;
						const howTarWeak = 10;
						const combaStyleSwitch = 2;
						const meleeWeight = 1;
						const ranWeight = 1;
						const neutralWeight = 0.1;
						const passiveWeight = 1;
						const chargeRatio = 1;
						const retWeight = 1;
						const tactVWeight = 1;
						const tactRWeight = 1;
						const regWeight = 1;
						const combatRegWeight = 1;
						const speedWeight = 1;
						const flySpeedWeight = 1;
						const tpPosWeight = 1;

						const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];

						function tpLogic () {

						}

						AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);


					},

					target: function (npc, event) {

						AgentAiCore.aiStart(npc, 20);

					},

					targetLost: function (npc, event) {

						AgentAiCore.aiStop(npc);
						
					},

					properties: []
			},

			goldenRam: {
					init: function (npc, event) {
						
						AgentFunc.natSpawnInit(npc, 10, 3, 10, 4, 1, 1, 6400, 0, 1);

					},

					damaged: function (npc, event) {

						//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

						var OnFail = function(npc) {

							npc.setMeleeStrength(Math.round(npc.getMeleeStrength() + npc.getMeleeStrength() / 100));
							npc.setRangedStrength(Math.round(npc.getRangedStrength() + npc.getRangedStrength() / 100));

						}

						AgentFunc.bossChance(npc, "Hathor", 10000, 1, OnFail);

						//resets manual despawn timer

						npc.timers.setTicks(127,19200);

						//This section is a component in Damage Taken Capturing

						AgentFunc.damCapture(npc);

						//This section will cause the NPC to get more powerful as they collect TP

						AgentFunc.npcLeveler(npc, 4000, 1, 0, 0, 0);

					},

					killed: function (npc, event) {
						
					AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

					AgentFunc.npcDies(npc);

					},

					timer: function (npc, event) {
						
						var ID = event.getId();

						AgentFunc.natSpawnTimers(npc, ID, 6400);

						const howFar = 5;
						const howMeweak = 10;
						const howTarWeak = 10;
						const combaStyleSwitch = 2;
						const meleeWeight = 1;
						const ranWeight = 1;
						const neutralWeight = 0.1;
						const passiveWeight = 1;
						const chargeRatio = 1;
						const retWeight = 1;
						const tactVWeight = 1;
						const tactRWeight = 1;
						const regWeight = 1;
						const combatRegWeight = 1;
						const speedWeight = 1;
						const flySpeedWeight = 1;
						const tpPosWeight = 1;

						const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];

						function tpLogic () {

						}

						AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);


					},

					target: function (npc, event) {

						AgentAiCore.aiStart(npc, 20);

					},

					targetLost: function (npc, event) {

						AgentAiCore.aiStop(npc);
						
					},

					properties: []

			},

			hamlin: {
					init: function (npc, event) {
						
						AgentFunc.natSpawnInit(npc, 25, 5, 10, 4, 1, 1, 19200, 1, 10);

					},

					damaged: function (npc, event) {

						//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

						//resets manual despawn timer

						npc.timers.setTicks(127,19200);

						//This section is a component in Damage Taken Capturing

						AgentFunc.damCapture(npc);

						//This section will cause the NPC to get more powerful as they collect TP

						AgentFunc.npcLeveler(npc, 10000, 0.1, 0, 1, "Golden Ram");

					},

					killed: function (npc, event) {
						
						AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

						AgentFunc.npcDies(npc);

					},

					timer: function (npc, event) {
						
						var ID = event.getId();

						AgentFunc.natSpawnTimers(npc, ID, 19200);

						const howFar = 5;
						const howMeweak = 10;
						const howTarWeak = 10;
						const combaStyleSwitch = 2;
						const meleeWeight = 1;
						const ranWeight = 1;
						const neutralWeight = 0.1;
						const passiveWeight = 1;
						const chargeRatio = 1;
						const retWeight = 1;
						const tactVWeight = 1;
						const tactRWeight = 1;
						const regWeight = 1;
						const combatRegWeight = 1;
						const speedWeight = 1;
						const flySpeedWeight = 1;
						const tpPosWeight = 1;

						const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];

						function tpLogic () {

						}

						AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);


					},

					target: function (npc, event) {

						AgentAiCore.aiStart(npc, 20);

					},

					targetLost: function (npc, event) {

						AgentAiCore.aiStop(npc);
						
					},

					properties: []
					
			},

			krystalVieh: {
					init: function (npc, event) {
						
						AgentFunc.natSpawnInit(npc, 25, 4, 10, 4, 1, 1, 19200, 0, 1);

					},

					damaged: function (npc, event) {

						//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

						//resets manual despawn timer

						npc.timers.setTicks(127,19200);

						//This section is a component in Damage Taken Capturing

						AgentFunc.damCapture(npc);

						//This section will cause the NPC to get more powerful as they collect TP

						AgentFunc.npcLeveler(npc, 4000, 1, 0, 0, 0);

					},

					killed: function (npc, event) {
						
						AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

						AgentFunc.npcDies(npc);

					},

					timer: function (npc, event) {
						
						var ID = event.getId();

						AgentFunc.natSpawnTimers(npc, ID, 19200);

						const howFar = 5;
						const howMeweak = 10;
						const howTarWeak = 10;
						const combaStyleSwitch = 2;
						const meleeWeight = 1;
						const ranWeight = 1;
						const neutralWeight = 0.1;
						const passiveWeight = 1;
						const chargeRatio = 1;
						const retWeight = 1;
						const tactVWeight = 1;
						const tactRWeight = 1;
						const regWeight = 1;
						const combatRegWeight = 1;
						const speedWeight = 1;
						const flySpeedWeight = 1;
						const tpPosWeight = 1;

						const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];

						function tpLogic () {

						}

						AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);


					},

					target: function (npc, event) {

						AgentAiCore.aiStart(npc, 20);

					},

					targetLost: function (npc, event) {

						AgentAiCore.aiStop(npc);
						
					},

					properties: []
					
			},

			mikeShepson: {
					init: function (npc, event) {
						
						AgentFunc.natSpawnInit(npc, 30, 5, 10, 4, 1, 1, 19200, 1, 10);

					},

					damaged: function (npc, event) {

						//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

						var OnFail = function(npc) {

							npc.setMeleeStrength(Math.round(npc.getMeleeStrength() + npc.getMeleeStrength() / 100));
							npc.setRangedStrength(Math.round(npc.getRangedStrength() + npc.getRangedStrength() / 100));

						}

						AgentFunc.bossChance(npc, "Hathor", 10000, 1, OnFail);

						//resets manual despawn timer

						npc.timers.setTicks(127,19200);

						//This section is a component in Damage Taken Capturing

						AgentFunc.damCapture(npc);

						//This section will cause the NPC to get more powerful as they collect TP

						AgentFunc.npcLeveler(npc, 10000, 0.1, 1, 4, "Golden Ram");

					},

					killed: function (npc, event) {
						
						AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

						AgentFunc.npcDies(npc);

					},

					timer: function (npc, event) {
						
						var ID = event.getId();

						AgentFunc.natSpawnTimers(npc, ID, 19200);

						const howFar = 5;
						const howMeweak = 10;
						const howTarWeak = 10;
						const combaStyleSwitch = 1;
						const meleeWeight = 1;
						const ranWeight = 1;
						const neutralWeight = 0.1;
						const passiveWeight = 1;
						const chargeRatio = 1;
						const retWeight = 1;
						const tactVWeight = 1;
						const tactRWeight = 1;
						const regWeight = 1;
						const combatRegWeight = 1;
						const speedWeight = 1;
						const flySpeedWeight = 1;
						const tpPosWeight = 1;

						const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];

						function tpLogic () {

						}

						AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);


					},

					target: function (npc, event) {

						AgentAiCore.aiStart(npc, 20);

					},

					targetLost: function (npc, event) {

						AgentAiCore.aiStop(npc);
						
					},

					properties: []
					
			},

			mythicalCreatureBase: {
					init: function (npc, event) {
						
						AgentFunc.natSpawnInit(npc, 10, 3, 10, 4, 1, 1, 19200, 0, 1);

					},

					damaged: function (npc, event) {

						//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

						var OnFail = function(npc) {

							npc.setMeleeStrength(npc.getMeleeStrength() + npc.getMeleeStrength() / 100);
							npc.setRangedStrength(npc.getRangedStrength() + npc.getRangedStrength() / 100);

						}

						AgentFunc.bossChance(npc, "Hathor", 10000, 1, OnFail);

						//resets manual despawn timer

						npc.timers.setTicks(127,19200);

						//This section is a component in Damage Taken Capturing

						AgentFunc.damCapture(npc);

						//This section will cause the NPC to get more powerful as they collect TP

						AgentFunc.npcLeveler(npc, 4000, 1, 0, 0, 0);

					},

					killed: function (npc, event) {
						
						AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

						AgentFunc.npcDies(npc);

					},

					timer: function (npc, event) {
						
						var ID = event.getId();

						AgentFunc.natSpawnTimers(npc, ID, 19200);

						const howFar = 5;
						const howMeweak = 10;
						const howTarWeak = 10;
						const combaStyleSwitch = 2;
						const meleeWeight = 1;
						const ranWeight = 1;
						const neutralWeight = 0.1;
						const passiveWeight = 1;
						const chargeRatio = 1;
						const retWeight = 1;
						const tactVWeight = 1;
						const tactRWeight = 1;
						const regWeight = 1;
						const combatRegWeight = 1;
						const speedWeight = 1;
						const flySpeedWeight = 1;
						const tpPosWeight = 1;

						const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];

						function tpLogic () {

						}

						AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);


					},

					target: function (npc, event) {

						AgentAiCore.aiStart(npc, 20);

					},

					targetLost: function (npc, event) {

						AgentAiCore.aiStop(npc);
						
					},

					properties: []
					
			}

			},

			evolvedMobs: {

					enderMarcher: {
						init: function (npc, event) {
							
							AgentFunc.natSpawnInit(npc, 100, 25, 10, 4, 1, 1, 19200, 0, 1);

						},

						damaged: function (npc, event) {

							//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

							var OnFail = function(npc) {

								npc.say(".   .   .");

								if (npc.getMaxHealth() / 1000 > npc.getHealth()) {

									npc.say("They'll be back...");
								}

							}

							AgentFunc.bossChance(npc, "ZomBoss", 10000, -1, OnFail);

							//resets manual despawn timer

							npc.timers.setTicks(127,19200);

							//This section is a component in Damage Taken Capturing

							AgentFunc.damCapture(npc);

							//This section will cause the NPC to get more powerful as they collect TP

							AgentFunc.npcLeveler(npc, 4000, 1, 0, 0, 0);


						},

						killed: function (npc, event) {
							
							AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

							AgentFunc.npcDies(npc);

						},

						timer: function (npc, event) {
						
							var ID = event.getId();
	
							AgentFunc.natSpawnTimers(npc, ID, 19200);
	
							const howFar = 5;
							const howMeweak = 10;
							const howTarWeak = 10;
							const combaStyleSwitch = 2;
							const meleeWeight = 1;
							const ranWeight = 1;
							const neutralWeight = 0.1;
							const passiveWeight = 1;
							const chargeRatio = 1;
							const retWeight = 1;
							const tactVWeight = 1;
							const tactRWeight = 1;
							const regWeight = 1;
							const combatRegWeight = 1;
							const speedWeight = 1;
							const flySpeedWeight = 1;
							const tpPosWeight = 1;
	
							const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];
	
							function tpLogic () {
	
							}
	
							AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);
	
	
						},
	
						target: function (npc, event) {
	
							AgentAiCore.aiStart(npc, 20);
	
						},
	
						targetLost: function (npc, event) {
	
							AgentAiCore.aiStop(npc);
							
						},
	
						properties: []
						
					},

					zomBuff: {
						init: function (npc, event) {
							
							AgentFunc.natSpawnInit(npc, 10, 2, 10, 4, 1, 1, 19200, 0, 1);

						},

						damaged: function (npc, event) {

							//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

							var OnFail = function(npc) {

								npc.setHealth(npc.getHealth() + 10);

							}

							AgentFunc.bossChance(npc, "ZomBoss", 10000, 1, OnFail);

							//resets manual despawn timer

							npc.timers.setTicks(127,19200);

							//This section is a component in Damage Taken Capturing

							AgentFunc.damCapture(npc);

							//This section will cause the NPC to get more powerful as they collect TP

							AgentFunc.npcLeveler(npc, 4000, 1, 0, 0, 0);

						},

						killed: function (npc, event) {
							
							AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

							AgentFunc.npcDies(npc);

						},

						timer: function (npc, event) {
						
							var ID = event.getId();
	
							AgentFunc.natSpawnTimers(npc, ID, 19200);
	
							const howFar = 5;
							const howMeweak = 10;
							const howTarWeak = 10;
							const combaStyleSwitch = 2;
							const meleeWeight = 1;
							const ranWeight = 1;
							const neutralWeight = 0.1;
							const passiveWeight = 1;
							const chargeRatio = 1;
							const retWeight = 1;
							const tactVWeight = 1;
							const tactRWeight = 1;
							const regWeight = 1;
							const combatRegWeight = 1;
							const speedWeight = 1;
							const flySpeedWeight = 1;
							const tpPosWeight = 1;
	
							const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];
	
							function tpLogic () {
	
							}
	
							AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);
	
	
						},
	
						target: function (npc, event) {
	
							AgentAiCore.aiStart(npc, 20);
	
						},
	
						targetLost: function (npc, event) {
	
							AgentAiCore.aiStop(npc);
							
						},
	
						properties: []
						

					},

					evolvedMobBase: {
						init: function (npc, event) {
							
							AgentFunc.natSpawnInit(npc, 10, 2, 10, 4, 1, 1, 19200, 0, 1);

						},

						damaged: function (npc, event) {

							//This section allows a boss to spawn 1/10000 times on hit, or regens 10 HP.

							var OnFail = function(npc) {

								npc.setHealth(npc.getHealth() + 10);

							}

							AgentFunc.bossChance(npc, "ZomBoss", 10000, 1, OnFail);

							//resets manual despawn timer

							npc.timers.setTicks(127,19200);

							//This section is a component in Damage Taken Capturing

							AgentFunc.damCapture(npc);

							//This section will cause the NPC to get more powerful as they collect TP

							AgentFunc.npcLeveler(npc, 4000, 1, 0, 0, 0);

						},

						killed: function (npc, event) {
							
							AgentFunc.npcGiveTp(npc, event, 0.048, 0.237, 0.2038);

							AgentFunc.npcDies(npc);
						},

						timer: function (npc, event) {
						
							var ID = event.getId();
	
							AgentFunc.natSpawnTimers(npc, ID, 19200);
	
							const howFar = 5;
							const howMeweak = 10;
							const howTarWeak = 10;
							const combaStyleSwitch = 2;
							const meleeWeight = 1;
							const ranWeight = 1;
							const neutralWeight = 0.1;
							const passiveWeight = 1;
							const chargeRatio = 1;
							const retWeight = 1;
							const tactVWeight = 1;
							const tactRWeight = 1;
							const regWeight = 1;
							const combatRegWeight = 1;
							const speedWeight = 1;
							const flySpeedWeight = 1;
							const tpPosWeight = 1;
	
							const aiProps = [howFar, howMeweak, howTarWeak, combaStyleSwitch, meleeWeight, ranWeight, neutralWeight, passiveWeight, chargeRatio, retWeight, tactVWeight, tactRWeight, regWeight, combatRegWeight, speedWeight, flySpeedWeight, tpPosWeight];
	
							function tpLogic () {
	
							}
	
							AgentAiCore.aiTimer(ID, npc, tpLogic, aiProps);
	
	
						},
	
						target: function (npc, event) {
	
							AgentAiCore.aiStart(npc, 20);
	
						},
	
						targetLost: function (npc, event) {
	
							AgentAiCore.aiStop(npc);
							
						},
	
						properties: []
						
					}
			}

		},

		bosses: {

		}

			

		}
	API.addGlobalObject("AgentNPCStore", AgentNPCStore);
}	
            






