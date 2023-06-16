import React, { useState, useEffect } from 'react'
import Contactusimg from '../images/contactusimg.png'
import { TextField, Button } from '@mui/material'
import { Alert, AlertTitle } from '@mui/material';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { useForm, ValidationError } from '@formspree/react';
const Contact_us = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    })

    const [userdata, setuserdata] = useState({
        firstName: "",
        Email: "",
        Message: "",
    })

    const handlesubmit = () => {
        console.log("clicked on submit");
        setuserdata({
            firstName: "",
            Email: "",
            Message: "",
        })
    }

    // formdatasen
    const [state, handleSubmit] = useForm("xknadzbw");
    if (state.succeeded) {
        return (
            <Alert className='text-center bg-[#EDF7ED] mx-auto w-full md:w-3/12' severity="success">
                <AlertTitle className=''>Success</AlertTitle>
                Your Message get me <strong>ill reach you!😉</strong>
            </Alert>);
    }


    // console.log(userdata);
    return (
        <div >
            <div data-aos='zoom-in' id='contact' className='  md:w-full mx-auto  md:flex py-10 my-10 bg-gradient-to-r from-cyan-100 to-blue-100' >
                <div className=' mx-auto h-auto  w-full md:w-6/12'>
                    <img src={Contactusimg} alt="" />
                </div>
                <form onSubmit={handleSubmit}>
                    <div className=' p-3 box-border mx-auto  space-y-10 md:w-3/6'>
                        <p className='text-3xl text-center font-bold text-blue-700'>Contact-me 😄</p>
                        <TextField autoComplete='false' className='w-full ' prefix="name" name='name' value={userdata.firstName} onChange={(e) => setuserdata({ ...userdata, firstName: e.target.value })} required id="standard-basic" label="First-Name" variant="filled" />
                        <TextField className='w-full ' prefix="Email" name="email" value={userdata.Email} onChange={(e) => setuserdata({ ...userdata, Email: e.target.value })} required id="standard-basic" label="Email" variant="filled" />
                        <TextField className='w-full ' prefix="Message" name="message" value={userdata.Message} onChange={(e) => setuserdata({ ...userdata, Message: e.target.value })} required rows={3} multiline id="standard-basic" label="Message" variant="filled" />
                        <Button type='submit' variant='outlined' disabled={state.submitting} >Submit</Button>
                    </div>

                </form>

            </div>
        </div>


    )
}

export default Contact_us