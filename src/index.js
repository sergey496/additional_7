module.exports = function solveSudoku(matrix) {
	var res=[];
	var tmp=[1,2,3,4,5,6,7,8,9];
	res=matrix.concat();
	for (var i=0;i<9;i++){
		for (var j=0;j<9;j++){
			if (matrix[i][j]==0){
				res[i][j]=tmp.concat();
			}
		}
	}
	for (var i=0;i<9;i++){
		for (var j=0;j<9;j++){
			if (res[i][j].length==1){
				continue;
			}
			for (var z=0;z<res[i][j].length;z++){
				for (var n=0;n<9;n++){
					if (res[i][n]==res[i][j][z]){
						res[i][j].splice(z,1);
						n--;
						continue;
					}			
				}
			}
		}
	} 
	for (var i=0;i<9;i++){
		for (var j=0;j<9;j++){	
			if (res[i][j].length==1){
				continue;
			}
			for (var z=0;z<res[i][j].length;z++){
				for (var n=0;n<9;n++){
					if (res[n][j]==res[i][j][z]){
						res[i][j].splice(z,1);
						n--;
						continue;
					}					
				}
			}
		}
	}
	for (var i=0;i<3;i++){
		for (var j=0;j<3;j++){	
			if (res[i][j].length==0){
				continue;
			}
			for (var z=0;z<res[i][j].length;z++){
				for (var n=0;n<9;n++){
					if (res[n][j]==res[i][j][z]){
						res[i][j].splice(z,1);
						z--;
					}
				}
			}
		}
	}
	return res;
}
