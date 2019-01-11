function timeout_callback(){
         alert("早く始めてください！");
      }
      setTimeout(timeout_callback,5000);
funtion kisotishiki(){
   var names ;
              names = prompt("名前を入力してください")
              if(names == null){
                alert("どなたですか？")
                }
              eles{
                alert(name + "〜さんか〜、良い名前だね！！")
                alert("診断を開始します")
                location.href="final1.html";
                }
      }   

function a(){
         location.href="final2.html";
         }
function b(){
         location.href="final3.html";
         }
function c(){
         location.href="final4.html";
         }
function d(){
         location.href="final5.html";
         }

function goban(){
    var x =document.getElementsByName('number1').value;
    var y =document.getElementsByName('number2').value;
    var z =document.getElementsByName('number3').value;
    var q =document.getElementsByName('number4').value;
    var score;
    if(score =4){
         alert("よく知っていますね！これなら安心です");
         }else if(score > 2 || score < 3){
         alert("いい感じです。");
      }
         else{
          alert("知識が足りないですよ！");
      }
   }
function initMap() {
  var latlng = new google.maps.LatLng(35.388276, 139.427348);
  var opt = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), opt);
}
function saisyo(){
  location.href="final.shogo.html";
}
