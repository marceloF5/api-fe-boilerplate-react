import { combineReducers } from 'redux'

import DashboardReducer from '../dashboard/dashboard.reducer'

const rootReducer = combineReducers({
    // dashboard: () => ({summary: {credit: 100, debit: 50}}) // return a fixe state
    dashboard: DashboardReducer // return from dashboard.reducer
})

export default rootReducer