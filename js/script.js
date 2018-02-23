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
		arrayO: []
	}
}

init();

var a = $('td').on('click', function(event){
	$(this).data('num');
});

$('td').on('click', function(event){
	console.log($(this).data('num'))
	if ($(this).html()){
		$('.gameMessage').html('You can\'t do that')
	} else {
		switch(gameData.player){
			case 'X':
				gameData.player = 'O';
				$(this).addClass('X');
				$(this).html('X');
				$('.gameMessage').html('Welcome to Sparta TicTacToe!');
				gameData.arrayX.push($(this).data('num'));
				if (/[012]{3}/.test(gameData.arrayX.join('')) || /[345]{3}/.test(gameData.arrayX.join('')) ||/[678]{3}/.test(gameData.arrayX.join('')) ||/[036]{3}/.test(gameData.arrayX.join('')) ||/[147]{3}/.test(gameData.arrayX.join('')) ||/[258]{3}/.test(gameData.arrayX.join('')) ||/[145]{3}/.test(gameData.arrayX.join('')) ||/[245]{3}/.test(gameData.arrayX.join(''))){
					$('.gameMessage').html('X WINS')
				}
			//xPlay();
			break;
			case 'O':
				gameData.player = 'X';
				$(this).addClass('O');
				$(this).html('O');
				$('.gameMessage').html('Welcome to Sparta TicTacToe!');
				gameData.arrayO.push($(this).data('num'));
				if (/[012]{3}/.test(gameData.arrayO.join('')) || /[345]{3}/.test(gameData.arrayX.join('')) ||/[678]{3}/.test(gameData.arrayX.join('')) ||/[036]{3}/.test(gameData.arrayX.join('')) ||/[147]{3}/.test(gameData.arrayX.join('')) ||/[258]{3}/.test(gameData.arrayX.join('')) ||/[145]{3}/.test(gameData.arrayX.join('')) ||/[245]{3}/.test(gameData.arrayX.join(''))){
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
// [145]
// [245]


$('#reset').on('click', function(event){
	init();
	$('td').removeClass('X');
	$('td').removeClass('O');
	$('td').html('');
})
