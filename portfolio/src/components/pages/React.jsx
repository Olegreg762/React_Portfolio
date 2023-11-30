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
                The linked repo is for a library app. It is geared towards teachers with personal libraries
                that they want to allow students borrow the books.
                </p> 
        </article>
    )
}