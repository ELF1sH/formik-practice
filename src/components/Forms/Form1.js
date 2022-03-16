import {useContext, useMemo} from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
import "./Forms.scss"
import countryList from 'react-select-country-list'
import {FormWrapperContext} from "../FormWrapper/FormWrapper";

const Form1 = (props) => {
    const options = useMemo(() => countryList().getData(), [])
    const formContext = useContext(FormWrapperContext)

    // TODO: decompose this component
    // TODO: need to create separate default components (input, select .... )

    // TODO: create different forms

    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "", address: "", countries: "", age: "" }}
            validationSchema={Yup.object({
                firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                address: Yup.string().required('Required'),
                countries: Yup.string().required('Required'),
                age: Yup.number().required('Required').positive("Must be positive").integer("Must be integer")
                    .min(14, "Available for 14+").max(100, "You're kinda old")
            })}
            onSubmit={values => {
                console.log(JSON.stringify(values, null, 4));
            }}
        >
            {formik => (
                <Form className={"form"} style={{left: `calc(50% + ${100 * (props.formNumber - formContext.currentForm)}vw)`}}>
                    <main>
                        <h3 className={"header__form"}>Main form {props.formNumber}</h3>
                        <div className={'raw__form raw__form--input2'}>
                            <div className={"input-container"}>
                                <Field
                                    name="firstName"
                                    type="text"
                                    className={`input--basic ${formik.errors.firstName && formik.touched.firstName ? "input--error" : ""}`}
                                    placeholder={"First name"}
                                />
                                <span className={"error-span__input"}>{formik.touched.firstName ? formik.errors.firstName : null}</span>
                            </div>
                            <div className={"input-container"}>
                                <Field
                                    name="lastName"
                                    type="text"
                                    className={`input--basic ${formik.errors.lastName && formik.touched.lastName ? "input--error" : ""}`}
                                    placeholder={"Last name"}
                                />
                                <span className={"error-span__input"}>{formik.touched.lastName ? formik.errors.lastName : null}</span>
                            </div>
                        </div>
                        <div className={'raw__form'}>
                            <div className={"input-container"}>
                                <Field
                                    name="email"
                                    type="email"
                                    className={`input--basic ${formik.errors.email && formik.touched.email ? "input--error" : ""}`}
                                    placeholder={"Email"}
                                />
                                <span className={"error-span__input"}>{formik.touched.email ? formik.errors.email : null}</span>
                            </div>
                        </div>
                        <div className={'raw__form'}>
                            <div className={"input-container"}>
                                <Field
                                    name="address"
                                    type="text"
                                    className={`input--basic ${formik.errors.address && formik.touched.address ? "input--error" : ""}`}
                                    placeholder={"Address"}
                                />
                                <span className={"error-span__input"}>{formik.touched.address ? formik.errors.address : null}</span>
                            </div>
                        </div>
                        <div className="raw__form raw__form--input2">
                            <div className="input-container">
                                <Field
                                    name={"countries"}
                                    as={"select"}
                                    className={`input--basic ${formik.errors.countries && formik.touched.countries ? "input--error" : ""}`}
                                    options={options}
                                >
                                    <option value={undefined}>Choose country</option>
                                    { options.map((country, index) => <option key={index}>{country.label}</option>) }
                                </Field>
                                <span className={"error-span__input"}>{formik.touched.countries ? formik.errors.countries : null}</span>
                            </div>
                            <div className="input-container">
                                <Field
                                    name="age"
                                    type="number"
                                    className={`input--basic ${formik.errors.age && formik.touched.age ? "input--error" : ""}`}
                                    placeholder={"Age"}
                                />
                                <span className={"error-span__input"}>{formik.touched.age ? formik.errors.age : null}</span>
                            </div>
                        </div>
                    </main>
                    <footer className="footer__form">
                        <button type="button" className={"btn__footer"} onClick={formContext.slideLeft}>←previous</button>
                        <button
                            type="submit"
                            className={"btn__footer"}
                            onClick={!Object.keys(formik.errors).length ? formContext.slideRight : null}
                        >
                            next→
                        </button>
                    </footer>
                </Form>
            )}
        </Formik>
    )
}

export default Form1