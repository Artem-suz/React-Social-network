import { Field, Form, Formik } from "formik"
import * as yup from 'yup'
import { InputLogin, InputLoginPassword, InputLoginCaptcha } from "../common/FormsControls/FormsControls";
import s from './Login.module.css'
import { connect } from 'react-redux'
import { login, } from '../../redux/auth-reducer'
import { Navigate } from "react-router-dom";
import React from "react";

const LoginForm = React.memo(props => {
    
    const validationsScema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой'),
        password: yup.string().typeError('Должно быть строкой'),
        
    })
    
    return (
        
            <Formik
                initialValues={{
                    email:'',
                    password: '',
                    rememberMe: false,
                    showPassword: false,
                    captcha: '',
                
                }}
                validateOnBlur
                onSubmit={(values, actions) => {
                    props.onSubmitLoginHandler(values)
                    actions.resetForm({email: '', password: ''})
                }}
                validationSchema={validationsScema}
                >
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    
                        <Form>
                            <div >
                                
                                <Field 
                                placeholder='Email'
                                type={'text'}
                                name={'email'}
                                component = {InputLogin}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                />
                            </div>
                            {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
                            <div>
                                
                                <Field
                                placeholder='Password'
                                type={'password'}
                                name={'password'}
                                component = {InputLoginPassword}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                />
                            </div>
                            {touched.password && errors.password && <p className={s.error}>{errors.password}</p>}
                            
                            <div className={s.loginBtnRememberMe}>
                                <Field type={'checkbox'} name={'rememberMe'} component = {'input'} className={s.loginBtnRememberMe}/> Remember me
                            </div>
                            
                            {props.errorFromServer && <p className={s.error}>{props.errorFromServer}</p>}
                            {props.captchaUrl && <img src={props.captchaUrl} className={s.captchaUrl} alt='Captcha'/>}
                            {props.captchaUrl && 
                                <Field
                                placeholder='Symbols from image'
                                type={'text'}
                                name={'captcha'}
                                component = {InputLoginCaptcha}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.captcha} />
                            }
                            <div>
                                <button
                                    disabled={!isValid && !dirty}
                                    onClick={handleSubmit}
                                    type={'submit'}
                                    className={s.loginBtnSubmit}
                                >Login
                                </button>
                            </div>
                        </Form>
                    
                )}
                
            </Formik>
        
    )
})




const Login = React.memo(props => {
    
    const onSubmitLoginHandler = (values) => {
        
        props.login(values.email, values.password, values.rememberMe, values.captcha)
    }

    if (props.isAuth) {
        return <Navigate to='/myProfile' />
    }

    return (
            <main className={s.authPage}>
                <div className={s.authPageContainer}>
                    <h1 className={s.titleLoginPage}>Login</h1>
                    <LoginForm onSubmitLoginHandler={onSubmitLoginHandler} errorFromServer={props.errorFromServer}
                        captchaUrl={props.captchaUrl}/>
                </div>
            
        </main>
        
    )
})

const mapStateToProps = (state) => ({
    
    isAuth: state.auth.isAuth,
    errorFromServer: state.auth.errorFromServer,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps,{login, })(Login) 