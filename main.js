
var canvas = new fabric.Canvas('myCanvas')

 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
	// para enviar imagens
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_Object = Img;
		
		block_image_Object.scaleToWidth(block_image_Width);
		block_image_Object.scaleToHeight(block_image_Height);
		block_image_Object.set({
top:block_Y,
left:block_X
		});
		canvas.add(block_image_Object)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
	new_image('rr1.png')
	console.log("r")
	}

	if(keyPressed == '86')
	{
		blockX = 200;
new_image('gr.png');
console.log()
		// enviar ranger verde
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		blockX = 700;
	// enviar ranger índigo
	}
	
}

