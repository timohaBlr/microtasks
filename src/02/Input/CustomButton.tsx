import React from 'react';

type CustomButtonPropsType = {
    title: string
    callBack: () => void
}
export const CustomButton = (props: CustomButtonPropsType) => {
    const buttonOnClickHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <button onClick={buttonOnClickHandler}>{props.title}</button>
        </div>
    );
};

export default CustomButton;