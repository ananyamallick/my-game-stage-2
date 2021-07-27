class Sec4 // question 4
{
    constructor(){
        this.access4 = createInput("Answer pls")
        this.access4.position(580,430);
        this.access4.style('background', 'white');  

        this.button4 = createButton('SUBMIT');
        this.button4.position(635,470);
        this.button4.style('background', 'lightgrey');    
    }
    display(){
        this.button4.mousePressed(() => {
            if(systm.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                gamestate ++;
            }
        });
    }
}