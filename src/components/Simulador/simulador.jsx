import { useState, useEffect } from "react";
import { Form } from "./simuladorStyle";
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"
import {schema} from "../../validators/validateData"
import api from "../../services/api"

function Simulador({ data, setData, setErrorMsg }){
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema)
    })

    function onSubmitFunction({
        amount,
        installments,
        mdr,
        days

    }) {
        const dados = {
            amount,
            installments,
            mdr    
        }
        if(days){
            dados.days = days
        }
        dados.amount = amount.replace(/[A-Z-$]+/g,'').replace(/\,/g, '.')
        
        
        api
        .post('', dados)
        .then((response) => {
            setData(response.data)
            
            
        })
        .catch((error) => {
            
            console.log(error)
        })
    }
    
   
    return(
        <Form  onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>Simule sua Antecipação</h1>
            <label htmlFor="amount" >Informe o valor da venda *</label>
            <input type="text" id="amount" name="amount" {...register("amount")}/>
            <p className="p_error">{errors.amount?.message}</p>

            <label htmlFor="installments">Em quantas parcelas *</label>
            <input type="text" id="installments" name="installments" {...register("installments")}/>
            <p className="p_error">{errors.installments?.message}</p>
            <p>Máximo de 12 parcelas</p>

            <label htmlFor="mdr">Informe o percentual de MDR *</label>
            <input type="text" id="mdr" name="mdr" {...register("mdr")}/>
            <p className="p_error">{errors.mdr?.message}</p>

            <label htmlFor="days">Dias</label>
            <input type="text" id="days" name="days" placeholder=" [1, 2, ...]" {...register("days")}/>
            <p className="p_error">{errors.days?.message}</p>

            <button type="submit">Simular</button>
        </Form>
    )
}

export default Simulador