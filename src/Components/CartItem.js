export default function CartItem({itemImage, description, price})
{
    return (
      <div>
        <img src = {itemImage} alt = "" width = "200" height = "150" />
        <p>{description}</p>
        <p>{price}</p>
      </div>
    )
}