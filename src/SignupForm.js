import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  TextField, Button, Box, Typography, Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';

const validationSchema = Yup.object ({
  userName: Yup.string().required("Username is required"),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  mobileNum: Yup.string().required('Mobile Number is required')
})

const useStyles = makeStyles({
  main: {
    width: '100%',
    height: '100%',
    padding: '12px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  button: {
    '&:hover': {
      background: '#ff0000',
      color: 'white',
    }
  },
  userinput: {
    background: 'aliceblue',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '14px',
    borderRadius: '20px'
  }
});

const SignupForm = () => {
  const classes = useStyles();
  const [submitValue, setSubmitValue] = useState(null);

  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
      mobileNum: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      setSubmitValue(values)
    }
  })
  return (
    <Container className={classes.main} component='mian' maxWidth='xs'>
      <Box>
        <Typography component='h1' variant='h4'>
          Registration Form <LockOutlinedIcon />
        </Typography>

        <Box className={classes.container} component='form' onSubmit={formik.handleSubmit} sx={{mt: 3}}>
          <TextField fullWidth
          id='userName'
          name='userName'
          label= 'User Name'
          value={formik.values.userName}
          onChange={formik.handleChange}
          error={formik.touched.userName && Boolean(formik.errors.userName)}
          helperText={formik.touched.userName && formik.errors.userName}
          />

          <TextField fullWidth
          id='email'
          name='email'
          label= 'Email ID'
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          />

          <TextField fullWidth
          id='password'
          name='password'
          label= 'Password'
          type='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          />

          <TextField fullWidth
          id='mobileNum'
          name='mobileNum'
          label= 'Mobile Number'
          type='number'
          value={formik.values.mobileNum}
          onChange={formik.handleChange}
          error={formik.touched.mobileNum && Boolean(formik.errors.mobileNum)}
          helperText={formik.touched.mobileNum && formik.errors.mobileNum}
          />

          <Button className={classes.button} type='submit' fullWidth variant='contained' sx={{mt: 3, mb: 2}}>
            Register
          </Button>
        </Box>

        <Box className={classes.userinput}>
        {
          submitValue && (
            <Box sx={{mt: 2}}>
              <Typography variant='h4'>User Data</Typography>
              <Typography>User Name: {submitValue.userName}</Typography>
              <Typography>Email: {submitValue.email}</Typography>
              <Typography>Password: {submitValue.password}</Typography>
              <Typography>Mobile Number: {submitValue.mobileNum}</Typography>
            </Box>
          )
        }
        </Box>        
      </Box>
      
    </Container>
  )
}

export default SignupForm