import React from "react";
import { useParams } from "react-router-dom";
import ReciclajeList from "../../Reciclaje/components/ReciclajeList/ReciclajeList";

const RECICLAJES = [
    {
        id: 'r1',
        title: 'Sede San Cristobal',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum turpis dignissim turpis blandit, ac consequat libero feugiat.',
        imageURL: 'https://phantom-elmundo.unidadeditorial.es/425fa06f30584eea6c91494e00c602de/crop/0x13/3049x1728/resize/600/f/webp/assets/multimedia/imagenes/2022/09/14/16631389546589.jpg',
        address: 'San Cristobal Zona 8 de Mixco',
        videoURL: 'https://www.youtube.com/watch?v=xI4BwOpKLPs',
        location: {
            lat: 14.601314180989998, 
            lng: -90.5951122892065
        },
        materialId: 'm1'     
    },
    {
        id: 'r2',
        title: 'Cartón',
        description: 'Tiempo de degradación del papel y del cartón: 1 año. Al ser básicamente celulosa, su tiempo de descomposición es escaso. Además, si el ambiente es lluvioso y se encuentra en la superficie, su biodegradación se acelera. El problema puede residir en las tintas que se emplean.',
        imageURL: 'https://www.guatemala.com/fotos/201701/CODIGUA3-885x500.jpg',
        address: 'CODIGUA',
        videoURL: 'https://www.youtube.com/watch?v=cyBGiOblUIE',
        location: {
            lat: 14.574695, 
            lng: -90.545454
        },
        materialId: 'm2'     
    }
];


const Reciclaje = () => {
    const materialId = useParams().materialId;
    const loadedMaterials = RECICLAJES.filter(material => material.materialId === materialId);

    return(
        <ReciclajeList items={loadedMaterials} />
    );
}

export default Reciclaje