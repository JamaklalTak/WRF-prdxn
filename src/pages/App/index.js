import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import Routes from '../../Routes';
import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

import { getAllData, saveAllTeamData } from './store/actions';
import { getUserLoginStatusSelector, getUserDataSelector, getAllDataSelector, getAllTeamDataSelector } from './store/reducers';

import AppStyleContainer from './App.styled.js';

const App = (props) => {
  const { isUserLoggedIn, allData } = props;
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);
  const [appHeight, setAppHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setAppHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
  });

  useEffect(()=> {
    props.dispatch(getAllData());
  }, [isUserLoggedIn]);

  useEffect(() => {
    const tempArray = [];
    if(allData && allData.length > 0){
      allData.forEach(item => {
        let canAddHomeTeam = false;
        let canAddAwayTeam = false;
        canAddHomeTeam = !canAddAwayTeam && tempArray && tempArray.length > 0 && tempArray.every(team => {
          if(team.teamName.toUpperCase() !== item.home_team_country.toUpperCase()) {
            return true;
          }
          return false;
        });
        canAddAwayTeam = !canAddHomeTeam && tempArray && tempArray.length > 0 && tempArray.every(team => {
          if(team.teamName.toUpperCase() !== item.home_team_country.toUpperCase()) {
            return true;
          }
          return false;
        });
        if((tempArray && tempArray.length === 0) || (canAddHomeTeam && !canAddAwayTeam)){
            tempArray.push(
              {
                teamName: item.home_team_country,
                teamCode: item.home_team.code,
                startingEleven: item.home_team_statistics.starting_eleven,
                substitutes: item.home_team_statistics.substitutes
              }
            );
        }
        if(canAddAwayTeam && !canAddHomeTeam){
          tempArray.push(
            {
              teamName: item.away_team_country,
              teamCode: item.away_team.code,
              startingEleven: item.away_team_statistics.starting_eleven,
              substitutes: item.away_team_statistics.substitutes
            }
          );
        }
      });
    props.dispatch(saveAllTeamData(tempArray));
    }
  }, [allData]);

  useEffect(() => {
    const statusFromLocal = localStorage.getItem('isUserLoggedIn');
    const dataFromLocal = localStorage.getItem('userData');
    setData(props.userData && props.userData.length > 0 ? props.userData : [JSON.parse(dataFromLocal)]);
    setStatus(props.isUserLoggedIn ? props.isUserLoggedIn : statusFromLocal);
  }, [props.isUserLoggedIn, props.userData]);

  return (
    <AppStyleContainer appHeight={appHeight}>
      <Header {...props} isUserLoggedIn={status} userData={data}/>
      {status && <SubHeader {...props} isUserLoggedIn={status}/>}
      <div className='appContainer'>
        <Routes isUserLoggedIn={status} />
      </div>
    </AppStyleContainer>
  );
}

const mapStateToProps = state => ({
  isUserLoggedIn: getUserLoginStatusSelector(state),
  userData: getUserDataSelector(state),
  allData: getAllDataSelector(state),
  allTeamDetail: getAllTeamDataSelector(state),
});

export default connect(mapStateToProps)(App);
