function meleeAttack(event) {
    var TP = event.getNpc.getStoredData("TP");

    event.getNpc.setStoredData("TP", TP + 10)
}

function rangedLaunched(event) {
    var TP = event.getNpc.getStoredData("TP");

    event.getNpc.setStoredData("TP", TP + 10)
}