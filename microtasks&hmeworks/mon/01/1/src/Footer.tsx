
type FooterType = {
    titleForFooter:string
}

export const Footer = (props:FooterType) => {
    return (
        <footer>{props.titleForFooter}</footer>
    )
}