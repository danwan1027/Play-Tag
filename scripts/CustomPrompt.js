function changeName_One(val) {
    var player_name = document.getElementById("player_name1");
    player_name.innerHTML = val;
}
function changeName_Two(val) {
    var player_name = document.getElementById("player_name2");
    player_name.innerHTML = val;
}
function changeName_Three(val) {
    var player_name = document.getElementById("player_name3");
    player_name.innerHTML = val;
}
function CustomPrompt() {
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    this.render = function (dialog, func, id, src) {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.display = "block";
        var putstring = '<p class="name" id="title" >A value is required</p>' +
            '<div id=imageplayerdiv><img id=imageplayer src=' + src + '></div>' +
            dialog +
            '<div id=inputdiv><input id="input" name="func"></div>' +
            '<button id=buttonplayer onclick="Prompt.ok(\'' + func + '\',\'' + id + '\')">OK</button>';
        dialogbox.innerHTML = putstring;
    };
    this.ok = function (func, id) {
        var prompt_value1 = document.getElementById("input");
        prompt_value1 = prompt_value1.value;
        if (prompt_value1 === "") {
            prompt_value1 = "Player " + id;
        }
        window[func](prompt_value1);
        dialogbox.style.display = "none";
        dialogoverlay.style.display = "none";
        if (id == 1) {
            this.render('<p class="name" id="typename">Type a name for Player 2:</p>', 'changeName_Two', 2, "..//image//introprivate.png");
        }
        else if (id == 2) {
            this.render('<p class="name" id="typename">Type a name for Player 3:</p>', 'changeName_Three', 3, "..//image//intrograndmother.png");
        }
    };
}
var Prompt = new CustomPrompt();
function CustomConfirm() {
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    this.render = function () {
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        dialogoverlay.style.display = "block";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.height = winH / 2 - 52 + "px";
        dialogbox.style.display = "block";
        dialogbox.innerHTML = "<p id='introductinotitle'>?????????????????????</p><br><p id='rule'>????????????????????????????????????<br>????????????1??????<br>??????????????????????????????????????????????????????????????????????????????????????????</p><button id='button' onclick='Confirm.yes()'>Confirm</button>";
    };
    this.yes = function () {
        var id = 1;
        Prompt.render('<p class="name" id="typename">Type a name for Player 1:</p>', 'changeName_One', id, "..//image//introredhat.png");
    };
}
var Confirm = new CustomConfirm();

function GameOverWindow(){
    var dialogoverlay = document.getElementById("dialogoverlay");
    var dialogbox = document.getElementById("dialogbox");
    this.render = function (winner,loser,timecounter) {
        var backimage=document.getElementById("rightframebackground");
        backimage.src="..\\image\\changebackimage.png"
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        dialogoverlay.style.display = "none";
        dialogoverlay.style.height = winH + "px";
        dialogbox.style.left = (winW / 2) - (550 * 0.5) + "px";
        dialogbox.style.top = "100px";
        dialogbox.style.height = winH / 2 - 52 + "px";
        dialogbox.style.display = "block";
        dialogbox.style.opacity =1;
        dialogbox.innerHTML = "<p id='introductinotitle'>????????????</p><br><p id='rule' style='padding-left:30%;'>Winner:"+winner+"<br><br>Loser:"+loser+"<br><br>Left time:"+timecounter;
    };
}
var GameOverWin = new GameOverWindow(); //magical export
