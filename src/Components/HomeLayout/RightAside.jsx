import React from 'react';
import SocialLogIn from './SocialLogIn';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-8'>
            <SocialLogIn></SocialLogIn>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;