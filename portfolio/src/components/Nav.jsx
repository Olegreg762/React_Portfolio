export default function Nav({currentPage, handlePageChange}) {

    
    return (
        <header >
        <h1 id="top">What can Greg do?!</h1>
            <a href="https://www.linkedin.com/in/greg-stevenson-422931a9/">
            <img id="avatar" src="./resources/images/old-gregg.png" alt="avatar"></img>
        </a>
        <ul>
            <li><a className="a" href="#About" onClick={() => handlePageChange('About')}>About_Me</a></li>
            <li><a className="a" href="#Contact" onClick={() => handlePageChange('Contact')}>Contact</a></li>
            <li><a className="a" href="https://www.linkedin.com/in/greg-stevenson-422931a9/">Linkedin</a></li>
            <li><a className="a" href="https://github.com/Olegreg762/">Github</a></li><br></br>
            <li><a className="a" href="#work">My_Work</a></li>:
            <li><a className="a" href="#Python" onClick={() => handlePageChange('Python')}>Python</a></li>
            <li><a className="a" href="#SQL" onClick={() => handlePageChange('SQL')}>SQL</a></li>
            <li><a className="a" href="#Solidity" onClick={() => handlePageChange('Solidity')}>Solidity</a></li>
            <li><a className="a" href="#Javascript" onClick={() => handlePageChange('Javascript')}>Javascript</a></li>
            <li><a className="a" href="#CSS" onClick={() => handlePageChange('CSS')}>CSS</a></li>
            <li><a className="a" href="#HTML" onClick={() => handlePageChange('HTML')}>HTML</a></li>
            <li><a className="a" href="#Handlebars" onClick={() => handlePageChange('Handlebars')}>Handlebars</a></li>
            
        </ul>
    </header>
    );
}