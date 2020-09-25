import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function LoginForm() {
    const initiaValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = values => {
        console.log(values)
    }

    return (
        <Formik initialValues={initiaValues} validationSchema={validationSchema} onSubmit={onSubmit} >
            {
                formik => {
                    return <Form>
                        <FormikControl
                            control='chakrainput'
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <FormikControl
                            control='chakrainput'
                            type='password'
                            label='Password'
                            name='password'
                        />
                        <button type='submit' disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default LoginForm
