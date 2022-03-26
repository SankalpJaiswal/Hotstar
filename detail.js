let cart = JSON.parse(localStorage.getItem("detail"));
console.log(cart);

function display(data){

    let img = document.createElement("img");
    img.src= data.Search.Poster;

    let title = document.createElement("h3");
    title.innerText = data.Search.Title;

    let year = document.createElement("h5");
    year.innerText = data.Search.Year;

    document.querySelector("#bucket").append(img,title,year);




}
