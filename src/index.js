module.exports = function solveSudoku(matrix) {
    var res=[];
var tmp=[1,2,3,4,5,6,7,8,9];
/*
	var matrix = [
    [5, 3, 4, 6, 7, 8, 9, 0, 0],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ];*/
res=matrix.concat();
for (var i=0;i<9;i++){
	for (var j=0;j<9;j++){
		if (matrix[i][j]==0)
			{
				res[i][j]=tmp.concat();
			}

	}
}/*
alert(res[0][0]);*//*
res[0][0].splice(0,1);
alert(res[0][0]);*/
 for (var i=0;i<9;i++){
	for (var j=0;j<9;j++)
	{
		if (res[i][j].length==1){continue;}
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
	for (var j=0;j<9;j++)
	{	
		if (res[i][j].length==1){continue;}
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
	for (var j=0;j<3;j++)
	{	
		if (res[i][j].length==0){continue;}
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
