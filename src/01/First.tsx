import React from 'react';

const First = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <div>
            <table>

                <tr>
                    <th>manufacturer</th>
                    <th>model</th>
                </tr>
                {topCars.map(m => <tr>
                    <td>{m.manufacturer}</td>
                    <td>{m.model}</td>
                </tr>)}
            </table>
        </div>
    );
};

export default First;