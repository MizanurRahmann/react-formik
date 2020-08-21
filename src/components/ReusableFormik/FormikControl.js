import React from 'react'
import Input from './Fields/Input';
import TextArea from './Fields/TextArea';
import Select from './Fields/Select';
import Radio from './Fields/Radio';

function FormikControl(props) {
    const { control, ...rest } = props;
    switch(control){
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <TextArea {...rest} />;
        case 'select':
            return <Select {...rest} />;
        case 'radio':
            return <Radio {...rest} />;
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
