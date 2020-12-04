const quiz10=[
	{question:'地球上にいる知的生命体は？',
	answer:['1.宇宙人','2.人間','3.トランセル','4.妖精さん'],
	correct : '2.人間'},
	{question:'日本で一番儲かっているラーメン屋さんは',
	answer:['1.ラーメン二郎','2.よく見かける市販のラーメン','3.なんつっ亭','4.一蘭'],correct : '4.一蘭'},
	{question:'富士山の標高はどれくらい?',
	answer:['1.3,776m ,2.8,848m,3.3m,4.600km'],
	correct : '1.3,776m'}
];
	// {question:'1+2+3+4+5+6+7+8+9+10……全部足したら幾つになるでしょう(計算機無しで)?',
	// ansewers:['1.3,628,800','2.55','3.45','4.50'],
	// correct : '1.2.55'},
	// {question:'Cloud Walkerが誕生した都市はどこでしょうか？',
	// ansewers:['1.栃木県大田原市',' 2.神奈川県小田原市',
	// '3. 京都府宇治田原市' ,'4.アメリカ合衆国ハワイ州オハイオ島'],
	// correct : '2.神奈川県小田原市'},
	// {question:'人間に必要な3大栄養価は、タンパク質と脂質と？',
	// ansewers:['1.ビタミン','2.トウガラシ',
	// '3.ミネラル',' 4.糖質'],
	// correct : '4.糖質'},
	// {question:'三国時代、長坂の戦いで曹操軍を一喝した武将は？',	
	// ansewers:['1.石田三成','2.趙雲','3.張飛','4.李白'],
	// correct : '3.張飛'},
	// {question:'ところで、今何問目だっけ？',
	// ansewers:['1.5問目',' 2.7問目','3.8問目','4.はないちもんめ'],
	// correct : '8問目'},
	// {question:'良いアイデアがマンサイだ←カタカナを漢字に直したら？',
	// ansewers:['1.万歳',' 2.満載','3.卍魔運鎖異卍', '4.漫才'],
	// correct : '2.満載'},
	// {question:'Cloud Walkerは、過去に鬱になった経歴があります。では、そのうつをどういう方法で消したのでしょうか？',
	// ansewers:['1.気合と根性で消した','2.自分を傷つけてきた奴らに復讐をした',
	// '3.自分探しと心理学を学んだ',' 4.鬱などなかった'],
	// correct : '3.自分探しと心理学を学んだ'}


// クイズ10問をlength変数で対応
let quizLen =quiz10.length;
let quizCount =0;

const $button = document.getElementsByTagName('button');
const buttonLen = $button.length;

const setupQuiz = (e) =>{
	let quizLen =quiz10.length;
let quizCount =0;
	document.getElementById('ques').textContent = quiz10[quizCount].question;
	let buttonCount =0;
	let buttonLen = $button.length;
	while(buttonCount < buttonLen){
		$button[buttonCount].textContent = quiz10[quizCount].answer[buttonCount];
		buttonCount++;
	}
}
setupQuiz();

const clickHandler = (e) =>{
	if(quiz[quizCount].correct === e.target.textContent){
		window.alert('正解！');
	}else{
		window.alert('惜しい……');
	}
	quizCount++;
	if(quizCount < quizLen){
		setupQuiz(e);
	} else {
		window.alert('お疲れ様でした！');
	}

	console.log(clickHandler());
	
	}
	let handlerIndex =0;
	let buttonCount =0;
	while(handlerIndex < buttonCount){
$button[handlerIndex].addEventListener('click'),function(e){
	clickHandler();
};
handlerIndex++;
	}