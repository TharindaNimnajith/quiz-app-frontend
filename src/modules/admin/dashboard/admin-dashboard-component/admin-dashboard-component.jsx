import React from 'react'
import {Card, CardBody} from 'reactstrap'
import './admin-dashboard-component.css'

const AdminDashboardComponent = props => {
  const onUsers = async () => {
    props.history.push('/user-management')
  }

  const onLeaderboard = async () => {
    props.history.push('/leaderboard')
  }

  const onContent = async () => {
    props.history.push('/content-management')
  }

  const onNewQuiz = async () => {
    props.history.push('/add-quiz')
  }

  const onSettings = async () => {
    props.history.push('/settings')
  }

  return (
    <div className='card-group justify-content-evenly'>
      <div className='mt-5 card-style-admin'
           onClick={onUsers}>
        <Card className='overflow-hidden mt-5 mx-4'>
          <CardBody className='p-4 text-center text-uppercase'>
            <div className='m-4'>
              <i className='fa fa-fw fa-user mx-2 my-1 card-icon-admin'/>
            </div>
            <label className='m-2 card-label'>
              Users
            </label>
          </CardBody>
        </Card>
      </div>
      <div className='mt-5 card-style-admin'
           onClick={onLeaderboard}>
        <Card className='overflow-hidden mt-5 mx-4'>
          <CardBody className='p-4 text-center text-uppercase'>
            <div className='m-4'>
              <i className='fa fa-fw fa-ranking-star mx-2 my-1 card-icon-admin'/>
            </div>
            <label className='m-2 card-label'>
              Leaderboard
            </label>
          </CardBody>
        </Card>
      </div>
      <div className='mt-5 card-style-admin'
           onClick={onContent}>
        <Card className='overflow-hidden mt-5 mx-4'>
          <CardBody className='p-4 text-center text-uppercase'>
            <div className='m-4'>
              <i className='fa fa-fw fa-book mx-2 my-1 card-icon-admin'/>
            </div>
            <label className='m-2 card-label'>
              Content
            </label>
          </CardBody>
        </Card>
      </div>
      <div className='mt-5 card-style-admin'
           onClick={onNewQuiz}>
        <Card className='overflow-hidden mt-5 mx-4'>
          <CardBody className='p-4 text-center text-uppercase'>
            <div className='m-4'>
              <i className='fa fa-fw fa-question mx-2 my-1 card-icon-admin'/>
            </div>
            <label className='m-2 card-label'>
              New Quiz
            </label>
          </CardBody>
        </Card>
      </div>
      <div className='mt-5 card-style-admin'
           onClick={onSettings}>
        <Card className='overflow-hidden mt-5 mx-4'>
          <CardBody className='p-4 text-center text-uppercase'>
            <div className='m-4'>
              <i className='fa fa-fw fa-gear mx-2 my-1 card-icon-admin'/>
            </div>
            <label className='m-2 card-label'>
              Settings
            </label>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default AdminDashboardComponent
