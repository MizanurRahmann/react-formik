import React from 'react'
import { useFormik } from 'formik';

function YoutubeForms() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channel: ''
        }
    })
    console.log(formik.values);

    return (
        <div>
            <form>
                <label htmlFor='name'>Name</label>
                <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>

                <label htmlFor='email'>Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>

                <label htmlFor='channel'>Name</label>
                <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForms
