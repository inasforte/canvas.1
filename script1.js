let theCanvas = document.getElementById('canvas'),
     context = theCanvas.getContext('2d');

     theCanvas.style.display = "block";
     theCanvas.style.margin = "60px auto";
     context.font = "36px Tahoma";
     context.save();
     context.strokeStyle = '#d5d5d5';
     context.lineWidth = 7;
     context.beginPath();
     context.moveTo(0,0);
     context.lineTo(0,600);
     context.lineTo(900,600);
     context.lineTo(900,0);
     context.closePath();
     theGradient =context.createLinearGradient(0,0,700,0);
     theGradient.addColorStop(0,"#41b3a9f0");
     theGradient.addColorStop(1,"#a514c2f0");
     context.fillStyle = theGradient; 
     context.fill();
    context.stroke();
     context.restore();
     function setupCanvas(){
     var img = new Image();
     img.src = "images1.jpg";
     img.onload = function(){
     context.drawImage(img , 116,330, 126,95);
     }
}
     theCircle = 2 * Math.PI;

     context.clearRect(80,320,197,104.5);
    
     context.beginPath();//smile face
     context.fillStyle = "rgb(247, 247, 75) ";
     context.arc(179,235,53,0,theCircle,false);
     context.fill();
     context.beginPath();
     context.fillStyle = "#ececec";
     context.arc(178,240,39,0,0.5* theCircle,false);
     context.fill();
     context.beginPath();
     context.fillStyle = "#333";
     context.arc(154,210,10,0,theCircle,false);
     context.fill();
     context.beginPath();
     context.fillStyle = "#333";
     context.arc(199,210,10,0, theCircle,false);
     context.fill();
     context.beginPath();
     context.fillStyle = "#d5d5d5";
     context.arc(147,320,9,0,0.5* theCircle,false);
     context.fill();
     context.beginPath();
     context.arc(164,320,9,0,0.5* theCircle,false);
     context.fill();
     context.beginPath();
     context.arc(130,320,9,0, 0.5*theCircle,false);
     context.fill();
     context.beginPath();
     context.arc(114,320,9,0,0.5* theCircle,false);
     context.fill();
     context.beginPath();
     context.arc(181,320,9,0,0.5* theCircle,false);
     context.fill();
     context.beginPath();
     context.arc(198,320,9,0,0.5* theCircle,false);
     context.fill();
     context.beginPath();
     context.arc(215,320,9,0,0.5* theCircle,false);
     context.fill();
     context.beginPath();
     context.arc(232,320,9,0,0.5* theCircle,false);
     context.fill();
    
     context.save();
    context.beginPath();
    context.fillStyle = "#ececec";
    context.arc(40,40,21,0, theCircle,false);
    context.fill();
    context.beginPath();
    context.arc(40,560,21,0, theCircle,false);
    context.fill();
    context.beginPath();
    context.arc(860,560,21,0, theCircle,false);
    context.fill();
    context.beginPath();
    context.arc(860,40,21,0, theCircle,false);
    context.fill();
    context.restore();
    context.save();
     context.shadowColor = "rgba(0,0,0,0.6)";
     context.shadowBlur = 5;
     context.shadowOffsetX = "3";
     context.shadowOffsetY = "3";
     context.globalAlpha = 0.8; 
    context.beginPath();
    context.arc(40,40,18,0, theCircle,false);
    context.fill();
    context.beginPath();
    context.arc(860,40,18,0, theCircle,false);
    context.fill();
    context.beginPath();
    context.arc(40,560,18,0, theCircle,false);
    context.fill();
    context.beginPath();
    context.arc(860,560,18,0, theCircle,false);
    context.fill();
    context.closePath();
    context.restore();
    //sign
    context.save();
    context.scale(0.6,0.6);
    context.translate(330,386);
   context.font = "95px Tahoma";
    context.strokeStyle = '#000';
    context.globalAlpha = 0.9;
    context.lineWidth = 2;
    context.beginPath();
    context.moveTo(100,575);
    context.lineTo(108,560);
    context.lineTo(118,574);
    context.lineTo(119,562);

    context.lineTo(130,540);
    context.stroke();
    context.strokeStyle = '#000';
    context.moveTo(116.6,542);
    context.lineTo(139,562);
    context.stroke();
  
   context.moveTo(147,567);
    context.lineTo(147,570);
    context.lineTo(150,570);
    context.lineTo(150,567);

    context.closePath();
    context.stroke();
    context.restore();
    context.save();
    context.scale(0.6,0.6);
    context.translate(330,386);
    theCircle = 2 * Math.PI;
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "#000";
    context.arc(122,567,17,Math.PI/2,0.95 * theCircle,true);
    context.stroke();
    context.beginPath();
    context.arc(123,542,6,Math.PI,0.99 * theCircle,false);
    context.stroke();
    //small
    context.beginPath();
    context.arc(164,562,5,0,0.56 * theCircle,false);
    context.stroke();
    context.beginPath();
    context.arc(173.5,562,5,0,0.56 * theCircle,false);
    context.stroke();
    context.beginPath();
    context.arc(183.5,562,5,0,0.56 * theCircle,false);
    context.stroke();
    //new
    context.beginPath();
    context.arc(197,562,8,Math.PI/3,0.5 * theCircle,false);
    context.stroke();
   context.beginPath();
    context.arc(195,559,12,Math.PI/3,0.73 * theCircle,true);
    context.stroke();
    context.beginPath();
    context.arc(206,551,14,Math.PI/2,0.55 * theCircle,false);
    context.stroke();
    context.beginPath();
    context.arc(197,579,17,Math.PI/2,0.95 * theCircle,true);
    context.stroke();
    context.strokeStyle = '#000';
    context.moveTo(205,564);
    context.lineTo(215,576.5);
    context.stroke();
    context.restore();

 
let theC = document.getElementById("canvas"),//change
     theCon = theC.getContext("2d");
    
     theCon.save();
    theCon.shadowColor = "rgba(0,0,0,0.6)";
     theCon.shadowBlur = 7;
     theCon.shadowOffsetX = "10";
     theCon.shadowOffsetY = "10";
     theCon.fillStyle = "#ececec";
    theCon.fillRect(310, 140, 550, 320);
     theCon.restore();
     
 theCon.font= "102px Arial";
 theCon.fillStyle = '#a30f2f';//#a30f2f
 theCon.fillText("F", 350, 260);
 theCon.fillText("o", 380, 290);
 theCon.fillText("r", 430, 330);
 theCon.fillText("t", 460, 370);
 theCon.fillText("e", 490, 390);
 theGradient = theCon.createLinearGradient(0,0,800,0);
 theGradient.addColorStop(0,"red");
 theGradient.addColorStop(1,"blue");
 theCon.lineWidth = 4;
 theCon.font = "70px Tahoma";
 theCon.strokeStyle = theGradient;
 theCon.strokeText(".World", 550, 390);
 theCon.save();
 theCon.font= "103px Arial";
 theCon.widtthline = 4;
 theCon.strokeStyle = '#114d9c';
 theCon.strokeText("F", 350, 260);
 theCon.strokeText("o", 380, 290);
 theCon.strokeText("r", 430, 330);
 theCon.strokeText("t", 460, 370);
 theCon.strokeText("e", 490, 390);
 theCon.restore();
 theCon.save();
 theCon.shadowColor = "rgba(0,0,0,0.3)";
theCon.shadowBlur = 5;
 theCon.shadowOffsetX = "4";
 theCon.shadowOffsetY = "4";
 theCon.font= "17px Tahoma";
 theCon.fillStyle = '#000';
 theCon.fillText('"They refused to believe in coincidence, they ', 467, 224);
 theCon.fillText('believe in that everything happens for reason."' , 475, 255);
 theCon.restore();
theCon.save();
theCon.translate(350,118);
theCon.rotate(75* Math.PI/360);
 theCon.fillStyle = "rgba(0,0,0,0.9)";
 theCon.fillRect(0, 0, 29, 109);
 theCon.restore();
 theCon.save();
theCon.translate(789,136);
theCon.rotate(-87* Math.PI/360);
 theCon.fillStyle = "rgba(0,0,0,0.9)";
 theCon.fillRect(0,0, 29,109);
 theCon.restore();
 theCon.save();
 theCon.translate(287,410);
 theCon.rotate(-94* Math.PI/360);
theCon.fillStyle = "rgba(0,0,0,0.97)";
 theCon.fillRect(0,0 , 29, 109);
 theCon.restore();
 theCon.save();
theCon.translate(864,386);
theCon.rotate(94* Math.PI/360);
 theCon.fillStyle = "rgba(0,0,0,0.97)";
 theCon.fillRect(0,0, 29, 109);
 theCon.restore();
      theCon.save();
     theCon.strokeStyle = '#d5d5d5';
     theCon.lineWidth = 4;
     theCon.beginPath();
     theCon.moveTo(82,322);
     theCon.lineTo(82,359);
     theCon.lineTo(120,322);
     theCon.closePath();
     theCon.fillStyle = '#d5d5d5';
     theCon.fill();
     theCon.stroke();
     theCon.beginPath();
     theCon.moveTo(275,322);
     theCon.lineTo(275,359);
     theCon.lineTo(235,322);
     theCon.closePath();
     theCon.fillStyle = '#d5d5d5';
     theCon.fill();
     theCon.stroke();
     theCon.restore();
     theCon.save();
     theCon.fillStyle = '#d5d5d5';
     theCon.fillRect(80, 359, 5, 63);
     theCon.translate(192,0);
     theCon.fillRect(80, 359, 5, 63);
    theCon.restore();
    theCon.save();
     theCon.fillStyle = '#91122eaf';
     theCon.fillRect(80, 359, 6, 5);
     theCon.translate(191,0);
     theCon.fillRect(80, 359, 6, 5);
    theCon.restore();

    theCon.beginPath();
    theCon.strokeStyle = "rgba(0,0,0,0.5)";
    theCon.lineWidth = 2;
    theCon.moveTo(84,534);
    theCon.lineTo(84,553);
    
    theCon.moveTo(84,561);
    theCon.lineTo(84,581);
    theCon.stroke();
    theCon.font= "13px Tahoma";
    theCon.fillStyle = '#000';
     theCon.textAlign = "start";
    theCon.fillText('+9640000000000', 88, 546);
    theCon.fillText('in#######8@gmail.com' , 88,575 );

  
 
    theCon.save();
    theCon.strokeStyle = '#888';
    theCon.globalAlpha = 0.5;
    theCon.lineWidth = 4;
    theCon.moveTo(40,27);
    theCon.lineTo(40,52);

    theCon.moveTo(27,40);
    theCon.lineTo(52,40);
    theCon.strokeStyle = '#888';
    theCon.globalAlpha = 0.5;
   theCon.translate(820,0);
    theCon.moveTo(40,27);
    theCon.lineTo(40,52);

   theCon.moveTo(27,40);
    theCon.lineTo(52,40);
    theCon.strokeStyle = '#888';
    theCon.globalAlpha = 0.96;
    theCon.translate(0,520);
    theCon.moveTo(40,27);
    theCon.lineTo(40,52);

   theCon.moveTo(27,40);
    theCon.lineTo(52,40);
    theCon.strokeStyle = '#888';
    theCon.globalAlpha = 0.96;
    theCon.translate(-820,0);
    theCon.moveTo(40,27);
    theCon.lineTo(40,52);

   theCon.moveTo(27,40);
    theCon.lineTo(52,40);
    theCon.stroke();
    theCon.restore();
    
//New canvas
    let  twoCanvas = document.getElementById('two-can'),
    twoContext = twoCanvas.getContext('2d') ;
    twoContext.font = "14px Tahoma";

    twoCanvas.style.display = "block";
    twoCanvas.style.margin = "40px auto";
   
    w = twoCanvas.clientWidth;
    h = twoCanvas.height;
   

    twoContext.strokeStyle = '#0c53afa6';
    twoContext.lineWidth = 8;
    twoContext.beginPath();
    twoContext.moveTo(0,0);
    twoContext.lineTo(0,680);
    twoContext.lineTo(750,680);
    twoContext.lineTo(750,0);
    twoContext.closePath();
    twoContext.fillStyle ="#d5d5d5";
    twoContext.fill();
    twoContext.stroke();

   
    twoContext.fillStyle = "rgba(243, 243, 30, 0.96)";
    twoContext.fillRect(50,430,72,h - 434);
    twoContext.fillStyle = "#000";
    twoContext.fillText('Sunday',60,h - 35);

    twoContext.fillStyle = "rgba(243, 243, 30, 0.96)";
    twoContext.fillRect(150,580,72,h - 584);
    twoContext.fillStyle = "#000";
    twoContext.fillText('Monday',160,h - 35);

    twoContext.fillStyle = "#16a085";
    twoContext.fillRect(250,275,74,h - 279);
    twoContext.fillStyle = "#000";
    twoContext.fillText('Tuesday',260,h - 35);

    twoContext.fillStyle = "#16a085";
    twoContext.fillRect(350,340,74,h - 344);
    twoContext.fillStyle = "#000";
    twoContext.fillText(' Wednesday',348,h - 35);

     twoContext.fillStyle = "rgba(14, 150, 14, 0.92)";
    twoContext.fillRect(450,140,74,h - 144);
    twoContext.fillStyle = "#000";
    twoContext.fillText('Thursday',460,h - 35);

    twoContext.fillStyle = "rgba(14, 150, 14, 0.92)";
    twoContext.fillRect(550,180,74,h - 184);
    twoContext.fillStyle = "#000";
    twoContext.fillText(' Friday',560,h - 35);

    twoContext.fillStyle = "#16a085";
    twoContext.fillRect(650,300,72,h - 304);
    twoContext.fillStyle = "#000";
    twoContext.fillText('Saturday',660,h - 35);
   
    twoContext.save();
    twoContext.lineWidth = 4;
    twoContext.fillStyle = "#ececec";
    twoContext.fillRect(20,20,182,64);
    twoContext.restore();
    twoContext.save();
    twoContext.shadowColor = "rgba(0,0,0,0.3)";
    twoContext.shadowBlur = 5;
    twoContext.shadowOffsetX = "4";
    twoContext.shadowOffsetY = "4";
    twoContext.font= "34px Tahoma";
    twoContext.fillStyle = '#000';
    twoContext.fillText('visitors ', 40, 65);
    twoContext.font= "16px Tahoma";
    twoContext.fillText('February 2022', 33, 111);
    twoContext.restore();
    
   
 
 