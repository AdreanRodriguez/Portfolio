import './button.css'

function Button({ text, url }) {


    return (
        <a className='button' target="_blank" href={url} > {text} </a>
    )
}

export default Button;