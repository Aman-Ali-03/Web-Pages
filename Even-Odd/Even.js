let number = document.getElementById("usernumber");
let display = document.getElementById("display");

function check()
{
    if(number.value==0)
    {
        display.textContent = "Number Is Zero";
    }
    else if(number.value%2==0)
    {
        display.textContent = "Even Number";
    }
    else
    {
        display.textContent = "Odd Number";
    }
}