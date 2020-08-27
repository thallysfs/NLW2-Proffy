//InputHTMLAttributes contém todas as propriedades de um input html
import React, { SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;

}

// Definindo um React.FC (Function component) com o tipo "selectProps"
//...rest vai pegar todas as propriedades existentes no HTML e trazer pra tag quando for informado alguma via props
const select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select value="" id={name} {...rest}>
                <option value="" disabled hidden>Selececione uma opção</option>
                {/* option.map faz com que eu percorra o objeto options e retorne alguma coisa */}
                {options.map(option => {
                    return <option key={option.value} value={option.value}>{option.label}</option>
                })}
            </select>
        </div>
    );
}

export default select;
