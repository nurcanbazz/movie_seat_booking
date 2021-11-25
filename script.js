const seats=document.querySelector(".container");
const count=document.getElementById("count"); 
const film=document.getElementById("film"); 
const total=document.getElementById("total"); 
const movie=document.getElementById("movie");

function selectedCount(){
        seatCount = seats.getElementsByClassName("selected").length; 
        count.innerHTML=seatCount;
        let moviePay = movie.options[movie.selectedIndex].value;
        let movieName = movie.options[movie.selectedIndex].innerHTML;
        film.innerHTML=movieName.split('(')[0];
        total.innerHTML=parseFloat(moviePay*seatCount);
    }
movie.onchange=selectedCount;   
selectedCount();
//Events
seats.addEventListener("click", e=>{  
    if(e.target.classList.contains("seat")&&!e.target.classList.contains("occupied")){ 
        if(!e.target.classList.contains("selected")) { 
                e.target.classList.add("selected");
        } else {
                e.target.classList.remove("selected"); 
        } 
        selectedCount()
        }
    })
