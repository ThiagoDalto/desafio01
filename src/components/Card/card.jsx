import { useState } from "react";
import Simulador from "../Simulador/simulador";
import Results from "../Results/results";
import { Consult } from "./cardStyle";

function Card() {
  const [data, setData] = useState([]);
  const [errorMsg, setErrorMsg] = useState([]);
  return (
    <Consult>
      <Simulador
        data={data}
        setData={setData}
        errorMsg={errorMsg}
        setErrorMsg={setErrorMsg}
      />
      <Results data={data} />
    </Consult>
  );
}

export default Card;
