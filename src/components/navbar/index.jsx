
import React from 'react'
import "animate.css"
import { Link } from 'react-router-dom'
import {NavIcon2, NavIcon1, Border, Container, List, NavbarWrap, NavBorder, NavIcon, Ulist, NavBorder1, Navbarbor } from './style'
import "../../App.css"
function Navbar() {
    const mous = () => {
        const over = document.getElementById("icon")
        over.addEventListener(onmouseout, () => {
            over.classList.add("color")

        })
    }
    return (
        <div>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.3/css/all.css" integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk" crossorigin="anonymous"></link>
            <NavbarWrap>
                <Container>
                    <Ulist>
                        <List className="animate__animated animate__zoomInDown">
                            <Link to="/" className="link">
                                home
                            </Link>
                        </List>
                        <Border />
                        <List className="animate__animated animate__zoomInDown">
                            <Link to="/about" className="link">
                                about
                            </Link>
                        </List>
                        <Border />
                        <List className="animate__animated animate__zoomInDown">
                            <Link  to="/category" className="link">
                                category
                            </Link>
                        </List>
                        <Border />
                        <List className="animate__animated animate__zoomInDown">
                            <Link to="/latest" className="link">
                                latest news
                            </Link>
                        </List>
                        <Border />
                        <List className="animate__animated animate__zoomInDown">
                            <Link to="/Pages" className="link">
                                pages
                            </Link>
                        </List>
                        <Border />
                        <List className="animate__animated animate__zoomInDown">
                            <Link to="/contact" className="link">
                                Contact
                            </Link>
                        </List>
                    </Ulist>
                    <NavBorder />
                    <NavIcon  className="animate__animated animate__rotateInDownLeft">
                        <i class="fab fa-facebook-f"></i>
                    </NavIcon>
                    <NavIcon1  className="animate__animated animate__rotateInDownLeft">
                        <i class="fab fa-twitter"></i>
                    </NavIcon1>
                    <NavIcon1  className="animate__animated animate__rotateInDownLeft">
                    <i class="fab fa-instagram"></i>
                    </NavIcon1>
                    <NavIcon1 className="animate__animated animate__rotateInDownLeft">
                    <i class="fab fa-youtube"></i>
                    </NavIcon1>
                    <NavBorder1/>
                    <NavIcon2 className="animate__animated animate__rotateInDownLeft">
                    <i class="fas fa-search"></i>
                    </NavIcon2>
                   <Navbarbor/>
                </Container>
            </NavbarWrap>
        </div>
    )
}

export default Navbar

