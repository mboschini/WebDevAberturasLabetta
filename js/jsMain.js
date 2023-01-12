const navButtons = document.getElementsByClassName("NavButton")

function NavButtonClick(buttonText)
{
    Array.from(navButtons).forEach(navButtons =>    
    {
        if(buttonText==navButtons.textContent)
            console.log(navButtons.textContent)
    });
}