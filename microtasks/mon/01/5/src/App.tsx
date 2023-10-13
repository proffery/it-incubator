import React, { useState } from 'react';
import './App.css';
import { NewComponent } from './NewComponent';

export type FilterType = 'dollar' | 'ruble' | 'all'

export type MoneyType = {
    banknote: string, 
    nominal: number, 
    number: string
}

const currentMoney = [
    {banknote: "dollar", nominal: 100, number: "a123456789"},
    {banknote: "dollar", nominal: 50, number: "b123456789"},
    {banknote: "ruble", nominal: 100, number: "c123456789"},
    {banknote: "dollar", nominal: 100, number: "d123456789"},
    {banknote: "dollar", nominal: 50, number: "e123456789"},
    {banknote: "ruble", nominal: 100, number: "f123456789"},
    {banknote: "dollar", nominal: 50, number: "j123456789"},
    {banknote: "ruble", nominal: 50, number: "h123456789"}
]

function App() {
    const [money, setMoney] = useState<MoneyType[]>(currentMoney)

    const onClickFilterHandler = (moneyType: FilterType ) => {
        moneyType === 'all' ? setMoney(currentMoney) : setMoney(currentMoney.filter((filteredMoney) => filteredMoney.banknote === moneyType))
    }
    

    return (
       <NewComponent money={money} setMoney={setMoney} onClickFilterHandler={onClickFilterHandler}/> 
    );
}

export default App;
