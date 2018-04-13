const { cycleStart, getFreeMemory } = require('./memoryInfo');

cycleStart();

const registerForAlerts = (limit, callback) => {
    getFreeMemory((freeMem) => {
        if (freeMem < limit) {
            callback(`Warning! Only ${freeMem.toFixed(2)}GB left!`);
        }
    });
}

module.exports = {
    registerForAlerts
}