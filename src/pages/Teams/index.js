import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getAllTeamDataSelector, getSelectedTeamIdSelector } from '../App/store/reducers';

import TeamsStyleContainer from './Teams.styled';

const Teams = (props) => {

  useEffect(() => {
    props.allTeamData && props.allTeamData.length > 0 && props.allTeamData.map(data => {
        if(data.teamCode === props.selectedTeamId){
            const ele = document.getElementById(props.selectedTeamId);
            ele.scrollIntoView();
        }
        return true;
    });
  });

    return(
    <TeamsStyleContainer>
        {props.allTeamData && props.allTeamData.length > 0 && props.allTeamData.map(data => {
          const isActive = (props.selectedTeamId === data.teamCode);
          return(
            <div id={data.teamCode} key={data.teamCode} className={`teamDetail ${isActive ? 'activeTeam' : ''}`}>
              <div className='teamName header16'>{data.teamName}</div>
              <div className='teamPlayerList'>
                <div className='groupTitle button14'>Starting Eleven</div>
                {data.startingEleven && data.startingEleven.length > 0 &&
                data.startingEleven.map(item => {
                  return (<div key={item.name+item.shirt_number} className='playerDetail'>
                    <div className='playerName'>
                      {item.name}
                      {item.captain ? <span className='playerCaptain'>C</span> : ''}
                    </div>
                    <div className='playerShirtNumber'>{item.shirt_number}</div>
                    <div className='playerPosition'>{item.position}</div>
                  </div>)
                })
                }
                <div className='groupTitle button14'>Substitutes</div>
                {data.substitutes && data.substitutes.length > 0 &&
                data.substitutes.map(item => {
                  return (<div key={item.name+item.shirt_number} className='playerDetail'>
                    <div className='playerName'>
                      {item.name}
                      {item.captain ? <span className='playerCaptain'>C</span> : ''}
                    </div>
                    <div className='playerShirtNumber'>{item.shirt_number}</div>
                    <div className='playerPosition'>{item.position}</div>
                  </div>)
                })
                }
              </div>
            </div>
          )
        })}
    </TeamsStyleContainer>
    );
}

const mapStateToProps = state => ({
    allTeamData: getAllTeamDataSelector(state),
    selectedTeamId: getSelectedTeamIdSelector(state),
});

export default connect(mapStateToProps)(Teams);