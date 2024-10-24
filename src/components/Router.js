

import React, { Component } from 'react'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import MenuRutas from './MenuRutas'
import Home from './Home'
import Doctores from './Doctores';
import CreateHospital from './CreayeHospital'
import Hospitales from './Hospitales';


export default class Router extends Component {

    render() {
        function DoctoresElement() {
            let{ idhospital } = useParams();
            return <Doctores idhospital={idhospital} />
        }
        return (
            <BrowserRouter>
                <MenuRutas />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/doctores/:idhospital"element={<DoctoresElement />} />
                    <Route path='/CreayeHospitales' element={<CreateHospital/>}/>
                    <Route path='/Hospitales' element={<Hospitales/>}/>
                </Routes>
            </BrowserRouter>

        )

    }

} 