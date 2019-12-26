import Styled from 'styled-components';
import Theme, { dim } from '../../styles/theme';

const TeamsStyleContainer = Styled.div`
display: flex;
flex-wrap: wrap;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;

.teamDetail {
    display: flex;
    width: ${dim._scale(284)};
    flex-direction: column;
    align-items: center;
    background-color: ${Theme.color.base_100};
    padding: ${dim._12px} ${dim._16px};
    margin: ${dim._4px};
}

.activeTeam {
    background-color: ${Theme.color.highlights_blue};
    box-shadow: 2px 2px 4px 0px grey;
}

.teamName {

}

.teamPlayerList {
    width: 100%;
}

.groupTitle {
    margin: ${dim._6px} 0px;
}

.playerDetail {
    display: flex;
    flex-direction: row;
}

.playerName {
    display: flex;
    width: 100%;
}

.playerCaptain {
    display: flex;
    flex: 0.2;
    align-items: center;
    justify-content: center;
    margin-left: ${dim._2px};
    border-radius: 100%
    background-color: ${Theme.color.green_80};
}

.playerShirtNumber {
    display: flex;
    width: ${dim._20px};
    margin: 0px ${dim._6px} 0px ${dim._2px};
}

.playerPosition {
    display: flex;
    width: ${dim._scale(90)};
}

`;

export default TeamsStyleContainer;
