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
    //console.log(category);
    const categoryButtonDiv = document.createElement('div');    
    categoryButtonDiv.classList = "";    
    categoryButtonDiv.innerHTML = `<button onclick="displayCardContainer('${category.category_id}')" class="font-semibold px-5 py-2 m-4 bg-base-200 hover:bg-red-500 hover:text-white  active:bg-red-500 active:text-white focus:bg-red-500 focus:text-white rounded"> ${category.category}</button>`; 
    //console.log(category.category_name);   
    categoryContainer.appendChild(categoryButtonDiv);
    //console.log(categoryButton);
    
    
  });
  
  };
  
  //Step-3: Display cards dynamically while clicked on category buttons
  //Step-3.1: Fetch data from server for the purpose
  const displayCardContainer = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);  
    const data = await res.json();  
    const categories = data.data;    
    displayCard(categories);    
  }
  

  let viewsOrder = []; 
  console.log(viewsOrder);
  //Step-3.2: Display cards dynamically
    const displayCard = categories => {  
    const cardContainer = document.getElementById('card-container'); 
    const cardContainer2 = document.getElementById('card-container2');  
    cardContainer.innerHTML = "";
    cardContainer2.innerHTML = "";
    
   //console.log(categories.length);
  
   

    if(categories.length!=0){   
        
      //code for sort by view but to show cards on ascending order based on view numbers   
      
      categories.forEach(elem => {
        //numeric value of view numbers
        const viewNumberNumeric =parseFloat(elem.others.views.slice(0,-1))
        //console.log(viewNumberNumeric)
        viewsOrder.push(viewNumberNumeric)
        //sort to rearrange the function to an reverse order
        viewsOrder.sort(function(a, b) {
         return b - a})
         //console.log(viewsOrder); 




  //function to convert time //need to solve black dots  
  const timeConvert =milliSecond=>{
    const hour = Math.floor(milliSecond/(1000*60*60));
    //console.log(hour);
    const minute = Math.floor((milliSecond-hour*1000*60*60)/(1000*60)); 
    //console.log(minute);
    
    if(hour===0&&minute===0){
         return ""
    }
    else if(hour===0){
        return(`${minute}min ago`)
    }
    else {
        return(`${hour}hrs ${minute}min ago`)}
    }

const time = timeConvert(elem.others.posted_date);

  const card = document.createElement('div');    
  card.classList = "";         
  card.innerHTML = `
 
        <figure><img class="h-48 w-full rounded-2xl z-0" src="${elem.thumbnail}" /></figure>
        <div class="relative"> 
        <h2 class="-mt-12 right-4 text-white text-right bg-gray-800 px-4 p-1 rounded-md absolute z-10">${time}</h2>
        </div>
        
        
        <div class="mt-4 flex">
  
        <img class="ml-4 mt-2 w-10 h-10 rounded-full" src="${elem.authors[0].profile_picture}" />    
        
        <div class="card pl-4">
          <h2 class="card-title pb-2">${elem.title}</h2>
          
          <div class="card-actions">
          <p class="text-gray-600">${elem.authors[0].profile_name}</p>          
          <i id="verified-icon" class="ri-verified-badge-fill"></i>
          </div>
          
          <p class="text-gray-600">${elem.others.views}</p>
          </div>        
          </div>          
          `          
        cardContainer.appendChild(card)
        const verifiedStatus = elem.authors[0].verified
        
     
       showVerifiedStatus(verifiedStatus)
  })
    function showVerifiedStatus (verifiedStatus){     
      const verifiedIcon = document.getElementById("verified-icon"); 
      if(verifiedStatus===false){        
      verifiedIcon.classList.add("hidden");             
    }
   
  } 
    }
  else{
    const emptyString = () =>{     
    cardContainer.innerHTML = "";    
      const card = document.createElement('div');    
      card.classList = "my-auto mx-auto rounded-lg border-0  mt-28";         
      card.innerHTML = `  
      
        <div class="flex justify-center">       
        <img class="h-12 rounded-full" src="./86-PHero-tube-main/Icon.png" /> 
        </div>  
        <h2 class="text-2xl font-bold text-center mt-4px">Opps!! Sorry, There is no content here</h2>      
    `      
     cardContainer2.appendChild(card)
   }
   emptyString();
  }   
  
  };


  //displayCardContainer(categoryId) 
  displayCardContainer('${category.category_id}');
  loadCategory();
  displayCardContainer('1000')



  