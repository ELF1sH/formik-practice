import "./Forms.scss"
import {Form} from "formik";
import {useContext} from "react";
import {FormWrapperContext} from "../FormWrapper/FormWrapper";

const FormTemplate = (props) => {
    const formContext = useContext(FormWrapperContext)

    return (
        <Form className={"form"} style={{left: `calc(50% + ${100 * (props.formNumber - formContext.currentForm)}vw)`}}>
            <main>
                <h3 className={"header__form"}>{props.header}</h3>
                { props.children }
            </main>
            <footer className="footer__form">
                <button type="button" className={"btn__footer"} onClick={formContext.slideLeft}>←previous</button>
                <button
                    type="submit"
                    className={"btn__footer"}
                    onClick={!Object.keys(props.errors).length ? formContext.slideRight : null}
                >
                    next→
                </button>
            </footer>
        </Form>
    )
}

export default FormTemplate