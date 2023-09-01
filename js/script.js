const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    categories = data.data
    //console.log(categories);
    displayCategory(categories);
}

const displayCategory = (categories) => {

    const categoryContainer = document.getElementById('category-container');
console.log(categoryContainer);

const cardContainer = document.getElementById("card-container");

categories.forEach(category => {
    console.log(category);
    const categoryButton = document.createElement('div');    
    categoryButton.classList = "bg-red-200 p-2 m-4 active:bg-red-400 hover:bg-red-600 visited:bg-red-800";    
    categoryButton.innerHTML = `<button onclick="displayCardContainer()"> ${category.category}</button>`;    
    categoryContainer.appendChild(categoryButton);
    console.log(categoryButton);
    
    const card = document.createElement('div');
    card.classList = "card bg-blue-100 shadow-xl flex gap-2";
    card.innerHTML = `
    <figure><img src="./86-PHero-tube-main/Icon.png" /></figure>
    
    <div class="p-4 flex" >

    
    <div>
        <figure class="rounded w-12 h-12 pt-8"><img src="./86-PHero-tube-main/Icon.png" alt="Shoes" /></figure>
    </div> 


    <div class="card-body">
      <h2 class="card-title">If a dog chews shoes whose shoes does he choose?</h2>
      
      <div class="card-actions">
        <p>Awlad Hossain</p><input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />    
      </div>

      <p>91K Views</p>
    </div>


    </div>
 `
    cardContainer.appendChild(card);
     
});
}

// const displayCardContainer = (categories) => {
//     console.log("Display card")

// categories.forEach(elem => {
//     console.log(elem);
  


// })

// }

loadCategory();