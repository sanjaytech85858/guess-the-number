var guess = Math.floor(Math.random()*100) + 1;

function response()
{
     var n =document.getElementById("in").value
     if(n == guess)
     document.getElementById("out").innerHTML = "yes ! you got it correct"
     else if(n > guess)
     document.getElementById("out").innerHTML = "Guess a smaller number"
     else
     document.getElementById("out").innerHTML = "Guess a greater number"
}