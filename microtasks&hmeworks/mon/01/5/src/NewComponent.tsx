import { FilterType, MoneyType } from "./App"
import { Button } from "./Button"

type NewComponentType = {
    money: MoneyType[]
    onClickFilterHandler: (money: FilterType) => void
    setMoney: any
}



export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr:any, index:number) => {
                    return(
                        <li key={objFromMoneyArr.number + index.toString()}>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <Button name='all' callback={() => props.onClickFilterHandler('all')} />
            <Button name='dollar' callback={() => props.onClickFilterHandler('dollar')} />
            <Button name='ruble' callback={() => props.onClickFilterHandler('ruble')} />
        </>
    )
}
