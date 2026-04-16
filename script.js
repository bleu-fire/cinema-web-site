"use strict";
let movie_one = document.getElementById('labobo');
//for get rquests from movie 
//http://api.tvmaze.com/updates/shows
async function Show_Movie() {
    const response = await fetch("http://api.tvmaze.com/shows");
    if (response.ok) {
        let data = await response.json();
        for (let watch of data) {
            let html = `
          <img src="${watch.image.medium}" alt="image">
          <h4>${watch.name}</h4>
          <h6>${watch.summary}</h6>
        `;
            movie_one.innerHTML += html;
        }
    }
}
Show_Movie();
// for list movie 
