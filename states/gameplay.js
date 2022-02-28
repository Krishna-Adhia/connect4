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
        this.board.events.onInputDown.add(this.insertcoins,this);
        this.board.events.onInputDown.add(this.checkfourcoins,this);
        for(let i=0;i<=5;i++)
        {
            arr.push([]);
            //cols
            for(let j=0;j<=6;j++)
            {
                arr[i].push({row:i, coulmn:j, coin:null, color:""});
                
            }
        }
        console.log(arr);  
    }


    //function to insert coins
    insertcoins()
    {
        
        //find out which column is clicked
        let xpos = game.input.x;
        let ypos = game.input.y;
        //console.log(ypos);
        switch(true)
        {
            case(xpos<=145):
                this.colselected = 0;
                actualxpos = 45;
                break;

            case(xpos<=250):
                colselected = 1;
                actualxpos = 155;
                break;

            case(xpos<=360):
                colselected = 2;
                actualxpos = 260;
                break;

            case(xpos<=460):
                colselected = 3;
                actualxpos = 370;
                break;

            case(xpos<=570):
                colselected = 4;
                actualxpos = 470;
                break;

            case(xpos<=680):
                colselected = 5;
                actualxpos = 580;
                break;

            case(xpos<=790):
                colselected = 6;
                actualxpos = 685;
                break;
        }

        //inserting the coins
        for(let i=5;i>=0;i--)
        {
            if(arr[i][colselected].coin === null)
            {
                //for row 5
                if(i==5)
                {
                    actualypos = 570;
                }
                if(click%2==0)
                {
                    arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'redcircle');
                    arr[i][colselected].color = "red";
                    //console.log(i);  
                }
                else
                {
                    arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'bluecircle');
                    arr[i][colselected].color = "blue";
                    //console.log(i);
                }
                arr[i][colselected].coin = 'inserted'; 
                click++;
                break; 
                
            }
            //for other row
            else
            {
                actualypos = actualypos - 107;
                if(click%2==0)
                {
                    arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'redcircle');
                    arr[i][colselected].color = "red";
                    //console.log(i); 
                }
                else
                {
                    arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'bluecircle');
                    arr[i][colselected].color = "blue";
                    //console.log(i);
                }
                arr[i][colselected].coin = 'inserted';  
            }
            click++;
            console.log(click);
            break;
        }    
    }

    //checking four in a line
    checkfourcoins()
    {
        
    //    for(let i=5;i>=2;i--)
    //    {
    //     if(arr[i][colselected].coin !== null)
    //     {
    //         counter++;
    //     }
    //    }
    //    //console.log(counter);
    //    if(counter == 4)
    //    {
    //        console.log("wins");
    //    }
    }

}