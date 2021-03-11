import React, { useEffect, useState } from 'react';
import './ClubDetail.css';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const ClubDetail = () => {
    const { clubId } = useParams();
    const [club, setClub] = useState({})

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setClub(data.teams[0]))
    }, [])
    return (
        <div className="club-detail-background">
            <img class="w-100 md-5" src={club.strTeamBanner} alt="" />

            {/* Club-Cart-Part */}
            <div class="container">
                <div class="row mt-3 club-cart-detail">
                    <div class="col-md-6">
                        <h4>Club : {club.strTeam}</h4>
                        <h4>Country : {club.strCountry}</h4>
                        <h4>Gender : {club.strGender}</h4>
                        <h4>League : {club.strLeague}</h4>
                    </div>
                    <div class="col-md-6">
                        {
                            club.strGender === 'female' ? (<img style={{ width: '250px' }} src="https://i.ibb.co/B2MSNB2/female.png" alt="" />) :
                            (<img style={{ width: '250px' }} src="https://i.ibb.co/6chqC02/male.png" alt="" />)
                        }
                    </div>
                </div>

                {/* Description-part */}
                <p id="club-description">{club.strDescriptionEN}</p>
            </div>

            {/* Social-Icon-Part */}
            <div class="text-center">
                <a href="https://www.facebook.com" target="_blank"><span id="facebook-icon"><FontAwesomeIcon icon={faFacebook} /></span></a>
                <a href="https://www.instagram.com/" target="_blank"><span id="instagram-icon"><FontAwesomeIcon icon={faInstagram} /></span></a>
                <a href="https://twitter.com/" target="_blank"><span id="twitter-icon"><FontAwesomeIcon icon={faTwitter} /></span></a>
                <a href="https://www.youtube.com/" target="_blank"><span id="youtube-icon"><FontAwesomeIcon icon={faYoutube} /></span></a>
            </div>
        </div>
    );
};

export default ClubDetail;