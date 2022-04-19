import React from 'react';


type BrandType = {
    topCars: TopCarType[]
}

type TopCarType = {
    manufacturer: string,
    model: string
}

export const Brand = (props: BrandType) => {
    return (
        <ul>
            {props.topCars.map((objectFromTopCarArray, manufacturer) => {
                return (
                    <li>
                        <span>{objectFromTopCarArray.manufacturer}</span>
                        <span>   {objectFromTopCarArray.model}</span>
                    </li>
                )
            })}
        </ul>
    )
};

