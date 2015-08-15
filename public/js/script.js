var resStrs = {
    'fist':'You punched the guy in the face (fist)!<br/>',
    'fingers_spread':'You splattered the guy (fingersSpread)!<br/>',
    'wave_in':'You slapped the guy from the right(waveIn)!<br/>',
    'wave_out':'You slapped the guy from the left(waveOut)!<br/>'
}

Myo.onError = function() {
    $('#console').append('No Myo found!<br>');
    console.log('No Myo found!');
};

Myo.connect();
Myo.setUnlockPolicy('none');

$(function(){
    Myo.on('fist', function(){
        console.log(resStrs.fist);
        $('#console').append(resStrs.fist);
        progressStory('fist');
        this.vibrate();
    });


    Myo.on('fingers_spread', function(){
        console.log(resStrs.fingers_spread);
        $('#console').append(resStrs.fingers_spread);
        progressStory('fingers_spread');
        this.vibrate();
    });


    Myo.on('wave_in', function(){
        console.log(resStrs.wave_in);
        $('#console').append(resStrs.wave_in);
        progressStory('wave_in');
        this.vibrate();
    });


    Myo.on('wave_out', function(){
        console.log(resStrs.wave_out);
        $('#console').append(resStrs.wave_out);
        progressStory('wave_out');
        this.vibrate();
    });
});
