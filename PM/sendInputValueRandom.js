const valueSet = [
  "다연아 좋은하루보내!",
  "다연이가 제일 좋아",
  "춤짱다람쥐💜",
  "❤️🧡💛💚💙💜",
  "보고싶어 다연아",
  "보고싶다연ㅠㅠ",
  "다연이의 매일이 행복하길!"
];

var i = Math.floor(Math.random() * valueSet.length);
$('#sendInputValue').attr('value', valueSet[i]);