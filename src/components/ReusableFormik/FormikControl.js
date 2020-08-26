import React from 'react'
import Input from './Fields/Input';
import TextArea from './Fields/TextArea';
import Select from './Fields/Select';
import Radio from './Fields/Radio';
import CheckBoxGroup from './Fields/CheckBoxGroup';
import DatePicker from './Fields/DatePicker';

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
            return <CheckBoxGroup {...rest} />;
        case 'date':
            return <DatePicker {...rest} />;
        default: return null;
    }
    return (
        <div>
            
        </div>
    )
}

export default FormikControl
