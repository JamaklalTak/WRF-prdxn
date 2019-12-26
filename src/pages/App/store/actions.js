export const actions = {
    GET_ALL_DATA: 'GET_ALL_DATA',
    SAVE_ALL_DATA: 'SAVE_ALL_DATA',
    LOGIN_USER: 'LOGIN_USER',
    SAVE_USER_DATA: 'SAVE_USER_DATA',
    SAVE_ALL_TEAM_DATA: 'SAVE_ALL_TEAM_DATA',
    LOGGED_OUT: 'LOGGED_OUT',
    SAVE_MATCH_ID: 'SAVE_MATCH_ID',
    SAVE_TEAM_ID: 'SAVE_TEAM_ID',
    SAVE_TAB_ID: 'SAVE_TAB_ID'
}

export const getAllData = () => ({
    type: actions.GET_ALL_DATA
});

export const saveAllData = (recordData) => ({
    type: actions.SAVE_ALL_DATA,
    recordData
});

export const saveAllTeamData = (recordData) => ({
    type: actions.SAVE_ALL_TEAM_DATA,
    recordData
});

export const saveSelectedMatchId = (id) => ({
    type: actions.SAVE_MATCH_ID,
    id
});

export const saveSelectedTabId = (id) => ({
    type: actions.SAVE_TAB_ID,
    id
});

export const saveSelectedTeamId = (id) => ({
    type: actions.SAVE_TEAM_ID,
    id
});

export const logInUser = (requestBody) => ({
    type: actions.LOGIN_USER,
    requestBody
});

export const saveUserData = (userData, userStatus) => ({
    type: actions.SAVE_USER_DATA,
    userData,
    userStatus
});

export const logOutUser = () => ({
    type: actions.LOGGED_OUT
});