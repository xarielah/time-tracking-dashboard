import React from 'react'

const Profile = ({ pickDataType }) => {

    return (
        <section className='profile-wrapper'>
            <div className='user-details'>
                <img className='user-avatar' src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.380.medium.jpg/1594668408164.jpg" alt="profile avatar" />
                <div className='details-wrapper'>
                    <div className='user-title'>Report for</div>
                    <div className='user-fullname'>
                        Jeremy Robson
                    </div>
                </div>
            </div>
            <div className='data-type'>
                <div className='data-link' onClick={() => pickDataType(-1)}>Daily</div>
                <div className='data-link' onClick={() => pickDataType(0)}>Weekly</div>
                <div className='data-link' onClick={() => pickDataType(1)}>Monthly</div>
            </div>
        </section>
    )
}

export default Profile