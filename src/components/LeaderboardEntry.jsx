import styled from "styled-components";

function LeaderboardEntry({ team }) {

    return (
      <EntryContainer rank={team.rank}>
        <Position rank={team.rank}>#{team.rank}</Position>
        <NamesContainer>
          <TeamName>{team.teamName}</TeamName>
          <UserName>{team.user}</UserName>
        </NamesContainer>
        <PointChange>
          {team.prevPosition > team.rank ? (
            <span style={{ color: "green" }}>▲</span>
          ) : team.prevPosition < team.rank ? (
            <span style={{ color: "red" }}>▼</span>
          ) : (
            <span style={{ color: "grey" }}>-</span>
          )}
        </PointChange>
        <PointsContainer>
          <Points>{team.points}</Points>
        </PointsContainer>
      </EntryContainer>
    );
}

const EntryContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    border-color: ${(props) => (props.rank === 1 ? "gold" : "white")};
    border-style: solid;
    border-width: ${(props) => props.rank === 1 ? "2px" : "0"};

    padding-left: 1rem;
    padding-top: .5rem;
    padding-bottom: .5rem;
    padding-right: .5rem;
    /* padding-right: 1rem; */
    border-radius: 10px;

    background-color: #2e2d2d;

    height: 50px;

`
const Position = styled.div`
    color: ${(props) => (props.rank === 1 ? "gold" : "white")};
    font-size: 1.1em;
    font-weight: 600;

    flex: 1;
`
const NamesContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
`
const TeamName = styled.div`
  font-size: 1em;
  font-weight: 400;

  color: #d7d7d7;
`;
const UserName = styled.div`
  font-size: .7em;
  font-weight: 700;

    color: #636363;
`;
const PointChange = styled.div`
    flex: 1;
`
const PointsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1.6;

    background-color: #323232;
    border-radius: 6px;
    height: 100%;
    
`
const Points = styled.div`
    font-size: 1.1em;
    color: #aeaeae;
    font-weight: 600;
`


export default LeaderboardEntry;