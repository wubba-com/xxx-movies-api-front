import { Input, Button, Box } from '@mui/material';
import { useState } from 'react';
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom"

const AdminCreateContent = () => {
    const [err, setErr] = useState('')
    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [movies, setMovies] = useState([])
    const [nameMovie, setNameMovie] = useState('')
    const [poster, setPoster] = useState('')
    const [movie, setMovie] = useState({
        id: 0,
        name: '',
        poster: ''
    })

    const handleStoreContent = async () => {
        console.log(name, desc, movies)
        if (name === "") {
            setErr('name is empty')
            return
        }
        if (desc === "") {
            setErr('desc is empty')
            return
        }
        if (movies.length === 0) {
            setErr('movies is empty')
            return
        }
        try {
            const h = {
                'Content-Type': 'application/json'
            }

            const url = `http://localhost:8080/api/v1/admin/content/set`

            const res = await axios.post(url, {
                name: name,
                desc: desc,
                movies: movies
            }, {
                headers: h
            })

            if (res.status != 200) {
                console.error(res.status)
                setErr('response not 200')
            }
            res.data = res.data == null ? {} : res.data
            setErr('')

        } catch (err) {
            console.error(err.message)
        }
    }


    return (
        <div className="settings__add_content">
            <div className="wrapper__info_setting">
                <div className="wrapper__title">
                    <span className="style_text_fs_17_fw_700">Добавить подборку</span>
                </div>
                <div className="wrapper__add_btn">
                    <button onClick={handleStoreContent} className="btn_content style__btn_content">Сохранить подборку</button>
                </div>
            </div>

            <div className="form_add_content">
                {err !== '' ? (
                    <div>{err}</div>
                ) : (
                    <div>
                        <div className="wrapper__inputs">
                            <div className='wd_60'>
                                <Input onChange={(e) => {
                                    setName(e.target.value)
                                }} value={name} className='wd_100' color='primary' type='string' placeholder='название' />
                            </div>
                            <div className='style_mt_1 wd_60'>
                                <Input onChange={(e) => {
                                    setDesc(e.target.value)
                                }} value={desc} className="wd_100" placeholder={'описание'} type='string' />
                            </div>
                            <div className="wrapper__add_img style_mb_1 style_mt_1">
                                <Input type='file' placeholder='картинка' />
                                <span>36х36 max</span>
                            </div>
                        </div>
                        <div className="form__add">
                            <div>Добавление фильма или сериала</div>
                            <div className='style_mt_1 wrapper__search_movies'>
                                <div className='wd_60'>
                                    <Input onChange={(e) => {
                                        setNameMovie(e.target.value.toLowerCase())
                                    }} value={nameMovie} className="input__add wd_100" color='primary' type='string' placeholder='введите фильм' />
                                </div>
                                <div className='wrapper__btn_search style_ml_1'>
                                    <button onClick={async (e) => {
                                        try {
                                            const h = {
                                                'X-API-KEY': 'DP16GHX-M564B4D-NWGX77N-GV4JMPW'
                                            }

                                            const url = `https://api.kinopoisk.dev/v1.2/movie/search?query=${nameMovie}&limit=1`

                                            const res = await axios.get(url, {
                                                headers: h
                                            })

                                            if (res.status != 200) {
                                                console.error(res.status)
                                            }
                                            res.data = res.data == null ? {} : res.data

                                            console.log(res.data.docs[0].id, res.data.docs[0].name)
                                            setMovie({
                                                id: Number(res.data.docs[0].id).toFixed(0),
                                                name: res.data.docs[0].name,
                                                poster: res.data.docs[0].poster
                                            })
                                            setPoster(res.data.docs[0].poster)
                                        } catch (err) {
                                            console.error(err.message)
                                        }
                                    }} className='btn_content style__btn_content'>Найти</button>
                                </div>
                            </div>

                            <div className='wrapper__list_movies style_mt_1'>
                                <div className='style_mb_1' >Список коллекции:</div>
                                {movies.length != 0 ? movies.map(m => {
                                    return <div key={m.id}> {m.name}</div>
                                }) : <div></div>}
                            </div>

                            <div className="wrapper__movie_btns style_mt_1">
                                <Box
                                    component="img"
                                    width={135}
                                    height={175}
                                    alt="Здесь будет постер фильма"
                                    src={movie.poster}
                                />
                                <div className='style_ml_1'>
                                    <Button onClick={(e) => {
                                        setMovies([...movies, movie])
                                    }} className={'add'} variant="contained" color="primary">
                                        Добавить
                                    </Button>
                                </div>
                                <div className='style_ml_1'>
                                    <Button className='remove' variant="contained" color="secondary">
                                        удалить
                                    </Button>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default AdminCreateContent