import React from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
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
    comment: Yup.string().required('Required'),
    address: Yup.string().required('Required')
})

function YoutubeForms() {

    return (
        <Formik 
            initialValues = {initialValues}
            validationSchema = {validationSchema}
            onSubmit = {onSubmit}
        >
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <Field 
                        type="text" 
                        id="name" 
                        name="name"
                    />
                    <ErrorMessage name="name" component={TextError}/>
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
                    <ErrorMessage name="channel"/>
                </div>
                <div className="form-control">
                    <label htmlFor='comment'>Comment</label>
                    <Field 
                        as= "textarea"
                        id="comment" 
                        name="comment"
                    />
                </div>
                <div className="form-control">
                    <label htmlFor='address'>Address</label>
                    <Field name="address">
                        {props => {
                            const {field, form, meta} = props;
                            return(
                                <div>
                                    <input type="text" id="address" {...field}/>
                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                </div>
                            )
                        }}
                    </Field>
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
                                const {push, remove, form} = fieldArrayProps;
                                const {values} = form;
                                const {phNumbers} = values;
                                return(
                                    <div>
                                        {phNumbers.map((phNmber, index) => (
                                            <div key={index}>
                                                <Field name={`phNumbers[${index}]`}/>
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

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YoutubeForms
