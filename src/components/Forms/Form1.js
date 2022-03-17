import {useMemo} from "react";
import { Formik } from "formik";
import * as Yup from 'yup'
import "./Forms.scss"
import countryList from 'react-select-country-list'
import FormTemplate from "./FormTemplate";
import FormInput from "../default-components/FormItems/FormInput";
import FormSelect from "../default-components/FormItems/FormSelect";

const Form1 = (props) => {
    const options = useMemo(() => countryList().getData(), [])

    // TODO: create different forms

    return (
        <Formik
            initialValues={{ firstName: "", lastName: "", email: "", address: "", countries: "", age: "" }}
            validationSchema={Yup.object({
                firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
                lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
                email: Yup.string().email('Invalid email address').required('Required'),
                address: Yup.string().required('Required'),
                countries: Yup.string().required('Required').test('Required', 'Required', value => {
                    return value !== "Choose country"
                }),
                age: Yup.number().required('Required').positive("Must be positive").integer("Must be integer")
                    .min(14, "Available for 14+").max(100, "You're kinda old")
            })}
            onSubmit={values => {
                console.log(JSON.stringify(values, null, 4));
            }}
        >
            {formik => (
                <FormTemplate formNumber={props.formNumber} errors={formik.errors} header={`Main form ${props.formNumber}`}>
                    <div className={'raw__form raw__form--input2'}>
                        <FormInput
                            name="firstName" type="text" placeholder="First name"
                            errors={formik.errors.firstName} touched={formik.touched.firstName}
                        />
                        <FormInput
                            name="lastName" type="text" placeholder="Last name"
                            errors={formik.errors.lastName} touched={formik.touched.lastName}
                        />
                    </div>
                    <div className={'raw__form'}>
                        <FormInput
                            name="email" type="email" placeholder="Email"
                            errors={formik.errors.email} touched={formik.touched.email}
                        />
                    </div>
                    <div className={'raw__form'}>
                        <FormInput
                            name="address" type="text" placeholder="Address"
                            errors={formik.errors.address} touched={formik.touched.address}
                        />
                    </div>
                    <div className="raw__form raw__form--input2">
                        <FormSelect
                            name={"countries"} errors={formik.errors.countries} touched={formik.touched.countries}
                        >
                            <option value={undefined}>Choose country</option>
                            { options.map((country, index) => <option key={index}>{country.label}</option>) }
                        </FormSelect>
                        <FormInput
                            name="age" type="number" placeholder="Age"
                            errors={formik.errors.age} touched={formik.touched.age}
                        />
                    </div>
                </FormTemplate>
            )}
        </Formik>
    )
}

export default Form1