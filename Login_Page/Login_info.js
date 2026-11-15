const username = document.getElementById('username');
const password = document.getElementById('password');
const result = document.getElementById('result');

function login()
{
    if(username.value.length <1)
    {
        result.textContent = "Invalid Username";
    }
    else
    {
        if(username.value === "Aman-Ali-03")
        {
            if(password.value.length < 1)
            {
                result.textContent = "Password must be at least 8 characters";
            }
            else
            {
                result.textContent = "Login Successfully";
            }
        }
        else
        {
            result.textContent = "Username not found.";
        }
    }
}