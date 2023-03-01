var Nickname = decodeURI($.cookie('Nickname'));
var d = document.getElementsByClassName("DisplayNickname");
var i = 0;

if ($.cookie("Nickname") == undefined) {
  while (d.length > i) {
    d[i].innerHTML = "케플리안";
    i++
  }
}
else {
  while (d.length > i) {
    d[i].innerHTML = Nickname;
    i++;
  }
}
