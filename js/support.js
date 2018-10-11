// 移动端尺寸
// var documentWidth=window.screen.availWidth;  //屏幕宽度
var documentWidth=document.documentElement.clientWidth;  //页面宽度
var containerWidth=documentWidth*0.92; // 网格容器宽度
var cellWidth=documentWidth*0.18; //单元格宽度
var cellSpace=documentWidth*0.04; //单元格间隔宽度
console.log(documentWidth,containerWidth,cellWidth,cellSpace);


//获取距离上边的位置
function getPosTop( i , j ){
    return cellSpace+(cellWidth+cellSpace)*i;
}
//获取距离左边的位置
function getPosLeft( i , j ){
      return cellSpace+(cellWidth+cellSpace)*j;
}
//获取数字背景颜色
function getNumberBackgroundColor( num ){
    switch( num ){
        case 2:return "#eee4da";break;
        case 4:return "#ede0c8";break;
        case 8:return "#f2b179";break;
        case 16:return "#f59563";break;
        case 32:return "#f67c5f";break;
        case 64:return "#f65e3b";break;
        case 128:return "#edcf72";break;
        case 256:return "#edcc61";break;
        case 512:return "#9c0";break;
        case 1024:return "#33b5e5";break;
        case 2048:return "#09c";break;
        case 4096:return "#a6c";break;
        case 8192:return "#93c";break;
    }
    return "#000";
}
//获取数字颜色
function getNumberColor( num ){
    if( num <= 4 ){
        return "#776e65";
    }    
    return "#FFF";
}

// 判断是否没有空间
function noSpace( nums ){
    for( var i = 0 ; i < 4 ; i ++ ){
        for( var j = 0 ; j < 4 ; j ++ ){
            if( nums[i][j] == 0 ){
                return false;
            }    
        }    
    }
    return true; //没有空间
}

// 判断是否可以向左移动，条件：1.左边没有数字 2.左边数字和自己相等
function canMoveLeft(nums){
	for(var i=0;i<4;i++){
	 for(var j=1;j<4;j++){ //由于最左边的位置无需判断，所以j从1开始 
		 if(nums[i][j]!=0){
			 if(nums[i][j-1]==0||nums[i][j-1]==nums[i][j]){ // 左边数字为0或与自己相等都可以向左移动
				 return true;
			 }		 
		 }
	 }
	} 
	return false; 
}
function canMoveRight(nums){
	for(var i=0;i<4;i++){
	 for(var j=0;j<3;j++){
		 if(nums[i][j]!=0){
			 if(nums[i][j+1]==0||nums[i][j+1]==nums[i][j]){
				 return true;
			 }
		 }
	 }
	} 
	return false; 
}
function canMoveUp(nums){
	for(var i=1;i<4;i++){
	 for(var j=0;j<4;j++){
		 if(nums[i][j]!=0){
			 if(nums[i-1][j]==0||nums[i-1][j]==nums[i][j]){
				 return true;
			 }	 
		 }
	 }
	}
	return false; 
}
function canMoveDown(nums){
	for(var i=0;i<3;i++){
	 for(var j=0;j<4;j++){
		 if(nums[i][j]!=0){
			 if(nums[i+1][j]==0||nums[i+1][j]==nums[i][j]){
				 return true;
			 }
		 }
	 }
	}
	return false; 
}
// 判断水平方向上是否无障碍物
function noBlockHorizontal(row,col1,col2,nums){
	for(var i=col1+1;i<col2;i++){ // 循环遍历判断两者之间是否有障碍物
		if(nums[row][i]!=0)
			return false;
	}
	return true;
}
// 判断垂直方向上是否无障碍物
function noBlockVertical(col,row1,row2,nums){
	for(var i=row1+1;i<row2;i++){
		if(nums[i][col]!=0)
			return false;
	}
	return true;
}

// 判断是否不可移动
function noMove(nums){
	if(canMoveLeft(nums)||canMoveRight(nums)||canMoveUp(nums)||canMoveDown(nums)){
		return false;
	}
	return true;
}

// 判断游戏是否结束，条件：1.没有空格 2.无法移动
function isGameOver() {
	if (noSpace(nums) && noMove(nums)) {
		alert('Game Over!');
	}
}


// 更新分数
function updateScore(score) {
	$('#score').text(score+'');
}