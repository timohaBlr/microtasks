import React, {useState} from 'react';
import Button from "./Button";


type FilterValueType = 'all' | 'Dollars' | 'RUBLS'

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<FilterValueType>('all')
        const buttonOnClickHandler = (filter: FilterValueType) => {
        setFilter(filter as FilterValueType)
        console.log(filter)
    }
    let resultMoney = filter==='RUBLS' ? money.filter(f=> f.banknots ==='RUBLS'): filter ==='Dollars' ? money.filter(f=> f.banknots ==='Dollars') : money
    return (
        <div>
            <Button name={'all'} callBack={() => buttonOnClickHandler('all')}/>
            <Button name={'Dollars'} callBack={() => buttonOnClickHandler('Dollars')}/>
            <Button name={'RUBLS'} callBack={() => buttonOnClickHandler('RUBLS')}/>
            <ul>{resultMoney.map((m, index) =>
                <li key={index}>
                    <span>{m.banknots} </span>
                    <span>{m.value} </span>
                    <span>{m.number} </span>
                </li>)}</ul>
        </div>
    );
};

export default Filter;