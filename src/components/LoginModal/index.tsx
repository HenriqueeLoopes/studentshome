import React from 'react'

import './styles.css';

export default function LoginModal() {
    return (
        <div className="login-modal">
            <div className="modal-box">
                <div className="closebutton"><button>✖</button></div>
                <span>Ja possuo uma conta!</span>
                <button className="btn btn-outline-primary">Login</button>
                <span>Gostaria de criar uma conta agora!</span>
                <button className="btn btn-outline-danger">Cadastrar</button>
            </div>
        </div>
    )
}
