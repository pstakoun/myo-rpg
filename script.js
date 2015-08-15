var Myo = require('myo');

Myo.connect();
//Myo.setLockingPolicy('none');

Myo.on('fist', function(){
    console.log('You punched the guy in the face (fist)!');
    this.vibrate();
});


Myo.on('fingers_spread', function(){
    console.log('You splattered the guy (fingersSpread)!');
    this.vibrate();
});


Myo.on('wave_in', function(){
    console.log('You slapped the guy from the right(waveIn)!');
    this.vibrate();
});


Myo.on('wave_out', function(){
    console.log('You slapped the guy from the left(waveOut)!');
    this.vibrate();
});