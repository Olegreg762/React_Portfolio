import img from '../../assets/React-icon.svg';

export default function React() {

    return (
        <article>
                <h3 id="python_h3">React</h3>
                {/* <!-- React logo image with link to Github --> */}
                <a href="https://github.com/Olegreg762/Full-Stack-Group-Project-3">
                <img id="react_logo"  src={img} alt="react logo"></img>
                </a>            
                <p>
                I have gained skills in creating react apps.<br></br>
                The linked repo is for a library app. <br></br>
                It is geared towards teachers with personal libraries.<br></br>
                That they want to allow students to have access to and borrow the books.
                </p> 
        </article>
    )
}