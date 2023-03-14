var Nickname = decodeURI($.cookie('Nickname'));
var d = document.getElementsByClassName('DisplayNickname');
var i = 0;

if ($.cookie('Nickname') == undefined) {
  while (d.length > i) {
    d[i].innerHTML = '케플리안';
    i++
  }
}
else {
  while (d.length > i) {
    d[i].innerHTML = decodeURI($.cookie('Nickname'));
    i++;
  }
}

function toShowDate() {
  if ($('.zIndex3').css("display") == "none") {
    $('.zIndex3').css("display", "block");
    $('.menuIcon').attr('src', 'close.png');
    $('.menuIcon').css({width: '15px', height: '15px', top: '18px', right: '18px'});
  }
  else if ($('.zIndex3').css("display") == "block") {
    $('.zIndex3').css("display", "none");
    $('.menuIcon').attr('src', 'list.png');
    $('.menuIcon').css({width: '24px', height: '24px', top: '13px', right: '15px'});
  }
}

var PMFrameMargin = $('.PMFrame').outerWidth();
var PMFrameWidth = PMFrameMargin - 20;
var PMFrameWidth = PMFrameWidth + "px";

var PMFrame = document.getElementsByClassName('PMFrame');

for (var i = 0; PMFrame.length > i; i++) {
  $($('.PMFrame')[i]).css('width', PMFrameWidth);
}


var PMContentFirst = document.getElementsByClassName('PMContentFirst');
var PMContent = document.getElementsByClassName('PMContent');
var PhotoFrameFirst = document.getElementsByClassName('PhotoFrameFirst');
var PhotoFrame = document.getElementsByClassName('PhotoFrame');

$('.PMFrame').css('width')

for (var i = 0; PMContentFirst.length > i; i++) {
  var PMmargin = PMFrameMargin - $($(".PMContentFirst")[i]).outerWidth() - 70;
  var PMmargin = PMmargin + "px";

  $($('.PMContentFirst')[i]).css('margin-right', PMmargin);
}
for (var i = 0; PMContent.length > i; i++) {
  var PMmargin = PMFrameMargin - $($(".PMContent")[i]).outerWidth() - 70;
  var PMmargin = PMmargin + "px";

  $($('.PMContent')[i]).css('margin-right', PMmargin);
}
for (var i = 0; PhotoFrameFirst.length > i; i++) {
  var PMmargin = PMFrameMargin - $($(".PhotoFrameFirst")[i]).outerWidth() - 70;
  var PMmargin = PMmargin + "px";

  $($('.PhotoFrameFirst')[i]).css('margin-right', PMmargin);
}
for (var i = 0; PhotoFrame.length > i; i++) {
  var PMmargin = PMFrameMargin - $($(".PhotoFrame")[i]).outerWidth() - 70;
  var PMmargin = PMmargin + "px";

  $($('.PhotoFrame')[i]).css('margin-right', PMmargin);
}

function resetMonth() {
  $("#January").css("opacity", "0");
  $("#February").css("opacity", "0");
  $("#March").css("opacity", "0");
  $("#April").css("opacity", "0");
  $("#May").css("opacity", "0");
  $("#June").css("opacity", "0");
  $("#July").css("opacity", "0");
  $("#August").css("opacity", "0");
  $("#September").css("opacity", "0");
  $("#October").css("opacity", "0");
  $("#November").css("opacity", "0");
  $("#December").css("opacity", "0");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");
}
function resetDate() {
  $("#Date1").css("opacity", "0");
  $("#Date2").css("opacity", "0");
  $("#Date3").css("opacity", "0");
  $("#Date4").css("opacity", "0");
  $("#Date5").css("opacity", "0");
  $("#Date6").css("opacity", "0");
  $("#Date7").css("opacity", "0");
  $("#Date8").css("opacity", "0");
  $("#Date9").css("opacity", "0");
  $("#Date10").css("opacity", "0");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "0");
  $("#Date13").css("opacity", "0");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "0");
  $("#Date16").css("opacity", "0");
  $("#Date17").css("opacity", "0");
  $("#Date18").css("opacity", "0");
  $("#Date19").css("opacity", "0");
  $("#Date20").css("opacity", "0");
  $("#Date21").css("opacity", "0");
  $("#Date22").css("opacity", "0");
  $("#Date23").css("opacity", "0");
  $("#Date24").css("opacity", "0");
  $("#Date25").css("opacity", "0");
  $("#Date26").css("opacity", "0");
  $("#Date27").css("opacity", "0");
  $("#Date28").css("opacity", "0");
  $("#Date29").css("opacity", "0");
  $("#Date30").css("opacity", "0");
  $("#Date31").css("opacity", "0");
}
function resetDateFontweight() {
  $("#Date1").css("font-weight", "300");
  $("#Date2").css("font-weight", "300");
  $("#Date3").css("font-weight", "300");
  $("#Date4").css("font-weight", "300");
  $("#Date5").css("font-weight", "300");
  $("#Date6").css("font-weight", "300");
  $("#Date7").css("font-weight", "300");
  $("#Date8").css("font-weight", "300");
  $("#Date9").css("font-weight", "300");
  $("#Date10").css("font-weight", "300");
  $("#Date11").css("font-weight", "300");
  $("#Date12").css("font-weight", "300");
  $("#Date13").css("font-weight", "300");
  $("#Date14").css("font-weight", "300");
  $("#Date15").css("font-weight", "300");
  $("#Date16").css("font-weight", "300");
  $("#Date17").css("font-weight", "300");
  $("#Date18").css("font-weight", "300");
  $("#Date19").css("font-weight", "300");
  $("#Date20").css("font-weight", "300");
  $("#Date21").css("font-weight", "300");
  $("#Date22").css("font-weight", "300");
  $("#Date23").css("font-weight", "300");
  $("#Date24").css("font-weight", "300");
  $("#Date25").css("font-weight", "300");
  $("#Date26").css("font-weight", "300");
  $("#Date27").css("font-weight", "300");
  $("#Date28").css("font-weight", "300");
  $("#Date29").css("font-weight", "300");
  $("#Date30").css("font-weight", "300");
  $("#Date31").css("font-weight", "300");
}

function Year2022ToMonth() {
  resetMonth();
  resetDate();
  $("#Year2022").css("font-weight", "500");
  $("#Year2023").css("font-weight", "300");
  $(".monthList").css("opacity", "1");
  $("#January").css("opacity", "1");
  $("#February").css("opacity", "1");
  $("#March").css("opacity", "1");
  $("#April").css("opacity", "1");
  $("#May").css("opacity", "1");
  $("#June").css("opacity", "1");
  $("#July").css("opacity", "1");
  $("#August").css("opacity", "1");
  $("#September").css("opacity", "1");
  $("#October").css("opacity", "1");
  $("#November").css("opacity", "1");
  $("#December").css("opacity", "1");
}
function Year2023ToMonth() {
  resetMonth();
  resetDate();
  $("#Year2022").css("font-weight", "300");
  $("#Year2023").css("font-weight", "500");
  $(".monthList").css("opacity", "1");
  $("#January").css("opacity", "1");
  $("#February").css("opacity", "1");
}

function JanuaryToDate() {
  resetDate();
  resetDateFontweight();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "500");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  if ($("#Year2022").css("font-weight") == 500) {
      $("#Date1").css("opacity", "0");
      $("#Date2").css("opacity", "0");
      $("#Date3").css("opacity", "1");
      $("#Date4").css("opacity", "0");
      $("#Date5").css("opacity", "0");
      $("#Date6").css("opacity", "0");
      $("#Date7").css("opacity", "0");
      $("#Date8").css("opacity", "0");
      $("#Date9").css("opacity", "0");
      $("#Date10").css("opacity", "1");
      $("#Date11").css("opacity", "1");
      $("#Date12").css("opacity", "");
      $("#Date13").css("opacity", "0");
      $("#Date14").css("opacity", "1");
      $("#Date15").css("opacity", "0");
      $("#Date16").css("opacity", "0");
      $("#Date17").css("opacity", "0");
      $("#Date18").css("opacity", "0");
      $("#Date19").css("opacity", "1");
      $("#Date20").css("opacity", "0");
      $("#Date21").css("opacity", "0");
      $("#Date22").css("opacity", "0");
      $("#Date23").css("opacity", "0");
      $("#Date24").css("opacity", "1");
      $("#Date25").css("opacity", "1");
      $("#Date26").css("opacity", "0");
      $("#Date27").css("opacity", "0");
      $("#Date28").css("opacity", "1");
      $("#Date29").css("opacity", "1");
      $("#Date30").css("opacity", "1");
      $("#Date31").css("opacity", "0");
  }
  else {
      $("#Date1").css("opacity", "0");
      $("#Date2").css("opacity", "1");
      $("#Date3").css("opacity", "0");
      $("#Date4").css("opacity", "0");
      $("#Date5").css("opacity", "1");
      $("#Date6").css("opacity", "1");
      $("#Date7").css("opacity", "0");
      $("#Date8").css("opacity", "0");
      $("#Date9").css("opacity", "1");
      $("#Date10").css("opacity", "1");
      $("#Date11").css("opacity", "1");
      $("#Date12").css("opacity", "1");
      $("#Date13").css("opacity", "0");
      $("#Date14").css("opacity", "1");
      $("#Date15").css("opacity", "0");
      $("#Date16").css("opacity", "0");
      $("#Date17").css("opacity", "1");
      $("#Date18").css("opacity", "1");
      $("#Date19").css("opacity", "0");
      $("#Date20").css("opacity", "0");
      $("#Date21").css("opacity", "1");
      $("#Date22").css("opacity", "0");
      $("#Date23").css("opacity", "1");
      $("#Date24").css("opacity", "0");
      $("#Date25").css("opacity", "0");
      $("#Date26").css("opacity", "1");
      $("#Date27").css("opacity", "0");
      $("#Date28").css("opacity", "1");
      $("#Date29").css("opacity", "0");
      $("#Date30").css("opacity", "0");
      $("#Date31").css("opacity", "0");
  }
}
function FebruaryToDate() {
  resetDate();
  resetDateFontweight();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "500");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  if ($("#Year2022").css("font-weight") == 500) {
      $("#Date1").css("opacity", "1");
      $("#Date2").css("opacity", "0");
      $("#Date3").css("opacity", "1");
      $("#Date4").css("opacity", "0");
      $("#Date5").css("opacity", "0");
      $("#Date6").css("opacity", "0");
      $("#Date7").css("opacity", "0");
      $("#Date8").css("opacity", "1");
      $("#Date9").css("opacity", "0");
      $("#Date10").css("opacity", "1");
      $("#Date11").css("opacity", "0");
      $("#Date12").css("opacity", "1");
      $("#Date13").css("opacity", "1");
      $("#Date14").css("opacity", "1");
      $("#Date15").css("opacity", "1");
      $("#Date16").css("opacity", "0");
      $("#Date17").css("opacity", "1");
      $("#Date18").css("opacity", "0");
      $("#Date19").css("opacity", "1");
      $("#Date20").css("opacity", "0");
      $("#Date21").css("opacity", "1");
      $("#Date22").css("opacity", "1");
      $("#Date23").css("opacity", "0");
      $("#Date24").css("opacity", "1");
      $("#Date25").css("opacity", "1");
      $("#Date26").css("opacity", "1");
      $("#Date27").css("opacity", "1");
      $("#Date28").css("opacity", "0");
      $("#Date29").css("opacity", "0");
      $("#Date30").css("opacity", "0");
      $("#Date31").css("opacity", "0");
  }
  else {
       $("#Date1").css("opacity", "1");
       $("#Date2").css("opacity", "0");
       $("#Date3").css("opacity", "1");
       $("#Date4").css("opacity", "0");
       $("#Date5").css("opacity", "0");
       $("#Date6").css("opacity", "1");
       $("#Date7").css("opacity", "0");
       $("#Date8").css("opacity", "1");
       $("#Date9").css("opacity", "0");
       $("#Date10").css("opacity", "1");
       $("#Date11").css("opacity", "0");
       $("#Date12").css("opacity", "1");
       $("#Date13").css("opacity", "0");
       $("#Date14").css("opacity", "0");
       $("#Date15").css("opacity", "1");
       $("#Date16").css("opacity", "1");
       $("#Date17").css("opacity", "0");
       $("#Date18").css("opacity", "0");
       $("#Date19").css("opacity", "0");
       $("#Date20").css("opacity", "0");
       $("#Date21").css("opacity", "0");
       $("#Date22").css("opacity", "0");
       $("#Date23").css("opacity", "0");
       $("#Date24").css("opacity", "0");
       $("#Date25").css("opacity", "0");
       $("#Date26").css("opacity", "0");
       $("#Date27").css("opacity", "0");
       $("#Date28").css("opacity", "0");
       $("#Date29").css("opacity", "0");
       $("#Date30").css("opacity", "0");
       $("#Date31").css("opacity", "0");
  }
}
function MarchToDate() {
  resetDate();
  resetDateFontweight();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "500");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "1");
  $("#Date2").css("opacity", "1");
  $("#Date3").css("opacity", "0");
  $("#Date4").css("opacity", "1");
  $("#Date5").css("opacity", "0");
  $("#Date6").css("opacity", "1");
  $("#Date7").css("opacity", "1");
  $("#Date8").css("opacity", "0");
  $("#Date9").css("opacity", "1");
  $("#Date10").css("opacity", "1");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "0");
  $("#Date13").css("opacity", "1");
  $("#Date14").css("opacity", "1");
  $("#Date15").css("opacity", "0");
  $("#Date16").css("opacity", "1");
  $("#Date17").css("opacity", "1");
  $("#Date18").css("opacity", "1");
  $("#Date19").css("opacity", "0");
  $("#Date20").css("opacity", "1");
  $("#Date21").css("opacity", "0");
  $("#Date22").css("opacity", "0");
  $("#Date23").css("opacity", "1");
  $("#Date24").css("opacity", "1");
  $("#Date25").css("opacity", "1");
  $("#Date26").css("opacity", "1");
  $("#Date27").css("opacity", "0");
  $("#Date28").css("opacity", "0");
  $("#Date29").css("opacity", "1");
  $("#Date30").css("opacity", "0");
  $("#Date31").css("opacity", "0");
}
function AprilToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "500");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "1");
  $("#Date2").css("opacity", "0");
  $("#Date3").css("opacity", "0");
  $("#Date4").css("opacity", "0");
  $("#Date5").css("opacity", "1");
  $("#Date6").css("opacity", "1");
  $("#Date7").css("opacity", "1");
  $("#Date8").css("opacity", "0");
  $("#Date9").css("opacity", "0");
  $("#Date10").css("opacity", "0");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "1");
  $("#Date13").css("opacity", "0");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "0");
  $("#Date16").css("opacity", "0");
  $("#Date17").css("opacity", "1");
  $("#Date18").css("opacity", "0");
  $("#Date19").css("opacity", "1");
  $("#Date20").css("opacity", "0");
  $("#Date21").css("opacity", "1");
  $("#Date22").css("opacity", "0");
  $("#Date23").css("opacity", "0");
  $("#Date24").css("opacity", "0");
  $("#Date25").css("opacity", "0");
  $("#Date26").css("opacity", "0");
  $("#Date27").css("opacity", "0");
  $("#Date28").css("opacity", "1");
  $("#Date29").css("opacity", "1");
  $("#Date30").css("opacity", "0");
  $("#Date31").css("opacity", "0");
}
function MayToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "500");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "0");
  $("#Date2").css("opacity", "1");
  $("#Date3").css("opacity", "0");
  $("#Date4").css("opacity", "0");
  $("#Date5").css("opacity", "1");
  $("#Date6").css("opacity", "1");
  $("#Date7").css("opacity", "0");
  $("#Date8").css("opacity", "1");
  $("#Date9").css("opacity", "0");
  $("#Date10").css("opacity", "0");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "0");
  $("#Date13").css("opacity", "0");
  $("#Date14").css("opacity", "1");
  $("#Date15").css("opacity", "1");
  $("#Date16").css("opacity", "0");
  $("#Date17").css("opacity", "0");
  $("#Date18").css("opacity", "0");
  $("#Date19").css("opacity", "0");
  $("#Date20").css("opacity", "0");
  $("#Date21").css("opacity", "1");
  $("#Date22").css("opacity", "0");
  $("#Date23").css("opacity", "0");
  $("#Date24").css("opacity", "0");
  $("#Date25").css("opacity", "0");
  $("#Date26").css("opacity", "1");
  $("#Date27").css("opacity", "0");
  $("#Date28").css("opacity", "0");
  $("#Date29").css("opacity", "1");
  $("#Date30").css("opacity", "1");
  $("#Date31").css("opacity", "1");
}
function JuneToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "500");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "0");
  $("#Date2").css("opacity", "0");
  $("#Date3").css("opacity", "1");
  $("#Date4").css("opacity", "0");
  $("#Date5").css("opacity", "1");
  $("#Date6").css("opacity", "0");
  $("#Date7").css("opacity", "1");
  $("#Date8").css("opacity", "0");
  $("#Date9").css("opacity", "1");
  $("#Date10").css("opacity", "1");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "1");
  $("#Date13").css("opacity", "1");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "1");
  $("#Date16").css("opacity", "0");
  $("#Date17").css("opacity", "0");
  $("#Date18").css("opacity", "1");
  $("#Date19").css("opacity", "0");
  $("#Date20").css("opacity", "0");
  $("#Date21").css("opacity", "1");
  $("#Date22").css("opacity", "1");
  $("#Date23").css("opacity", "1");
  $("#Date24").css("opacity", "0");
  $("#Date25").css("opacity", "1");
  $("#Date26").css("opacity", "0");
  $("#Date27").css("opacity", "1");
  $("#Date28").css("opacity", "0");
  $("#Date29").css("opacity", "0");
  $("#Date30").css("opacity", "1");
  $("#Date31").css("opacity", "0");
}
function JulyToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "500");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "1");
  $("#Date2").css("opacity", "01");
  $("#Date3").css("opacity", "1");
  $("#Date4").css("opacity", "0");
  $("#Date5").css("opacity", "1");
  $("#Date6").css("opacity", "0");
  $("#Date7").css("opacity", "0");
  $("#Date8").css("opacity", "1");
  $("#Date9").css("opacity", "0");
  $("#Date10").css("opacity", "0");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "1");
  $("#Date13").css("opacity", "1");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "1");
  $("#Date16").css("opacity", "0");
  $("#Date17").css("opacity", "0");
  $("#Date18").css("opacity", "1");
  $("#Date19").css("opacity", "0");
  $("#Date20").css("opacity", "1");
  $("#Date21").css("opacity", "0");
  $("#Date22").css("opacity", "0");
  $("#Date23").css("opacity", "1");
  $("#Date24").css("opacity", "1");
  $("#Date25").css("opacity", "1");
  $("#Date26").css("opacity", "0");
  $("#Date27").css("opacity", "0");
  $("#Date28").css("opacity", "0");
  $("#Date29").css("opacity", "1");
  $("#Date30").css("opacity", "1");
  $("#Date31").css("opacity", "0");
}
function AugustToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "500");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "1");
  $("#Date2").css("opacity", "1");
  $("#Date3").css("opacity", "1");
  $("#Date4").css("opacity", "1");
  $("#Date5").css("opacity", "1");
  $("#Date6").css("opacity", "0");
  $("#Date7").css("opacity", "0");
  $("#Date8").css("opacity", "1");
  $("#Date9").css("opacity", "0");
  $("#Date10").css("opacity", "0");
  $("#Date11").css("opacity", "1");
  $("#Date12").css("opacity", "1");
  $("#Date13").css("opacity", "1");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "0");
  $("#Date16").css("opacity", "1");
  $("#Date17").css("opacity", "0");
  $("#Date18").css("opacity", "1");
  $("#Date19").css("opacity", "1");
  $("#Date20").css("opacity", "1");
  $("#Date21").css("opacity", "0");
  $("#Date22").css("opacity", "0");
  $("#Date23").css("opacity", "1");
  $("#Date24").css("opacity", "1");
  $("#Date25").css("opacity", "1");
  $("#Date26").css("opacity", "0");
  $("#Date27").css("opacity", "1");
  $("#Date28").css("opacity", "1");
  $("#Date29").css("opacity", "0");
  $("#Date30").css("opacity", "0");
  $("#Date31").css("opacity", "1");
}
function SeptemberToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "500");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "0");
  $("#Date2").css("opacity", "1");
  $("#Date3").css("opacity", "0");
  $("#Date4").css("opacity", "1");
  $("#Date5").css("opacity", "0");
  $("#Date6").css("opacity", "0");
  $("#Date7").css("opacity", "0");
  $("#Date8").css("opacity", "1");
  $("#Date9").css("opacity", "0");
  $("#Date10").css("opacity", "1");
  $("#Date11").css("opacity", "1");
  $("#Date12").css("opacity", "1");
  $("#Date13").css("opacity", "1");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "0");
  $("#Date16").css("opacity", "1");
  $("#Date17").css("opacity", "1");
  $("#Date18").css("opacity", "0");
  $("#Date19").css("opacity", "1");
  $("#Date20").css("opacity", "0");
  $("#Date21").css("opacity", "1");
  $("#Date22").css("opacity", "1");
  $("#Date23").css("opacity", "1");
  $("#Date24").css("opacity", "1");
  $("#Date25").css("opacity", "0");
  $("#Date26").css("opacity", "0");
  $("#Date27").css("opacity", "1");
  $("#Date28").css("opacity", "1");
  $("#Date29").css("opacity", "0");
  $("#Date30").css("opacity", "1");
  $("#Date31").css("opacity", "0");
}
function OctoberToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "500");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "0");
  $("#Date2").css("opacity", "1");
  $("#Date3").css("opacity", "1");
  $("#Date4").css("opacity", "1");
  $("#Date5").css("opacity", "0");
  $("#Date6").css("opacity", "1");
  $("#Date7").css("opacity", "1");
  $("#Date8").css("opacity", "0");
  $("#Date9").css("opacity", "1");
  $("#Date10").css("opacity", "1");
  $("#Date11").css("opacity", "1");
  $("#Date12").css("opacity", "0");
  $("#Date13").css("opacity", "0");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "0");
  $("#Date16").css("opacity", "0");
  $("#Date17").css("opacity", "0");
  $("#Date18").css("opacity", "1");
  $("#Date19").css("opacity", "0");
  $("#Date20").css("opacity", "1");
  $("#Date21").css("opacity", "0");
  $("#Date22").css("opacity", "1");
  $("#Date23").css("opacity", "1");
  $("#Date24").css("opacity", "0");
  $("#Date25").css("opacity", "0");
  $("#Date26").css("opacity", "1");
  $("#Date27").css("opacity", "0");
  $("#Date28").css("opacity", "0");
  $("#Date29").css("opacity", "1");
  $("#Date30").css("opacity", "0");
  $("#Date31").css("opacity", "0");
}
function NovemberToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "500");
  $("#December").css("font-weight", "300");

  $("#Date1").css("opacity", "0");
  $("#Date2").css("opacity", "0");
  $("#Date3").css("opacity", "0");
  $("#Date4").css("opacity", "0");
  $("#Date5").css("opacity", "0");
  $("#Date6").css("opacity", "0");
  $("#Date7").css("opacity", "0");
  $("#Date8").css("opacity", "0");
  $("#Date9").css("opacity", "1");
  $("#Date10").css("opacity", "1");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "0");
  $("#Date13").css("opacity", "0");
  $("#Date14").css("opacity", "1");
  $("#Date15").css("opacity", "0");
  $("#Date16").css("opacity", "1");
  $("#Date17").css("opacity", "1");
  $("#Date18").css("opacity", "0");
  $("#Date19").css("opacity", "0");
  $("#Date20").css("opacity", "1");
  $("#Date21").css("opacity", "1");
  $("#Date22").css("opacity", "1");
  $("#Date23").css("opacity", "0");
  $("#Date24").css("opacity", "1");
  $("#Date25").css("opacity", "0");
  $("#Date26").css("opacity", "1");
  $("#Date27").css("opacity", "1");
  $("#Date28").css("opacity", "1");
  $("#Date29").css("opacity", "1");
  $("#Date30").css("opacity", "1");
  $("#Date31").css("opacity", "0");
}
function DecemberToDate() {
  resetDate();
  $(".dateList").css("opacity", "1");
  $("#January").css("font-weight", "300");
  $("#February").css("font-weight", "300");
  $("#March").css("font-weight", "300");
  $("#April").css("font-weight", "300");
  $("#May").css("font-weight", "300");
  $("#June").css("font-weight", "300");
  $("#July").css("font-weight", "300");
  $("#August").css("font-weight", "300");
  $("#September").css("font-weight", "300");
  $("#October").css("font-weight", "300");
  $("#November").css("font-weight", "300");
  $("#December").css("font-weight", "500");

  $("#Date1").css("opacity", "1");
  $("#Date2").css("opacity", "0");
  $("#Date3").css("opacity", "0");
  $("#Date4").css("opacity", "1");
  $("#Date5").css("opacity", "1");
  $("#Date6").css("opacity", "0");
  $("#Date7").css("opacity", "0");
  $("#Date8").css("opacity", "1");
  $("#Date9").css("opacity", "0");
  $("#Date10").css("opacity", "1");
  $("#Date11").css("opacity", "0");
  $("#Date12").css("opacity", "1");
  $("#Date13").css("opacity", "0");
  $("#Date14").css("opacity", "0");
  $("#Date15").css("opacity", "1");
  $("#Date16").css("opacity", "0");
  $("#Date17").css("opacity", "1");
  $("#Date18").css("opacity", "0");
  $("#Date19").css("opacity", "1");
  $("#Date20").css("opacity", "0");
  $("#Date21").css("opacity", "1");
  $("#Date22").css("opacity", "1");
  $("#Date23").css("opacity", "1");
  $("#Date24").css("opacity", "0");
  $("#Date25").css("opacity", "1");
  $("#Date26").css("opacity", "0");
  $("#Date27").css("opacity", "1");
  $("#Date28").css("opacity", "0");
  $("#Date29").css("opacity", "1");
  $("#Date30").css("opacity", "1");
  $("#Date31").css("opacity", "1");
}

function goToDate1() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "PM_20230201.html"
    }
  }
}
function goToDate2() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate3() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "PM_20230203.html"
    }
  }
}
function goToDate4() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate5() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate6() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "PM_20230206.html"
    }
  }
}
function goToDate7() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate8() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "PM_20230208.html"
    }
  }
}
function goToDate9() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate10() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "PM_20230210.html"
    }
  }
}
function goToDate11() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate12() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230112.html"
    }
    else {
      location.href = "PM_20230212.html"
    }
  }
}
function goToDate13() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate14() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230114.html"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate15() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "PM_20230215.html"
    }
  }
}
function goToDate16() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate17() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230117.html"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate18() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230118.html"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate19() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate20() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate21() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230121.html"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate22() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate23() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230123.html"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate24() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate25() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate26() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230126.html"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate27() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate28() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "PM_20230128.html"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate29() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate30() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
function goToDate31() {
  if ($("#Year2022").css("font-weight") == 500) {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#February").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("March").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#April").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#May").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#June").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#July").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#August").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#September").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#October").css("font-weight") == 500) {
      location.href = "#"
    }
    else if ($("#November").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
  else {
    if ($("#January").css("font-weight") == 500) {
      location.href = "#"
    }
    else {
      location.href = "#"
    }
  }
}
