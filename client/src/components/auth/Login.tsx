import React from 'react';
import {Modal} from '../common/Modal';

export function Login(){
    return (
        <Modal>
            <div>
            <div>Log in</div>
            <div>X</div>
          </div>
          {/* <GoogleAuth />
          <FacebookAuth />
          <AppleAuth /> */}
          <TextInput />
          <TextInput />
          <div>Forgot?</div>
        </Modal>
    )
}