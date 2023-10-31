import img from '../../assets/sql-database-generic.svg';

export default function SQL() {

    return (
        <article>
                <h3 id="sql_h3">SQL</h3>
                {/* <!-- SQL logo imagee with a Github link --> */}
                <a href="https://github.com/Olegreg762/FintechBootcamp/tree/main/SQL_homework">
                <img src={img} alt="sql logo"></img>
                </a>
                <p>
                Experience in bulding and querying SQL databases
                </p>
        </article>
    )
}