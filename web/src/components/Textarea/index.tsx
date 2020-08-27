//InputHTMLAttributes contém todas as propriedades de um input html
import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    name: string;
    label: string;

}

// Definindo um React.FC (Function component) com o tipo "textareaProps"
//...rest vai pegar todas as propriedades existentes no HTML e trazer pra tag quando for informado alguma via props
const Textarea: React.FC<TextareaProps> = ({ label, name, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={name}>{label}</label>
            <textarea id={name} {...rest} />
        </div>
    );
}

export default Textarea;
