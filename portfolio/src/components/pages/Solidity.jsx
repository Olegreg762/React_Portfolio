import img from '../../assets/771px-Solidity_logo.svg.png';

export default function Solidity() {

    return (
        <article>
                {/* <!-- Solidity logo image with Github link --> */}
                <h3 id="solidity_h3">Solidity</h3>
                <a href="https://github.com/Olegreg762/Group_Project_3">
                <img id="solidity_logo" src={img} alt="solidity logo"></img>
                </a>
                <p>
                Built and deployed solidity smart contracts. 
                Including a lending and borrowing contract.
                </p>
        </article>
    )
}