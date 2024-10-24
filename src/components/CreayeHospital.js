import React, { Component } from "react";
import axios from "axios";
import Global from "./Global";
import { Navigate } from "react-router-dom";

class CreateHospital extends Component{
    cajaId = React.createRef();
    cajaNombre = React.createRef();
    cajaDireccion = React.createRef();
    cajaTelefono = React.createRef();
    cajaCamas = React.createRef();
    
    insertHospital = (e)=>{
        e.preventDefault()
        let request = "webresources/hospitales/post"
        let url = Global.apiHospitales+request
        let id = parseInt(this.cajaId.current.value)
        let nombre = this.cajaNombre.current.value
        let direccion = this.cajaDireccion.current.value
        let telefono = this.cajaTelefono.current.value
        let camas = parseInt(this.cajaCamas.current.value)
        console.log(id+nombre+direccion+telefono+camas)
        let hospital = {
            idhospital:id,
            nombre:nombre,
            direccion:direccion,
            telefono:telefono,
            camas:camas
        }
        axios.post(url,hospital).then(response=>{
            this.setState({
                mensaje:"Hospital insertado "+ nombre,
                status:true
            })
        })
    }
    state = {
        mensaje: "",
        status:false
    }
    render(){
        return(
            <div>
                {
                    this.state.status==true &&
                    <Navigate to="/hospitales"/>
                }
                <h1>New Hospital</h1>

                <h3>{this.state.mensaje}</h3>
                <form>
                    <label>Id Hospital</label>
                    <input type="text" ref={this.cajaId}/><br/>
                    <label>Nombre</label>
                    <input type="text" ref={this.cajaNombre}/><br/>
                    <label>Direccion</label>
                    <input type="text" ref={this.cajaDireccion}/><br/>
                    <label>Telefono</label>
                    <input type="text" ref={this.cajaTelefono}/><br/>
                    <label>Camas</label>
                    <input type="text" ref={this.cajaCamas}/><br/>
                    <button onClick={this.insertHospital}>Insertar</button>
                </form>
            </div>
        )
    }
}
export default CreateHospital