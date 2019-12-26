import { createSelector } from 'reselect';
import { actions } from './actions';

const initialState = {
    allData: [],
    isUserLoggedIn: false,
    userData: [],
    allTeamData: [],
    selectedMatchId: null,
    selectedTeamId: null,
    selectedTabId: null,
}

export const getAllDataSelector = createSelector(
    state => state.appReducer.allData,
    (allData) => allData
);

export const getUserLoginStatusSelector = createSelector(
  state => state.appReducer.isUserLoggedIn,
  (isUserLoggedIn) => isUserLoggedIn
);

export const getUserDataSelector = createSelector(
  state => state.appReducer.userData,
  (userData) => userData
);

export const getAllTeamDataSelector = createSelector(
  state => state.appReducer.allTeamData,
  (allTeamData) => allTeamData
);

export const getSelectedMatchIdSelector = createSelector(
  state => state.appReducer.selectedMatchId,
  (selectedMatchId) => selectedMatchId
);

export const getSelectedTeamIdSelector = createSelector(
  state => state.appReducer.selectedTeamId,
  (selectedTeamId) => selectedTeamId
);

export const getSelectedTabIdSelector = createSelector(
  state => state.appReducer.selectedTabId,
  (selectedTabId) => selectedTabId
);

export default (state = initialState, payload = {}) => {
    switch (payload.type) {
      case actions.SAVE_ALL_DATA:
        return {
          ...state,
          allData: [...state.allData, ...payload.recordData],
        };
      
      case actions.SAVE_ALL_TEAM_DATA:
        return {
          ...state,
          allTeamData: payload.recordData,
        };
      
      case actions.SAVE_MATCH_ID:
        return {
          ...state,
          selectedMatchId: payload.id,
        };
      
      case actions.SAVE_TEAM_ID:
        return {
          ...state,
          selectedTeamId: payload.id,
        };

      case actions.SAVE_TAB_ID:
        return {
          ...state,
          selectedTabId: payload.id,
        };
      
      case actions.SAVE_USER_DATA:
        return {
          ...state,
          userData: payload.userData,
          isUserLoggedIn: payload.userStatus
        }

      case actions.LOGGED_OUT:
        return {
          ...state,
          allData: [],
          userData: [],
          isUserLoggedIn: false
        }
      
      default:
        return state;
    }
  };