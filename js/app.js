const allMeal = async (name) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMeal(data.meals);
  } catch (e) {
    console.log(e);
  }
};

const displayMeal = (meals) => {
  const favorite = document.getElementById("favorite-section");
  favorite.innerHTML = "";
  meals.forEach((meal) => {
    const cart = document.createElement("div");
    // console.log(meal);
    cart.innerHTML = `
    <div class="card lg:card-side h-full bg-base-100 shadow-xl">
          <figure>
          <img class="h-full  object-fill " src="${
            meal.strMealThumb
          }" alt="Movie"/>
        </figure>
          <div class="card-body">
            <h2 class="card-title">${meal.strMeal}</h2>
            <p>${meal.strInstructions.substr(0, 100)}</p>
            <div class="card-actions justify-end">
              <label for="my-modal-3" onclick="btnDetails(${
                meal.idMeal
              })" class="btn btn-accent">View Details</label>
            </div>
          </div>
    </div> 
    `;
    favorite.appendChild(cart);
  });
};

const btnDetails = async (idMeal) => {
  console.log("clicked", idMeal);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayMealModal(data.meals[0]);
  } catch (e) {
    console.log(e);
  }
};

const displayMealModal = (meal) => {
  const name = document.getElementById("name");
  const des = document.getElementById("des");
  const img = document.getElementById("img");
  const category = document.getElementById("category");
  const area = document.getElementById("area");
  const youtube = document.getElementById("youtube");

  name.innerText = meal.strMeal;
  des.innerText = meal.strInstructions.substring(0, 300);
  img.setAttribute("src", meal.strMealThumb);
  category.innerText = meal.strCategory;
  area.innerText = meal.strArea;
  youtube.setAttribute("href", meal.strYoutube);
  youtube.innerText = meal.strYoutube;
  console.log(meal);
};

const searchButton = () => {
  const input = document.getElementById("input").value;

  // const search = document.getElementById("search");
  allMeal(input);
  console.log("clicked", input);
};

allMeal("rice");
