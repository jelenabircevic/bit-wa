const { registerForAlerts } = require('./memoryInfoChecker');

registerForAlerts(1, console.log);
registerForAlerts(2, console.log);