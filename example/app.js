// This is a test harness for your module
// You should do something interesting in this harness 
// to test out the module and to provide instructions 
// to users on how to use it by example.


// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var label = Ti.UI.createLabel();
win.add(label);
win.open();

// TODO: write your module tests here
var deploygate = require('local.twingob.android.tideploygate');

Ti.API.info("module is => " + deploygate);

var text = 'ログテスト';
deploygate.log('ERROR',text);
deploygate.log('WARN',text);
deploygate.log('DEBUG',text);
deploygate.log('INFO',text);
deploygate.log('VERBOSE',text);

deploygate.log('DEBUG','isInitialized:' + deploygate.isInitialized());
deploygate.log('DEBUG','isManaged:' + deploygate.isManaged());
deploygate.log('DEBUG','isDeployGateAvailable:' + deploygate.isDeployGateAvailable());
deploygate.log('DEBUG','isAuthorized:' + deploygate.isAuthorized());
deploygate.log('DEBUG','getLoginUsername:' + deploygate.getLoginUsername());
deploygate.refresh();
