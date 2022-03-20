import React from 'react'
import Button from '../../common/Button'

export default function Mailing() {
  return (
    <div className="mailing-list">
    <div className='header'>
        <header>
            <h3>
                Get notified when we have updates
            </h3>
        </header>
    </div>
    <div className="email-form">
      <form className='form'>
        <div className="form-group">
          <input name="email" type="email" placeholder="Enter Email" className="form-control" />
        </div>
        <div className='form-group'>
          <Button onClick={() => {}} design="primary">
            Send
          </Button>
        </div>
      </form>
    </div>
  </div>
  )
}
