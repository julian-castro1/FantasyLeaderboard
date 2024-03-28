import styled from "styled-components";

function LatestEvent({event}) {
    return <EventContainer>
        <Label>
            LATEST:
        </Label>
        <EventText>
            {event}
        </EventText>
    </EventContainer>
}

const EventContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    margin: 10px;
`
const Label = styled.div`
    font-size: .7em;
    font-weight: 800;
    color: #616161;
    margin-right: auto;
`
const EventText = styled.div`
    color: #b7b7b7;
`

export default LatestEvent;