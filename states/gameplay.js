let xpos;
let ypos;
let colselected = 0;
let rowselected = 0;
let arr = [];
let actualxpos;
let actualypos;
let click = 0;
let counter = 0;
let redcounter = 0;

export default class GameplayState extends Phaser.State{
    create()
    {
        //game.physics.startSystem(Phaser.Physics.ARCADE);

        //loading baord
        this.board = this.game.add.sprite(20,10,'board');
        this.board.inputEnabled = true;
        //on click of board area call clickedd function
        this.board.events.onInputDown.add(this.findcol,this);
        //this.board.events.onInputDown.add(this.checkfourcoins,this);
        for(let i=0;i<=5;i++)
        {
            arr.push([]);
            //cols
            for(let j=0;j<=6;j++)
            {
                arr[i].push({row:i, coulmn:j, coin:null, color:""});
                
            }
        }
    }


    //function to insert coins
    findcol()
    {
        //find out which column is clicked
        let xpos = game.input.x;
        let ypos = game.input.y;

        switch(true)
        {
            case(xpos<=145):
                this.colselected = 0;
                actualxpos = 45;
                break;

            case(xpos<=250):
                this.colselected = 1;
                actualxpos = 155;
                break;

            case(xpos<=360):
                this.colselected = 2;
                actualxpos = 260;
                break;

            case(xpos<=460):
                this.colselected = 3;
                actualxpos = 370;
                break;

            case(xpos<=570):
                this.colselected = 4;
                actualxpos = 470;
                break;

            case(xpos<=680):
                this.colselected = 5;
                actualxpos = 580;
                break;

            case(xpos<=790):
                this.colselected = 6;
                actualxpos = 685;
                break;
        }
        //calling the function to insertcoin
        this.insertcoin(this.colselected);
    }

    
    //taking the value of column from previous function
     insertcoin(colselected)
    {   
        let actualypos = 570;     
        //inserting the coins
        for(let i=5;i>=0;i--)
        {    
            console.log(arr);  
            //if the hole is empty then insert coin
            if(arr[i][colselected].coin === null)
            {
                console.log("row: "+i);
                console.log("col: "+colselected);

                //inserting red coin on even click
                if(click%2==0)
                {
                    arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'redcircle');
                    arr[i][colselected].color = "red";
                }
                //inserting blue coin on odd click
                else
                {
                    arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'bluecircle');
                    arr[i][colselected].color = "blue";
                }
                arr[i][colselected].coin = 'inserted'; 
                click++;
                break; 
            }
            //else decreament the ypos to move up to the next hole 
            else {
                actualypos = actualypos-107;  
            }
        }
        this.countfour(colselected); 
    }

    //checking for four in a line
    countfour(colselected)
    {
        let verticalcounter = 0;
        //let counterforcoin=0;
        for(let i=5;i>=0;i--)
        {
            if(arr[i][colselected].coin === 'inserted' && arr[i][colselected].color === 'red')
            {
                verticalcounter++;
            }   
            else
            {
                verticalcounter =0;
            }
            if(verticalcounter === 4)
            {
                console.log("wins");
            }
        }
        
    }
   
}