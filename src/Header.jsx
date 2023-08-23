import { Grid } from "@mui/material";
import React from "react";
import menuImg from "./img/menu.svg"

const Header = () => {
    return (
        <Grid>
            <Grid container spacing={0} alignItems={"center"}>
                <Grid item lg={3}>
                    <div className="logo_wrapper">
                        <div className="logo">movied</div>
                        {/* <div className="logo_description">независимый агрегатор оценок</div> */}
                    </div>
                </Grid>
                <Grid item lg={5}>
                    <div className="search_wrapper">
                        <input className="search_movied" />
                    </div>
                </Grid>
                <Grid item lg={2} justifyContent={"center"}>
                    <div className="menu_wrapper bx-shadow">
                        <div className="menu_btn " ><img src={menuImg} /></div>
                    </div>
                </Grid>
                <Grid item lg={2}>
                    <div className="account_wrapper bx-shadow">
                        <div className="account_btn  fs">Войти</div>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={0}>
                <Grid item lg={3} alignItems={"center"}>
                    <div className="logo_wrapper">
                        <div className="logo_description">независимый агрегатор оценок</div>
                    </div>
                </Grid>
                <Grid item lg={9} alignItems={"end"} display={"flex"} direction={"row"}>
                    <div className="btns_wrapper mt-45 mr-1 bx-shadow">
                        <div className="btn_prem fs">Премьеры</div>
                    </div>
                    <div className="btns_wrapper mt-45 mr-91 bx-shadow">
                        <div className="btn_tops fs">Топы</div>
                    </div>
                    <div className="btns_wrapper mt-45 mr-1 bx-shadow">
                        <div className="btn_my_list fs">Мой список</div>
                    </div>
                    <div className="btns_wrapper mt-45 mr-1 bx-shadow">
                        <div className="btn_collection fs">Подборки</div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header