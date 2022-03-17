import {Field} from "formik";
import "./FormInput.scss"

const FormInput = (props) => {
    return (
        <div className={"input-container"}>
            <Field
                name={props.name}
                type={props.type}
                className={`input--basic ${props.errors && props.touched ? "input--error" : ""}`}
                placeholder={props.placeholder}
            />
            <span className={"error-span__input"}>{props.touched ? props.errors : null}</span>
        </div>
    )
}

export default FormInput