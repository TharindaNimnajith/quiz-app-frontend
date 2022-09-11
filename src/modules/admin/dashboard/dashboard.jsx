import React from 'react'
import Header from '../../../components/header/header'
import AdminDashboardComponent from './admin-dashboard-component/admin-dashboard-component'
import './dashboard.css'

const Dashboard = props => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='container dashboard-page'>
        <AdminDashboardComponent history={props.history}/>
      </div>
    </div>
  )
}

export default Dashboard
