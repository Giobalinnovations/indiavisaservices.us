'use client';
import useVisaBookingPaymentPost from '@/hooks/useVisaBookingPaymentPost';
// import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
// const stripePromise = loadStripe(
//   process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST
// );
export default function StripePaymentTesting() {
  const postPayment = useVisaBookingPaymentPost({
    apiEndpointUrl: 'api/checkout-session/evisa1121922',
    successMessage: 'Successful',
  });

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
          {postPayment.isPending ? 'Processing...' : 'Make Payment'}
        </button>
      </form>
    </div>
  );
}
