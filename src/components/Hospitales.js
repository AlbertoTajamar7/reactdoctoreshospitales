import { Component } from "react";
import Global from "./Global";
import axios from "axios";

class Hospitales extends Component{
    state = {
        hospitales: []
    }
    ladHospitales =()=>{
        let request ="webresources/hospitales"
        let url = Global.apiHospitales+request
        axios.get(url).then(response=>{
            this.setState({
                hospitales:response.data
            })
            console.log(response.data)
        })
    }
    componentDidMount=()=>{
        this.ladHospitales();
    }
render(){
    return(
        <div>
            <h1>Hospitales</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>Camas</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.hospitales.map((hospital,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{hospital.idhospital}</td>
                                    <td>{hospital.nombre}</td>
                                    <td>{hospital.direccion}</td>
                                    <td>{hospital.telefono}</td>
                                    <td>{hospital.cama}</td>
                                </tr>
                            )
                        }
                    )
                    }
                </tbody>
            </table>
        </div>
    )
}
}
export default Hospitales;