import {
  CheckoutItemContainer,
  ImageContainer,
  Quantity,
  RemoveButton,
} from "./checkout-item.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/card.context";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const clearItemHandler = () => clearItemFromCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <span>{name}</span>
      <Quantity>
        <div onClick={removeItemHandler}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={addItemHandler}>&#10095;</div>
      </Quantity>
      <span>{price}</span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
