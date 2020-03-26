import React from 'react';
import '../../sass/modal.scss';
import { MailOutlined, LinkedinFilled, CloseOutlined } from '@ant-design/icons';

export const ModalContainer = ({ setModalOpen }) => {
    return (
        <div className='modal-mask'>
            <div className='modal-wrap' onClick={() => setModalOpen(false)}>
                <div
                    className='modal-content'
                    onClick={e => e.stopPropagation()}>
                    <div className='modal-header'>
                        <button onClick={() => setModalOpen(false)}>
                            <CloseOutlined className='close-button' />
                        </button>
                    </div>
                    <div className='modal-body'>
                        <a
                            className='email-contact contact-col'
                            href='mailto:ehickey08@gmail.com'
                            rel='noopener noreferrer'
                            title='email me'>
                            <MailOutlined className='ant-icon' />
                        </a>
                        <div className = "divider"></div>
                        <a
                            className='linkedin-contact contact-col'
                            href='https://www.linkedin.com/in/ethan-hickey08/'
                            rel='noopener noreferrer'
                            title='LinkedIn'
                            target='_blank'>
                            <LinkedinFilled className='ant-icon' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
