window.onload=function(){
	var demoWall = document.getElementById("demoWall");
	var opBut = demoWall.getElementsByTagName("button");
	var demoDiv = document.getElementsByClassName("demoText");


	for(var i=0;i<opBut.length;i++){
		opBut[i].idnex=i;
		opBut[i].onclick=function(){
			rev(demoDiv[this.idnex])
		}
	}	
	function rev(elem){
		var cla = elem.className;
		if (/closeDiv/.test(cla) ){
			cla = cla.replace(/closeDiv/,'openDiv');
		}else{
			cla = cla.replace(/openDiv/,'closeDiv');
		}
		return elem.className=cla;
	}
}