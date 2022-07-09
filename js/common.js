

var com = com||{};

com.init = function (stype){
	
	com.nowStype= stype || com.getCookie("stype") ||"stype2";
	var stype = com.stype[com.nowStype];
	com.width			=	stype.width;		//Chiều rộng
	com.height			=	stype.height; 		//Chiều cao
	com.spaceX			=	stype.spaceX;		//Khoảng điểm X
	com.spaceY			=	stype.spaceY;		//Khoảng điểm Y
	com.pointStartX		=	stype.pointStartX;	//Điểm đầu tiên là tọa độ X;
	com.pointStartY		=	stype.pointStartY;	//Điểm đầu tiên là tọa độ Y;
	com.page			=	stype.page;			//Danh mục hình ảnh
	
	com.get("box").style.width = com.width+130+"px";
	
	com.canvas			=	document.getElementById("chess"); //Canvas
	com.ct				=	com.canvas.getContext("2d") ; 
	com.canvas.width	=	com.width;
	com.canvas.height	=	com.height;
	
	com.childList		=	com.childList||[];
	
	com.loadImages(com.page);		//Tải thư mục hình ảnh / hình ảnh
	//z(com.initMap.join())
}

//Hiệu ứng
com.stype = {
	stype1:{
		width:325,		//Chiều rộng
		height:402, 		//Chiều cao
		spaceX:35,		//Khoảng điểm X
		spaceY:36,		//Khoảng điểm Y
		pointStartX:5,		//Điểm đầu tiên là tọa độ X;
		pointStartY:19,		//Điểm đầu tiên là tọa độ Y;
		page:"stype_1"	//Danh mục hình ảnh
	},
	stype2:{
		width:530,		//Chiều rộng
		height:567, 		//Chiều cao
		spaceX:57,		//Khoảng điểm X
		spaceY:57,		//Khoảng điểm Y
		pointStartX:-2,		//Điểm đầu tiên là tọa độ X;
		pointStartY:0,		//Điểm đầu tiên là tọa độ Y;
		page:"stype_2"	//Danh mục hình ảnh
	}		
}

// Nhận ID
com.get = function (id){
	return document.getElementById(id)
}

window.onload = function(){  
	com.bg=new com.class.Bg();
	com.dot = new com.class.Dot();
	com.pane=new com.class.Pane();
	com.pane.isShow=false;
	
	com.childList=[com.bg,com.dot,com.pane];	
	com.mans	 ={};		// Bộ sưu tập cờ tướng
	com.createMans(com.initMap)		// Tạo quân cờ
	com.bg.show();
	com.get("bnBox").style.display = "block";
	//play.init();
	com.get("billBn").addEventListener("click", function(e) {
		if (confirm("Bạn có kết thúc trò chơi và bắt đầu trò chơi?")){
			com.init();
			com.get("chessRight").style.display = "block";
			com.get("moveInfo").style.display = "none";
			bill.init();
		}
	})

	com.get("onePlay").addEventListener("click", function(e) {
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		com.get("moveInfo").style.display = "block";
		com.get("moveInfo").innerHTML="";
		play.depth = 1;
		play.init();
	})
	com.get("twoPlay").addEventListener("click", function(e) {
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		com.get("moveInfo").style.display = "block";
		com.get("moveInfo").innerHTML="";
		play.depth = 2;
		play.init();
	})
	com.get("tyroPlay").addEventListener("click", function(e) {
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		com.get("moveInfo").style.display = "block";
		com.get("moveInfo").innerHTML="";
		play.depth = 3;
		play.init();
	})
	com.get("superPlay").addEventListener("click", function(e) {
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		com.get("moveInfo").style.display = "block";
		com.get("moveInfo").innerHTML="";
		play.depth = 4;
		play.init();
	})
	com.get("masterPlay").addEventListener("click", function(e) {
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		com.get("moveInfo").style.display = "block";
		com.get("moveInfo").innerHTML="";
		play.depth = 5;
		play.init();
	})
	com.get("ultraPlay").addEventListener("click", function(e) {
		play.isPlay=true ;	
		com.get("chessRight").style.display = "none";
		com.get("moveInfo").style.display = "block";
		com.get("moveInfo").innerHTML="";
		play.depth = 6;
		play.init();
	})
	
	// com.getData("js/gambit.all.js",
	// 	function(data){
	// 	com.gambit=data.split(" ");
	// 	AI.historyBill = com.gambit;
	// })
	// com.getData("js/store.js",
	// 	function(data){
	// 	com.store=data.split(" ");
	// })
}


// Tải hình ảnh
com.loadImages = function(stype){
	
	
// vẽ bàn cờ
	com.bgImg = new Image();
	com.bgImg.src  = "img/"+stype+"/bg.png";
	
	//điểm
	com.dotImg = new Image();
	com.dotImg.src  = "img/"+stype+"/dot.png";
	
	//cờ tướng
	for (var i in com.args){
		com[i] = {};
		com[i].img = new Image();
		com[i].img.src = "img/"+stype+"/"+ com.args[i].img +".png";
	}
	
	// Khung cờ
	com.paneImg = new Image();
	com.paneImg.src  = "img/"+stype+"/r_box.png";
	
	document.getElementsByTagName("body")[0].style.background= "url(img/"+stype+"/bg.jpg)";
	
}


// Danh sách hiển thị
com.show = function (){
	com.ct.clearRect(0, 0, com.width, com.height);  
	for (var i=0; i<com.childList.length ; i++){
		com.childList[i].show();
	}
}


// Hiển thị khung hộp cờ di chuyển
com.showPane  = function (x,y,newX,newY){
	com.pane.isShow=true;
	com.pane.x= x ;
	com.pane.y= y ;
	com.pane.newX= newX ;
	com.pane.newY= newY ;
}


// Tạo các quân cờ bên trong bản đồ
com.createMans = function(map){
	for (var i=0; i<map.length; i++){
		for (var n=0; n<map[i].length; n++){
			var key = map[i][n];
			if (key){
				com.mans[key]=new com.class.Man(key);
				com.mans[key].x=n;
				com.mans[key].y=i;
				com.childList.push(com.mans[key])
			}
		}
	}
}


//debug alert
com.alert = function (obj,f,n){
	if (typeof obj !== "object") {
		try{console.log(obj)} catch (e){}
		//return alert(obj);
	}
	var arr = [];
	for (var i in obj) arr.push(i+" = "+obj[i]);
	try{console.log(arr.join(n||"\n"))} catch (e){}
	//return alert(arr.join(n||"\n\r"));
}


//com.alert tốc ký, xem xét tên biến z là ít được sử dụng nhất
var z = com.alert;


// Lấy khoảng cách từ phía bên trái của trang
com.getDomXY = function (dom){
	var left = dom.offsetLeft;
	var top = dom.offsetTop;
	var current = dom.offsetParent;
	while (current !== null){
		left += current.offsetLeft;
		top += current.offsetTop;
		current = current.offsetParent;
	}
	return {x:left,y:top};
}


// Nhận cookie
com.getCookie = function(name){
	if (document.cookie.length>0){
		start=document.cookie.indexOf(name + "=")
		if (start!=-1){ 
			start=start + name.length+1 
			end=document.cookie.indexOf(";",start)
		if (end==-1) end=document.cookie.length
			return unescape(document.cookie.substring(start,end))
		} 
	}
	return false;
}

// bản sao mảng hai chiều
com.arr2Clone = function (arr){
	var newArr=[];
	for (var i=0; i<arr.length ; i++){	
		newArr[i] = arr[i].slice();
	}
	return newArr;
}


// dữ liệu tải ajax
com.getData = function (url,fun){
	var XMLHttpRequestObject=false;
	if(window.XMLHttpRequest){
		XMLHttpRequestObject=new XMLHttpRequest();
	}else if(window.ActiveXObject){
	XMLHttpRequestObject=new ActiveXObject("Microsoft.XMLHTTP");
	}
	if(XMLHttpRequestObject){
		XMLHttpRequestObject.open("GET",url);
		XMLHttpRequestObject.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		XMLHttpRequestObject.onreadystatechange=function (){
			if(XMLHttpRequestObject.readyState==4 && XMLHttpRequestObject.status==200){
				fun (XMLHttpRequestObject.responseText)
				//return XMLHttpRequestObject.responseText;
			}
		}
	XMLHttpRequestObject.send(null);
	}
}


// Tạo tọa độ
com.createMove = function (map,x,y,newX,newY){
	var h="";
	var man = com.mans[map[y][x]];
	h+= man.text;
	map[newY][newX] = map[y][x];
	delete map[y][x];
	if (man.my===1){
		var mumTo=["一","二","三","四","五","六","七","八","九","十"];	
		newX=8-newX;
		h+= mumTo[8-x];
		if (newY > y) {
			h+= "退";
			if (man.pater == "m" || man.pater == "s" || man.pater == "x"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[newY - y -1];
			}
		}else if (newY < y) {
			h+= "进";
			if (man.pater == "m" || man.pater == "s" || man.pater == "x"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[y - newY -1];
			}
		}else {
			h+= "平";
			h+= mumTo[newX];
		}
	}else{
		var mumTo=["１","２","３","４","５","６","７","８","９","10"];
		h+= mumTo[x];
		if (newY > y) {
			h+= "进";
			if (man.pater == "M" || man.pater == "S" || man.pater == "X"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[newY - y-1];
			}
		}else if (newY < y) {
			h+= "退";
			if (man.pater == "M" || man.pater == "S" || man.pater == "X"){
				h+= mumTo[newX];
			}else {
				h+= mumTo[y - newY-1];
			}
		}else {
			h+= "平";
			h+= mumTo[newX];
		}
	}
	return h;
}

com.initMap = [
	['C0',    ,'X0','S0','J0','S1','X1',    ,'C1'],
	[    ,'P0',    ,    ,    ,    ,    ,'P1',    ],
	['M0',    ,'Z0','Z1','Z2','Z3','Z4',    ,'M1'],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	['m0',    ,'z0','z1','z2','z3','z4',    ,'m1'],
	[    ,'p0',    ,    ,    ,    ,    ,'p1',    ],
	['c0',    ,'x0','s0','j0','s1','x1',    ,'c1']
];



com.initMap1 = [
	[    ,    ,    ,, "J0"   ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,"c0",    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,	  ,    ,    ,    ],
	[    ,    ,    ,    ,"s0",    ,    ,"C0",    ],
	[    ,    ,    ,"s1",    ,"j0",    ,    ,    ]
];

com.initMap1 = [
	[    ,    ,    ,, "J0"   ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    , ,    ,    ,    ],
	[    ,    ,    ,    ,    ,"z0",    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    ,    ,    ,	  ,    ,    ,    ],
	[    ,    ,    ,    ,    ,    ,    ,    ,    ],
	[    ,    ,    , "j0"   ,,    ,    ,    ]
];

com.keys = {
	"c0":"c","c1":"c",
	"m0":"m","m1":"m",
	"x0":"x","x1":"x",
	"s0":"s","s1":"s",
	"j0":"j",
	"p0":"p","p1":"p",
	"z0":"z","z1":"z","z2":"z","z3":"z","z4":"z","z5":"z",
	
	"C0":"c","C1":"C",
	"M0":"M","M1":"M",
	"X0":"X","X1":"X",
	"S0":"S","S1":"S",
	"J0":"J",
	"P0":"P","P1":"P",
	"Z0":"Z","Z1":"Z","Z2":"Z","Z3":"Z","Z4":"Z","Z5":"Z",
}

// Cờ  có thể đi.
com.bylaw ={}

// xe
com.bylaw.c = function (x,y,map,my){
	var d=[];
	
	// trái tìm kiếm
	for (var i=x-1; i>= 0; i--){
		if (map[y][i]) {
			if (com.mans[map[y][i]].my!=my) d.push([i,y]);
			break
		}else{
			d.push([i,y])	
		}
	}
	
	// Tìm kiếm bên phải
	for (var i=x+1; i <= 8; i++){
		if (map[y][i]) {
			if (com.mans[map[y][i]].my!=my) d.push([i,y]);
			break
		}else{
			d.push([i,y])	
		}
	}
	// Tìm kiếm
	for (var i = y-1 ; i >= 0; i--){
		if (map[i][x]) {
			if (com.mans[map[i][x]].my!=my) d.push([x,i]);
			break
		}else{
			d.push([x,i])	
		}
	}
	
	// Tìm kiếm dưới
	for (var i = y+1 ; i<= 8; i++){
		if (map[i][x]) {
			if (com.mans[map[i][x]].my!=my) d.push([x,i]);
			break
		}else{
			d.push([x,i])	
		}
	}
	return d;
}

//Ngựa
com.bylaw.m = function (x,y,map,my){
	var d=[];
		//1Điểm
		if ( y-2>= 0 && x+1<= 8 && (!com.mans[map[y-1][x]] || !com.mans[map[y-1][x+1]]) && (!com.mans[map[y-2][x+1]] || com.mans[map[y-2][x+1]].my!=my)) d.push([x+1,y-2]);
		//2Điểm
		if ( y-1>= 0 && x+2<= 8 && (!com.mans[map[y][x+1]] || !com.mans[map[y-1][x+1]]) && (!com.mans[map[y-1][x+2]] || com.mans[map[y-1][x+2]].my!=my)) d.push([x+2,y-1]);
		//4Điểm
		if ( y+1<= 8 && x+2<= 8 && (!com.mans[map[y][x+1]] || !com.mans[map[y+1][x+1]]) && (!com.mans[map[y+1][x+2]] || com.mans[map[y+1][x+2]].my!=my)) d.push([x+2,y+1]);
		//5Điểm
		if ( y+2<= 8 && x+1<= 8 && (!com.mans[map[y+1][x]] || !com.mans[map[y+1][x+1]]) && (!com.mans[map[y+2][x+1]] || com.mans[map[y+2][x+1]].my!=my)) d.push([x+1,y+2]);
		//7Điểm
		if ( y+2<= 8 && x-1>= 0 && (!com.mans[map[y+1][x]] || !com.mans[map[y+1][x-1]]) && (!com.mans[map[y+2][x-1]] || com.mans[map[y+2][x-1]].my!=my)) d.push([x-1,y+2]);
		//8Điểm
		if ( y+1<= 8 && x-2>= 0 && (!com.mans[map[y][x-1]] || !com.mans[map[y+1][x-1]]) && (!com.mans[map[y+1][x-2]] || com.mans[map[y+1][x-2]].my!=my)) d.push([x-2,y+1]);
		//10Điểm
		if ( y-1>= 0 && x-2>= 0 && (!com.mans[map[y][x-1]] || !com.mans[map[y-1][x-1]]) && (!com.mans[map[y-1][x-2]] || com.mans[map[y-1][x-2]].my!=my)) d.push([x-2,y-1]);
		//11Điểm
		if ( y-2>= 0 && x-1>= 0 && (!com.mans[map[y-1][x]] || !com.mans[map[y-1][x-1]]) && (!com.mans[map[y-2][x-1]] || com.mans[map[y-2][x-1]].my!=my)) d.push([x-1,y-2]);
	return d;
}

//Tượng
com.bylaw.x = function (x,y,map,my){
	var d=[];
	//4Nửa điểm
	if ( y+2<= 8 && x+2<= 8 && !com.mans[map[y+1][x+1]] && (!com.mans[map[y+2][x+2]] || com.mans[map[y+2][x+2]].my!=my)) d.push([x+2,y+2]);
	//7Nửa điểm
	if ( y+2<= 8 && x-2>= 0 && !com.mans[map[y+1][x-1]] && (!com.mans[map[y+2][x-2]] || com.mans[map[y+2][x-2]].my!=my)) d.push([x-2,y+2]);
	//1Nửa điểm
	if ( y-2>= 0 && x+2<= 8 && !com.mans[map[y-1][x+1]] && (!com.mans[map[y-2][x+2]] || com.mans[map[y-2][x+2]].my!=my)) d.push([x+2,y-2]);
	//10Nửa điểm
	if ( y-2>= 0 && x-2>= 0 && !com.mans[map[y-1][x-1]] && (!com.mans[map[y-2][x-2]] || com.mans[map[y-2][x-2]].my!=my)) d.push([x-2,y-2]);

	if ( x-2>= 0 && !com.mans[map[y][x-1]] && (!com.mans[map[y][x-2]] || com.mans[map[y][x-2]].my!=my)) d.push([x-2,y]);
	if ( x+2<= 8 && !com.mans[map[y][x+1]] && (!com.mans[map[y][x+2]] || com.mans[map[y][x+2]].my!=my)) d.push([x+2,y]);
	if ( y-2>= 0 && !com.mans[map[y-1][x]] && (!com.mans[map[y-2][x]] || com.mans[map[y-2][x]].my!=my)) d.push([x,y-2]);
	if ( y+2<= 8 && !com.mans[map[y+1][x]] && (!com.mans[map[y+2][x]] || com.mans[map[y+2][x]].my!=my)) d.push([x,y+2]);
	return d;
}

//sỹ
com.bylaw.s = function (x,y,map,my){
	var d=[];

	for (var i=1; i<= 2; i++){
		if (y+i>8 || x+i>8) {
			break;
		}
		if (!map[y+i][x+i]) {
			d.push([x+i,y+i])
			continue;
		}
		if (com.mans[map[y+i][x+i]].my!=my) {
			d.push([x+i,y+i])
		}
		break;
	}
	for (var i=1; i<= 2; i++){
		if (y+i>8 || x-i<0) {
			break;
		}
		if (!map[y+i][x-i]) {
			d.push([x-i,y+i])
			continue;
		}
		if (com.mans[map[y+i][x-i]].my!=my) {
			d.push([x-i,y+i])
		}
		break;
	}
	for (var i=1; i<= 2; i++){
		if (y-i<0 || x+i>8) {
			break;
		}
		if (!map[y-i][x+i]) {
			d.push([x+i,y-i])
			continue;
		}
		if (com.mans[map[y-i][x+i]].my!=my) {
			d.push([x+i,y-i])
		}
		break;
	}
	for (var i=1; i<= 2; i++){
		if (y-i<0 || x-i<0) {
			break;
		}
		if (!map[y-i][x-i]) {
			d.push([x-i,y-i])
			continue;
		}
		if (com.mans[map[y-i][x-i]].my!=my) {
			d.push([x-i,y-i])
		}
		break;
	}

	/* In palace */
	const palaceX = [3,4,5]
	const palaceY = [0,1,7,8]
	// Right
	if ([3,4].includes(x) && palaceY.includes(y)) {
		if (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my) d.push([x+1,y])
	}
	// Left
	if ([4,5].includes(x) && palaceY.includes(y)) {
		if (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my) d.push([x-1,y])
	}
	// Down
	if (palaceX.includes(x) && [0,7].includes(y)) {
		if (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my) d.push([x,y+1])
	}
	// Up
	if (palaceX.includes(x) && [1,8].includes(y)) {
		if (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my) d.push([x,y-1])
	}
	
	return d;
}

//Tướng
com.bylaw.j = function (x,y,map,my){
	var d=[];
	
	//dưới
	if ( y+1<= 8  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
	//trên
	if ( y-1>= 0 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
	//phai
	if ( x+1<= 8  && (!com.mans[map[y][x+1]] || com.mans[map[y][x+1]].my!=my)) d.push([x+1,y]);
	// trai
	if ( x-1>= 0 && (!com.mans[map[y][x-1]] || com.mans[map[y][x-1]].my!=my))d.push([x-1,y]);

	// In palace
	if (x==3) {
		if (y==0 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
		if (y==1 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
		if (y==7 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
		if (y==8 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
	}
	if (x==5) {
		if (y==0 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
		if (y==1 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
		if (y==7 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
		if (y==8 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
	}
	if (x==4) {
		if (y==0 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
		if (y==0 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
		if (y==1 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
		if (y==1 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
		if (y==7 && (!com.mans[map[y+1][x+1]] || com.mans[map[y+1][x+1]].my!=my)) d.push([x+1,y+1]);
		if (y==7 && (!com.mans[map[y+1][x-1]] || com.mans[map[y+1][x-1]].my!=my)) d.push([x-1,y+1]);
		if (y==8 && (!com.mans[map[y-1][x+1]] || com.mans[map[y-1][x+1]].my!=my)) d.push([x+1,y-1]);
		if (y==8 && (!com.mans[map[y-1][x-1]] || com.mans[map[y-1][x-1]].my!=my)) d.push([x-1,y-1]);
	}

	return d;
}


// pháo
com.bylaw.p = function (x,y,map,my){
	var d=[];
	
	// trái tìm kiếm
	var n=0;
	for (var i=x-1; i>= 0; i--){
		if (map[y][i]) {
			n++;
		} else {
			d.push([i,y]);
		}
		if (n==2) {
			if (com.mans[map[y][i]].my!=my) {
				d.push([i,y]);
			}
			break;
		}
	}
	// Tìm kiếm bên phải
	var n=0;
	for (var i=x+1; i <= 8; i++){
		if (map[y][i]) {
			n++;
		} else {
			d.push([i,y]);
		}
		if (n==2) {
			if (com.mans[map[y][i]].my!=my) {
				d.push([i,y]);
			}
			break;
		}
	}
	
	// Tìm kiếm
	var n=0;
	for (var i = y-1 ; i >= 0; i--){
		if (map[i][x]) {
			n++;
		} else {
			d.push([x,i]);
		}
		if (n==2) {
			if (com.mans[map[i][x]].my!=my) {
				d.push([x,i]);
			}
			break;
		}
	}
	// Tìm kiếm dưới
	var n=0;
	for (var i = y+1 ; i<= 8; i++){
		if (map[i][x]) {
			n++;
		} else {
			d.push([x,i]);
		}
		if (n==2) {
			if (com.mans[map[i][x]].my!=my) {
				d.push([x,i]);
			}
			break;
		}
	}
	return d;
}

//Tốt
com.bylaw.z = function (x,y,map,my){
	var d=[];
	if (my===1){ //quân đỏ
		//trên
		if ( y-1>= 0 && (!com.mans[map[y-1][x]] || com.mans[map[y-1][x]].my!=my)) d.push([x,y-1]);
		//phải
		if ( x+1<= 8  && !com.mans[map[y][x+1]]) d.push([x+1,y]);
		//còn lại
		if ( x-1>= 0 && !com.mans[map[y][x-1]]) d.push([x-1,y]);
	}else{
		//dưới
		if ( y+1<= 8  && (!com.mans[map[y+1][x]] || com.mans[map[y+1][x]].my!=my)) d.push([x,y+1]);
		//phải
		if ( x+1<= 8 && !com.mans[map[y][x+1]]) d.push([x+1,y]);
		// Còn lại
		if ( x-1>= 0 && !com.mans[map[y][x-1]]) d.push([x-1,y]);
	}
	
	return d;
}

com.value = {
	
	
	// giá trị xe
	c:[
		[206, 208, 207, 213, 214, 213, 207, 208, 206],
		[206, 212, 209, 216, 216, 216, 209, 212, 206],
		[206, 208, 207, 214, 216, 214, 207, 208, 206],
		[206, 213, 213, 216, 216, 216, 213, 213, 206],
		[208, 211, 211, 214, 215, 214, 211, 211, 208],
		[204, 209, 204, 212, 214, 212, 204, 209, 204],
		[198, 208, 204, 212, 212, 212, 204, 208, 198],
		[200, 208, 206, 212, 200, 212, 206, 208, 200],
		[199, 206, 204, 212, 200, 212, 204, 206, 199]
	],
	
	
	// giá trị ngựa
	m:[
		[100, 100, 100, 106, 100, 106, 100, 100, 100],
		[100, 106, 113, 107, 104, 107, 113, 106, 100],
		[102, 108, 109, 113, 109, 113, 109, 108, 102],
		[103, 118, 110, 117, 110, 117, 110, 118, 103],
		[100, 100, 109, 113, 114, 113, 109, 110, 100],
		[102, 104, 108, 105, 108, 105, 108, 104, 102],
		[103, 102, 104, 105, 102, 105, 104, 102, 103],
		[ 95, 100, 102, 103,  94, 103, 102, 100,  95],
		[ 98,  95, 100,  98, 100,  98, 100,  95,  98]
	],
	
	//giá trị tượng
	x:[
		[55, 0, 56, 0, 57, 0, 56, 0, 55],
		[ 0, 0,  0, 0,  0, 0,  0, 0,  0],
		[56, 0, 57, 0, 58, 0, 57, 0, 56],
		[ 0, 0,  0, 0,  0, 0,  0, 0,  0],
		[55, 0, 56, 0, 57, 0, 56, 0, 55],
		[ 0, 0,  0, 0,  0, 0,  0, 0,  0],
		[56, 0, 57, 0, 58, 0, 57, 0, 56],
		[ 0, 0,  0, 0,  0, 0,  0, 0,  0],
		[55, 0, 59, 0, 56, 0, 59, 0, 55],
	],
	
	//giá trị sỹ
	s:[
		[61,62,63,69,67,69,63,62,61],
		[63,62,61,66,68,66,61,62,63],
		[62,61,63,62,61,62,63,61,62],
		[61,63,62,61,60,61,62,63,61],
		[62,61,63,62,61,62,63,61,62],
		[61,63,62,61,60,61,62,63,61],
		[61,63,62,61,60,61,62,63,61],
		[63,62,61,66,68,66,61,62,63],
		[61,62,63,69,67,69,63,62,61],
	],
	
	//giá trị tướng
	j:[
		[8881, 8882, 8883, 8888, 8889, 8888, 8883, 8882, 8881],
		[8882, 8883, 8884, 8886, 8887, 8886, 8884, 8883, 8882],
		[8883, 8884, 8885, 8886, 8886, 8885, 8884, 8883, 8881],
		[8884, 8885, 8886, 8887, 8888, 8887, 8886, 8885, 8884],
		[8885, 8886, 8887, 8888, 8889, 8888, 8887, 8886, 8885],
		[8886, 8887, 8888, 8889, 8880, 8889, 8888, 8887, 8886],
		[8887, 8888, 8889, 8888, 8887, 8888, 8889, 8888, 8887],
		[8886, 8887, 8888, 8896, 8897, 8896, 8888, 8887, 8886],
		[8887, 8888, 8889, 8898, 8899, 8898, 8889, 8888, 8887],
	],
	
	
	// Giá trị pháo
	p:[
		
		[ 131, 130, 126, 121, 120, 121, 126, 130, 131],
		[ 128, 128, 126, 122, 119, 122, 126, 128, 128],
		[ 127, 127, 126, 121, 122, 121, 126, 127, 127],
		[ 126, 129, 129, 128, 130, 128, 129, 129, 126],
		[ 126, 126, 126, 126, 130, 126, 126, 126, 126], 
		[ 126, 126, 126, 126, 126, 126, 126, 126, 126],
		[ 127, 126, 130, 129, 131, 129, 130, 126, 127],
		[ 126, 127, 128, 128, 128, 128, 128, 127, 126],
		[ 126, 126, 127, 129, 129, 129, 127, 126, 126]
	],
	
	//giá trị tốt
	z:[
		[96, 98, 97, 98, 99, 98, 97, 98, 96],
		[17, 17, 18, 18, 19, 18, 18, 17, 17],
		[16, 16, 17, 17, 18, 17, 17, 16, 16],
		[15, 15, 16, 16, 17, 16, 16, 15, 15],
		[14, 14, 15, 15, 16, 15, 15, 14, 14],
		[13, 13, 14, 14, 15, 14, 14, 13, 13],
		[15, 15, 16, 16, 17, 16, 16, 15, 15],
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0],
		[ 0,  0,  0,  0,  0,  0,  0,  0,  0]
	]
}


// vết quân đen giá trị cho các vị trí đảo ngược quân màu đỏ
com.value.C = com.arr2Clone(com.value.c).reverse();
com.value.M = com.arr2Clone(com.value.m).reverse();
com.value.X = com.arr2Clone(com.value.x).reverse();
com.value.S = com.arr2Clone(com.value.s).reverse();
com.value.J = com.arr2Clone(com.value.j).reverse();
com.value.P = com.arr2Clone(com.value.p).reverse();
com.value.Z = com.arr2Clone(com.value.z).reverse();

//tướng
com.args={
	// 红 Trung Quốc / địa chỉ hình ảnh / phe / trọng lượng
	'c':{text:"车", img:'r_c', my:1 ,bl:"c", value:com.value.c},
	'm':{text:"马", img:'r_m', my:1 ,bl:"m", value:com.value.m},
	'x':{text:"相", img:'r_x', my:1 ,bl:"x", value:com.value.x},
	's':{text:"仕", img:'r_s', my:1 ,bl:"s", value:com.value.s},
	'j':{text:"将", img:'r_j', my:1 ,bl:"j", value:com.value.j},
	'p':{text:"炮", img:'r_p', my:1 ,bl:"p", value:com.value.p},
	'z':{text:"兵", img:'r_z', my:1 ,bl:"z", value:com.value.z},
	
	//quân xanh
	'C':{text:"車", img:'b_c', my:-1 ,bl:"c", value:com.value.C},
	'M':{text:"馬", img:'b_m', my:-1 ,bl:"m", value:com.value.M},
	'X':{text:"象", img:'b_x', my:-1 ,bl:"x", value:com.value.X},
	'S':{text:"士", img:'b_s', my:-1 ,bl:"s", value:com.value.S},
	'J':{text:"帅", img:'b_j', my:-1 ,bl:"j", value:com.value.J},
	'P':{text:"炮", img:'b_p', my:-1 ,bl:"p", value:com.value.P},
	'Z':{text:"卒", img:'b_z', my:-1 ,bl:"z", value:com.value.Z}
};

com.class = com.class || {} //lớp
com.class.Man = function (key, x, y){
	this.pater = key.slice(0,1);
	var o=com.args[this.pater]
	this.x = x||0;   
    this.y = y||0;
	this.key = key ;
	this.my = o.my;
	this.text = o.text;
	this.value = o.value;
	this.isShow = true;
	this.alpha = 1;
	this.ps = []; // Điểm
	
	this.show = function (){
		if (this.isShow) {
			com.ct.save();
			com.ct.globalAlpha = this.alpha;
			com.ct.drawImage(com[this.pater].img,com.spaceX * this.x + com.pointStartX , com.spaceY *  this.y +com.pointStartY);
			com.ct.restore(); 
		}
	}
	
	this.bl = function (map){
		var map = map || play.map
		return com.bylaw[o.bl](this.x,this.y,map,this.my)
	}
}

com.class.Bg = function (img, x, y){
	this.x = x||0; 
    this.y = y||0;
	this.isShow = true;
	
	this.show = function (){
		if (this.isShow) com.ct.drawImage(com.bgImg, com.spaceX * this.x,com.spaceY *  this.y);
	}
}
com.class.Pane = function (img, x, y){
	this.x = x||0; 
    this.y = y||0;
	this.newX = x||0; 
    this.newY = y||0;
	this.isShow = true;
	
	this.show = function (){
		if (this.isShow) {
			com.ct.drawImage(com.paneImg, com.spaceX * this.x + com.pointStartX , com.spaceY *  this.y + com.pointStartY)
			com.ct.drawImage(com.paneImg, com.spaceX * this.newX + com.pointStartX  , com.spaceY *  this.newY + com.pointStartY)
		}
	}
}

com.class.Dot = function (img, x, y){
	this.x = x||0; 
    this.y = y||0;
	this.isShow = true;
	this.dots=[]
	
	this.show = function (){
		for (var i=0; i<this.dots.length;i++){
			if (this.isShow) com.ct.drawImage(com.dotImg, com.spaceX * this.dots[i][0]+10  + com.pointStartX ,com.spaceY *  this.dots[i][1]+10 + com.pointStartY)
		}
	}
}

com.init();

