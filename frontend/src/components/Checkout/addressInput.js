import { useFormContext, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function AddressInput({ name, label, autoComplete, required }) {
    const { control } = useFormContext();
    return (
        <Grid item xs={12} sm={6}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                required={required}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <TextField
                        label={label}
                        fullWidth
                        value={value}
                        autoComplete={autoComplete}
                        onChange={onChange}
                        error={!!error}
                        helperText={error ? error.message : null}
                    />
                )}
                rules={{ required: 'Required' }}
            />
        </Grid>
    )
}

export default AddressInput
