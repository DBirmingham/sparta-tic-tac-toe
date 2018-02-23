//welcome players
//Start turn 1
//React to click prompts 
//Check if the same space is being clicked
//Check if the game has been won
//reset board
var gameData = {
		player: '',
		testTurn: '',
		tictactoe: false
	}
function init(){
	$('.gameMessage').html('Welcome to Sparta TicTacToe!')
	var gameData = {
		player: '',
		tictactoe: false
	}
}

// function xPlay(){
// 	gameData.player = 'X';
// 	$('td').addClass('X');
// 	$('td').html('X');
// }

// function oPlay(){
// 	gameData.player = 'O';
// 	$('td').addClass('O');
// 	$('td').html('O');
// }

init();

var a = $('td').on('click', function(event){
	$(this).data('num');
});

$('td').on('click', function(event){
	console.log($(this))
	if (gameData.player == '') {
		gameData.player = 'X';
		$(this).addClass('X');
		$(this).html('X');
		//xPlay();
	}
	switch(gameData.player){
		case 'X':
		gameData.player = 'O';
		$(this).addClass('X');
		$(this).html('X');
		//xPlay();
		break;
		case 'O':
		gameData.player = 'X';
		$(this).addClass('O');
		$(this).html('O');
		//oPlay();
		break;
	}
	//$(this).data('num');
})

$('#reset').on('click', function(event){
	init()
	$('td').removeClass('X')
	$('td').removeClass('O')
	$('td').html('')
})
