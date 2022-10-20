import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import { api } from "../../Services/api";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'
import Contatoloja from "../Configuracoes/ContatoLoja";




function DadosPerfilLoja(){
    const [dadosLoja, setDadosLoja] = useState([])

    const DadosLoja = async () => {
        try {
        const url = `/loja/${localStorage.getItem("loja_id")}`
        const res = await api.get(url)
        setDadosLoja(res.data);

        } catch (err) {
        console.log(err);
        }
    }

useEffect(()=>{
    DadosLoja()
},[])
    return(
        <div className="col-9 pb-2 overflow-auto altura">
            <div className=" d-flex justify-content-center align-content-center m-5 border-bottom">
                <h1 className="pb-3 link-secondary">Bem vindo, {dadosLoja.nome_fantasia}</h1>
            </div>
            <div className="col-12 d-flex justify-content-center">
                <div className="col-11 overflow-auto">
                    <h5 className="link-secondary">{dadosLoja.nome_fantasia}</h5>
                    <p className="border-bottom"><input type="text" placeholder="First name" className="input_dados_perfil" disabled/></p>
                    <h5 className="link-secondary">{dadosLoja.email}</h5>
                    <p className="border-bottom"><input type="text" value="Usuário Usuário" className="input_dados_perfil" disabled/></p>
                    <h5 className="link-secondary">{dadosLoja.CNPJ}</h5>
                    <p className="border-bottom"><input type="text" value="00.000-000" className="input_dados_perfil" disabled/></p> 
                    <div className="d-flex">
                        <div className="col-9">
                            <h5 className="link-secondary">{dadosLoja.endereco}</h5>
                            <p className="border-bottom"><input type="text" value="R: 7 de Setembro" className="input_dados_perfil" disabled/></p>
                        </div>
                        <div className="col-3">
                            <h5 className="link-secondary">{dadosLoja.contato}</h5>
                            <p className="border-bottom"><input type="text" value="00" className="input_dados_perfil" disabled/></p>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-end pt-3">
                        <button className=" btn btn-danger m-1 w-25 ">Alterar</button>
                        <button className="btn btn-success m-1 w-25 ">Salvar</button>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default DadosPerfilLoja;