import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Step1 from './Step1'
import Step2 from './Step2';
function Register({input, setinput}) {
    const [click1, setClick1] = useState(false);
    return (
        <>
            <Step1 click1 = {click1} setClick1 = {setClick1}/>
            {
                click1 && (
                    <Step2 input = {input}/>
                )
            }
        </>
    )
}

export default Register

