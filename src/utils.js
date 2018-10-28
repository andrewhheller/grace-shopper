const getProductById = (products, id) => {
  return products.find(product => product.id === id)
}

const orderTotal = (line_items) => {

  return line_items.reduce((total, line_item) => {
    total += (line_item.price * line_item.quantity)
    return total
  }, 0)

}

// converts date format from raw sequelize format to MM-DD-YYYY
const dateFormatter = (date) => {
  const _date = date.slice(0, 10)
  const array = _date.split('-');
  array.push(array.shift())

  return array.join('-');
}

export {
  getProductById,
  orderTotal,
  dateFormatter
}
