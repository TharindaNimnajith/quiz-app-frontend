import React from 'react'
import Header from '../../../components/header/header'
import UserHomeComponent from './user-home-component/user-home-component'
import './home.css'

const Home = props => {
  return (
    <div>
      <div>
        <Header/>
      </div>
      <div className='container home-page'>
        <UserHomeComponent history={props.history}/>
      </div>
    </div>
  )
}

export default Home
