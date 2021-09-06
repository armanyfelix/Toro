import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddressInput from './addressInput';
import { CountryDropdown } from 'react-country-region-selector'
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getShipping } from '../../redux/actions/shippingActions';

function AddressForm({ handleNext }) {

  const dispatch = useDispatch();

  const methods  = useForm();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(shippingData => {
          dispatch(getShipping(shippingData));
        })}>
          <Grid container spacing={3}>
            <AddressInput name="firstName" label="First Name" />
            <AddressInput name="lastName" label="Last Name" />
            <AddressInput name="number" label="Phone Number" />
            <AddressInput name="email" type="email" label="Email" />
            <AddressInput name="address1" label="Address line 1" />
            <AddressInput name="address2" label="Address line 2" />
            <AddressInput name="city" label="City" />
            <AddressInput name="state" label="State/Province/Region" />
            <AddressInput name="postalCode" label="Zip / Postal code" />
            {/* <Grid item xs={12} sm={6}>
              <CountrySelect required name="country" />
            </Grid> */}
            <Grid item xs={12} sm={6}>
              <CountryDropdown required={false} className="outline-none border-b-2 border-gray-300 py-3.5 w-full"
                valueType="short"
              />
            </Grid>
            {/* <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="secondary" value="yes" />}
                label="Use this address for payment details" name="saveAddress"
              />

            </Grid> */}
            <Grid item xs={12}>
              <div className="text-right">
                <Button type="submit" variant="contained" color="primary">Next</Button>
              </div>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </>
  );
}

export default AddressForm;
