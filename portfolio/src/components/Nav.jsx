export default function Nav({currentPage, handlePageChange}) {

    
    return (
        <nav >
        <ul>
            <li><a className={currentPage === 'About' ? 'a-active' : "a"} href="#About" onClick={() => handlePageChange('About')}>About_Me</a></li>
            <li><a className={currentPage === 'Contact' ? 'a-active' : "a"} href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
            <li><a className="a" href="https://www.linkedin.com/in/greg-stevenson-422931a9/">Linkedin</a></li>
            <li><a className="a" href="https://github.com/Olegreg762/">Github</a></li><br></br>
            <li><a className={currentPage === 'About' || currentPage === 'Contact' ? 'a' : "a-active"} href="#work">My_Work</a></li>:
            <li><a className={currentPage === 'Python' ? 'a-active' : "a"} href="#Python" onClick={() => handlePageChange('Python')}>Python</a></li>
            <li><a className={currentPage === 'SQL' ? 'a-active' : "a"} href="#SQL" onClick={() => handlePageChange('SQL')}>SQL</a></li>
            <li><a className={currentPage === 'Solidity' ? 'a-active' : "a"} href="#Solidity" onClick={() => handlePageChange('Solidity')}>Solidity</a></li>
            <li><a className={currentPage === 'Javascript' ? 'a-active' : "a"} href="#Javascript" onClick={() => handlePageChange('Javascript')}>Javascript</a></li>
            <li><a className={currentPage === 'CSS' ? 'a-active' : "a"} href="#CSS" onClick={() => handlePageChange('CSS')}>CSS</a></li>
            <li><a className={currentPage === 'HTML' ? 'a-active' : "a"} href="#HTML" onClick={() => handlePageChange('HTML')}>HTML</a></li>
            <li><a className={currentPage === 'Handlebars' ? 'a-active' : "a"} href="#Handlebars" onClick={() => handlePageChange('Handlebars')}>Handlebars</a></li>    
        </ul>
    </nav>
    );
}