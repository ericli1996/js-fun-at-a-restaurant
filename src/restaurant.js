function createRestaurant(name) {
  return restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
};


function addMenuItem(restaurant, newItem) {
  if (newItem.type === "lunch" && restaurant.menus.lunch.indexOf(newItem) === -1) {
    restaurant.menus.lunch.push(newItem);
  } else if (newItem.type === "breakfast" && restaurant.menus.breakfast.indexOf(newItem) === -1) {
    restaurant.menus.breakfast.push(newItem);
  } else if (newItem.type === "dinner" && restaurant.menus.dinner.indexOf(newItem) === -1) {
    restaurant.menus.dinner.push(newItem);
  }
};

function removeMenuItem(restaurant, removeItem, type) {
  if (restaurant.menus.breakfast.length === 0 || restaurant.menus.lunch.length === 0 || restaurant.menus.dinner.length === 0) {
    return `Sorry, we don't sell ${removeItem}, try adding a new recipe!`;
  } else if (type === "breakfast" && restaurant.menus.breakfast[0].name === removeItem) {
    restaurant.menus.breakfast.splice(0, 1);
    return `No one is eating our ${removeItem} - it has been removed from the ${type} menu!`;
  } else if (type === "lunch" && restaurant.menus.lunch[0].name === removeItem) {
    restaurant.menus.lunch.splice(0, 1);
    return `No one is eating our ${removeItem} - it has been removed from the ${type} menu!`;
  } else if (type === "dinner" && restaurant.menus.dinner[0].name === removeItem) {
    restaurant.menus.dinner.splice(0, 1);
    return `No one is eating our ${removeItem} - it has been removed from the ${type} menu!`;
  } else {
  };
};



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
