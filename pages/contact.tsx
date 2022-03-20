import React from 'react'
import Button from '../components/common/Button';
import Lottie from "lottie-react";
import AnimationFile from '../public/assets/contact.json';


export default function contact() {
  return (
      <div>
        <div className='container contact-form'>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <Lottie animationData={AnimationFile} />
                </div>
                <div className="col-md-6" >
                <form>
                    <div className='form-group'>
                        <label className='label'>
                            Name
                        </label>
                        <input type="text" name="name" placeholder='Enter name' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='label'>
                            Email
                        </label>
                        <input type="email" name="name" placeholder='Enter Email' className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label className='label'>
                            Email
                        </label>
                        <textarea name="name" placeholder='Message ...' className='form-control textarea'>
                        </textarea>
                    </div>
                    <div className='form-group'>
                        <Button design='primary long' onClick={() => {}}>
                            Send
                        </Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
      </div>
  )
}
