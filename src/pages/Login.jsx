import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Buffer } from 'buffer';
import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../provider/auth";

// Компонент Login отображает страницу авторизации и обрабатывает вход пользователя.
const Login = () => {
    const { setToken } = useAuth();
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate(); // используем хук useNavigate для навигации по маршрутам
    const location = useLocation(); // используем хук useLocation для получения текущего маршрута

    async function postLogin() {
        const encodedLogPass = new Buffer(userName + ':' + password).toString('base64');
        const h = {
            'Authorization': 'Basic ' + encodedLogPass,
            'Content-Type': 'application/json',
        };
        try {
            const res = await axios.post(
                'http://admin-config.wbx-user-score.svc.k8s.dldevel/api/v1/auth',
                {},
                {
                    headers: h,
                }
            )

            if (res.status === 204) {
                // получаем маршрут, на который нужно перенаправить пользователя после авторизации
                setToken(encodedLogPass);
                navigate(location.state?.from?.pathname || '/', { replace: true });
            } else {
                setIsError(true);
            }

        } catch (e) {
            console.log(e)
            setIsError(true);
        }
    }


    return (
        <div className="login-bg">
            <div className="login_popup__wrapper">
                <div className="login_popup">
                    {isError && <div className="danger-err">Логин или пароль был введен не верно</div>}
                    <div className="title">WB GLOBAL</div>
                    <div className="title">Постоплата и платный отказ</div>
                    <input onChange={(e) => {
                        setIsError(false)
                        setUserName(e.target.value)
                    }} className="mb-10 input-style" type='string' placeholder="логин" />
                    <input onChange={(e) => {
                        setIsError(false)
                        setPassword(e.target.value)
                    }} className="mb-20 input-style" type='password' placeholder="пароль" />
                    <div className="btn-wrapper">
                        <button type={'button'} className="default-btn" onClick={postLogin}>Войти</button>
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Login