import {Field} from "formik";

const FormSelect = (props) => {
    return (
        <div className="input-container">
            <Field
                name={props.name}
                as={"select"}
                className={`input--basic ${props.errors && props.touched ? "input--error" : ""}`}
            >
                {props.children}
            </Field>
            <span className={"error-span__input"}>{props.touched ? props.errors : null}</span>
        </div>
    )
}

export default FormSelect