let rand=Math.floor(Math.random() *100)

let guess;


while(rand!=guess){
    guess=prompt ("guess a number")
    if (rand==guess){alert("Correct")}
    else if (rand>guess){alert("Too Low")}
    else{alert("Too High")}
}