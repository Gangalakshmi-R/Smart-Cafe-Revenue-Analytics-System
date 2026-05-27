import React, { useState } from 'react'

import axios from 'axios'

import { useNavigate } from 'react-router-dom'

import InputCards from '../components/InputCards'

function InputPage() {

    const navigate = useNavigate()

    const [error, setError] = useState('')

    const [formData, setFormData] = useState({

        Number_of_Customers_Per_Day:'',

        Average_Order_Value:'',

        Operating_Hours_Per_Day:'',

        Number_of_Employees:'',

        Marketing_Spend_Per_Day:'',

        Location_Foot_Traffic:'',

        Target_Revenue:''
    })


    // HANDLE INPUTS

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]: e.target.value
        })
    }


    // HANDLE PREDICTION

    const handlePredict = async () => {


        // VALIDATION

        for(let key in formData){

            if(formData[key] === ''){

                setError(

                    'Please complete all business analytics fields.'
                )

                return
            }
        }

        setError('')


        try{

            const response = await axios.post(

                'http://127.0.0.1:5000/predict',

                formData
            )


            navigate('/result', {

                state:{

                    revenue:
                    response.data.prediction,

                    targetRevenue:
                    formData.Target_Revenue
                }
            })
        }

        catch(error){

            console.log(error)

            setError(

                'Prediction failed. Please try again.'
            )
        }
    }


    return (

        <div className='main-container'>

            <div className='coffee-card'>


                {/* TITLE */}

                <h1 className='title'>

                    ☕ Smart Café Revenue Analytics

                </h1>


                {/* SUBTITLE */}

                <p className='subtitle'>

                    AI-powered coffee shop revenue
                    forecasting dashboard

                </p>


                {/* INPUT GRID */}

                <div className='grid-container'>


                    <InputCards

                        label='Daily Customers'

                        name='Number_of_Customers_Per_Day'

                        placeholder='Enter customer count'

                        handleChange={handleChange}
                    />


                    <InputCards

                        label='Average Order Value'

                        name='Average_Order_Value'

                        placeholder='Enter average order value'

                        handleChange={handleChange}
                    />


                    <InputCards

                        label='Operating Hours'

                        name='Operating_Hours_Per_Day'

                        placeholder='Enter operating hours'

                        handleChange={handleChange}
                    />


                    <InputCards

                        label='Employees Count'

                        name='Number_of_Employees'

                        placeholder='Enter employees count'

                        handleChange={handleChange}
                    />


                    <InputCards

                        label='Marketing Spend'

                        name='Marketing_Spend_Per_Day'

                        placeholder='Enter marketing spend'

                        handleChange={handleChange}
                    />


                    <InputCards

                        label='Location Foot Traffic'

                        name='Location_Foot_Traffic'

                        placeholder='Enter foot traffic'

                        handleChange={handleChange}
                    />

                </div>


                {/* TARGET SECTION */}

                <div className='target-section'>

                    <h2 className='target-title'>

                        Business Revenue Goal

                    </h2>

                    <div className='target-card-wrapper'>

                        <InputCards

                            label='Target Revenue'

                            name='Target_Revenue'

                            placeholder='Enter target revenue'

                            handleChange={handleChange}
                        />

                    </div>

                </div>


                {/* ERROR */}

                {

                    error &&

                    <div className='error-box'>

                        ⚠ {error}

                    </div>
                }


                {/* BUTTON */}

                <button

                    className='predict-btn'

                    onClick={handlePredict}
                >

                    Predict Revenue

                </button>

            </div>

        </div>
    )
}

export default InputPage