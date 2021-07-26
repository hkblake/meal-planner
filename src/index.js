import "./styles.css";

const meal = {
  title: "Some Title",
  time: 30,
  servings: 4,
  ingredients: ["chicken", "coconut milk", "turmeric powder"]
};

function getTitle(meal) {
  return meal.title;
}

console.log(meal);

function sum(a, b) {
  return a + b;
}
// console.log(sum(1, 2));

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  
</div>
`;
