import React from 'react'
import Navbar from '../components/navbar'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Bodyyy from '../components/body/index.jsx';
import Wrap from '../components/wrap1/index.jsx';
import Video from '../components/video';
import Carusel from '../components/carusel';
import Rek from '../components/reklama';
import Footer from '../components/footer';
import About from '../components/about';
import Category from '../components/category';
import Latest from '../components/latest/index.jsx';
import PagesNavbar from '../components/pages';
import Contact from '../components/contact';

function Page() {
    return (
        <div  style={{overflow:  "hidden"}} >
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="//" >
                    <Bodyyy/>
                <Wrap/>
                <Video/>
                <Carusel />
                <Rek/>
                <Footer/>
                    </Route >

                    <Route path="/about">
                       
                <About/>
                    </Route>
                    <Route path="/category">
                        <Category/>
                    </Route>
                    <Route path="/latest">
                    <Latest/>
                    </Route>
                    <Route path="/Pages">
                    <PagesNavbar/>
                    </Route>
                    <Route path="/contact">
                    <Contact/>
                    </Route>
                </Switch>

            </BrowserRouter>

        </div>
    )
}

export default Page
