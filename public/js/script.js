var resStrs = {
    'fist':'You punched the guy in the face (fist)!\n',
    'fingers_spread':'You splattered the guy (fingersSpread)!\n',
    'wave_in':'You slapped the guy from the right(waveIn)!\n',
    'wave_out':'You slapped the guy from the left(waveOut)!\n'
}


Myo.connect();

Myo.onError = function() {  
        $('#console').append('No Myo found!<br>');
};

Myo.on('fist', function(){
    console.log(resStrs.fist);
    $('#console').append(resStrs.fist);
    this.vibrate();
});


Myo.on('fingers_spread', function(){
    console.log(resStrs.fingers_spread);
    $('#console').append(resStrs.fingers_spread);
    this.vibrate();
});


Myo.on('wave_in', function(){
    console.log(resStrs.wave_in);
    $('#console').append(resStrs.wave_in);
    this.vibrate();
});


Myo.on('wave_out', function(){
    console.log(resStrs.wave_out);
    $('#console').append(resStrs.wave_out);
    this.vibrate();
});
