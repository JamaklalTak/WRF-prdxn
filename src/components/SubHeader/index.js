import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Tab from '../../helpers/Tab';

import { saveSelectedTeamId, saveSelectedMatchId, saveSelectedTabId } from '../../pages/App/store/actions';
import { getSelectedMatchIdSelector, getSelectedTabIdSelector } from '../../pages/App/store/reducers';

import SubHeaderStyleContainer from './SubHeader.style';

const SubHeader = (props) => {
const [selectedTab, setSelectedTab] = useState();

const dataArray = [
    {
        id: 1,
        name: 'Home',
        path: '/home'
    },{
        id: 2,
        name: 'Matches',
        path: '/matches'
    },
    {
        id: 3,
        name: 'Teams',
        path: '/teams'
    }
];

useEffect(() => {
    dataArray.forEach(ele =>{
        if(ele.path === props.history.location.pathname){
            setSelectedTab(ele.id);
        }
    });
}, [props.selectedMatchId, props.selectedTabId]);

const _handleTabSelection = (id, path) => {
    props.dispatch(saveSelectedTeamId(null));
    props.dispatch(saveSelectedMatchId(null));
    props.dispatch(saveSelectedTabId(id));
    localStorage.setItem('selectedTabPath', path);
    setSelectedTab(id);
    props.history.push(path);
};

    return(
        <SubHeaderStyleContainer>
            <Tab
                selectedTab={selectedTab}
                _handleTabSelection={_handleTabSelection}
                tabDataArray={dataArray}
                viewType='H'
            />
        </SubHeaderStyleContainer>
    );
}

const mapStateToProps = state => ({
    selectedMatchId: getSelectedMatchIdSelector(state),
    selectedTabId: getSelectedTabIdSelector(state),
});

export default connect(mapStateToProps)(SubHeader);
