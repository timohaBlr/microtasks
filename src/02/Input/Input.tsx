import React, {useState} from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";


export function Input() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    const [title, setTitle] = useState<string>('')
    const inputOnChangeCallBack = (title: string) => {
        setTitle(title)
          }
    const inputOnKeyPressCallBack = () => {

    }
    const buttonAddCallBack = () => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }
    return (
        <div className="App">
            <CustomInput title={title}
                         setTitle={setTitle}
                         inputOnChangeCallBack={inputOnChangeCallBack}
                         inputOnKeyPressCallBack={inputOnKeyPressCallBack}/>
            <CustomButton title={'+'} callBack={buttonAddCallBack}/>
                       {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default Input;