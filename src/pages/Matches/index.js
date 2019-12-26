import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { convertTimeToString } from '../../utils/app.utils';

import { saveSelectedTeamId, saveSelectedMatchId } from '../App/store/actions';
import { getAllDataSelector, getSelectedMatchIdSelector } from '../App/store/reducers';

import MatchesStyleContainer from './Matches.styled';

const Matches = (props) => {
    const [dataToRender, setDataToRender] = useState([]);

    useEffect(() => {
        setDataToRender(props.allData);
    }, [props.allData]);

    useEffect(() => {
        dataToRender && dataToRender.length > 0 && dataToRender.map(data => {
            if(data.home_team.code+data.away_team.code === props.selectedMatchId){
                const ele = document.getElementById(props.selectedMatchId);
                ele.scrollIntoView();
            }
            return true;
        });
    });

    const _handleTeamClick = (id) => {
        props.dispatch(saveSelectedTeamId(id));
        props.dispatch(saveSelectedMatchId(null));
        props.history.push('/teams');
    };

    return(
        <MatchesStyleContainer>
        {dataToRender && dataToRender.length > 0 && dataToRender.map(data => {
            const showPenalties = (data.home_team.goals === data.away_team.goals);
            const isActive = (props.selectedMatchId === (data.home_team.code+data.away_team.code));
            return(
                <div
                    id={(data.home_team.code+data.away_team.code)}
                    key={data.fifa_id}
                    className={`matchDetailCard ${isActive ? 'activeCard' : ''}`}
                >
                    <div className='matchDetail'>
                        <div className='matchDate'>{convertTimeToString(data.datetime, 'DATE_AND_YEAR')}</div>
                        <div className='matchStatus'>{data.time.toUpperCase()}</div>
                    </div>
                    <div className='teamNameDetail'>
                        <div className='teamNameWithGoals header14'>
                            <span className='teamName' onClick={() => _handleTeamClick(data.home_team.code)}>{data.home_team_country}</span>
                            <span className='teamGoals'>
                                {data.home_team.goals}
                                {showPenalties ? data.home_team.penalties : ''}
                            </span>
                        </div>
                        <span>vs</span>
                        <div className='teamNameWithGoals header14'>
                            <span className='teamGoals'>
                                {data.away_team.goals}
                                {showPenalties ? data.away_team.penalties : ''}
                            </span>
                            <span className='teamName' onClick={() => _handleTeamClick(data.away_team.code)}>{data.away_team_country}</span>
                        </div>
                    </div>
                    <div className='horizontalDivider'/>
                    <div className='matchDetail'>
                        <div className='matchLocation'><span>Location:</span>{data.location}, {data.venue}</div>
                        <div className='matchAttendance'><span>Attendance:</span>{data.attendance}</div>
                    </div>
                    <div className='matchWinner'><span>Winner:</span>{data.winner}</div>
                    <div className='horizontalDivider'/>
                    <div className='teamStatistics'>
                        <div className='statsDetail'>
                            <div className='header12'>{data.home_team_statistics.country}</div>
                            <div>{data.home_team_statistics.attempts_on_goal}</div>
                            <div>{data.home_team_statistics.on_target}</div>
                            <div>{data.home_team_statistics.ball_possession}%</div>
                            <div>{data.home_team_statistics.num_passes}</div>
                            <div>{data.home_team_statistics.pass_accuracy}%</div>
                            <div>{data.home_team_statistics.fouls_committed}</div>
                            <div>{data.home_team_statistics.yellow_cards}</div>
                            <div>{data.home_team_statistics.red_cards}</div>
                            <div>{data.home_team_statistics.offsides}</div>
                            <div>{data.home_team_statistics.corners}</div>
                        </div>
                        <div className='statsDetail'>
                            <div className='header12'>TEAM STATS</div>
                            <div>Shots </div>
                            <div>Shots on target</div>
                            <div>Possession</div>
                            <div>passes</div>
                            <div>pass accuracy</div>
                            <div>fouls</div>
                            <div>yellow card</div>
                            <div>red card</div>
                            <div>offsides</div>
                            <div>corner</div>
                        </div>
                        <div className='statsDetail'>
                            <div className='header12'>{data.away_team_statistics.country}</div>
                            <div>{data.away_team_statistics.attempts_on_goal}</div>
                            <div>{data.away_team_statistics.on_target}</div>
                            <div>{data.away_team_statistics.ball_possession}%</div>
                            <div>{data.away_team_statistics.num_passes}</div>
                            <div>{data.away_team_statistics.pass_accuracy}%</div>
                            <div>{data.away_team_statistics.fouls_committed}</div>
                            <div>{data.away_team_statistics.yellow_cards}</div>
                            <div>{data.away_team_statistics.red_cards}</div>
                            <div>{data.away_team_statistics.offsides}</div>
                            <div>{data.away_team_statistics.corners}</div>
                        </div>
                    </div>
                </div>
            )
        })}
        </MatchesStyleContainer>
    );
}

const mapStateToProps = state => ({
    allData: getAllDataSelector(state),
    selectedMatchId: getSelectedMatchIdSelector(state),
});

export default connect(mapStateToProps)(Matches);