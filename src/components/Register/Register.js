import {
  Paper,
  Box,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';
import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useHistory} from 'react-router-dom';
import {BsPersonCircle} from "react-icons/bs";

function loginUser() {
  return { "token" :"token@123"};
  
 };
const Register = ({setToken}) => {
  const history = useHistory();
  
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required')
    .matches(/[a-zA-Z]/, 'Fullname can only contain Letters.'),
    
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
      .max(40, 'Password must not exceed 40 characters')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (event)=> {
    const token = loginUser();
    setToken(token);
    alert("Registration Successful");
    history.push("/home");
  };
  return (
    <Fragment>
      <Paper>
        <Box px={3} py={2}>
          <Typography variant="h6" align="center" margin="dense">
           <h3><BsPersonCircle /></h3>
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
             <center><TextField
                required
                id="fullname"
                name="fullname"
                label="Full Name"
           
                variant="outlined"
                margin="dense"
                {...register('fullname')}
                error={errors.fullname ? true : false}
              /></center><center>
              <Typography variant="inherit" color="textSecondary">
                {errors.fullname?.message}
              </Typography></center>
            </Grid>
            
            <Grid item xs={12} sm={12}>
             <center> <TextField
                required
                id="email"
                name="email"
                label="Email"
              
                variant="outlined"
                margin="dense"
                {...register('email')}
                error={errors.email ? true : false}
              /></center><center>
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography></center>
            </Grid>
            <Grid item xs={12} sm={12}>
            <center> <TextField
                required
                id="password"
                name="password"
                label="Password"
                type="password"
               
                variant="outlined"
                margin="dense"
                {...register('password')}
                error={errors.password ? true : false}
              /></center><center>
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography></center>
            </Grid>
            <Grid item xs={12} sm={12}>
             <center> <TextField
                required
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                
                variant="outlined"
                margin="dense"
                {...register('confirmPassword')}
                error={errors.confirmPassword ? true : false}
              /></center><center>
              <Typography variant="inherit" color="textSecondary">
                {errors.confirmPassword?.message}
              </Typography></center>
            </Grid>
            <Grid item xs={12}>
              <center><FormControlLabel
                control={
                  <Controller
                    control={control}
                    name="acceptTerms"
                    defaultValue="false"
                    inputRef={register()}
                    render={({ field: { onChange } }) => (
                      <Checkbox
                        color="primary"
                        onChange={e => onChange(e.target.checked)}
                      />
                    )}
                  />
                }
                label={
                  <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                    I have read and agree to the Terms *
                  </Typography>
                }
              /></center>
              <br />
              <center>
              <Typography variant="inherit" color="textSecondary">
                {errors.acceptTerms
                  ? '(' + errors.acceptTerms.message + ')'
                  : ''}
              </Typography></center>
            </Grid>
          </Grid><center>
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Register
            </Button>
          </Box></center>
        </Box>
      </Paper>
    </Fragment>
  );
};
export default Register;