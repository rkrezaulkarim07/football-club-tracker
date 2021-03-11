import React from 'react';
import { Link } from 'react-router-dom';

const Club = (props) => {
    const { strTeam, strTeamBadge, strStadium, idTeam } = props.club;

    return (
        <div class="col-md-4 mb-5">
            <div class="card">
                <img src={strTeamBadge} style={{ width: '100px'}} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h2 class="card-title">Club : {strTeam}</h2>
                    <p class="card-text">Stadium : {strStadium}</p>
                    <Link to={`/club/${idTeam}`}><button as={Link} to={`/club/${idTeam}`} class="btn btn-primary">Explore</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Club;