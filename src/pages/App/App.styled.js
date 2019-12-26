import Styled from 'styled-components';
import { dim } from '../../styles/theme';

const AppStyledContainer = Styled.div`
.appContainer {
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 0px 5%;
    margin-top: ${dim._8px};
    max-height: ${props => `calc(${props.appHeight}px - ${dim._scale(130)})`};
    overflow-y: scroll;
}
`;

export default AppStyledContainer;