import { ChangeEvent, useState } from "react"

type FullInputPropsType = {
    addMessage: (input:string) => void
}

export const FullInput = (props:FullInputPropsType) => {
    const [title, setTitle] = useState('')
    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setTitle(e.currentTarget.value)
        console.log(title)
    }

    const onClickButtonHandler = (input:string) => {
        props.addMessage(input)
        setTitle('')
    }

    return (
        <div>
            <input onChange={onChangeInputHandler} value={title}/>
            <button onClick={() => onClickButtonHandler(title)}>+</button>
        </div>
    )
}