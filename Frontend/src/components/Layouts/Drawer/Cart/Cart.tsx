import CartItem from "./CartItem";
import classes from "../../../../style/Layouts/Drawer/Cart/Cart.module.scss";
import ExploreCard from "../../../UI/ExploreCard";
import { useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { CartProductType } from "./Cart.types";
import { Snackbar } from "@mui/material";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";

const Cart: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { data, isError, isLoading, error } = useQuery("cart", {
    enabled: isLoggedIn,
    queryFn: () => getAxiosRequest<{ cart: CartProductType[] }>("/cart"),
  });

  if (isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <PuffLoader color="white" />
      </div>
    );
  }

  if (isError) {
    return (
      <Snackbar
        open={isError}
        autoHideDuration={5000}
        message={getErrorMsg(error)}
      />
    );
  }

  if (!data?.cart?.length) {
    return <ExploreCard text="Your cart is empty..." />;
  }

  const totalPrice = data?.cart?.reduce(
    (total, product: CartProductType) => total + product.option.price,
    0
  );

  return (
    <div className={classes.container}>
      {data && (
        <ul className={classes.cartList}>
          {data.cart.map((product: CartProductType) => (
            <CartItem key={product._id} product={product} />
          ))}
        </ul>
      )}
      <div className={classes.paySection}>
        <p>
          <b>Total:</b> {totalPrice}$
        </p>
        <button className={classes.buyButton}>Buy now</button>
      </div>
    </div>
  );
};

export default Cart;
