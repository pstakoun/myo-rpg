var Myo = require('myo');

Myo.connect();

Myo.on('fist', function(){
    console.log('You punched the guy in the face!');
    this.vibrate();
});


Myo.on('spread', function(){
    console.log('You splattered the guy!');
    this.vibrate();
});


Myo.on('leftwave', function(){
    console.log('You slapped the guy from the right!');
    this.vibrate();
});


Myo.on('rightwave', function(){
    console.log('You slapped the guy from the left!');
    this.vibrate();
});