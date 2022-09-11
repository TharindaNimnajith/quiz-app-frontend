import React from 'react'
import {Card, CardBody} from 'reactstrap'
import './user-home-component.css'

const UserHomeComponent = props => {
  const onPlay = async () => {
    props.history.push('/play')
  }

  return (
    <div className='m-5 card-style'
         onClick={onPlay}>
      <Card className='overflow-hidden m-5'>
        <CardBody className='p-4 text-center text-uppercase'>
          <div className='m-4'>
            <i className='fa fa-fw fa-trophy mx-2 my-1 card-icon'/>
          </div>
          <label className='m-2 card-label'>
            Play
          </label>
        </CardBody>
      </Card>
    </div>
  )
}

export default UserHomeComponent
