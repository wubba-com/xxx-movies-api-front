import { Box } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import pathToEditImg from "./../img/edit_btn.svg"
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom"

const ListContents = () => {
    const location = useLocation()
    const [err, setErr] = useState('')
    const [listContent, setListContent] = useState([])
    console.log(listContent)
    const getListContent = async () => {
        try {
            const h = {
                'Content-Type': 'application/json'
            }

            const url = `http://localhost:8080/api/v1/admin/content/all`

            const res = await axios.get(url, {
                headers: h
            })

            if (res.status != 200) {
                console.error(res.status)
                setErr('response not 200')
            }
            res.data = res.data == null ? {} : res.data
            setErr('ok')
            if (res.data.contents) {
                setListContent(res.data.contents)
            }

        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getListContent()
    }, [])


    return (
        <div>
            <div className="wrapper__settings">
                <div className="settings__type">Подборки</div>
                <Link className="btn_content style__btn_content" to={`/admin/content/create`}>Добавить</Link>
            </div>

            <div className="len_list">Всего {listContent.length}</div>

            <div className="wrapper_list">
                {listContent.map((content, idx) => {
                    return (
                        <div className="item__list">
                            <div className="item__num">{idx + 1}</div>
                            <div className="item__name">{content.name}</div>
                            <div className="item__edit">
                                <Link to={location.pathname + "/edit"}>
                                    <Box
                                        component="img"
                                        alt="The house from the offer."
                                        src={pathToEditImg}
                                    />
                                </Link>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="item__list">
                    <div className="item__num">1</div>
                    <div className="item__name">Лучшие российские сериалы</div>
                    <div className="item__edit">
                        <Link to={location.pathname + "/edit"}>
                            <Box
                                component="img"
                                alt="The house from the offer."
                                src={pathToEditImg}
                            />
                        </Link>
                    </div>
                </div>
                <div className="item__list">
                    <div className="item__num">2</div>
                    <div className="item__name">Лучшие российские сериалы</div>
                    <div className="item__edit">
                        <Link to={location.pathname + "/edit"}>
                            <Box
                                component="img"
                                alt="The house from the offer."
                                src={pathToEditImg}
                            />
                        </Link>
                    </div>
                </div>
                <div className="item__list">
                    <div className="item__num">3</div>
                    <div className="item__name">Лучшие российские сериалы</div>
                    <div className="item__edit">
                        <Link to={location.pathname + "/edit"}>
                            <Box
                                component="img"
                                alt="The house from the offer."
                                src={pathToEditImg}
                            />
                        </Link>
                    </div>
                </div>
                <div className="item__list">
                    <div className="item__num">4</div>
                    <div className="item__name">Лучшие российские сериалы</div>
                    <div className="item__edit">
                        <Link to={location.pathname + "/edit"}>
                            <Box
                                component="img"
                                alt="The house from the offer."
                                src={pathToEditImg}
                            />
                        </Link>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ListContents