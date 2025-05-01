export default function Subtotal ({totalPrice, totalItems})
{
  return (
    <div>
      <p>Subtotal : {totalPrice}</p>
      <p>Number of Items : {totalItems}</p>
    </div>
  )
}