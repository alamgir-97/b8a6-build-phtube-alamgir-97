//Step-1: Fetch Data from server
const loadCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
  const data = await res.json();
  categories = data.data
  //console.log(categories);
  displayCategory(categories);
}

//Step-2: Display category buttons dynamically
const displayCategory = categories => {
  const categoryContainer = document.getElementById('category-container');
//console.log(categoryContainer);

categories.forEach(category => {
  console.log(category);
  const categoryButtonDiv = document.createElement('div');    
  categoryButtonDiv.classList = "";    
  categoryButtonDiv.innerHTML = `<button onclick="displayCardContainer('${category.category_id}')" class="font-semibold px-5 py-2 m-4 bg-base-200 hover:bg-red-500 hover:text-white  active:bg-red-500 active:text-white focus:bg-red-500 focus:text-white rounded"> ${category.category}</button>`; 
  console.log(category.category_name);   
  categoryContainer.appendChild(categoryButtonDiv);
  //console.log(categoryButton);
  
  
});

};

//Step-3: Display cards dynamically while clicked on category buttons
//Step-3.1: Fetch data from server for the purpose
const displayCardContainer = async (categoryId) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);

  const data = await res.json();
  console.log(data);
  const categories = data.data;
  displayCard(categories);
}

//Step-3.2: Display cards dynamically
  const displayCard = categories => {
    //console.log(categories.length);
 

  const cardContainer = document.getElementById('card-container');
  //console.log('cardContainer');
  cardContainer.innerHTML = "";

  if(categories.length===0)
  
  
  {
    
    const card = document.createElement('div');    
      card.classList = "mt-auto mx-auto flex rounded-lg border-0";         
      card.innerHTML = `         
      <img class="w-12 h-12 rounded-full" src="./86-PHero-tube-main/Icon.png" />       
      <br>
      <h2 class="card-title">Opps!! Sorry, There is no content here</h2> 
    `      
     cardContainer.appendChild(card)
   }
   else 
   {

     
     
     
     
     // let elements = []
     // //reverse element is not working properly
     // let reverseElements = elements.sort(function(a, b) {
       //   return b - a})
       // console.log(elements);
       // console.log(reverseElements);
       
       // let index = 0;
       categories.forEach(elem => {
         
         //    const element =elem.others.views.slice(0,-1)
//    console.log(element)
//    elements.push(element)
//    index++;
//    console.log(index);

      
//console.log(elem.authors[0].profile_name);
//console.log(category);
const card = document.createElement('div');    
card.classList = "bg-base-200";         
card.innerHTML = `
      <figure><img class="h-48 w-full rounded-2xl" src="${elem.thumbnail}" /></figure>
      <h2 class="-mt-8 card-title text-green-500">${elem.others.posted_date}</h2>
      
      
      <div class="bg-base-200 p-2 m-4 flex" >
  
      
      <div class="avatar">
    <div class="w-12 h-12 rounded-full p-4">
      <img src="${elem.authors[0].profile_picture}" />       
      </div>
      </div>
      
      
      <div class="card">
        <h2 class="card-title">${elem.title}</h2>
        
        <div class="card-actions">
        <p>${elem.authors[0].profile_name}</p>
        <img id="verified-icon" class="bg-blue-300 w-6 h-6 rounded-full" src="./p86-PHero-main/verified.jpg" />
        
        </div>
        
        <p>${elem.others.views}</p>
        </div>
        
        
        </div>
        `
        
   cardContainer.appendChild(card)
   const verifiedIcon = document.getElementById("verified-icon");
   console.log(verifiedIcon);
   const verifiedStatus = elem.authors[0].verified
   console.log(verifiedStatus);
   if(verifiedStatus===false){
     console.log("verified Status icon changed");
  let verifiedIcon2 = document.getElementById("verified-icon");
  console.log(verifiedIcon2);
  //hidden is not adding ?????
  verifiedIcon2.classList.add = "hidden";
} 
   
    
    
  }
  
  )
  }};

 


//displayCardContainer(categoryId) 
displayCardContainer('${category.category_id}');
loadCategory();