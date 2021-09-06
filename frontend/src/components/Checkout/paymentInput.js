import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { useFormContext, Controller } from 'react-hook-form';

function PaymentInput({ name, label, required, type, helperText }) {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                    <TextField
                        label={label}
                        fullWidth
                        required={required}
                        type={type}
                        value={value}
                        onChange={onChange}
                        helperText={helperText}
                    />
                )}
            />
        </Grid>
    )
}

export default PaymentInput;
