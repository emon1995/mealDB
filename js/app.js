const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
const allMeal = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

allMeal();
