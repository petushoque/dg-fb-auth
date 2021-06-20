import './Footer.css'

export default function Footer () {
    return (
        <div className='footer'>
            2020-{(new Date()).getFullYear()} &#169; <a className='footer__link' href='http://kubasovalexei.ru/'>Kubasov Alexei</a>
        </div>
    )
}