//This section captures AI Variables

var CombatPreference = npc.getStoredData("CombatPreference");

var DamDelt = event.getDamage();

if (event.getTarget().getType() == 1){
    var TarHel = event.getTarget().getDBCPlayer().    getBody();

    var TarMaxHel = event.getTarget().getDBCPlayer().getStat("con") * 20;
} else if (event.getTarget().getType() == 2){
    var TarHel = event.getTarget().getHealth();

    var TarMaxHel = event.getTarget().getMaxHealth();
} else {
    var TarHel = 0;

    var TarMaxHel = 0;
}

var DamTak = npc.getStoredData("DamTak");

var npcPos = npc.getPosition();

var PlaPos = event.getTarget().getPosition();

    var npcX = npcPos.x !== undefined ? npcPos.x : npcPos[0];
    var npcY = npcPos.y !== undefined ? npcPos.y : npcPos[1];
    var npcZ = npcPos.z !== undefined ? npcPos.z : npcPos[2];

    var plaX = PlaPos.x !== undefined ? PlaPos.x : PlaPos[0];
    var plaY = PlaPos.y !== undefined ? PlaPos.y : PlaPos[1];
    var plaZ = PlaPos.z !== undefined ? PlaPos.z : PlaPos[2];

    var TarDist = Math.sqrt(Math.pow((plaX - npcX), 2) + Math.pow((plaY - npcY), 2) + Math.pow((plaZ - npcZ), 2));

 //This section uses a switch statement to determine AI affinity, and then calculate behavior based on above variables.

switch (CombatPreference) {
    case "MixAggr":
        if (DamDelt > 0) {
            var RelDam = Boolean(DamDelt > DamTak);
        } else {
            var RelDam = Boolean(true);
        }
        var RelMaxHel = Boolean(npc.getMaxHealth > TarMaxHel);
        var RelHel = Boolean(npc.getHealth > TarHel);
        var IsClose = Boolean(TarDist < 5);
        var WinExch = Boolean((npc.getHealth / DamTak) > (TarHel / DamDelt));
        var IsIWeak = Boolean(npc.getHealth < npc.getMaxHealth / 8);
        var IsTarWeak = Boolean(TarHel < TarMaxHel / 5);

        switch (RelMaxHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                npc.setTacticalVariant(3);
                break;
        }

        switch (RelDam) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (IsClose) {
            case 1:
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setTacticalVariant(1);
                break;
        }

        switch (WinExch) {
            case 1:
                npc.setTacticalVariant(0);
                break;
            case 0:
                npc.setTacticalVariant(1);
                npc.setSpeed(6);
                npc.setFlySpeed(6);
                npc.setTacticalRadius(10);
                break;
        }

        switch (IsIWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth / 100);
                break;
            case 0:
                npc.setCombatRegen(0);
                break;
        }

        switch (IsTarWeak) {
            case 1:
                npc.setTacticalVariant(0);
                npc.setSpeed(7);
                npc.setFlySpeed(7);
                break;
            case 0:
                break;
        }
     

        break;
    case "MelAggr":
        if (DamDelt > 0) {
            var RelDam = Boolean(DamDelt > DamTak);
        } else {
            var RelDam = Boolean(true);
        }
        var RelMaxHel = Boolean(npc.getMaxHealth > TarMaxHel);
        var RelHel = Boolean(npc.getHealth > TarHel);
        var IsClose = Boolean(TarDist < 3);
        var WinExch = Boolean((npc.getHealth / DamTak) > (TarHel / DamDelt));
        var IsIWeak = Boolean(npc.getHealth < npc.getMaxHealth / 5);
        var IsTarWeak = Boolean(TarHel < TarMaxHel / 8);

        switch (RelMaxHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(0);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(0);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelDam) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(0);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (IsClose) {
            case 1:
                npc.setSpeed(5);
                npc.setFlySpeed(5);
                break;
            case 0:
                npc.setSpeed(6);
                npc.setFlySpeed(6);
                break;
        }

        switch (WinExch) {
            case 1:
                npc.setSpeed(6);
                npc.setFlySpeed(6);
                break;
            case 0:
                npc.setTacticalVariant(3);
                npc.setSpeed(6.5);
                npc.setFlySpeed(6.5);
                npc.setTacticalRadius(3);
                break;
        }

        switch (IsIWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth / 100);
                break;
            case 0:
                npc.setCombatRegen(0);
                break;
        }

        switch (IsTarWeak) {
            case 1:
                npc.setTacticalVariant(0);
                npc.setSpeed(7);
                npc.setFlySpeed(7);
                break;
            case 0:
                break;
        }

        break;
    case "RanAggr":
        if (DamDelt > 0) {
            var RelDam = Boolean(DamDelt > DamTak);
        } else {
            var RelDam = Boolean(true);
        }
        var RelMaxHel = Boolean(npc.getMaxHealth > TarMaxHel);
        var RelHel = Boolean(npc.getHealth > TarHel);
        var IsClose = Boolean(TarDist < 12);
        var WinExch = Boolean((npc.getHealth / DamTak) > (TarHel / DamDelt));
        var IsIWeak = Boolean(npc.getHealth < npc.getMaxHealth / 5);
        var IsTarWeak = Boolean(TarHel < TarMaxHel / 8);

        switch (RelMaxHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(1);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(1);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelDam) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(1);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (IsClose) {
            case 1:
                npc.setSpeed(6);
                npc.setFlySpeed(6);
                break;
            case 0:
                npc.setSpeed(5);
                npc.setFlySpeed(5);
                break;
        }

        switch (WinExch) {
            case 1:
                npc.setSpeed(4);
                npc.setFlySpeed(4);
                npc.setAccuracy(75);
                break;
            case 0:
                npc.setTacticalVariant(1);
                npc.setSpeed(7);
                npc.setFlySpeed(7);
                npc.setTacticalRadius(15);
                break;
        }

        switch (IsIWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth / 100);
                break;
            case 0:
                npc.setCombatRegen(0);
                break;
        }

        switch (IsTarWeak) {
            case 1:
                npc.setTacticalVariant(2);
                npc.setSpeed(7);
                npc.setFlySpeed(7);
                break;
            case 0:
                break;
        }

        break;
    case "RanPas":
        if (DamDelt > 0) {
            var RelDam = Boolean(DamDelt > DamTak);
        } else {
            var RelDam = Boolean(true);
        }
        var RelMaxHel = Boolean(npc.getMaxHealth > TarMaxHel);
        var RelHel = Boolean(npc.getHealth > TarHel);
        var IsClose = Boolean(TarDist < 12);
        var WinExch = Boolean((npc.getHealth / DamTak) > (TarHel / DamDelt));
        var IsIWeak = Boolean(npc.getHealth < npc.getMaxHealth / 4);
        var IsTarWeak = Boolean(TarHel < TarMaxHel / 12);

        switch (RelMaxHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(1);
                npc.setTacticalRadius(6);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(1);
                npc.setTacticalRadius(6);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelDam) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(1);
                npc.setTacticalRadius(6);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (IsClose) {
            case 1:
                npc.setTacticalVariant(1);
                npc.setSpeed(6.5);
                npc.setFlySpeed(6.5);
                break;
            case 0:
                npc.setTacticalVariant(2);
                break;
        }

        switch (WinExch) {
            case 1:
                npc.setTacticalVariant(1);
                break;
            case 0:
                npc.setTacticalVariant(1);
                npc.setSpeed(6.5);
                npc.setFlySpeed(6.5);
                npc.setTacticalRadius(10);
                break;
        }

        switch (IsIWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth / 100);
                break;
            case 0:
                npc.setCombatRegen(0);
                break;
        }

        switch (IsTarWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth/200);
                break;
            case 0:
                break;
        }

        break;
    case "MelPas":
        if (DamDelt > 0) {
            var RelDam = Boolean(DamDelt > DamTak);
        } else {
            var RelDam = Boolean(true);
        }
        var RelMaxHel = Boolean(npc.getMaxHealth > TarMaxHel);
        var RelHel = Boolean(npc.getHealth > TarHel);
        var IsClose = Boolean(TarDist < 3);
        var WinExch = Boolean((npc.getHealth / DamTak) > (TarHel / DamDelt));
        var IsIWeak = Boolean(npc.getHealth < npc.getMaxHealth / 4);
        var IsTarWeak = Boolean(TarHel < TarMaxHel / 12);

        switch (RelMaxHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelDam) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (IsClose) {
            case 1:
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setTacticalVariant(0);
                break;
        }

        switch (WinExch) {
            case 1:
                npc.setTacticalVariant(0);
                break;
            case 0:
                npc.setTacticalVariant(1);
                npc.setSpeed(6.5);
                npc.setFlySpeed(6.5);
                npc.setTacticalRadius(10);
                break;
        }

        switch (IsIWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth / 100);
                break;
            case 0:
                npc.setCombatRegen(0);
                break;
        }

        switch (IsTarWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth/200);
                break;
            case 0:
                break;
        }

        break;
    case "MixPas":
        if (DamDelt > 0) {
            var RelDam = Boolean(DamDelt > DamTak);
        } else {
            var RelDam = Boolean(true);
        }
        var RelMaxHel = Boolean(npc.getMaxHealth > TarMaxHel);
        var RelHel = Boolean(npc.getHealth > TarHel);
        var IsClose = Boolean(TarDist < 5);
        var WinExch = Boolean((npc.getHealth / DamTak) > (TarHel / DamDelt));
        var IsIWeak = Boolean(npc.getHealth < npc.getMaxHealth / 4);
        var IsTarWeak = Boolean(TarHel < TarMaxHel / 12);

        switch (RelMaxHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelHel) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (RelDam) {
            case 1:
                npc.setOnEnemyFound(0);
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setOnEnemyFound(3);
                break;
        }

        switch (IsClose) {
            case 1:
                npc.setTacticalVariant(3);
                break;
            case 0:
                npc.setTacticalVariant(1);
                break;
        }

        switch (WinExch) {
            case 1:
                npc.setTacticalVariant(0);
                break;
            case 0:
                npc.setTacticalVariant(1);
                npc.setSpeed(6);
                npc.setFlySpeed(6);
                npc.setTacticalRadius(10);
                break;
        }

        switch (IsIWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth / 100);
                break;
            case 0:
                npc.setCombatRegen(0);
                break;
        }

        switch (IsTarWeak) {
            case 1:
                npc.setCombatRegen(npc.getMaxHealth/200);
                break;
            case 0:
                break;
        }
    }