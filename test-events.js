/*const fs = require('fs');
const rs = fs.createReadStream('./views/index.html');

rs.on('open', function () {
    console.log('The file is open');
});*/

const events = require('events');
const eventEmitter = new events.EventEmitter();

//Create and event handler:
const myEventHandler = () => {
    console.log('I hear a scream');
};

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');

//$ node this_file_path