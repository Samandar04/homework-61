import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { baseLink } from '../../baseLink'
import { Videocard, Videocon, Videoflex, Videoplay } from './main'

function Video() {

    const [state, setstate] = useState([])
    const getVideo = () => {
        axios.get(baseLink + "video-news")
            .then((res) => {
                setstate(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getVideo()
    }, [])
    return (
        <div style={{ background: "#f4f4f4" }}>
            <br /><br />
            <Videocon>
                {

                    <Videoplay src={`${baseLink}files/${state?.[0]?.videoLink}`} controls  ></Videoplay>

                }

                <Videoflex>
                    {
                        <Videocard>
                            <video src={`${baseLink}files/${state?.[1]?.videoLink}`} controls></video>
                            <p> {state?.[1]?.title}</p>
                        </Videocard>
                    }
                    {
                        <Videocard>
                            <video src={`${baseLink}files/${state?.[2]?.videoLink}`} controls></video>
                            <p> {state?.[2]?.title}</p>
                        </Videocard>
                    }
                    {
                        <Videocard>
                            <video src={`${baseLink}files/${state?.[3]?.videoLink}`} controls></video>
                            <p>{state?.[3]?.title}</p>
                        </Videocard>
                    }
                    {
                        <Videocard>
                            <video src={`${baseLink}files/${state?.[0]?.videoLink}`} controls></video>
                            <p> {state?.[1]?.title}</p>
                        </Videocard>
                    }

                </Videoflex>
            </Videocon>
            <br /><br />
        </div>

    )
}

export default Video
