function nameMenuItem(menuItemName) {
  return menuItemName = "Delicious " + menuItemName;
};

nameMenuItem("Pizza");

function createMenuItem(name, price, type) {
  return menuItem = {
    name: name,
    price: price,
    type: type
  };
};

function addIngredients(newIngredient, ingredients) {
  if(ingredients.indexOf(newIngredient) === -1) {
    ingredients.push(newIngredient);
  };
};


function formatPrice(initialPrice) {
  return formattedPrice = "$" + initialPrice;
};

function decreasePrice(initialPrice) {
  return decreasedPrice = initialPrice * 0.9;
};


function createRecipe(title, ingredients, menuItemType) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  };
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
};
