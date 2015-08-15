var story = [
	{
		imgBg:'',
		imgChar:'',
		str:"",
		reqPose:'wave_in'
	},
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
		reqPose:'wave_in'
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
		reqPose:'fist'
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
			"' style='position: absolute; left: 0; top: 0;'></img>"+
			"<img id='story-char' src='"+story[storyIndex].imgChar+
			"' style='position: absolute; left: 0; top: 0;'></img>"+
			"<span id='story-str' style='position:absolute; bottom: 20px; color: #ffffff;'>"+story[storyIndex].str+"</span>";
	$('#target').html(storyHtml);
	storyIndex++;
};

var progressStory = function(pose){
	if (pose == story[storyIndex].reqPose){
		writeStoryScreen();
	}
};
