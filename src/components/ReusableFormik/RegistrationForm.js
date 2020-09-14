import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';

function RegistrationForm() {
    const options = [
        {key: 'Phone', value: 'phonemoc'},
        {key: 'Email', value: 'emailmoc'}
    ];

    const initialValues = {
        email: "",
        password: "",
        confirmPassword: "",
        modeContact: "",
        phone: ""
    }

    const validationSchema = Yup.object({
        email: Yup.string().
            email('Invalid email format').required('Required'),
        password: Yup.string()
            .required('Required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), ''], "Password must be matched")
            .required('Requiredd'),
        modeContact: Yup.string()
            .required('Required'),
        phone: Yup.string()
            .when('modeContact', { 
                is: 'phonemoc',
                then: Yup.string().required('Required')
        })
    });

    const onSubmit = values => {
        console.log('From data', values);
    }
    
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => {
                return <Form>
                    <FormikControl
                        control='input'
                        type='email'
                        label='Email'
                        name='email'
                    />
                    <FormikControl
                        control='input'
                        type='password'
                        label='Password'
                        name='password'
                    />
                    <FormikControl
                        control='input'
                        type='password'
                        label='Confirm Password'
                        name='confirmPassword'
                    />
                    <FormikControl 
                        control='radio'
                        label='Mode of contact'
                        name='modeContact'
                        options={options}
                    />
                    <FormikControl 
                        control='input'
                        type='text'
                        label='Phone number'
                        name='phone'
                    />
                    <button type='submit'>Submit</button>
                </Form>
            }}
        </Formik>
    )
}

export default RegistrationForm;
