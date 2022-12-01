import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ patient }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const {
    fee,
    patientName,
    patientEmail,
    patientPhone,
    appointment_for,
    appointmentDate,
    appointmentTime,
    _id,
  } = patient;
  const [success, setSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctors-portal-server-beta.vercel.app/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fee }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [fee]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (elements === null) {
      return;
    }

    const card = elements.getElement(CardElement);
    setSuccess("");
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    if (error) {
      setCardError(error.message);
      console.log(error.message);
    } else {
      setCardError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patientEmail,
          },
        },
      });
    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        patientName,
        patientEmail,
        transactionId: paymentIntent.id,
        fee,
        patientPhone,
        appointment_for,
        appointmentDate,
        appointmentTime,
        paymentStatus: "paid",
        patientId: _id,
      };

      fetch("https://doctors-portal-server-beta.vercel.app/payment", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            setSuccess("Congratulations your payment completed.");
            setTransactionId(`and your transactionId id:${paymentIntent.id}`);
          }
        });
    }
    setProcessing(false);
    console.log(paymentIntent);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement className="border border-blue-500 py-6 px-5" />
        <button
          type="submit"
          disabled={!stripe || !elements || processing}
          className="btn btn-small btn-primary rounded-sm my-3 w-full text-white text-2xl"
        >
          Pay appointment fee
        </button>
        <p className="text-red-500">{cardError}</p>
        <p className="text-green-500 ">
          {success} {transactionId}
        </p>
      </form>
    </>
  );
};

export default CheckoutForm;
