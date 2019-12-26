import Styled from 'styled-components';
import Theme, { dim } from '../../styles/theme';

const HomeStyleContainer = Styled.div`
display: flex;
flex: 1;
flex-wrap: wrap;
align-items: center;
justify-content: center;

.matchDetailCard {
    display: flex;
    flex-direction: column;
    width: ${dim._scale(384)};
    height: auto;
    background-color: ${Theme.color.base_100};
    padding: ${dim._12px} ${dim._16px};
    margin: ${dim._4px};
    cursor: default;
}

.activeCard {
    background-color: ${Theme.color.highlights_blue};
    box-shadow: 2px 2px 4px 0px grey;
}

.teamStatistics{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.matchCard{
    display: flex;
    flex-direction: row;
}

.teamNameDetail {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${dim._12px} 0px;
}

.teamName{
    cursor: pointer;
    border-bottom: 1px solid ${Theme.color.base_100};
    :hover{
        border-bottom: 1px solid ${Theme.color.base_0};
        transition: border-bottom 2s;
    }
}

.teamNameWithGoals{
    display: flex;
    flex: 1;
    justify-content: space-evenly;
}

.teamGoals {
    padding: 0px ${dim._4px};
}

.matchDetail {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: ${dim._4px} 0px;
}

.horizontalDivider {
    height: 1px;
    width: 100%;
    background-color: ${Theme.color.base_70};
}

.matchLocation {
    span {
        color: ${Theme.color.text_low_emphasis};
    }
}

.matchDate{
    span {
        color: ${Theme.color.text_low_emphasis};
    }
}
.matchStatus {
    margin: ${dim._4px} 0px;
    span {
        color: ${Theme.color.text_low_emphasis};
    }
}

.matchAttendance {
    margin: ${dim._4px} 0px;
    span {
        color: ${Theme.color.text_low_emphasis};
    }
}

.matchWinner {
    margin: ${dim._4px} 0px;
    span {
        color: ${Theme.color.text_low_emphasis};
    }
}

.statsDetail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.statsDetail>div {
    margin: ${dim._4px} 0px;
}

`;

export default HomeStyleContainer;