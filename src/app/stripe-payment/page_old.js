'use client';
import useVisaBookingPaymentPost from '@/hooks/useVisaBookingPaymentPost';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function StripePaymentTesting() {
  const postPayment = useVisaBookingPaymentPost({
    apiEndpointUrl: 'http://localhost:8090/api/checkout-session/evisa9503592',
    successMessage: 'Successful',
  });
  async function redirectToCheckout(e) {
    e.preventDefault();
    const stripe = await stripePromise;
    try {
      const response = await fetch(
        `http://localhost:8090/api/checkout-session/evisa9503592`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();

      console.log(data);

      await stripe.redirectToCheckout({
        sessionId: data.session.id,
      });

      // todos
      // const result = await stripe.redirectToCheckout({
      //   sessionId: data.id,
      // });

      // todos
      // if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      // }
    } catch (error) {
      console.log(error);
    }
    // const result = await stripe.redirectToCheckout({
    //   sessionId: data.id,
    // });

    // if (result.error) {
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `result.error.message`.
    // }
  }

  // useEffect(() => {
  //   redirectToCheckout();
  // }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    postPayment.mutate({});
  };

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      console.log(
        'Order canceled -- continue to shop around and checkout when you’re ready.'
      );
    }
  }, []);
  return (
    <div className="px-10 py-40">
      <form onSubmit={handleSubmit}>
        <button className="text-white bg-primary">
          {postPayment.isPending ? 'Loading...' : 'Make Payment'}
        </button>
      </form>
    </div>
  );
}
