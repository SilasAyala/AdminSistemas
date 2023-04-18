import React from "react";

import MaterialList from "../components/MaterialList/MaterialList.js";

const Materials = () => {
    const MATERIALS = [
        {
            id: 'm1',
            name: 'San Cristobal',
        },
        {
            id: 'm2',
            name: 'Zona 10',
        }
    ]

    return(
        <MaterialList items = {MATERIALS} />
    );
}

export default Materials;