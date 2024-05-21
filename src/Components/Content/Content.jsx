import './Content.css'

const Content = ({title, description, code, id}) => {
    return (
        <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code id={id}>
                    {code}
                </code>
            </pre>
        </div>
    )
}

export default Content