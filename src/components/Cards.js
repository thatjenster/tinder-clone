import { SwipeableDrawer } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import axios from '../axios'

function Cards() {
    const [people, setPeople] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('/tinder/card')
            setPeople(request.data)
        }
        fetchData()
    }, [])

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
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default Cards