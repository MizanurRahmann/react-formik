import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../TextError';

function CheckBoxGroup(props) {
    const {label, name, options, ...rest} = props;
    return (
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} >
                {({field}) => {
                    return options.map(option => {
                        return (
                            <div className="radio__option" key={option.key}>
                                <input 
                                    type="checkbox"
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.calue && field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </div>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default CheckBoxGroup
