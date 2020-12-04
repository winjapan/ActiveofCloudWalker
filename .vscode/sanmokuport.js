// ゲームのターンは、9ターンまで
var turn = 0;
// ゲーム中、ON/OFFの切り替え
var isRun = false;
// ボタンID(0~8)
var IDs = ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"];

// ボタンのID
function $(id) {
  return document.getElementById(id);
}

window.onload = init;
//
function init() {
  // ボタンを押した時の処理
  for(var i = 0; i < 9; i++) {
    $("b" + String(i)).onclick = mark;
  }
  $("bClear").onclick = clearBoard;
  // 
  isRun = true;
}

// プレイヤーが各ボタンを押した時/または済んだボタンを押した時の処理
function mark(evt) {
  if(!isRun) {
    alert("諸葛亮：私の力で戦いをリセットしましょう");
    return;
  }
  var id = evt.target.id;
  if($(id).value == "o" || $(id).value == "x") {
    alert("曹操軍：お前！そこで何をしている！？");
    return;
  }
  if($(id).value == "") {
    $(id).value = "o";
    turn++;
  }
  if(5 <= turn) { judge(); }
  if(isRun) { cpPlay(); }
}

// CPU
function cpPlay() {
  // プレイヤーが、ボタンを押した時に処理を実行
  // ×を出力する
  var len = IDs.length;
  for(var i = 0; i < len; i++) {
    var rnd = Math.floor(Math.random() * len);
    var temp = IDs[i];
    IDs[i] = IDs[rnd];
    IDs[rnd] = temp;
  }
  var k = 0;
  while(k < len) {
    if($(IDs[k]).value != "o" && $(IDs[k]).value != "x") {
      $(IDs[k]).value = "x";
      turn++;
      break;
    }
    k++;
  }
  if(5 <= turn) { judge(); }
}

// 連合軍が勝つ場合
function judge() {
  // 勝ち
  if(($("b0").value == "o" && $("b1").value == "o" && $("b2").value == "o") ||
    ($("b3").value == "o" && $("b4").value == "o" && $("b5").value == "o") ||
    ($("b6").value == "o" && $("b7").value == "o" && $("b8").value == "o") ||
    ($("b0").value == "o" && $("b3").value == "o" && $("b6").value == "o") ||
    ($("b1").value == "o" && $("b4").value == "o" && $("b7").value == "o") ||
    ($("b2").value == "o" && $("b5").value == "o" && $("b8").value == "o") ||
    ($("b0").value == "o" && $("b4").value == "o" && $("b8").value == "o") ||
    ($("b2").value == "o" && $("b4").value == "o" && $("b6").value == "o")) {
      displayResult("孫権：良くやった！劉備：でかしたぞ！");
      return;
  }
  //曹操軍が勝つ場合
  if(($("b0").value == "x" && $("b1").value == "x" && $("b2").value == "x") ||
    ($("b3").value == "x" && $("b4").value == "x" && $("b5").value == "x") ||
    ($("b6").value == "x" && $("b7").value == "x" && $("b8").value == "x") ||
    ($("b0").value == "x" && $("b3").value == "x" && $("b6").value == "x") ||
    ($("b1").value == "x" && $("b4").value == "x" && $("b7").value == "x") ||
    ($("b2").value == "x" && $("b5").value == "x" && $("b8").value == "x") ||
    ($("b0").value == "x" && $("b4").value == "x" && $("b8").value == "x") ||
    ($("b2").value == "x" && $("b4").value == "x" && $("b6").value == "x")) {
      displayResult("曹操：天下は、ワシのものだ！平伏せよ！");
      return;
  }
  // 引き分けの場合
  if(turn == 9) { displayResult("村人の反乱が起こった！"); }
}

// 結果
function displayResult(res, cName) {
  $("result").innerHTML = res;
  $("result").className = cName;
  isRun = false;
}

// ゲーム初期化
function clearBoard() { 
  turn = 0;
  for(var i = 0; i < 9; i++) {
    $("b" + String(i)).value = "";
  }
  $("result").innerHTML = "";
  $("result").className = "ready";
  if(!isRun) { isRun = true; }
}
	
