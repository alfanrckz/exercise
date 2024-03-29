function init() {
    const playerTitle = document.querySelector('.playerTitle')
    const rematchButton = document.querySelector('.rematch')
    const items = document.querySelectorAll('.item')
    const gridArray = Array.from(items)
    let tracking = [1, 2, 3, 4, 5, 6, 7, 8, 9,]
    let currentPlayer = 'playerX'

    //looping through all the board items
    items.forEach(item => {
        item.addEventListener('click', (e)=> {
            //player move
            const index = gridArray.indexOf(e.target)
            if(
                items[index].classList.contains('playerX') ||
                items[index].classList.contains('computer')
            ) {
                return;
            }

            items[index].classList.add('playerX');

            //splicing the move form the tracking list
            const spliceNr = tracking.indexOf(index + 1)
            tracking.splice(spliceNr, 1);

            //win check for the player
            if(winCheck('playerX', items)) {
                playerTitle.innerHTML = "Player win!!"
                document.body.classList.add('over')

            }
    
            //check for draw
            if( tracking.lenght == 0){
                playerTitle.innerHTML ="You Are Tuff, It's a Draw";
                document.body.classList.add('over');
                return;
                
            }      

            //computer move
            const random = Math.floor(Math.random() * tracking.length);
            const computerIndex = tracking[random];
            items[computerIndex - 1].classList.add('computer')

            //splicing the computer move from the tracking list
            tracking.splice( random, 1)

            //win check for the computer
            if(winCheck('computer', items)) {
                playerTitle.innerHTML = "Computer won!!"
                document.body.classList.add('over')
            }
        })
    });

    rematchButton.addEventListener('click', () => {
        location.reload();

    })
    
}
init();


function winCheck(playerName, items) {
    function check(pos1, pos2, pos3) {
        if (
            items[pos1].classList.contains(playerName) &
            items[pos2].classList.contains(playerName) &
            items[pos3].classList.contains(playerName) 
            ){
                return true; 
        } else {
            return false;
        }
    }
    if (check(0, 3, 6)) return true;
    else if(check(1, 4, 7)) return true;
    else if(check(2, 5, 8)) return true;
    else if(check(0, 1, 2)) return true;
    else if(check(3, 4, 5)) return true;
    else if(check(6, 7, 8)) return true;
    else if(check(0, 4, 8)) return true;
    else if(check(2, 4, 6)) return true;
}