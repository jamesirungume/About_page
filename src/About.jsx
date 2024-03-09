import React, { useEffect, useState } from 'react';
import ndotoimage from './image/ndotoimage.jpeg';
import land from './image/land.jpeg'
import population from './image/population.jpeg'
import sight from './image/sight.jpeg'
import sightOne from './image/sightOne.jpeg'
import sightTwo from './image/sighTwo.jpeg'

import './About.css';

function About() {
    const [showCard, setShowCard] = useState(false);

    useEffect(() => {
        // After the component mounts, set showCard to true after a short delay
        const timer = setTimeout(() => {
            setShowCard(true);
        }, 500); // Adjust delay as needed

        return () => clearTimeout(timer); // Cleanup function
    }, []);

    return (
        <>
            <div className="container">
                <img src={ndotoimage} alt="none" id='front_image' />
                <div className={`card ${showCard ? 'show' : ''}`}>
                    <h1>Ndoto Forest</h1>
                    <p>Ndoto Forest Community Conservation Organization is a registered community-based organization in Samburu North sub-county with a primary focus on combating climate change through forest conservation</p>
                </div>
            </div>
            <div className="location">
                <h1>Location</h1>
                <div className='locationContent'>
                <p>Samburu County, situated in the Arid and Semi-Arid regions of Kenya, covers an area of 21,022.1 square kilometers and lies in the northern part of the Great Rift Valley. Bordered by Turkana, Baringo, Marsabit, Isiolo, and Laikipia, the county's altitude ranges from 600 to 1,450 meters above sea level, with 80% of the land falling within this range. Primarily used as grazing fields by pastoralist communities and for wildlife conservation, the county hosts diverse fauna, including giraffes, lions, elephants, and more.</p>
                <img src='https://static.wixstatic.com/media/bc439c_514d7c2bcaa74291bde08d2de2f29a66~mv2.png/v1/fill/w_480,h_342,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc439c_514d7c2bcaa74291bde08d2de2f29a66~mv2.png' alt="map" />
                </div>
            </div>
            <div className="Land">
                <h1>Land ownership and land use</h1>
                <div className='locationContent'>
                <p>Land ownership in Samburu County falls into four categories: Trust, communal, Government, and Private. Communal land, managed by communities, and private land, including group ranches, dominate the landscape.The county's primary land use practices revolve around pastoralism and wildlife conservation, accounting for over 90% of total land holdings. Additionally, farming occurs in favorable areas such as Poro, Baragoi, South Horr, and Tuum divisions, while gazetted forests cover 15% of the land area, providing crucial habitat and forage for both wildlife and livestock.</p>
                <img src={land} alt="none" />
                </div>
            
            </div>
            <div className='testimonial'>
                <p>The primary objective of the organization is to sustainably conserve Ndoto Forest, ensuring it continues to provide ecological, socio-economic, and cultural services. Additionally, the organization seeks to initiate, complement, and scale up conservation programs that promote biodiversity and improve livelihoods within the forest and its surrounding communities.An immediate objective of the organization is to engage the community, Kenya Forest Service (KFS), and other relevant stakeholders in forest management and conservation activities. Collaboration is crucial for realizing the vision of a well-conserved Ndoto Forest.</p>
            </div>
            <div id="Population">
               <h1 >Population</h1>
                <div className='locationContent'>
                    <p>According to the 2019 Population and Housing Census, Samburu County had a population of 310,327, with a significant growth rate of 4.45% per annum, surpassing the national rate of 3%. Samburu North Sub-County, with a population of 67,391, experiences steady population growth, necessitating the expansion of basic amenities and sustainable development initiatives.</p>
                    <img src={population}/>
                </div>
            </div>
            <div className='Sight'>
                <h1>A sight to see</h1>
                <div className='sightImages'>
                    <img src={sight}/>
                    <img src={sightOne}/>
                    <img src={sightTwo}/>
                </div>
            </div>
        </>
    );
}

export default About;
