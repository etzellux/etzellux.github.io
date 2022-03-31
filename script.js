function onClick()
{
    const parent_div = document.getElementById("mybutton").parentElement;
    const myimg = document.createElement("img");
    myimg.src = "https://c.tenor.com/ckOaiBGgA4EAAAAd/love-it-love.gif";
    parent_div.appendChild(myimg);
}

const button = document.getElementById("mybutton");
button.addEventListener("click", onClick);

