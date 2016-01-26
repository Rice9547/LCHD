function check () {
	for(var i=0; i<3; i++){
		for(var j=0; j<3; j++){
			if(i+j == 4) continue;
			if(data[i][j] != i*3+j+1){
				//return false;
				return;
			}
		}
	}
	//return true;
	alert("You Win!");
	state = 0;
}