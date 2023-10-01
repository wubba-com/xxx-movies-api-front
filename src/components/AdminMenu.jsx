import React, { useContext, useEffect, useState } from "react";
import { Container, Box } from '@mui/material';
import { Link } from "react-router-dom"
import pathImgSection1 from './../img/section_1.svg'
import pathImgSection2 from './../img/section_2.svg'
import pathImgSection3 from './../img/section_3.svg'
import pathImgSection4 from './../img/section_4.svg'
import pathImgSection5 from './../img/section_5.svg'
import pathImgSection6 from './../img/section_6.svg'

const AdminMenu = ({ }) => {

    return (
        <div className="l_section">
            <Link to={"/admin"} className="section_menu__wrapper">
                <div className="section_menu_img">
                    <Box
                        component="img"
                        alt="The house from the offer."
                        src={pathImgSection1}
                    />
                </div>

                <div className="section_menu_text">
                    Главная
                </div>
            </Link>
            <Link to={"/admin/users"} className="section_menu__wrapper">
                <div className="section_menu_img">
                    <Box
                        component="img"
                        alt="The house from the offer."
                        src={pathImgSection2}
                    />
                </div>
                <div className="section_menu_text">
                    Пользователи
                </div>
            </Link>
            <Link to={"/admin/score"} className="section_menu__wrapper">
                <div className="section_menu_img">
                    <Box
                        component="img"
                        alt="The house from the offer."
                        src={pathImgSection3}
                    />
                </div>
                <div className="section_menu_text">
                    Оценка
                </div>
            </Link>
            <Link to={"/admin/content"} className="section_menu__wrapper">
                <div className="section_menu_img">
                    <Box
                        component="img"
                        alt="The house from the offer."
                        src={pathImgSection4}
                    />
                </div>
                <div className="section_menu_text">
                    Контент
                </div>
            </Link>
            <Link to={"/admin/settings"} className="section_menu__wrapper">
                <div className="section_menu_img">
                    <Box
                        component="img"
                        alt="The house from the offer."
                        src={pathImgSection5}
                    />
                </div>
                <div className="section_menu_text">
                    Алгоритмы
                </div>
            </Link>
            <Link to={"/admin/top"} className="section_menu__wrapper">
                <div className="section_menu_img">
                    <Box
                        component="img"
                        alt="The house from the offer."
                        src={pathImgSection6}
                    />
                </div>
                <div className="section_menu_text">
                    Топы
                </div>
            </Link>
        </div>
    )
}

export default AdminMenu