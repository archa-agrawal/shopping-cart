import Header from "./Header"
import CartItem from "./CartItem"

const cartItems = [
  {
    itemImage : "lime.jpeg",
    description : "fresh and juicy lime",
    price : "$2.25"
  },
  {
    itemImage : "lime.jpeg",
    description : "fresh and juicy lime",
    price : "$2.25"
  },
  {
    itemImage : "lime.jpeg",
    description : "fresh and juicy lime",
    price : "$2.25"
  }
]

export default function ShoppingCart()
{
  const items = cartItems.map((item) => {
    return (
      <div>
      <CartItem
        itemImage = {item.itemImage}
        description = {item.description}
        price = {item.price}
      />
    </div>
    )  
  })
  return (
    <div>
      <Header/>
      <p> Shopping Cart</p>
      <div>{items}</div>
      <button>Proceed to checkout</button>
    </div>
  )
}