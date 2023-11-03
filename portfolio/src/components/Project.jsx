import { useState } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import CSS from './pages/CSS';
import Handlebars from './pages/Handlebars';
import HTML from './pages/HTML';
import Javascript from './pages/Javascript';
import Python from './pages/Python';
import SQL from './pages/SQL';
import Solidity from './pages/Solidity';
import Resume from './pages/Resume';


export default function Project() {
    const [currentPage, setCurrentPage] = useState('About');

    const projectRender = {
        "About": <About/>,
        "Contact": <Contact/>,
        "CSS": <CSS/>,
        "Handlebars": <Handlebars/>,
        "HTML": <HTML/>,
        "Javascript": <Javascript/>,
        "Python":<Python/>,
        "SQL": <SQL/>,
        "Solidity": <Solidity/>,
        "Resume": <Resume/>
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Header/>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            <section className='container'>
                {projectRender[currentPage]}<br></br>
            </section>
            <Footer/>
        </div>
    )
}