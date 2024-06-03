import React from 'react'

function FormInput(props) {
    return (
        <div className={props.className}>
            <label className={props.labelClass?props.labelClass:" "}>{props.label}</label>
            <input className={(props.inputClass)?props.inputClass:" "}  type={props.type} placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput;