let model = {
ships=0;
shipSunk=0



    ships [
        {locations: [0,0,0], hits:["","",""]},
        {locations: [0,0,0], hits:["","",""]},
        {locations: [0,0,0], hits:["","",""]}

    ],

   

        fire: function(guess){
            for (let i =0; i< this.numShips; i++){
                let ship=this.ships[i];
                let index = this.ships.locations.indexOf(guess);
            }

            if (this.isSunk(ship){
                for 
            }

        },



        isSunk: function(ship){
            for (let i =ship)
        }, 

        generatshiplocationx: function(){

        },
        generateship: function() {
            let direction= Math.floor(Math.random()*2);
            let row, col;

            if (direction ===1) {
                row= Math.random(Math.random() *this.boardSize);
                col= Math.random(Math.random() *(this.boardSize - this.shipLength +1));
            }

            else{
            row= Math.random(Math.random() *(this.boardSize - this.shipLength +1));
            col= Math.random(Math.random() *this.boardSize);
            }


            let newShipLocations[];
            for (let i =0; i<this.shipLength; i++){

            }


        },

        collision: function(location){
            for (let i=0; 1 < this.numShips; i++) {
                let ship:this.ships[1];
            }

        },

    let view={

        displaymMessage: function(msg){
            let messageArea = document.getElementById("messageArea");
            messageArea.innerHTML=msg;
        },

        displayHit:function(location){
            let call = document.getElementById("location");
            call.setAttribute("class","miss")
        },	

        displayMiss:function(location){

        }
};

    let controller={
        guesses:0,

        processGuess:function() {

        }
    
}

function parseGuess(guess) {

}

function handlerFireButton(){

}

function handlerKeyButton(e){
    
}

function init() {

}

