const Name = document.getElementById("Name");
const show = document.getElementById("show");
function funct()
{
    show.textContent = `Hello ${Name.value}!`;
}