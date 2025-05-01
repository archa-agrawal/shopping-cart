export default function CartItem({itemImage, description, price})
{
  const priceString = "$" + price.toString();
    return (
      <div>
        <img src = {itemImage} alt = "" width = "200" height = "150" />
        <p>{description}</p>
        <p>{priceString}</p>
      </div>
    )
}