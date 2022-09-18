const canvas = document.querySelector('canvas');
canvas.height = 400;
canvas.width = 400;
const context = canvas.getContext('2d');

//test how canvas works
// context.fillRect(0,0, canvas.width, canvas.height)


//creating elements in a static way.
// context.fillStyle='orange'
// context.fillRect(0,0, 20,30);

// context.fillStyle='orange';
// context.fillRect(canvas.width-1, 0, 10, 30)


const getPaddle=({x=0,color='orange'})=>({
    x,
    y:0,
    w:10,
    h:30,
    color,
    draw(){
        context.fillStyle=this.color;
        context.fillRect(this.x,this.y,this.w,this.h);
    }

})

const getBall =({})=>({
    x:200,
    y:0,
    w:10,
    h:10,
    color:'blue',
    direction:'right',
    draw(){
        if(this.direction==='right'){
            this.x++;
        }else{
            this.x--;
        }
        if(this.x>canvas.width-20){
            this.direction='left'
        }else if(this.x<10){
            this.direction ='right'
        }
        context.fillStyle=this.color;
        context.fillRect(this.x,this.y,this.w,this.h);
    }
})

const paddleLeft =getPaddle({});

const paddleRight = getPaddle({
    x:canvas.width-10,
    color:'red'
})

//Adding the animation
const update = ()=>{
    context.clearRect(0,0,canvas.width,canvas.height)
    ball.draw();
    paddleLeft.draw();
    paddleRight.draw();
    //using recursivity in order to add the animation
    requestAnimationFrame(update)

}
//giving the control to the browser
requestAnimationFrame(update)
//Drawing the elements.

const ball=getBall({});
ball.draw;