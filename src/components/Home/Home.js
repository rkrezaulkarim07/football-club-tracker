import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Home.css'

const Home = () => {
    const [clubs, setClubs] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`)
            .then(res => res.json())
            .then(data => setClubs(data.teams))
    }, [])

    return (
        <div>
            <div className="banner">
                <h1 id="app-title">Football Club Tracker</h1>
            </div>
            <div class="row row-cols-1 row-cols-md-3 g-4 body-part">
                {
                    clubs.map(club => <Club club ={club}></Club>)

                }
            </div>
        </div>
    );
};

export default Home;