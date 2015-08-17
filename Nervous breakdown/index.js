window.onload=function(){
	var gameImg = document.getElementsByClassName('gameImg');
	var picB = document.getElementsByClassName('picB');
	var gamesco = document.getElementById('scoP');
	var arrImg = ["gameimg/01.jpg","gameimg/02.jpg","gameimg/03.jpg","gameimg/04.jpg","gameimg/01.jpg","gameimg/02.jpg",
		"gameimg/03.jpg","gameimg/04.jpg"];
	var arrThis=[];
	var score = 0;
	var clickNum = 0;
	//Reversal
	function rev(elem){
		var cla = elem.className;
		// 如果字符串中含有与Reg匹配的文本，
		// 就返回 true，否则返回 false。
		// if (/imgB/.test(cla) ){
		// 	//replace方法 替换字符串
		// 	cla = cla.replace(/imgB/,'imgF');
		// }else{
		// 	cla = cla.replace(/imgF/,'imgB');
		// }
		//简写如下
		(/imgB/.test(cla))?cla = cla.replace(/imgB/,'imgF'):cla = cla.replace(/imgF/,'imgB');
		return elem.className=cla;
	}
	//随机分配数组顺序
	arrImg.sort(function(){
		return Math.random()-0.5;
	})

	//点击函数与布局
	for(var i=0;i<gameImg.length;i++){
		picB[i].src=arrImg[i];
		gameImg[i].index=arrImg[i].charAt(9);
		//gameImg[i].className+=" "+arrImg[i].charAt(9);
		gameImg[i].onOff=true;	
		gameImg[i].style.left=i%4*230+'px'
		gameImg[i].style.top=Math.floor(i/4)*340+'px';
		gameImg[i].onclick=function(){
	 		//alert(imgF.length)
	 		if (clickNum<2&&this.onOff){
	 			clickNum++;
	 			arrThis.push(this);
	 			// alert(this.onOff)
	 			this.onOff=false;
	 			rev(this);
	 			//alert(arrThis[0].children[0].children[1].src)	
	 		}
	 		if(clickNum==2){
	 		setTimeout(game,1000);
	 		}
	 	}	
	}
	function game(){
		for(var i=0;i<arrThis.length;i++){
			if (arrThis[0].index==arrThis[1].index){
				arrThis[i].style.display='none';
				score++;
				gamesco.innerHTML='分数：'+score;
			}else{
				arrThis[i].onOff=true;
				rev(arrThis[i]);
			}				
		}
			arrThis=[];
			clickNum=0; 
		if (score==gameImg.length){
			alert("你真棒！");
		}
	}
}