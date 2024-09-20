import React from "react";
import { useState, useEffect } from "react";

import style from './CreateBooks.module.css'

import Input from "../Forms/Input";
import Select from "../Forms/Select";
import Button from "../Forms/Button";

const CreateBooks = ()=>{

    //RECUPERA OS DADOS DE CATEGORIA DA APIREST
    useEffect(()=>{
        fetch('http://localhost:5000/listagemCateorias', {
            method:'GET',
            headers:{
                'Content-Type':'applicatio/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*',
            }
        }).then(
            (resp)=>
                // console.log('RESPOSTA' + resp)
                resp.json()
        ).then(
            (data)=>{
                console.log('DATA' + data)
            }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }, []);

    return(
        <section className={style.create_book_container}>

            <h1>CADASTRO DE LIVROS</h1>

            <Input
                type='text'
                name='txt_livro'
                placeHolder='Digite o nome do livro aqui'
                text='Titulo do livro'
            />

            <Input  
                type='text'
                name='txt_autor'
                placeHolder='Digite o nome do autor'
                text='Nome do autor'
            />

            <Input  
                type='text'
                name='txt_descricao_livro'
                placeHolder='Digite a descrição do livro'
                text='Descrição do livro'
            />

            <Select
                name='categoria'
                text='Escolha uma categoria de livro'
            />

            <Button
                rotulo='Cadastrar Livro'
            />

        </section>
    )

}
export default CreateBooks