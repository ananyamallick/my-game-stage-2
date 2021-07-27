class Sec3 // question 3
{
    constructor(){
        this.access3 = createInput("Answer pls")
        this.access3.position(530,430);
        this.access3.style('background', 'white');  

        this.button3 = createButton('SUBMIT');
        this.button3.position(585,470);
        this.button3.style('background', 'lightgrey');    
    }
    display(){
        this.button3.mousePressed(() => {
            if(systm.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                gamestate ++;
            }
        });
    }
}