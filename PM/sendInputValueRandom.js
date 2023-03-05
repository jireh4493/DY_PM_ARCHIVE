const valueSet = [
  "좋은하루보내!",
  "다연이가 제일 좋아"
];

var i = Math.floor(Math.random() * valueSet.length);
$('#sendInputValue').attr('value', valueSet[i]);