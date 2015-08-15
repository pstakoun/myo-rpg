var resStrs = {
    'fist':'You punched the guy in the face (fist)!<br/>',
    'fingers_spread':'You splattered the guy (fingersSpread)!<br/>',
    'wave_in':'You slapped the guy from the right(waveIn)!<br/>',
    'wave_out':'You slapped the guy from the left(waveOut)!<br/>'
}

var story = [
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'',
		str:"Welcome to MyoRPG! Swipe left to continue.",
		reqPose:'wave_in'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'',
		str:"After reading each screen, just swipe left to continue.",
		reqPose:'wave_in'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'',
		str:"...You wake up after a long sleep...",
		reqPose:'wave_in'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'../img/char-orc.gif',
		str:"Suddenly, an orc appears.",
		reqPose:'wave_in'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'../img/char-orc.gif',
		str:"ORC: 'Hey you! You're not supposed to be awake!'",
		reqPose:'wave_in'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'../img/char-orc.gif',
		str:"You must fight it! Fist your hand to punch!",
		reqPose:'fist'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'../img/char-orc-hit1.gif',
		str:"Good job! Hit him twice more.",
		reqPose:'fist'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'../img/char-orc-hit2.gif',
		str:"One more time!",
		reqPose:'fist'
	},
	{
		imgBg:'../img/bg-dungeon.jpg',
		imgChar:'',
		str:"You defeated the orc!",
		reqPose:'wave_in'
	}
	];

var enemies = [
	{
		name:'orc',
		maxHp:'3'
	}]

var storyIndex = 0;

var writeStoryScreen = function(){
	var storyHtml = "<img id='story-bg' src='"+story[storyIndex].imgBg+
			"'></img><img id='story-char' src='"+story[storyIndex].imgChar+
			"></img><span id='story-str'>"+story[storyIndex].str+"</span>";
	$('#target').html(storyHtml);
	storyIndex++;
}

