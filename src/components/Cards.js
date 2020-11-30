import { SwipeableDrawer } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'

function Cards() {
    const [people, setPeople] = useState([
        {
            name: 'Britney Spears',
            url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/britney-spears-during-the-2000-mtv-video-music-awards-at-news-photo-1600877657.jpg?crop=1.00xw:0.620xh;0,0.0126xh&resize=640:*",
        },
        {
            name: 'Beyonce',
            url: "https://scontent.fykz1-1.fna.fbcdn.net/v/t1.0-9/p960x960/123008914_10164683481835601_1190123122635444650_o.jpg?_nc_cat=1&ccb=2&_nc_sid=85a577&_nc_ohc=7z2Cm5Mhm-YAX99DZyJ&_nc_ht=scontent.fykz1-1.fna&tp=6&oh=353ea5e97128ed003c22dbf92d3a904b&oe=5FE8DFFD",
        },
    ])

    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // setLastDirection(direction);
    }
    const outOfFrame = (name) => {
        console.log(name + " Left the screen!");
    }

    return(
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                    onswipe={(dir) => SwipeableDrawer(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards