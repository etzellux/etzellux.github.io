function onClick()
{
    const parent_div = document.getElementById("mybutton").parentElement;
    const myimg = document.createElement("img");
    myimg.src = "https://c.tenor.com/ckOaiBGgA4EAAAAd/love-it-love.gif";
    myimg.id = "myimg"
    parent_div.appendChild(myimg);
}

var gifCount = 0;
const button = document.getElementById("mybutton");
button.addEventListener("click", onClick);


