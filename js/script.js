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
    const cardContainer = document.getElementById('card-container');
    console.log('cardContainer');
    cardContainer.innerHTML = "";

    categories.forEach(elem => {
        
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
displayCard()
loadCategory()