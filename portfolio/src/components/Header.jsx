import img from '../assets/profile.jpg'

export default function Header() {
    return (
        <header>
            <h1 id="top">What can Greg do?!</h1>
            <a href="https://www.linkedin.com/in/greg-stevenson-422931a9/">
            <img id="avatar" src={img} alt="avatar"></img>
            </a>
        </header>
    )
}