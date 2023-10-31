import img from '../../assets/CSS3_logo_and_wordmark.svg'

export default function CSS() {

    return (
        <article>
                <h3 id="css_h3">CSS</h3>
                {/* <!-- CSS logo image with Github link --> */}
                <a href="https://olegreg762.github.io/Code-Refactor/">
                <img src={img} alt="css logo"></img>
                </a>           
                <p>
                Actively learning CSS language.<br></br>
                Github link to a page I refactored the CSS stylesheet.
                </p> 
        </article>
    )
}