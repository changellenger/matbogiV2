import React, { Component } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import '../App.css';
class header extends Component {

    render() {

        return (
            <div className='header_grid'>
                <div> </div>
                <div className='acenter'>
                    <Routes>
                    <Route path='/'/>
                    </Routes>
                    <Link className='link_tit' to='/'> <h3> 검색창 </h3> </Link>
                </div>

                <div className='acenter'>
                    <h5> 관리자 로그인 </h5>
                </div>
            </div>
        );
    }
}

export default header;


