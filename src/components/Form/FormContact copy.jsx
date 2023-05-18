import React from 'react';
import { Formik } from 'formik';
import { object as yupObject, string as yupString } from "yup";

import './form.css';

const matchLetras = /^[A-Za-z]/;
const matchEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const matchNumeros = /^\d+$/;

const FormContact = () => {
    return (
        <>
            <Formik
                initialValues={{
                    nombre: '',
                    email: '',
                    celular: '',
                    edad: ''
                }}
                validationSchema={yupObject().shape({
                    nombre: yupString()
                    .required('Necesitamos tu Nombre.')
                    .matches(matchLetras,'Debe ser letras.')
                    .min(4,'Nombre muy corto.')
                    .max(40,'Nombre muy largo.'),

                    email: yupString()
                    .required('Necesitamos tu email.')
                    .matches(matchEmail,'Email incorrecto.'),

                    celular: yupString()
                    .required('El celular es requerido')
                    .matches(matchNumeros,'No es un número.')
                    .min(10,'Te faltan números.')
                    .max(12,'Te sobran números.'),

                    edad: yupString()
                    .required('La edad es requerida')
                    .matches(/^((100)|([2-9][0-9]{1})|(1[8-9]))$/,'No tienes la edad.')
                })}
                onSubmit={async values => {
                    const data = JSON.stringify(values, null, 2);
                    console.log(data);
                    //{this.props.funcion}
                }}
            >
                {
                    props => {
                        const {
                            values,
                            errors,
                            handleChange,
                            handleSubmit
                        } = props;
                        return(
                            <form onSubmit={handleSubmit} className='form'>
                                <div>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        defaultValue={values.nombre}
                                        onChange={handleChange}
                                        id="nombre"
                                        name="nombre"
                                    />
                                    {errors.nombre ? <div className="error">{errors.nombre}</div> : null}
                                </div>

                                <div>
                                    <label>Email:</label>
                                    <input
                                        type="text"
                                        defaultValue={values.email}
                                        onChange={handleChange}
                                        id="email"
                                        name="email"
                                    />
                                    {errors.email ? <div className="error">{errors.email}</div> : null}                                    
                                </div>

                                <div>
                                    <label>Celular:</label>
                                    <input
                                        type="text"
                                        defaultValue={values.celular}
                                        onChange={handleChange}
                                        id="celular"
                                        name="celular"
                                    />
                                    {errors.celular ? <div className="error">{errors.celular}</div> : null}
                                </div>

                                <div>
                                    <label>Edad:</label>
                                    <input
                                        type="text"
                                        defaultValue={values.edad}
                                        onChange={handleChange}
                                        id="edad"
                                        name="edad"
                                    />
                                    {errors.edad ? <div className="error">{errors.edad}</div> : null}                                    
                                </div>

                                <div>
                                    <button>Enviar</button>
                                </div>

                                <a onClick={()=>changeName(item.name)}> {item.name} </a>

                                <button onClick={botonClick()}>
                                Boton del hijo funcional
                                </button>

                            </form>
                        )
                    }
                }
            </Formik>
        </>
    );
}

export default FormContact;