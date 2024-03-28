import { useEffect, useState } from 'react'
import './App.css'
import Heading from './components/Heading'
import styled from 'styled-components'
import { getAllInfo } from './API/backendConnect'
import LatestEvent from './components/LatestEvent'
import LeaderboardEntry from './components/LeaderboardEntry'


function App() {
  const [teams, setTeams] = useState({});

  useEffect(() => {
    let info = getAllInfo();
    setTeams(info.Teams);
  }
  , []);


  return (
      <PageContainer>
        <Heading />
        <LatestEvent event="Alonso overtakes Verstappen!"></LatestEvent>
        <Divider></Divider>
        <LeaderboardContainer>
          {Object.keys(teams).map((team) => {
            return (
              <LeaderboardEntry key={team} team={teams[team]}></LeaderboardEntry>
            )
          })}
        </LeaderboardContainer>
      </PageContainer>

  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
`
const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  margin: 10px;

  gap: 10px;
`
const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #3a3a3a;
  margin: 10px;
  margin-top: 20px;
`

export default App
