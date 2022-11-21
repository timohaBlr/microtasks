import React, {ChangeEvent} from 'react';

type CustomInputPropsType = {
    title: string
    setTitle: (title: string)=> void
    inputOnChangeCallBack: (title: string) => void
    inputOnKeyPressCallBack: () => void
}

export const CustomInput = (props: CustomInputPropsType) => {
    const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    const inputOnKeyPressHandler = () => {
        props.inputOnKeyPressCallBack()
    }
    return (
        <div>
            <input value={props.title}
                   onChange={inputOnChangeHandler}
                   onKeyPress={inputOnKeyPressHandler}>

            </input>
        </div>
    );
};

export default CustomInput;
