import React from 'react';
import styled from 'styled-components';
import Header from "./components/Header";
import {observer} from "mobx-react-lite";
import changeLook from "./store/changeLook";
import TextInfo from "./components/TextInfo";
import Title from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;
  background: lightgrey;
  color: black;
  font-size: 18px;
  `
const DarkAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 3rem;
  background: black;
  color: lightgrey;
  font-size: 18px;
`

const App = observer(() => {

  return(
      <div>
          {(changeLook.decidedLook === false) ?
              <div>
                  <Header
                      background={"white"}
                  />
                  <AppWrapper>
                      <Title color={"darkblue"}>
                          Test Project
                      </Title>
                      <TextInfo />
                  </AppWrapper>
              </div>
              :
              <div>
                  <Header
                      background={"grey"}
                  />
                  <DarkAppWrapper>
                      <Title color={"red"}>
                          Test Project
                      </Title>
                      <TextInfo />
                  </DarkAppWrapper>
              </div>
          }
      </div>
  )
})

export default App;
