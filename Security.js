class Security // question 1
{
    constructor(){
        this.access1 = createInput("Answer pls")
        this.access1.position(430,430);
        this.access1.style('background', 'white');  

        this.button1 = createButton('SUBMIT');
        this.button1.position(485,470);
        this.button1.style('background', 'lightgrey');    
    }
    display(){
        this.button1.mousePressed(() => {
            if(systm.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                gamestate = 4;
            }
            else{
                text("CHECK THE SPELLING PLS OR WRONG INPUT" , 100,500);
            }
        });
        
    }
}