import React from 'react'
import { Aboutcon } from '../about/style'
import Footer from '../footer'
import { Concard2, Concard2flex, Conflex, Contactcard1, Contactflex } from './style'

function Contact() {
    return (
        <div>
            <Aboutcon>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6809.0445041687235!2d70.06304131900443!3d41.02336459800747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afea1d699eb84f%3A0xa62a9c0434c2851a!2z0JzQldCn0JXQotCsIFFPUkFCT0figJggSk9NRSBtYXNqaWRp!5e0!3m2!1sru!2s!4v1630652027057!5m2!1sru!2s" width="600" height="450" style={{ border: "0", marginTop: "150px", width: "100%" }} allowfullscreen="" loading="lazy"></iframe><br /><br /><br /><br /><br />
                <Contactflex>
                    <Contactcard1>
                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter message"></textarea>
                        <Conflex>
                            <input type="text" placeholder="Enter you name" />
                            <input type="text" placeholder="Email" />
                        </Conflex>
                        <br />
                        <input type="text" placeholder="Enter Subject" />
                        <br /><br />
                        <button>S E N D</button>
                    </Contactcard1>
                    <Concard2>
                        <Concard2flex>
                            <i class="fas fa-home"></i>
                            <p>

                                Buttonwood, California.
                                <span>Rosemead, CA 91770</span>
                            </p>
                        </Concard2flex>
                        <Concard2flex>
                            <i class="fas fa-mobile-alt"></i>
                            <p>

                                +1 253 565 2365
                                <span>Mon to Fri 9am to 6pm</span>
                            </p>
                        </Concard2flex>
                        <Concard2flex>
                            <i class="fas fa-envelope"></i>
                            <p>


                                support@colorlib.com
                                <span>Send us your query anytime!</span>
                            </p>
                        </Concard2flex>
                    </Concard2>
                </Contactflex>
            </Aboutcon>
            <br /><br /><br /><br /><br />
            <Footer />
        </div>


    )
}

export default Contact
