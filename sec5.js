class Sec5 // question 5
{
    constructor(){
        this.access5 = createInput("Answer pls")
        this.access5.position(630,430);
        this.access5.style('background', 'white');  

        this.button5 = createButton('SUBMIT');
        this.button5.position(685,470);
        this.button5.style('background', 'lightgrey');    
    }
    display(){
        this.button5.mousePressed(() => {
            if(systm.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                gamestate ++;
            }
        });
    }
}