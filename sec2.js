class Sec2 // question 2
{
    constructor(){
        this.access2 = createInput("Answer pls")
        this.access2.position(480,430);
        this.access2.style('background', 'white');  

        this.button2 = createButton('SUBMIT');
        this.button2.position(535,470);
        this.button2.style('background', 'lightgrey');  
    }
    display(){
        this.button2.mousePressed(() => {
            if(systm.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                gamestate++;
            }
        }); 
    }
}