import { useFormContext } from '@/context/formContext';
import axiosInstance from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE
);
export default function useVisaBookingPaymentPost({
  apiEndpointUrl,
  isDispatch = false,
  routeUrl = false,
  queryKey,
  successMessage,
}) {
  const queryClient = useQueryClient();
  const { dispatch } = useFormContext();
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: formData => {
      return axiosInstance.post(apiEndpointUrl, formData);
    },
    onSuccess: async data => {
      // console.log(data.data.session);
      const stripe = await stripePromise;

      await stripe.redirectToCheckout({
        sessionId: data.data.session.id,
      });

      if (isDispatch) {
        dispatch({
          type: 'SET_FORM_ID',
          payload: data?.data?._id,
        });
      }

      queryClient.invalidateQueries({ queryKey: [queryKey] });

      toast.success(successMessage ?? 'Form Submitted successfully', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1000,
      });

      if (routeUrl) {
        router.push(`${routeUrl}`);
      }
    },
    onError: error => {
      console.error(error.message);

      toast.error(
        'An error occurred while processing your request. Please try again later.',
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 1000,
        }
      );
    },
  });

  return mutation;
}
