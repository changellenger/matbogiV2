import React from 'react';
import {Outlet } from 'react-router-dom';
import Header from "../components/header";
import Naverapimap from "./naverapimap";

const Home = () => {

    return (
        <div className ={"main_grid"}>
        <Header></Header>
            <div className={"container"}>
                <Naverapimap></Naverapimap>
                <div className={"map"}></div>
                <Outlet />
            </div>
        </div>


    );
};

export default Home;