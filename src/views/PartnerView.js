import React from "react";
import { CardPartner } from "../components/Card";
import { useEffect, useState } from "react";
import { getPartner } from "../services/UsuarioService";


const PartnerView = () => {
    const[partner, setPartner] = useState ([])

    useEffect(() => {
        obtColaboradora();
    }, [])

    const obtColaboradora = async () => {

        try {
            setPartner(await getPartner());
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <CardPartner partner={partner}/>
        </div>
    )
}

export {PartnerView};