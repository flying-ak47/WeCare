import React from 'react';

import './css/style.css';
import Ambulance from './Images/iconambulance.png';
import Stetoskop from './Images/iconstetoskop.png'
import NewsFlex from '../Layout/NewsFlex/NewsFlex';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import ControlledCarousel from './ControlledCarousel';
import { NavLink } from "react-router-dom"; 
import logo from './Images/logo.png';
import Slide1 from './Images/slide-1.jpg';
import Slide2 from './Images/slide-4.jpg';
import ReactNavbar from '../Layout/ReactNavbar';

const Home = () => {
    return (
        <div>
            <ReactNavbar/>
            <div className="">
                <ControlledCarousel/>
            </div>
            

            <div className="container-fluid">
            <Navbar/>
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-6  col-md-6">
                        <div className="left-Heading">Contact <span>WCLH</span></div>
                        <div className="left-inlineHeading mt-2 mb-2">Emergencies </div>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet, consecte tur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Bibendum est ultricies integer quis auctor elit sed. Dictum varius duis at consectetur lorem donec massa. 
                        </p>
                        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Donec adipiscing tristique risus nec. Elementum tempus egestas sed sed risus pretium. Placerat in egestas erat imperdiet sed euismod nisi. </p>
                        <video width="320" height="240" controlss
                        ></video>

                        
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="colbox">
                            <div className="Header_element">
                                <strong>WCLH Hotline</strong> 
                            </div>
                            <div>
                                <div className="inline_heading">
                                    Emergency Hotline
                                </div>
                                <div className="nameabout col">
                                
                                    Emergency:<a href="/Contact"> 777 888 999</a><hr/>
                                    Covid 19:<a href="/Contact"> 777 888 111</a>
                                   
                                </div>

                                <div>
                                    <strong className="inline_heading">E-Mail Hotline</strong>
                                </div>
                                <div className=" nameabout col">
                                    <a href="/Contact">info@wclh.co.uk</a><hr/>
                                    <a href="/Contact">report@wclh.co.uk</a>
                                </div>
                                <div>
                                <strong className="inline_heading">Department Hotline</strong>
                                </div>
                                <div className=" nameabout col">
                                    <a href="/Contact">Geriatric Department: Ext 111</a><hr/>
                                    <a href="/Contact">Allergists Department: Ext 222</a><hr/>
                                    <a href="/Contact">Dermatologists Department: Ext 333</a><hr/>
                                    <a href="/Contact">Infectious Disease Department: Ext 444</a><hr/>
                                    <a href="/Contact">Ophthalmologists Department: Ext: 555</a><hr/>
                                    <a href="/Contact">Ophthalmologists Department: 999</a><hr/>
                                    <a href="/Contact">Obstetrician/Gynecologists: 777</a>
                                </div>
                            </div>
                            

                                <div>
                                    <div className="stetoscope">
                                        <div className="">
                                            <img src={Stetoskop} alt="Stetoscope"/>
                                        </div>
                                        
                                        <div className="icon_text">
                                            <span>Booking</span><br/>
                                            <span>your dates Here</span>
                                        </div>
                                    </div>

                                    <div className="ambulance">
                                        <div>
                                            <img src={Ambulance} alt="Stetoscope"/>
                                        </div>
                                        
                                        <div className="icon_text">
                                            <span>Do you have</span><br/>
                                            <span>an Emergency?</span>
                                        </div>
                                    </div>
                                    
                                                          
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsFlex/>
        </div>
    )
}

export default Home
