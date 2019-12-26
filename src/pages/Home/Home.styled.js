import Styled from 'styled-components';
import Theme, { dim } from '../../styles/theme';

const HomeStyleContainer = Styled.div`
display: flex;
flex: 1;
flex-wrap: wrap;
height: 100%;
align-items: center;
justify-content: space-between;

.matchCard {
    display: flex;
    width: ${dim._scale(374)};
    height: ${dim._64px};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${Theme.color.base_100};
    padding: ${dim._16px} ${dim._24px};
    margin: 0px ${dim._4px} ${dim._4px} ${dim._4px};
    :hover{
        cursor: pointer;
        background-color: ${Theme.color.highlights_blue};
        box-shadow: 2px 2px 4px 0px grey;
    }
}

.homeTeamName {
    padding: ${dim._4px} ${dim._8px};
}

.awayTeamName {
    padding: ${dim._4px} ${dim._8px};
}

.goals{
    padding: ${dim._4px} ${dim._8px};
    display: flex;
    flex-direction: row;
}

.verticalLine {
    width: 1px;
    height: 100%;
    background-color: ${Theme.color.base_70};
}

.matchLocation {

}

.matchStatus {

}

.matchWinner {

}

.matchCardLeftPart {
    display: flex;
    flex: 0.7;
    flex-direction: row;
}

.matchCardRightPart {
    display: flex;
    flex: 0.3;
    flex-direction: column;
    align-items: center;
}

.teamNames {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.teamGoals {

}

.matchStatus {

}

.matchDate {

}

.postMatch {

}

.matchTime {

}


`;

export default HomeStyleContainer;