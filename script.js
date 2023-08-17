
function login() {
    let sear;
    let request;
    let title = document.getElementById("title").value;
    if (window.XMLHttpRequest) {
        request = new window.XMLHttpRequest();
    } else {
        request = new ActiveXObject("Microsoft.XMLHTTPS");
    }
    request.open("GET", " https://www.omdbapi.com/?apikey=7f2788a7&s=" + title);
    request.onreadystatechange = function () {
        console.log(request.readyState);
        if (request.readyState === 4) {
            let objects = JSON.parse(request.response);
            sear = objects.Search;
            console.log(sear);
            let type = document.getElementById("type").value;
            for (i = 0; i < sear.length; i++) {
                let container = document.getElementById("container");
                let filmsType = objects.Search[i].Type;
                console.log(filmsType);
                if (filmsType == "movie" & filmsType == type) {
                    container.innerHTML +=
                        `<div class = "card" >                                    
                            <img src="${sear[i].Poster}"  style="width:200px">
                                <div class = "info" >
                                    <p>${sear[i].Type}</p> 
                                    <p><b>${sear[i].Title}</b></p>
                                    <p>${sear[i].Year}</p>
                                    <button id="${sear[i].imdbID}" style="width: 100px;margin-top: 5px;">Details</button>
                                </div>                                        
                            </div>`;
                }

                if (filmsType == "series" & filmsType == type) {
                    container.innerHTML +=
                        `<div class = "card" >                                    
                            <img src="${sear[i].Poster}"  style="width:200px">
                                <div class = "info" >
                                    <p>${sear[i].Type}</p> 
                                    <p><b>${sear[i].Title}</b></p>
                                    <p>${sear[i].Year}</p>
                                    <button id="${sear[i].imdbID}" style="width: 100px;margin-top: 5px;">Details</button>
                                </div>                                        
                            </div>`;
                }
                if (filmsType == "episode" & filmsType == type) {
                    container.innerHTML +=
                        `<div class = "card" >                                    
                            <img src="${sear[i].Poster}"  style="width:200px">
                                <div class = "info" >
                                    <p>${sear[i].Type}</p> 
                                    <p><b>${sear[i].Title}</b></p>
                                    <p>${sear[i].Year}</p>
                                    <button id="${sear[i].imdbID}" style="width: 100px;margin-top: 5px;">Details</button>
                                </div>                                        
                            </div>`;
                }

            }
            document.addEventListener('click', function (event) {
                let x = event.target.id;
                if (x) {     
                    let cardDetails = document.getElementById("cardDetails");
                    let item = document.createElement("div");
                    for (i = 0; i < sear.length; i++) {
                        if (sear[i].imdbID == x) {
                            item.innerHTML = `
                            <h3 style="text-align:center;">Film info</h3> 
                            <div style="width:60%;margin-left:20%; height: 360px;border: 1px solid gray;border-radius: 5px;">                                                                       
                            <img src="${sear[i].Poster}"  style="width:250px !important;margin:5px; height: 350px;  "> 
                            <div class = "info" style="font-size:20px;">
                                <p><b>Title:</b> ${sear[i].Title}</p>
                                    <p><b>Type:</b> ${sear[i].Type}</p>                                             
                                    <p><b>Year:</b> ${sear[i].Year}</p>                                            
                                </div>                                                                              
                            </div>`;
                        }
                        cardDetails.appendChild(item);
                       
                    }
                }
            })
        }
    }
    request.send();
    return false;
}