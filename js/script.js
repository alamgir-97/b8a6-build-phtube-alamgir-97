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
  const cardContainer = document.getElementById('card-container');
 
 //console.log(categories.length);
  if(categories.length!=0){
    cardContainer.innerHTML = "";


    //code for sort by view but to show cards on ascending order based on view numbers
     let elements = []
     //reverse element is not working properly
      let reverseElements = elements.sort(function(a, b) {
       return b - a})
       //console.log(elements);
       //console.log(reverseElements);
       
       
       categories.forEach(elem => {
         
        //numeric value of view numbers
        const element =elem.others.views.slice(0,-1)
          //console.log(element)
        elements.push(element)


      
//console.log(elem.authors[0].profile_name);
//console.log(category);
const card = document.createElement('div');    
card.classList = "bg-base-200 mt-6";         
card.innerHTML = `
      <figure><img class="h-48 w-full rounded-2xl z-0" src="${elem.thumbnail}" /></figure>
      <div class="relative"> 
      <h2 class="-mt-12 right-4 text-white text-right bg-gray-800 px-4 p-1 rounded-md absolute z-10">${elem.others.posted_date}</h2>
      </div>
      
      
      <div class="bg-sky-500 mt-4 flex">

      <img class="ml-4 mt-2 w-10 h-10 rounded-full" src="${elem.authors[0].profile_picture}" />    
      
      <div class="card pl-4">
        <h2 class="card-title pb-2">${elem.title}</h2>
        
        <div class="card-actions">
        <p class="text-gray-200">${elem.authors[0].profile_name}</p>
        <img id="verified-icon" class="bg-blue-300 w-6 h-6 rounded-full" src="./p86-PHero-main/verified.jpg" />
        
        </div>
        
        <p class="text-gray-200">${elem.others.views}</p>
        </div>
        
        
        </div>
        `
        
   cardContainer.appendChild(card)

   //show verified badge
   const verifiedIcon = document.getElementById("verified-icon");
   console.log(verifiedIcon);
   const verifiedStatus = elem.authors[0].verified
   console.log(verifiedStatus);
   if(verifiedStatus===false){
     console.log("verified Status icon changed");
  let verifiedIcon2 = document.getElementById("verified-icon");
  console.log(verifiedIcon2);
  //hidden is not working ?????
  verifiedIcon2.classList.add = "hidden";
} 
   
})
  }
else{
    cardContainer.innerHTML = "";
    const card = document.createElement('div');    
    card.classList = "my-auto mx-auto flex rounded-lg border-0";         
    card.innerHTML = `  
    <div>       
    <img class="w-12 h-12 rounded-full" src="./86-PHero-tube-main/Icon.png" />  
    </div>     
    
    <div> 
    <h2 class="card-title">Opps!! Sorry, There is no content here</h2> 
    </div>
  `      
   cardContainer.appendChild(card)
 }
};

//displayCardContainer(categoryId) 
displayCardContainer('${category.category_id}');
loadCategory();