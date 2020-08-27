import React from 'react'

import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'

import './style.css'

interface PageHeaderProps {
    title: string;
    // Esse ponto de interrogação quer dizer que o props 'description' não é obrigatório
    description?: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                {/* O && (and) é um if onde só mostra uma condição se for verdadeira. Não necessitando informar a condição se falso. */}
                {props.description && <p>{props.description}</p>}

                {/* children é tudo que está inserido dentro do nosso componente */}
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;
