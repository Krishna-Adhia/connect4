var xp;
var y;
export default class PreloadState extends Phaser.State{
    preload()
    {
        this.load.baseURL = "./assets/";
        this.load.image('board','board.png');
        this.load.image('redcircle','red-coin.png');
        this.load.image('bluecircle','blue-coin.png')
        
    }

    create()
	{
		this.game.state.start("Gameplay");    
	}
}