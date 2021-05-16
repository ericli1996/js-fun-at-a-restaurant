
function takeOrder(newOrder, orders) {
  if (orders.length < 3) {
    return orders.push(newOrder);
  };
};

function refundOrder(orderNumber, orders) {
  for (var i = 0; i < orders.length; i++) {
    if (orders[i].orderNumber === orderNumber) {
      orders.splice(i, 1);
    };
  };
};

function listItems(orders) {
  var out = [];

  for (var i = 0; i < orders.length; i++) {
    out.push(orders[i].item);
  };
  return out.join(", ");

};

function searchOrder(orders, orderItem) {
  var out = [];

  for (var i = 0; i < orders.length; i++) {
    out.push(orders[i].item);
  } if (out.indexOf(orderItem) === -1) {
    return false;
  } else {
    return true;
  };
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
