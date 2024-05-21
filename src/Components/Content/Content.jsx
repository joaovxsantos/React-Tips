import './Content.css'

const Content = ({title, description, code}) => {
    return (
        <div className="content">
            <h3>{title}</h3>
            <p>{description}</p>
            <pre>
                <code>
                    {code}
                </code>
            </pre>
        </div>
    )
}

export default Content