import { useEffect } from "react"
import { useState } from "react"
import style from "./Calc.module.css"
import Menu from "./components/Menu"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMulti, setRespMulti] = useState()
    const [respDiv, setRespDiv] = useState()

    

   // useEffect(()=>{
   //     if(numero1 !== undefined && numero2 !== undefined)
   //     setRespSoma(parseFloat(numero1) + parseFloat(numero2))
   //     setRespSub(parseFloat(numero1) - parseFloat(numero2))
   //     setRespMulti(parseFloat(numero1) * parseFloat(numero2))
   //     setRespDiv(parseFloat(numero1) / parseFloat(numero2))
   //
   // }, [numero1, numero2])

   

    const handelSoma = () => setRespSoma   (parseFloat(numero1) + parseFloat(numero2))
    const handelSub = () => setRespSub     (parseFloat(numero1) - parseFloat(numero2))
    const handelMulti = () => setRespMulti (parseFloat(numero1) * parseFloat(numero2))
    const handelDiv = () => setRespDiv     (parseFloat(numero1) / parseFloat(numero2))

    return(
        <>
            <Menu/>
            <div className={style.wrapCalc}>
                <h1>Calculos</h1>
                <div>
                    <input type="text"
                    className={style.inputStyle}
                    value={numero1}
                    onChange={(e) => setNumero1(e.target.value)}
                    />
                    <input type="text"
                    className={style.inputStyle}
                    value={numero2}
                    onChange={(e) => setNumero1(e.target.value)}
                    />
                    <button onC>Calcular tudo</button>
                </div>
            </div>
            <div className={style.wrapAllInputs}>
                <div>
                    <h1>Soma</h1>
                    {!isNaN(respSoma) && respSoma}
                    <button onClick={handelSoma}>SOMAR</button>
                </div>
                <div>
                    <h1>Sub</h1>
                    {!isNaN(respSub) && respSub}
                    <button onClick={handelSub}>SUB</button>
                </div>
                <div>
                    <h1>Multi</h1>
                    {!isNaN(respMulti) && respMulti}
                    <button onClick={handelMulti}>MULTI</button>
                </div>
                <div>
                    <h1>Div</h1>
                    {!isNaN(respDiv) && respDiv.toFixed}
                    <button onClick={handelDiv}>DIV</button>
                </div>
            </div>
        </>
    )
}
