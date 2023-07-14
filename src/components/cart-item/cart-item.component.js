import { CartItemContainer, Img, Name, ItemDetail } from "./cart-item.styles";

const CartItem = function ({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetail>
        <Name>{name}</Name>
        <span className="price">
          {quantity}x ${price}
        </span>
      </ItemDetail>
    </CartItemContainer>
  );
};

export default CartItem;
