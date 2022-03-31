function onClick(gifCount)
{
    const parent_div = document.getElementById("mybutton").parentElement;
    if(gifCount%2 == 0)
    {
        const myimg = document.createElement("img");
        myimg.src = "https://c.tenor.com/ckOaiBGgA4EAAAAd/love-it-love.gif";
        myimg.id = "myimg"
        parent_div.appendChild(myimg);
    }
    else
    {
        parent_div.removeChild(document.getElementById("myimg"));
    }
    gifCount += 1;
}

var gifCount = 0;
const button = document.getElementById("mybutton");
button.addEventListener("click", onClick(gifCount));


