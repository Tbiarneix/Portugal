import React, { useState, useEffect } from "react";
import { onSnapshot, collection, setDoc, doc } from "firebase/firestore";
import styled from "styled-components";
import db from "./firebase";

const HousesInfos = () => {
  const [houses, setHouses] = useState([
    { image: "Chargement...", id: "Initialisation" },
  ]);

  console.log(houses);

  useEffect(() => {
    const datas = onSnapshot(collection(db, "houses"), (snapshot) => {
      setHouses(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return datas;
  }, []);

  const handleOnClickPos = async (id) => {
    const docRef = doc(db, "houses", id);
    const houseToModified = houses.find((house) => id == house.id);
    const addVote = houseToModified.vote + 1;
    const payload = { ...houseToModified, vote: addVote };
    setDoc(docRef, payload);
  };

  const handleOnClickNeg = (id) => {
    const docRef = doc(db, "houses", id);
    const houseToModified = houses.find((house) => id == house.id);
    const addVote = houseToModified.vote - 1;
    const payload = { ...houseToModified, vote: addVote };
    setDoc(docRef, payload);
  };

  return (
    <HouseContainer>
      {houses.map((locations) => (
        <House key={locations.id}>
          <MyImg src={locations.image} alt="House Image" />
          <MyDivButton>
            <a href={locations.link} target="_blank">
              <MyButton type="button">Voir la location</MyButton>
            </a>
          </MyDivButton>
          <MyText>
            <MyP>{locations.price} euros</MyP>
            <MyP>{locations.location}</MyP>
            <MyP>{locations.dates}</MyP>
          </MyText>
          <Prices>
            <p>
              Tom et Caro : {Math.round((locations.price / 11) * 2.5)} euros
            </p>
            <p>
              Pierre et Cécile : {Math.round((locations.price / 11) * 2.5)}{" "}
              euros
            </p>
            <p>
              David et Eugénie : {Math.round((locations.price / 11) * 3)} euros
            </p>
            <p>
              Fifi et Bichon : {Math.round((locations.price / 11) * 3)} euros
            </p>
          </Prices>
          <CountButtons>
            <button onClick={() => handleOnClickNeg(locations.id)}>-1</button>
            <button onClick={() => handleOnClickPos(locations.id)}>+1</button>
          </CountButtons>
          <p>{locations.vote}</p>
        </House>
      ))}
    </HouseContainer>
  );
};

const HouseContainer = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto 5rem;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const House = styled.div`
  display: flex;
  width: 25%;
  align-items: center;
  flex-direction: column;
  margin: 1rem 2rem auto;
  padding: 1rem;
  border: 3px solid #6e0707;
  border-radius: 15px;

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const MyImg = styled.img`
  max-width: 95%;
  border-radius: 15px;
  overflow: hidden;
`;

const MyDivButton = styled.div`
  display: flex;
`;

const MyButton = styled.button`
  margin: 1rem auto 0;
  padding: 1rem;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #077a07;
  color: white;
  font-weight: bold;
  :hover {
    background-color: #099909;
  }
`;

const MyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
`

const MyP = styled.p`
  margin: 5px;
`

const Prices = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 1rem;
  font-style: italic;
`;

const CountButtons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem;
`;

export { HousesInfos };

// const handleNewHouse = async () => {
//   const collectionRef = collection(db, "houses");
//   const payload = { link: "Test2", image: "Test2", price: 3880, location: "Test2", vote: 0, dates: "Du Samedi au samedi" }
//   await addDoc(collectionRef, payload)
// }

// const AddButton = () => {
//   return (
//     <MyDivButton>
//       <MyButton onClick={handleNewHouse}>Ajouter une location</MyButton>
//     </MyDivButton>
//   );
// };

// const MyDivButton = styled.div`
//   display: flex;
// `

// const MyButton = styled.button`
//   margin: auto;
//   padding: 1rem;
//   font-size: 1rem;
//   border-radius: 25px;
//   background-color: #00a100;
//   color: white;
//   font-weight: bold;
//   :hover {
//     background-color: #02cc02;
//   }

// `;
