let guess = -1;
let tmp;
let num = 1;
let l = 1,r=100;
function getrandomint(mn,mx)
{
    mn = Math.ceil(mn);
    mx = Math.ceil(mx);
    return Math.floor(Math.random() * (mx - mn) + mn);   
}
num = getrandomint(1,100);
while(guess!=num)
{
    guess = +prompt("guess a number","   ");
    if(guess > num)
    alert("too high")
    else if(guess < num)
    alert("too low")
    else
    alert("correct!!!")
}