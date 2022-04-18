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
        <table>
            <thead>
            <tr>
                <th>index</th>
                <th>manufacturer</th>
                <th>model</th>
            </tr>
            </thead>
            <tbody>{props.topCars.map((object, index) => {
                return (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{object.manufacturer}</td>
                        <td>{object.model}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
};

