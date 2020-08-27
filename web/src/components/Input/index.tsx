//InputHTMLAttributes contém todas as propriedades de um input html
import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;

}

// Definindo um React.FC (Function component) com o tipo "InputProps"
//...rest vai pegar todas as propriedades existentes no HTML e trazer pra tag quando for informado alguma via props
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </div>
    );
}

export default Input;
