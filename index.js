let timerid;

let movies = document.querySelector("#movies");

async function searchMovie(){

    try{
        let input = document.querySelector("#query").value;
    // console.log('input:', input);

    


    let res = await fetch(`https://www.omdbapi.com/?apikey=a98ff007&s=${input}`);


    let data = await res.json();

    console.log('data:', data)

    let moviesArr = data.Search;
    return moviesArr;

    }

    catch(err){
        console.log('err:', err)
    }

}

function appendMovies(data){

    movies.innerHTML = "";
    

    data.forEach(function(elem,index){

        let p = document.createElement("p");
        p.innerText = elem.Title;
        p.setAttribute("id","p");

        p.addEventListener("click",function(){
            showDetails(elem.Title);
            window.location.href="detail.html"
        })

        movies.append(p);

        
    })

}


async function main(){

    try{
        let data = await searchMovie();
    
        if(data === undefined)            
        {
            return false;
        }

        // console.log('data:', data);

        appendMovies(data);

    }

    catch(err){
        console.log('err:', err);
    }

}


function debounce(func, delay){

    if(timerid){

        clearTimeout(timerid);
    }

    timerid = setTimeout(function(){
        func()              
    }, delay)

}



function showDetails(elem){
    localStorage.setItem("detail",JSON.stringify(elem));
}

let cart = JSON.parse(localStorage.getItem("detail"));
console.log(cart)


