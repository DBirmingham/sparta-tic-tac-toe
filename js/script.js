//welcome players y
//Start turn 1 y
//React to click prompts y
//Check if the same space is being clicked y
//Check if the game has been won y
//Stop inputs after win n
//reset board y

function init(){
	$('.gameMessage').html('Welcome to Sparta TicTacToe!')
	gameData = {
		player: 'X',
		arrayX: [],
		arrayO: [],
		TicTacToe: false
	}
}

init();

$('td').on('click', function(event){
	if ($(this).html()){
		$('.gameMessage').html('You can\'t do that')
	} else {
		switch(gameData.player){
			case 'X':
				gameData.player = 'O';
				$(this).addClass('X');
				$(this).html('X');
				$('.gameMessage').html('Welcome to Sparta TicTacToe!');
				$('.playerTurn').html('It is X\'s turn')
				gameData.arrayX.push($(this).data('num'));
				if (/[012]{3}/.test(gameData.arrayX.join('')) || /[345]{3}/.test(gameData.arrayX.join('')) ||/[678]{3}/.test(gameData.arrayX.join('')) ||/[036]{3}/.test(gameData.arrayX.join('')) ||/[147]{3}/.test(gameData.arrayX.join('')) ||/[258]{3}/.test(gameData.arrayX.join('')) ||/[048]{3}/.test(gameData.arrayX.join('')) ||/[246]{3}/.test(gameData.arrayX.join(''))){
					$('.gameMessage').html('X WINS')
				}
			break;
			case 'O':
				gameData.player = 'X';
				$(this).addClass('O');
				$(this).html('O');
				$('.gameMessage').html('Welcome to Sparta TicTacToe!');
				$('.playerTurn').html('It is O\'s turn')
				gameData.arrayO.push($(this).data('num'));
				if (/[012]{3}/.test(gameData.arrayO.join('')) || /[345]{3}/.test(gameData.arrayO.join('')) ||/[678]{3}/.test(gameData.arrayO.join('')) ||/[036]{3}/.test(gameData.arrayO.join('')) ||/[147]{3}/.test(gameData.arrayO.join('')) ||/[258]{3}/.test(gameData.arrayO.join('')) ||/[048]{3}/.test(gameData.arrayO.join('')) ||/[246]{3}/.test(gameData.arrayO.join(''))){
					$('.gameMessage').html('O WINS')
				}
			break;
		}
	}
})

//win condition
// [012]
// [345]
// [678]
// [036]
// [147]
// [258]
// [048]
// [246]

//On win reset construct
function reset (){
	init();
	$('td').removeClass('X');
	$('td').removeClass('O');
	$('td').html('');
}

// gameData.TicTacToe = true
// 	if (gameData.TicTacToe) {
// 		reset();
// 	}

$('#reset').on('click', reset)
