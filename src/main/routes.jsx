import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router' 

import Dashboard from '../dashboard/dashboard.component'
import BillingCycle from '../billingCycle/billingCycle.component'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingcycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
    </Router>
)