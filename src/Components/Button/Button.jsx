import './Button.css'

const Button = ({children, onClick, isSelected, className}) => {
    return (
        <>
            <button className={className} onClick={onClick}>{children}</button>
        </>
    )
}

export default Button