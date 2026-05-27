import React, { useState } from 'react'

import {

    motion,
    AnimatePresence

} from 'framer-motion'

function InputCards({

    label,
    name,
    placeholder,
    handleChange

}) {

    const [open, setOpen] = useState(false)

    const [value, setValue] = useState('')

    const handleSave = () => {

        handleChange({

            target:{

                name:name,

                value:value
            }
        })

        setOpen(false)
    }

    return (

        <>

            {/* DASHBOARD CARD */}

            <motion.div

                className='input-card'

                whileHover={{

                    y:-5
                }}

                transition={{

                    duration:0.2
                }}

                onClick={()=>setOpen(true)}
            >

                <div className='card-top'>

                    <span className='card-icon'>

                        ☕

                    </span>

                </div>

                <h3>

                    {label}

                </h3>

                <div className='value-box'>

                    {

                        value
                        ?
                        value
                        :
                        placeholder
                    }

                </div>

            </motion.div>


            {/* PROFESSIONAL MODAL */}

            <AnimatePresence>

                {

                    open &&

                    <motion.div

                        className='modal-overlay'

                        initial={{ opacity:0 }}

                        animate={{ opacity:1 }}

                        exit={{ opacity:0 }}
                    >

                        <motion.div

                            className='modal-card'

                            initial={{

                                scale:0.85,

                                opacity:0,

                                y:40
                            }}

                            animate={{

                                scale:1,

                                opacity:1,

                                y:0
                            }}

                            exit={{

                                scale:0.85,

                                opacity:0,

                                y:40
                            }}

                            transition={{

                                duration:0.25
                            }}
                        >

                            <div className='modal-header'>

                                <h2>

                                    {label}

                                </h2>

                                <button

                                    className='close-btn'

                                    onClick={()=>setOpen(false)}
                                >

                                    ✕

                                </button>

                            </div>

                            <p className='modal-sub'>

                                Enter business analytics value

                            </p>

                            <input

                                type='number'

                                step='any'

                                value={value}

                                placeholder={placeholder}

                                onChange={(e)=>

                                    setValue(e.target.value)
                                }
                            />

                            <button

                                className='save-btn'

                                onClick={handleSave}
                            >

                                Save Value

                            </button>

                        </motion.div>

                    </motion.div>
                }

            </AnimatePresence>

        </>
    )
}

export default InputCards