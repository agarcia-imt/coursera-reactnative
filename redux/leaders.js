import * as ActionTypes from './ActionTypes';

export const leaders = (state = {
  errMess: null,
  leaders: []
}, action) => {
  switch(action.type) {
    case ActionTypes.ADD_LEADERS:
      return {...state, errMess: null, leaders: action.payload};
      break;
    case ActionTypes.LEADERS_FAILED:
      return {...state, errMess: action.payload, leaders: []};
      break;
    default:
      return state;
  }
};
