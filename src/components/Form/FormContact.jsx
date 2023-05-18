import React from 'react';
import { Formik } from 'formik';
import { object as yupObject, string as yupString } from "yup";

import './form.css';

const matchLetras = /^[A-Za-z]/;
const matchEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
const matchNumeros = /^\d+$/;

const FormContact = ({
    modalOpen
    }) => {

        return (
            <>
                <Formik
                    initialValues={{
                        name: '',
                        email: '',
                        celular: '',
                        edad: ''
                    }}
                    validationSchema={yupObject().shape({
                        name: yupString()
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
                    /*
                    onSubmit={async values => {
                        const data = JSON.stringify(values, null, 2);
                        console.log(data);
                        modalOpen(5000);
                        resetForm({
                            values: { name: 'Custom initial values', email: '' },
                        });
                    }}
                    */
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        const data = JSON.stringify(values, null, 2);
                        console.log(data);
                        modalOpen(5000);
                        resetForm();
                        document.getElementById("formContact").reset();
                        //resetForm ({});
                    }}
                >
                    {
                        props => {
                            const {
                                values,
                                errors,
                                handleChange,
                                handleSubmit,
                                resetForm
                            } = props;
                            return(
                                <form id='formContact' onSubmit={handleSubmit} className='form'>
                                    <div>
                                        <label>Name:</label>
                                        <input
                                            type="text"
                                            defaultValue={values.name}
                                            onChange={handleChange}
                                            id="name"
                                            name="name"
                                        />
                                        {errors.name ? <div className="error">{errors.name}</div> : null}
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
                                        <button type="submit">Enviar</button>
                                        <button type="reset" onClick={resetForm} className='esconde'>
                                            Reset All
                                        </button>
                                    </div>
                                </form>
                            )
                        }
                    }
                </Formik>
            </>
        );
}

export default FormContact;