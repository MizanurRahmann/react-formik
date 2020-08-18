import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from './FormikControl';


function FormikContainer() {
    const dropDownOption = [
        {key: "Select an option", value: ''},
        {key: "option 1", value: 'value1'},
        {key: "option 2", value: 'value2'},
        {key: "option 3", value: 'value3'},
    ]

    const initiaValues = {
        email: '',
        description: '',
        selectOption: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
    });

    const onSubmit = values => console.log("Form data: ", values);

    return (
        <Formik 
            initialValues={initiaValues}
            validationSchema={validationSchema}
            onSubmit= {onSubmit}
        >
            {formik => (
                <Form>
                    <FormikControl 
                        control="input"
                        type="email" 
                        label="Email" 
                        name="email"
                    />
                    <FormikControl 
                        control="textarea"
                        label="Description" 
                        name="description"
                    />
                    <FormikControl 
                        control="select"
                        label="Select an option" 
                        name="selectOption"
                        options={dropDownOption}
                    />
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer
