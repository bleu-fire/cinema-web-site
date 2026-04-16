let movie_one = document.getElementById('labobo')as HTMLElement;

 //type for get  movie name and  all info 
 type Movie = {
   
   name: string;
   image:{medium:string}; 
   summary:string;
  }


//for get rquests from movie 
//http://api.tvmaze.com/updates/shows
async function Show_Movie () {
    const response =  await fetch("http://api.tvmaze.com/shows");
    if(response.ok){
   
      let data:Movie[]  = await response.json();
      for(let watch of  data){
        // for list movie 
        let html:string = `
          <img src="${watch.image.medium}" alt="image">
          <h4>${watch.name}</h4>
          <h6>${watch.summary}</h6>
        `
        movie_one.innerHTML += html;
      }


    }
    if(!response.ok){
      console.error(`not respone ${response.status}`)
      return []
    }

}

Show_Movie()
  