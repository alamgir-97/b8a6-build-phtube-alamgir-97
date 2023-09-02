const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    categories = data.data
    //console.log(categories);
    displayCategory(categories);
}

const displayCategory = categories => {
    const categoryContainer = document.getElementById('category-container');
//console.log(categoryContainer);

categories.forEach(category => {
    console.log(category);
    const categoryButton = document.createElement('div');    
    categoryButton.classList = "bg-red-200 p-2 m-4 active:bg-red-400 hover:bg-red-600 visited:bg-red-800";    
    categoryButton.innerHTML = `<button onclick="displayCardContainer('${category.category_id}')"> ${category.category}</button>`; 
    console.log(category.category_name);   
    categoryContainer.appendChild(categoryButton);
    //console.log(categoryButton);
    
    
});

};

const displayCardContainer = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

    const data = await res.json();
    console.log(data);
    const categories = data.data;
    displayCard(categories);
}








    const displayCard = categories => {
      //console.log(categories.length);
   

    const cardContainer = document.getElementById('card-container');
    //console.log('cardContainer');
    cardContainer.innerHTML = "";

    if(categories.length===0){
      
      const card = document.createElement('div');    
        card.classList = "mt-auto mx-auto flex";         
        card.innerHTML = `         
        <img class="w-12 h-12 rounded-full" src="./86-PHero-tube-main/Icon.png" />       
        <br>
        <h2 class="card-title">Opps!! Sorry, There is no content here</h2> 
      `      
       cardContainer.appendChild(card)
     }





     //let elements = []
     //let count = 0;

    categories.forEach(elem => {
    elem = elem.others.views
    console.log(elem.others.views)    
    //  elements.push(elem);
    //  console.log(elements);

     //count = elem;
     //console.log(count);
        console.log(elem.authors[0].profile_name);
        //console.log(category);
        const card = document.createElement('div');    
        card.classList = "bg-red-200 p-2 m-4 active:bg-red-400 hover:bg-red-600 visited:bg-red-800";         
        card.innerHTML = `
        <figure><img src="${elem.thumbnail}" /></figure>
        
        
        <div class="p-2 flex bg-base-200" >
    
        
        <div class="avatar">
      <div class="w-12 h-12 rounded-full">
        <img src="${elem.authors[0].profile_picture}" />       
      </div>
    </div>
    
    
        <div class="card-body">
          <h2 class="card-title">${elem.title}</h2>
          
          <div class="card-actions">
            <p>${elem.authors[0].profile_name}</p><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />    
          </div>
    
          <p>${elem.others.views}</p>
        </div>
    
    
        </div>
     `
     cardContainer.appendChild(card)
    })
   
    };
  
   


//displayCardContainer(categoryId) 
displayCardContainer('${category.category_id}');
loadCategory()


<h2 class="card-title">${elem.others.posted_date}</h2>

// // array by elem.others.view
// let elements = []

// //reverse element is not working properly
// let reverseElements = elements.sort(function(a, b) {
//   return b - a})
//console.log(elements);
//console.log(reverseElements);



//  const verifiedStatus = elem.authors[0].verified;
  //  console.log(verifiedStatus);
  //  if(verifiedStatus ===""||false){
  //   const verifiedIcon = document.getElementById("verified-icon");
  //   console.log(verifiedIcon);
  // verifiedIcon.classList = "hidden";
  //  cardContainer.appendChild(card)   
  //  }

  