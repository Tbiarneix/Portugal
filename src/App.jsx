import React from "react";
import styled from "styled-components";
import { HousesInfos } from "./House";

const App = () => {
  return (
    <div className="App">
      <MyH1>Vacances au Portugal</MyH1>
      <MyP>
        Votez ici pour vos 3 maisons préférées. Il n'y a pas de blocage
        automatique, alors faites bien attention de ne voter que pour 3 maisons
        !{" "}
      </MyP>
      <MyH2>Répartition des parts</MyH2>
      <MyP>
        Suivant la proposition de David, je suis parti sur 1 part par adulte et
        une demi-part par enfant, afin d'équilibrer le coup de la loc mais de
        réduire l'impact de enfants. Je n'ai pas compté les enfants de moins de
        2 ans.
        Ce qui donne 2,5 parts pour Tom et Caro / Cécile et Pierre et 3 parts pour les autres.
      </MyP>
      {/* <AddButton /> */}
      <HousesInfos />
    </div>
  );
};

const MyH1 = styled.h1`
  color: #000000;
  text-align: center;
`;

const MyH2 = styled.h2`
  color: #000000;
  text-align: center;
`;

const MyP = styled.p`
  text-align: center;
  width: 50%;
  margin: 0 auto 2rem;
`;

export default App;
