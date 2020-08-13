import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comment: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumbers: ['', ''],
    phNumbers: ['']
}
const onSubmit = values => {
    console.log(values);
}
const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string().email("Invalid email format").required('Required!'),
    channel: Yup.string().required('Required!'),
    address: Yup.string().required('Required')
})

const validateComment = (value) => {
    let error;
    if (!value)
        error = "Required";
    return error;
}
function YoutubeForms() {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        //validateOnChange={false} //prevent from.errors to run on change
        //validateOnBlur={false} //prevent from.errors to run on blur
        // validateOnMount //disable submit button when it is not valid
        >
            {formik => {
                console.log("Formik props: ", formik);
                return (
                    <Form>
                        <div className="form-control">
                            <label htmlFor='name'>Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                            />
                            <ErrorMessage name="name" component={TextError} />
                        </div>

                        <div className="form-control">
                            <label htmlFor='email'>Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                            />
                            <ErrorMessage name="email">
                                {
                                    (errorMessage) => <div className="error">{errorMessage}</div>
                                }
                            </ErrorMessage>
                        </div>

                        <div className="form-control">
                            <label htmlFor='channel'>Name</label>
                            <Field
                                type="text"
                                id="channel"
                                name="channel"
                                placeholder="Youtube channel name"
                            />
                            <ErrorMessage name="channel" />
                        </div>
                        <div className="form-control">
                            <label htmlFor='comment'>Comment</label>
                            <Field
                                as="textarea"
                                id="comment"
                                name="comment"
                                validate={validateComment}
                            />
                            <ErrorMessage name="comment" component={TextError} />
                        </div>
                        <div className="form-control">
                            <label htmlFor='address'>Address</label>
                            <FastField name="address">
                                {/* render props pattern */}
                                {props => {
                                    // console.log("Fast field checking.")
                                    const { field, form, meta } = props;
                                    return (
                                        <div>
                                            <input type="text" id="address" {...field} />
                                            {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                        </div>
                                    )
                                }}
                            </FastField>
                        </div>
                        <div className="form-control">
                            <label htmlFor='facebook'>Facebook profile</label>
                            <Field type="text" id="facebook" name="social.facebook" />
                        </div>
                        <div className="form-control">
                            <label htmlFor='twitter'>Facebook profile</label>
                            <Field type="text" id="twitter" name="social.twitter" />
                        </div>
                        <div className="form-control">
                            <label htmlFor='primaryPh'>Primary Phone number</label>
                            <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                        </div>
                        <div className="form-control">
                            <label htmlFor='secondaryPh'>Secondary Phone number</label>
                            <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                        </div>
                        <div className="form-control">
                            <label htmlFor='secondaryPh'>List of numbers</label>
                            <FieldArray name="phNumbers">
                                {
                                    (fieldArrayProps) => {
                                        const { push, remove, form } = fieldArrayProps;
                                        const { values } = form;
                                        const { phNumbers } = values;
                                        // console.log("Form errors: ", form.errors)
                                        return (
                                            <div>
                                                {phNumbers.map((phNmber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {index > 0 && <button type="button" onClick={() => remove(index)}> - </button>}
                                                        <button type="button" onClick={() => push('')}> + </button>
                                                    </div>
                                                ))}
                                            </div>
                                        )
                                    }
                                }
                            </FieldArray>
                        </div>

                        {/* validate form and field */}
                        <button type="button" onClick={() => formik.validateField('comment')}> validate comment</button>
                        <button type="button" onClick={() => formik.validateForm()}> validate all</button>

                        {/* set touched form and field */}
                        <button
                            type="button"
                            onClick={() => formik.setFieldTouched('comment')}
                        >
                            visit comment
                        </button>
                        <button
                            type="button"
                            onClick={() => formik.setTouched({
                                name: true,
                                email: true,
                                channel: true,
                                comment: true
                            })}
                        >
                            visit all
                        </button>

                        {/* submit */}
                        <button type="submit" disabled={!(formik.dirty && formik.isValid)}>Submit</button>
                        {/*
                            formik.dirty is true when we change any value of field 
                            formik.isValid is true when form is valid
                        */}
                    </Form>
                )

            }}
        </Formik>
    )
}

export default YoutubeForms
