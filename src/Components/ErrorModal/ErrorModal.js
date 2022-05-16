import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../actions/index'

import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

import './ErrorModal.css';

export default function ErrorModal() {
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.modal);

  const closingModal = () => {
    dispatch(closeModal())
  };


  return (
    <Modal open={isModalOpen.open} className="actual-modal" onClose={closingModal} >
      <div className='modal-body'>
        {/* {modalMessage.map(line => { */}
        <Typography variant='h5'>{isModalOpen.msg}</Typography>


      </div>
    </Modal>
  )
}
