import React from 'react'
import { Videocard, Videocon, Videoflex, Videoplay } from './main'

function Video() {
    return (
        <div style={{ background: "#f4f4f4" }}>
            <br /><br />
            <Videocon>
                <Videoplay src="https://tmb-01.github.io/news/assets/video/news2.mp4" controls  ></Videoplay>
                <Videoflex>
                    <Videocard>
                        <video src="https://tmb-01.github.io/news/assets/video/news1.mp4" controls></video>
                        <p> spondon news-2019</p>
                    </Videocard>
                    <Videocard>
                        <video src="https://tmb-01.github.io/news/assets/video/news3.mp4    " controls></video>
                        <p> latest video-2020</p>
                    </Videocard>
                    <Videocard>
                        <video src="https://tmb-01.github.io/news/assets/video/news2.mp4" controls></video>
                        <p>old spondon news-2020</p>
                    </Videocard>
                    <Videocard>
                        <video src="https://tmb-01.github.io/news/assets/video/news1.mp4"></video>
                        <p> bangladesh news video</p>
                    </Videocard>
                </Videoflex>
            </Videocon>
            <br /><br />
        </div>

    )
}

export default Video
