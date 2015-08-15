var story = [
	{//0
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'',
		str:"Welcome to MyoRPG! (Wave in to continue).",
		nextIndex:[1,0,0]
	},
	{//1
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'',
		str:"...You wake up after a long sleep... (Wave in to continue).",
		nextIndex:[2,1,1]
	},
	{//2
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'../img/char-orc.gif',
		str:"Suddenly, an orc appears.",
		nextIndex:[3,2,2]
	},
	{//3
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'../img/char-orc.gif',
		str:"ORC: 'Hey you! You're not supposed to be awake!' (Wave in to continue).",
		nextIndex:[4,3,3]
	},
	{//4
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'../img/char-orc.gif',
		str:"You must fight it! Fist your hand to punch! (Fist to continue).",
		nextIndex:[4,4,5]
	},
	{//5
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'../img/char-orc-hit1.gif',
		str:"Good job! Hit him twice more. (Fist to continue).",
		nextIndex:[5,5,6]
	},
	{//6
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'../img/char-orc-hit2.gif',
		str:"One more time! (Fist to continue).",
		nextIndex:[6,6,7]
	},
	{//7
		imgBg:'../img/bg-dungeon1.jpg',
		imgChar:'',
		str:"You defeated the orc! (Wave in to continue).",
		nextIndex:[8,7,7]
	},
	{//8
		imgBg:'../img/bg-dungeon2.jpg',
		imgChar:'',
		str:"You move on to the next room. You wonder what is this place. (Wave in to continue).",
		nextIndex:[9,8,8]
	},
	{//9
		imgBg:'../img/bg-dungeon2.jpg',
		imgChar:'',
		str:"There are two directions to go... Which way should I go? (Wave in or out to continue).",
		nextIndex:[10,11,9]
	},
	{//10
		imgBg:'../img/bg-dungeon3l.jpg',
		imgChar:'',
		str:"You went left! It's a door! (wave in to continue).",
		nextIndex:[12,10,10]
	},
	{//11
		imgBg:'../img/bg-dungeon3r.jpg',
		imgChar:'',
		str:"You went right! It's a door! (wave in to continue).",
		nextIndex:[12,11,11]
	},
	{//12
		imgBg:'../img/bg-field.jpg',
		imgChar:'',
		str:"You made it out! But wait! Look up at the sky (wave in to continue).",
		nextIndex:[13,12,12]
	},
	{//13
		imgBg:'../img/bg-sky.jpg',
		imgChar:'../img/char-rock.gif',
		str:"Oh no. It's a rock. Falling towards you (wave in to continue).",
		nextIndex:[14,13,13]
	},
	{//14
		imgBg:'../img/bg-sky.jpg',
		imgChar:'../img/char-rockbig.gif',
		str:"It's getting pretty close. (wave in to continue).",
		nextIndex:[15,14,14]
	},
	{//15
		imgBg:'../img/bg-black.jpg',
		imgChar:'',
		str:"You get knocked out (wave in to continue).",
		nextIndex:[1,15,15]
	}
];

var enemies = [
	{
		name:'orc',
		maxHp:'3'
	}]

var storyIndex = 0;

var writeStoryScreen = function(pose){
	if (pose == 'wave_in'){
		storyIndex = story[storyIndex].nextIndex[0];
	}
	else if (pose == 'wave_out'){
		storyIndex = story[storyIndex].nextIndex[1];
	}
	else if (pose == 'fist'){
		storyIndex = story[storyIndex].nextIndex[2];
	}
	var storyHtml = "<img id='story-bg' src='"+story[storyIndex].imgBg+
			"' style='position: absolute; left: 0; top: 0;'></img>"+
			"<img id='story-char' src='"+story[storyIndex].imgChar+
			"' style='position: absolute; left: 0; top: 0;'></img>"+
			"<span id='story-str' style='position:absolute; top: 10px; color: #ffffff; font-family: Arial; font-size: 24px;'>"+story[storyIndex].str+"</span>";
	$('#target').html(storyHtml);
};

var writeStoryScreenInit = function(){
	var storyHtml = "<img id='story-bg' src='"+story[0].imgBg+
			"' style='position: absolute; left: 0; top: 0;'></img>"+
			"<img id='story-char' src='"+story[0].imgChar+
			"' style='position: absolute; left: 0; top: 0;'></img>"+
			"<span id='story-str' style='position:absolute; top: 10px; color: #ffffff; font-family: Arial; font-size: 24px;'>"+story[0].str+"</span>";
	$('#target').html(storyHtml);
}

var progressStory = function(pose){
	writeStoryScreen(pose);
};
