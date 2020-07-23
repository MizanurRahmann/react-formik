import React from 'react'
import { useFormik } from 'formik';

const initialValues = {
    name: '',
    email: '',
    channel: ''
}
const onSubmit = values => {
    console.log(values);
}
const validate = values => {
    let errors = {}
    //for name
    if(!values.name)
        errors.name = 'Required';
    //for email
    if(!values.email){
        errors.email = 'Required';
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Invalid email format'
    }
    //for channel name
    if(!values.channel)
        errors.channel = 'Required'
    return errors;
}


function YoutubeForms() {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    console.log(formik.touched);

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name 
                        ? (<div className="error-message">{formik.errors.name}</div>)
                        : null
                    }
                </div>

                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email
                        ? (<div className="error-message">{formik.errors.email}</div>)
                        : null
                    }
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Name</label>
                    <input 
                        type="text" 
                        id="channel" 
                        name="channel" 
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel
                        ? (<div className="error-message">{formik.errors.channel}</div>) 
                        : null
                    }
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForms
