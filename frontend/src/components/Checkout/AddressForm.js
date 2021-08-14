import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm, FormProvider } from "react-hook-form";
import AddressInput from './addressInput';
import CountrySelect from './CountrySelector';

function AddressForm() {

  const methods = useForm();


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(data => {
          console.log(data)
        })}>
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="phoneNumber" label="Phone number" autoComplete="shipping  " />
            <AddressInput required name="email" type="email" label="Email" />
            <AddressInput required name="address1" label="Address line 1" autoComplete="shipping address-line1" />
            <AddressInput required name="address2" label="Address line 2" autoComplete="shipping address-line2" />
            <AddressInput required name="city" label="City" autoComplete="shipping address-level2" />
            <AddressInput required name="state" label="State/Province/Region" />
            <AddressInput required name="postalCode" label="Zip / Postal code" autoComplete="shipping postal-code" />
            <Grid item xs={12} sm={6}>
              <CountrySelect required name="country" />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" value="yes" />}
                label="Use this address for payment details" name="saveAddress"
              />

            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm;
