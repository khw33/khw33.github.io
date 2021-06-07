var tetris = document.querySelector('#tetris');
var tetrisData = [];

function 칸만들기(){
	var fragment = document.createDocumentFragment();
	for(var i = 0; i <20; i++){
		var tr = document.createElement('tr');
		var att = [];
		fragment.appendChild(tr);
		tetrisData.push(att);
		for(var j = 0; j <10 ;j++){
			var td = document.createElement('td');
			tr.appendChild(td);
			att.push(0);
		}
	}
	console.log(tetrisData);
	tetris.appendChild(fragment);
}

window.addEventListener('keydown',function(e){ 
	console.log(e);
	switch(e.code){ 
		case 'ArrowLeft' :
			console.log("왼쪽");
			break;
		case 'ArrowRight' :
			console.log("오른쪽");
			break;
		case 'ArrowDown' :
			break;	
		default : 
			break;
	}
});
window.addEventListener('keyUp',function(e){
	switch(e.code){
		case 'Space' :
			break;
		case 'ArrowUp' :
			break;	
	}
})

칸만들기();