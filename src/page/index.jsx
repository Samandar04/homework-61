import React from 'react'
import Navbar from '../components/navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Bodyyy from '../components/body/index.jsx';
import Wrap from '../components/wrap1/index.jsx';
import Video from '../components/video';
import Carusel from '../components/carusel';
import Rek from '../components/reklama';
import Footer from '../components/footer';

function Page() {
    return (
        <div style={{overflow:  "hidden"}} >
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" >

                    </Route >

                    <Route path="/">

                    </Route>
                    <Route path="/">

                    </Route>
                    <Route path="/">

                    </Route>
                </Switch>
                <Bodyyy/>
                <Wrap/>
                <Video/>
                <Carusel />
                <Rek/>
                <Footer/>
            </BrowserRouter>
            
        </div>
    )
}

export default Page
