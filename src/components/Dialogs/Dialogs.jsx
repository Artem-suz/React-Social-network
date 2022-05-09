import React from 'react'
import s from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'
import DialogItem from './DialogItem/DialogItem'
import { Field, Form, Formik } from "formik"
import * as yup from 'yup';
import { TextareaDialogs } from '../common/FormsControls/FormsControls'


const Dialogs = (props) => {
    
    const sendMessage = (chatMessage) => {
        props.sendMessage(chatMessage)
        
    }

        return (
            <div className={s.appWrapperContent}>
                
                <div className={s.pageDialogs}>
                    <div className={s.dialogs}>

                        {
                            props.dialogs.map((d) => {
                                return <DialogItem name={d.name} id={d.id} key={d.id} img={d.img}/>
                            })
                        }
                        

                    </div>
                    <div className={s.messages}>
                        <div className={s.messagesWrapper}>
                            <div className={s.mesText}>
                                {
                                    props.messages.map((m) => {
                                        return <MessageItem message={m.message} id={m.id} key={m.id}/>
                                    })
                                }
                            </div>
                            <СhatInputForm sendMessage={sendMessage}/>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    
}

const СhatInputForm = (props) => {
    const validationSchema = yup.object().shape({
        chatMessage: yup.string()
            .max(500,'Too long')
    })
    return(
        <Formik
                initialValues={{
                    chatMessage:'',
                }}
                validateOnBlur
                onSubmit={(values, actions) => {
                    props.sendMessage(values.chatMessage)
                    actions.resetForm({chatMessage: ''})

                }}
                validationSchema={validationSchema}
                >
                {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                    
                        <Form>
                            <div>
                                <Field 
                                placeholder='Enter your message'
                                type={'text'}
                                name={'chatMessage'}
                                component = {TextareaDialogs}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.chatMessage}
                                
                                />
                            </div>
                            {touched.chatMessage && errors.chatMessage && <p className={s.error}>{errors.chatMessage}</p>}
                            <div className={s.dialogsBtnSend}>
                                
                                <button
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type={'submit'}
                                    
                                >Send
                                </button>
                            </div>
                        </Form>
                    
                )}
                
            </Formik>
    )
}

export default Dialogs