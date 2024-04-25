import createHttpError from "http-errors";
import { CartSchemaType } from "../../types/cart.types";
import stripe from "./stripe";

export const createCheckoutSession = (cart: CartSchemaType) => {
  const timestampInSeconds = Math.floor(new Date().getTime() / 1000);
  const thirtyMinFromNow = timestampInSeconds + 1800;

  return stripe.checkout.sessions.create({
    expires_at: thirtyMinFromNow,
    payment_intent_data: {
      metadata: {
        orderId: cart.map((product) => product.productId).join("-"),
      },
    },
    payment_method_types: ["card", "amazon_pay"],
    line_items: cart.map(({ model, color, option }) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: model,
          images: [color.image],
          description: `${model} ${color.name}${
            option.capacity && ", " + option.capacity
          }`,
        },
        unit_amount: option.price * 100,
      },
      quantity: 1,
    })),
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/order-succeed`,
    cancel_url: `${process.env.CLIENT_URL}`,
  });
};

export const checkPaymentById = async (id: string) => {
  const paymentIntent = await stripe.checkout.sessions.retrieve(id);
  if (!paymentIntent || paymentIntent.payment_status !== "paid") {
    throw createHttpError.BadRequest(
      "Payment wasn't successful, please try again"
    );
  }
  return paymentIntent;
};
