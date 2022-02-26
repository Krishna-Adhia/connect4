let xpos;
let ypos;
let colselected = 0;
let rowselected = 0;
let arr = [];
let actualxpos;
let actualypos;
export default class GameplayState extends Phaser.State{
    create()
    {
        //game.physics.startSystem(Phaser.Physics.ARCADE);

        //loading baord
        this.board = this.game.add.sprite(20,10,'board');
        this.board.inputEnabled = true;
        //on click of board area call clickedd function
        this.board.events.onInputDown.add(this.calculateX,this);
        for(let i=0;i<=5;i++)
        {
            arr.push([]);
            //cols
            for(let j=0;j<=6;j++)
            {
                arr[i].push({row:i, coulmn:j, coin:null});
                
            }
        }
        console.log(arr);  
    }
    
    //find out which column is clicked
    calculateX()
    {
        let xpos = game.input.x;
        let ypos = game.input.y;
        console.log(ypos);
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

         //find out which row is clicked
        switch(true)
        {
            case(ypos<=114):
                rowselected = 0;
                actualypos = 35;
                break;

            case(ypos<=220):
                rowselected = 1;
                actualypos = 142;
                break;

            case(ypos<=325):
                rowselected = 2;
                actualypos = 250;
                break;

            case(ypos<=433):
                rowselected = 3;
                actualypos = 355;
                break;

            case(ypos<=541):
                rowselected = 4;
                actualypos = 464;
                break;

            case(ypos<=646):
                rowselected = 5;
                actualypos = 570;
                break;
        }

       
        
        
        //rows  
        for(let i=0;i<=5;i++)
        {
            if(arr[i][colselected].coin === null)
            {
                arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'redcircle');
                arr[i][colselected].coin = 'inserted';
                break;
            }
            else
            {
                actualypos = actualypos - 107;
                arr[i][colselected].coin = this.game.add.sprite(actualxpos,actualypos,'redcircle');
                break;   
            }
        }    
    }
}