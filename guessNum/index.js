window.onload=function(){
	var luckNum =[];
	var keyNum = [];
	var keyBut = document.getElementsByClassName("keyBut");
	var numP = document.getElementById("numP");
	inti();
	guessNum();
	function inti(){
		for(var i=1;i<4;i++){
		luckNum[0]=Math.round(Math.random()*8+1)
		luckNum[i]=Math.round(Math.random()*9)
	}
		for(var i=0;i<keyBut.length;i++){
			keyBut[i].index=i;
			keyBut[i].onclick=function(){
			if(keyNum.length==4){
					return;
				}; 
				keyNum.push(this.index)
				numP.innerHTML=keyNum.join("");
			}
		}
	}
	function guessNum(){
		var getNum = document.getElementById("but1");
		getNum.onclick=function(){
			var numA =0;
			var numB =0;
			if(keyNum.length==4){
				var lastNum = document.createElement("li");
				var listNum = document.getElementById("listNum")
				for(var i=0;i<keyNum.length;i++){
					if(keyNum[i]==luckNum[i]){
						numA++;
					}
					else if(!(keyNum.indexOf(luckNum[i])==-1)){
						numB++;
					};
				}
				var text =document.createTextNode(numA+"A"+numB+"B"+":"+keyNum.join(""));
				lastNum.appendChild(text);
				listNum.appendChild(lastNum);
				if(numA==4)alert("恭喜您猜对了");
				if(numA==3&&numB==1)alert(luckNum);
				keyNum = [];
				numP.innerHTML="";	
			}else{
				alert("请输入4位数字")
			}			   
		}
	}
}