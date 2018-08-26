import React from 'react'

import '../common/template/dependencies'
import Routes from './routes'

import Header from '../common/template/header.component'
import SideBar from '../common/template/sidebar.component'
import Footer from '../common/template/footer.component'

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
    </div>
)