import { Grid } from "@mui/material";
import React from "react";
import menuImg from "../img/menu.svg"
import pathZoom from "../img/zoom.svg"
import pathPlus from "../img/plus.svg"
import { Input, Button, Box } from '@mui/material';

const Header = () => {
    return (
        <Grid>
            <Grid container spacing={6.25} alignItems={"center"} justifyContent={"space-between"}>
                <Grid item lg={3}>
                    <div className="logo_wrapper">
                        <div className="logo">movied</div>
                        {/* <div className="logo_description">независимый агрегатор оценок</div> */}
                    </div>
                </Grid>
                <Grid item lg={5}>
                    <div className="search_wrapper">
                        <input className="search_movied border_movied" placeholder="фильм, актер" />
                        <div className="p-relation left-m60">
                            <Box
                                component="img"
                                src={pathZoom}
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item lg={2}>
                    <div className="account_wrapper border_movied">
                        <div className="account_btn fs">Войти</div>
                    </div>
                </Grid>
            </Grid>
            <Grid container direction={'row'} spacing={0}>
                <Grid className="logo_wrapper" item lg={3} container direction={'row'}>
                    <div className="logo_description">независимый агрегатор оценок</div>
                </Grid>
                <Grid item lg={9} alignItems={"end"} display={"flex"} direction={"row"}>
                    <div className="mt-45 mr-25 border_movied">
                        <div className="btn padding_classic fs">Новинки</div>
                    </div>
                    <div className="mt-45 mr-25 border_movied">
                        <div className="btn padding_classic fs">Топы</div>
                    </div>
                    <div className="mt-45 mr-25 border_movied">
                        <div className="btn padding_with_img fs">
                            <span>Мой список</span>
                            <Box
                                component="img"
                                src={pathPlus}
                            />
                        </div>
                    </div>
                    <div className="mt-45 padding_classic border_movied">
                        <div className="btn fs">Что посмотреть ?</div>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header