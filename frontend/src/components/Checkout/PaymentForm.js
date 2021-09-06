import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './Review';
import axios from 'axios';

const stripePromise = loadStripe("pk_test_51JQ4PnII8BayBJ3bFpVAttsYF0gZn4eBDDuRYVx59DCPr3XS1rajz0949bB139iyeCT74cli3bC1gCXYfgZC7kzZ00Vm0WbIGJ")

const CARD_ELEMENT_OPTIONS = {
  iconStyle: "solid",
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: "#333",
      fontSize: "18px",
      "::placeholder": {
        color: "#ccc",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = ({ handleNext, handleBack, getCartSubTotal }) => {

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement)
    })
    if (!error) {
      const { id } = paymentMethod;
      await axios.post("http://localhost:3001/api/checkout", {
        id,
        amount: getCartSubTotal() * 100,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <div className="text-right mt-10 -mb-3.5 ">
        <Button variant="outlined" style={{margin: '10px'}} onClick={handleBack}>Back</Button>
        <Button disable={true} type="submit" onClick={handleNext} variant="contained" color="primary">Pay</Button>
      </div>
    </form>
  )
}

function PaymentForm({ handleNext, handleBack }) {
  return (
    <>
      <Review/>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Elements handleNext={handleNext} handleBack={handleBack} stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </>
  );
}

export default PaymentForm;