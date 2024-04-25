import { CartProductType } from "./Cart.types";
import { IoMdClose } from "react-icons/io";
import classes from "../../../../style/Layouts/Drawer/Cart/CartItem.module.scss";
import { useState } from "react";
import { UseMutateFunction } from "react-query";

type CartItemProps = {
  product: CartProductType;
  onRemoveFromCart: UseMutateFunction<void, unknown, string, unknown>;
};

const CartItem: React.FC<CartItemProps> = ({ product, onRemoveFromCart }) => {
  const [showActionsOverlay, setShowActionsOverlay] = useState<boolean>(false);
  const { color, model, option, _id } = product;

  const priceText = `${option.price}$ or ${parseFloat(
    (option.price / 12).toFixed(2)
  )}/mo. for 12 mo.`;

  const cartItemClickHandler = () => {
    setShowActionsOverlay((p) => !p);
  };

  return (
    <div className={classes.container}>
      {showActionsOverlay && (
        <div className={classes.actionsOverlay}>
          <IoMdClose
            className={classes.closeIcon}
            onClick={cartItemClickHandler}
          />
          <button
            className={classes.removeBtn}
            onClick={() => onRemoveFromCart(_id)}
          >
            Remove from cart
          </button>
        </div>
      )}
      <div className={classes.cartItem} onClick={cartItemClickHandler}>
        <div className={classes.imageContainer}>
          <img src={color.image} alt={model} />
        </div>
        <div className={classes.content}>
          <div className={classes.infoContainer}>
            <h1 className={classes.model}>{model}</h1>
            <div className={classes.info}>
              <b>color:</b>
              <div>
                <div
                  className={classes.color}
                  style={{ backgroundColor: `#${color.hex}` }}
                />
              </div>
              <p>{color.name}</p>
              <hr />
              <b>{option.capacity}</b>
            </div>
          </div>

          <hr className={classes.separateLine} />
          <div className={classes.priceContainer}>
            <p>{priceText}</p>
            <p>
              <b>Total:</b> {option.price}$
            </p>
            <span className={classes.clickNote}>* click for remove option</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
