import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { baseLink } from '../../baseLink'
import { Dflex, Maincard, Navs, Rightcards, WhatsNewwrapper } from './style'

function WhatsNew() {
    const [Name, setName] = useState([

    ])
    const [chosenCategory, setchosenCategory] = useState(0)

    const getDate = () => {
        axios.get(baseLink + "whats-new")
            .then((res) => {
                setName(res.data)
                console.log(res.data);
            })
            .catch()
    }
    useEffect(() => {
        getDate()

    }, [])
    return (
        <WhatsNewwrapper>
            <Navs>
                {
                    Name?.map(({ id, category }, index) => (
                        <li onClick={() => setchosenCategory(index)} className={chosenCategory === index ? "active" : ""} key={id}>
                            {category}
                        </li>
                    ))
                }

            </Navs>
            <Dflex>
                <Maincard>
                    <img src={baseLink+"files/"+Name?.[chosenCategory]?.imageLink} alt="" />
                    <p><b>{Name?.[chosenCategory]?.title}</b></p>
                    <p>
                        <small>
                          by {Name?.[chosenCategory]?.author} - {Name?.[chosenCategory]?.createdAt}
                        </small>
                    </p>
                    <p>
                      {Name?.[chosenCategory]?.description}
                    </p>
                </Maincard>
                <Rightcards>
                    {
                        Name?.[chosenCategory]?.whatsNewList.map(({id,title,createdAt,imageLink})=>(
                            <Dflex>
                            <img src={baseLink+"files/"+imageLink} alt="" />
                            <div style={{marginLeft:"20px"}}>
                                <b>{Name?.[chosenCategory]?.category}</b>
                                <p>{title}</p>
                                <small>
                                    {createdAt.split("-")}
                                </small>
                            </div>
                        </Dflex>
                        ))
                    }
                  
                </Rightcards>
            </Dflex>
        </WhatsNewwrapper>
    )
}

export default WhatsNew
