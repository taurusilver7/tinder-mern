import React, { useEffect, useState } from "react";
import "./TinderCards.css";

import TinderCard from "react-tinder-card";
// import axios from "../../axios";
import db from "../../firebase";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const req = await axios.get("/tinder/cards");

  //     setPeople(req?.data);
  //   };
  //   return () => {
  //     fetchData();
  //   };
  // }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("people")
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        setPeople(snap.docs.map((doc) => doc.data()));
      });
    return () => {
      unsubscribe();
    };
  }, [people]);

  const swiped = (direction, nameToDel) => {
    console.log("removing " + nameToDel);
    // setLastDir(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person?.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: "url(" + person?.imgUrl + ")" }}
            >
              <h3>{person?.name}</h3>
              {/* <p>{person?._id}</p> */}
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
