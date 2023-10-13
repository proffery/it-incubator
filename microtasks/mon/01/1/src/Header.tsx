
type HeaderType = {
    title: string
}

export const Header = (props:HeaderType) => {
    return (
        <header>{props.title}</header>
    )
}