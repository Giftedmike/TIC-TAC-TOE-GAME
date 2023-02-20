var player = 1;
var col1; 
var col2; 
var col3; 
var col4; 
var col5; 
var col6; 
var col7; 
var col8; 
var col9;


function playerAct(elem, row, col){
    if(elem.innerHTML != "") return;

        
    if(player == 1){
        elem.innerHTML = 'p1'
        document.getElementById('message').innerHTML = "Player 2 Your Turn";
        player = 2;
    }

    else if(player == 2){
        elem.innerHTML = 'p2'
        document.getElementById('message').innerHTML = "Player 1 Your Turn";
        player = 1;
    }

//Horizontal winning
    if((col1 == 'p1') && (col2 == 'p1') && (col3 == 'p1')){
        document.getElementById('col4').disabled = true;
        document.getElementById('col5').disabled = true;
        document.getElementById('col6').disabled = true;
        document.getElementById('col7').disabled = true;
        document.getElementById('col8').disabled = true;
        document.getElementById('col9').disabled = true;
        alert('player 1 wins')
    }
}


