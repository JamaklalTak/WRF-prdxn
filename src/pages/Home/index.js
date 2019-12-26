import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { convertTimeToString } from '../../utils/app.utils';

import { saveSelectedMatchId } from '../App/store/actions';
import { getAllDataSelector } from '../App/store/reducers';

import HomeStyleContainer from './Home.styled';

const Home = (props) => {
    const [dataToRender, setDataToRender] = useState([]);

    useEffect(() => {
        setDataToRender(props.allData);
    }, [props.allData]);
 
    const _handleMatchViewClick = (id) => {
        props.dispatch(saveSelectedMatchId(id));
        localStorage.setItem('selectedTabPath', '/matches');
        props.history.push('/matches');
    };

    return(
        <HomeStyleContainer>
        {dataToRender && dataToRender.length > 0 && dataToRender.map(data => {
            const FT = (data.time === 'full-time');
            const winner = (data.winner === data.home_team_country);
            const matchId = (data.home_team.code+data.away_team.code);
            return(
                <div
                    id={matchId}
                    key={matchId + data.fifa_id}
                    className='matchCard'
                    onClick={() => _handleMatchViewClick(matchId)}
                >
                    <div className='matchCardLeftPart'>
                    <div className='teamNames'>
                        <div className='homeTeamName'>{data.home_team_country}</div>
                        <div className='awayTeamName'>{data.away_team_country}</div>
                    </div>
                    <div className='teamGoals'>
                        <div className='goals'>
                            {data.home_team.goals}
                            {winner && <div>W</div>}
                        </div>
                        <div className='goals'>
                            {data.away_team.goals}
                            {!winner && <div>W</div>}
                        </div>
                    </div>
                    </div>
                    <div className='verticalLine'/>
                    <div className='matchCardRightPart'>
                        {FT && <div className='matchStatus'>FT</div>}
                        <div className={`matchDate ${FT ? 'postMatch' : ''}`}>{convertTimeToString(data.datetime, 'DATE_AND_YEAR')}</div>
                        {!FT && <div className='matchTime'>{convertTimeToString(data.datetime, 'HOUR_AND_MINUTE')}</div>}
                    </div>
                </div>
            )
        })}
        </HomeStyleContainer>
    );
}

const mapStateToProps = state => ({
    allData: getAllDataSelector(state),
});

export default connect(mapStateToProps)(Home);
