import { combineReducers } from 'redux';
import ordersList from './ordersList';
import machinesList from './machinesList';
import mechanicList from './mechanicList';
import toolList from './toolList';

export default combineReducers({
    ordersList,
    toolList,
    machinesList,
    mechanicList,
});