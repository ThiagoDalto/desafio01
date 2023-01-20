
import { Results } from "./listResultsStyle"



function ListResults({data, errorMsg}){
    const dias = Object.keys(data)
    const valor = Object.values(data)
    const entries = Object.entries(data)
    
    
    return(
        <>
            
            {    
                entries.length ? (
                entries.map((entrie, index) => 
                     (
                            <li key={index}>{entrie[0] === "1" ? `Amanhã: R$ ${entrie[1].toFixed(2)}` : `Em ${entrie[0]} dias: R$ ${entrie[1].toFixed(2)}`}</li>
                    ))): (
                        <>
                        <li>Amanhã: <strong>R$ 0,00</strong>  </li>
                        <li>Em 15 dias:  <strong>R$ 0,00</strong> </li>
                        <li>Em 30 dias:  <strong>R$ 0,00</strong> </li>
                        <li>Em 90 dias:  <strong>R$ 0,00</strong> </li>
                    </>
                )
            }
           
        </>
    )

}

export default ListResults;