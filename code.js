//a code to play Hi Lo on index page
function playHiLo(){
    console.log("playHiLo() started");
    //step 1. draw a card Ace to King or 1 to 13
    var card1;
 card1= Math.floor(14 * Math.random());
    console.log("card1 is :"+ card1);
    //step 1b. Print results on screen
    document.getElementById("card1Res").innerHTML = card1;
}

    //step 2. player will choose if next card is higher or lower
//If player bet high
function High(){
    console.log("bet high")
    var card1;
    var card2;
    card1= Math.floor(14 * Math.random());
    card2= Math.floor(14 * Math.random());
    console.log("card1 is :"+ card1);
    console.log("card2 is :" + card2);
    document.getElementById("card2Res").innerHTML = card2;
    //Condictions
    if(card2 >= card1){
        document.getElementById("gameRes").innerHTML = "You Win!";}
    
        else if(card2 <= card1){
            document.getElementById("gameRes").innerHTML= "You Lose!"
        }
    
    
    
//If player bet low   
}
function Low(){
    console.log("bet low")
    var card1;
    var card2;
    card1= Math.floor(14 * Math.random());
    card2= Math.floor(14 * Math.random());
    console.log("card1 is :"+ card1);
    console.log("card2 is :" + card2);
    document.getElementById("card2Res").innerHTML = card2;
    //condictions
    if(card2<=card1){
        document.getElementById("gameRes").innerHTML = "You Win!";}
        else if(card2 >= card1){
            document.getElementById("gameRes").innerHTML= "You Lose!"
        }
    
}
    /*if(condictions for true){
        do this if condictions are true
    }else if (another condictions for true){
        do this if condictions are true
    }else{
        do this if none are true
    }}*/


