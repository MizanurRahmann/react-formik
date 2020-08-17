import React from 'react'
import Input from './Fields/Input';

function FormikControl(props) {
    const { control, ...rest } = props;
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return null;
        case 'select':
            return null;
        case 'radio':
            return null;
        case 'checkbox':
            return null;
        case 'date':
            return null;
        default: return null;
    }
    return (
        <div>
            
        </div>
    )
}

export default FormikControl
