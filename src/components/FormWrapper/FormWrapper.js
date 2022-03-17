import "./FormWrapper.scss"
import Form1 from "../Forms/Form1";
import FormProgress from "../FormProgress/FormProgress";
import {createContext, useState} from "react";

const forms = [<Form1 />, <Form1 />, <Form1 />, <Form1 />, <Form1 />, <Form1 />, <Form1 />, <Form1 />, <Form1 />]
export const FormWrapperContext = createContext({
    currentForm: 0,
    totalNumber: forms.length,
    slideLeft: () => {},
    slideRight: () => {}
})

const FormWrapper = () => {
    const [currentForm, setCurrentForm] = useState(0)

    const slideLeft = () => {
        if (currentForm > 0)
            setCurrentForm(currentForm => currentForm - 1)
    }
    const slideRight = () => {
        if (currentForm < forms.length - 1)
            setCurrentForm(currentForm => currentForm + 1)
    }

    return (
        <FormWrapperContext.Provider value={{currentForm: currentForm, totalNumber: forms.length, slideLeft: slideLeft, slideRight: slideRight}}>
            <div className="form-wrapper">
                {
                    forms.map((form, index) => {
                        const TYPE = form.type
                        return <TYPE key={index} formNumber={index} />
                    })
                }
            </div>
            <FormProgress />
        </FormWrapperContext.Provider>
    )
}

export default FormWrapper