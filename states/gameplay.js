let arr = [];
let actualxpos;
let actualypos;
let click = 0;

export default class GameplayState extends Phaser.State{
    create()
    {
        this.board = this.game.add.sprite(20,10,'board');
        this.board.inputEnabled = true;
        this.board.events.onInputDown.add(this.findrow,this);
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


    findrow()
    {
        
        let xpos = game.input.x;
        let ypos = game.input.y;

        switch(true)
        {
            case(ypos<=114):
                this.rowselected = 0;
                actualypos = 35;
                break;

            case(ypos<=218):
                this.rowselected = 1;
                actualypos = 115;
                break;

            case(ypos<=326):
                this.rowselected = 2;
                actualypos = 195;
                break;

            case(ypos<=434):
                this.rowselected = 3;
                actualypos = 275;
                break;

            case(ypos<=542):
                this.rowselected = 4;
                actualypos = 355;
                break;

            case(ypos<=650):
                this.rowselected = 5;
                actualypos = 435;
                break;

            case(ypos<=758):
                this.rowselected = 6;
                actualypos = 515;
                break;
        }
        this.findcol(this.rowselected);
     }

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
        this.insertcoin(this.colselected,this.rowselected);
    
    }

    
    //taking the value of column from previous function
     insertcoin(colselected,rowselected)
    {   
        let actualypos = 570;     
        //inserting the coins
        for(let i=5;i>=0;i--)
        {     
            //if the hole is empty then insert coin
            if(arr[i][colselected].coin === null)
            {
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
            else 
            {
                actualypos = actualypos-107;  
            }
        }
        this.countfour(colselected,rowselected); 
    }

    //four in line
    countfour(colselected,rowselected)
    {
        let redverticalcounter = 0;
        let redhorizontalcounter = 0;
        let bluehorizontalcounter = 0;
        let blueverticalcounter = 0;
        
        //i loop for vertical check
        for(let i=5;i>=0;i--)
        {
            if(arr[i][colselected].coin === 'inserted' && arr[i][colselected].color === 'red')
            {
                redverticalcounter++;
            } 

            else
            {
                redverticalcounter = 0;
            }

            if(arr[i][colselected].coin === 'inserted' && arr[i][colselected].color === 'blue')
            {
                blueverticalcounter++;   
            }
            else
            {
                blueverticalcounter = 0;
            }
            if(redverticalcounter === 4)
            {
                console.log("red vertical wins");
                break;
            }
            if(blueverticalcounter === 4)
            {
                console.log("blue vertical wins");
                break;
            }
        }

        //for horizontal check
        //j loop for horizontal check
        for(let j=0;j<=6;j++)
        {
            if(arr[rowselected][j].coin === 'inserted' && arr[rowselected][j].color === 'red')
            {
                redhorizontalcounter++;
            } 
            else
            {
                redhorizontalcounter = 0;
            }
   
            if(arr[rowselected][j].coin === 'inserted' && arr[rowselected][j].color === 'blue')
            {
                bluehorizontalcounter++;   
            }

            else
            {
                bluehorizontalcounter = 0;
            }
   
            if(redhorizontalcounter === 4 )
            {
                console.log("red horizontal wins");
                break;
            }
            if(bluehorizontalcounter === 4)
            {
                console.log("blue horizontal wins");
                break;
            }
        }
        
        //checkdiagonally from left to right
            let i = 5; let j = 0;
                if(arr[i-1][j+1].coin === "inserted" && arr[i-1][j+1].color === "red" &&
                    arr[i-2][j+2].coin === "inserted" &&  arr[i-2][j+2].color === "red" &&
                    arr[i-3][j+3].coin === "inserted" &&  arr[i-3][j+3].color === "red" 
                ) 
                {
                   console.log('Red Diagonal Wins');
                } 

                if(arr[i-1][j+1].coin === "inserted" && arr[i-1][j+1].color === "blue" &&
                    arr[i-2][j+2].coin === "inserted" &&  arr[i-2][j+2].color === "blue" &&
                    arr[i-3][j+3].coin === "inserted" &&  arr[i-3][j+3].color === "blue" 
                ) 
                {
                   console.log('Blue Diagonal Wins');
                } 

            //checkdiagonally from right to left
            let r = 5; let c = 6;
                if(arr[r-1][c-1].coin === "inserted" && arr[r-1][c-1].color === "red" &&
                    arr[r-2][c-2].coin === "inserted" &&  arr[r-2][c-2].color === "red" &&
                    arr[r-3][c-3].coin === "inserted" &&  arr[r-3][c-3].color === "red" 
                ) 
                {
                   console.log('Red Diagonal Wins');
                } 

                if(arr[r-1][c-1].coin === "inserted" && arr[r-1][c-1].color === "blue" &&
                    arr[r-2][c-2].coin === "inserted" &&  arr[r-2][c-2].color === "blue" &&
                    arr[r-3][c-3].coin === "inserted" &&  arr[r-3][c-3].color === "blue" 
                ) 
                {
                   console.log('Blue Diagonal Wins');
                } 
            
    }
}