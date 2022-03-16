import "./FormProgress.scss"
import {useContext} from "react";
import {FormWrapperContext} from "../FormWrapper/FormWrapper";

const FormProgress = () => {
    const formContext = useContext(FormWrapperContext)

    return (
        <div className={"progress-bar"}>
            <div className="wrapper">
                {
                    [...Array(formContext.totalNumber)].map((number, idx) => {
                        return <div key={idx} style={{left: `calc(${idx} * 100% / ${formContext.totalNumber - 1})`}} className="stage-point"></div>
                    })
                }
                <div className="current-stage-point" style={{left: `calc(${formContext.currentForm} * 100% / ${formContext.totalNumber - 1})`}}></div>
            </div>
        </div>
    )
}

export default FormProgress