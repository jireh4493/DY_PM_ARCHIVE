function SetNicknameCookie() {
  var Cookie = document.getElementById("NicknameInput").value;

  document.cookie = "Nickname=" + encodeURI(Cookie);
}