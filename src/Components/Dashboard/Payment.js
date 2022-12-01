import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51M66umL4n30cnCo2IPZ6nP8iYFVTTmifMpLSWTeXJEsCLy8UiHv2ahOqdglt8jyvgVUaRSDanFvZCrD8AEjUk0BO00UdOYlgvc"
);
const Payment = () => {
  const patient = useLoaderData();

  const { appointment_for, appointmentDate, appointmentTime, fee } = patient;

  return (
    <div>
      <h3>Payment Page:</h3>
      <p className="font-semibold text-xl">
        Your treatment:{appointment_for}, appointment date {appointmentDate} on{" "}
        {appointmentTime} fee {fee}
      </p>
      <div className="w-2/4 my-10 p-4">
      <Elements stripe={stripePromise}>
        <CheckoutForm patient={patient} />
      </Elements>
      </div>
    
    </div>
  );
};

export default Payment;
