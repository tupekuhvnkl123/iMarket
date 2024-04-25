import CartItem from "./CartItem";
import classes from "../../../../style/Layouts/Drawer/Cart/Cart.module.scss";
import ExploreCard from "../../../UI/ExploreCard";
import { useMutation, useQuery } from "react-query";
import { PuffLoader } from "react-spinners";
import { CartProductType } from "./Cart.types";
import { getAxiosRequest, getErrorMsg } from "../../../../utils/functions";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import SnackBar from "../../../UI/SnackBar";
import { DrawerValues } from "../Drawer.types";
import { DrawerContext } from "../../../../context/DrawerContext";
import Cookies from "js-cookie";

const Cart: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { setDrawerContent } = useContext(DrawerContext);
  const { data, isError, isLoading, error, refetch } = useQuery("cart", {
    enabled: isLoggedIn,
    queryFn: () => getAxiosRequest<{ cart: CartProductType[] }>("/cart"),
  });

  const checkout = async () => {
    const response = await axios.post("/cart/checkout");
    return response.data;
  };

  const checkoutMutation = useMutation({
    mutationFn: () =>
      checkout().then((data) => {
        Cookies.set("stripeOrderId", data.stripeOrderId, { expires: 1 / 48 });

        window.location.href = data.checkoutUrl;
      }),
  });

  const removeFromCart = async (id: string) => {
    const response = await axios.post("/cart/delete", { id });
    return response.data;
  };

  const removeFromCartMutation = useMutation({
    mutationFn: (id: string) =>
      removeFromCart(id).then(() => {
        refetch();
      }),
  });

  if (!isLoggedIn) {
    setDrawerContent(DrawerValues.account);
  }

  if (isLoading) {
    return (
      <div className={classes.loaderContainer}>
        <PuffLoader color="white" />
      </div>
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
    <>
      <div className={classes.container}>
        {data && (
          <>
            <ul className={classes.cartList}>
              {data.cart.map((product: CartProductType) => {
                return (
                  <CartItem
                    key={product._id}
                    product={product}
                    onRemoveFromCart={removeFromCartMutation.mutate}
                  />
                );
              })}
            </ul>
            <div className={classes.paySection}>
              <p>
                <b>Total:</b> {totalPrice}$
              </p>
              <button
                className={classes.buyButton}
                type="button"
                onClick={() => checkoutMutation.mutate()}
              >
                Buy now
              </button>
            </div>
          </>
        )}
      </div>

      <SnackBar
        open={isError || removeFromCartMutation.isError}
        hideDuration={5000}
        message={getErrorMsg(error || removeFromCartMutation.error)}
      />
    </>
  );
};

export default Cart;
