import img from '../../assets/python-logo-only.svg';

export default function Python() {

    return (
        <article>
                <h3 id="python_h3">Python</h3>
                {/* <!-- Python logo image with link to Github --> */}
                <a href="https://github.com/Olegreg762/FintechBootcamp/tree/main/python_homework/PyBank">
                <img id="python_logo"  src={img} alt="python logo"></img>
                </a>            
                <p>
                I have written several programs and scripts in Python.<br></br>
                These programs have used Python libaries such as Pandas, Web3, Streamlit, Scikit-Learn.<br></br>
                I also have used Pyscript and Streamlit Lite to build web apps.
                </p> 
        </article>
    )
}