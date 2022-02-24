let xpos;
let ypos;
let colselected = 0;
let arr = [];
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
        console.log(xpos);
        switch(true)
        {
            case(xpos<=145):
                this.colselected = 0;
                break;

            case(xpos<=250):
                colselected = 1;
                break;

            case(xpos<=360):
                colselected = 2;
                break;

            case(xpos<=460):
                colselected = 3;
                break;

            case(xpos<=570):
                colselected = 4;
                break;

            case(xpos<=680):
                colselected = 5;
                break;

            case(xpos<=790):
                colselected = 6;
                break;
        }
        
        //rows
        for(let i=0;i<=5;i++)
        {
            if(!arr[i][colselected].coin)
            {
                arr[i][colselected].coin = 'sprite';
            }
                
        }
        console.table(arr);
    }
}