document.write("<script language='javascript' src='js/Init.js'></script>");
document.write("<script language='javascript' src='js/Check.js'></script>");

function Ans () {
	var n=1000;
	while(n){
		alert("別傻了!靠自己吧!");
		n--;
	}
	for(var i=0; i<3; i++) {
		for(var j=0; j<3; j++){
			data[i][j] = i*3+j+1;
		}
	}
	data[2][2] = null;
	clear();
	show();
	check();
}