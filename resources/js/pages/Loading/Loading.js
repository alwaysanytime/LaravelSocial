import React from 'react';

const Loading = () => {

    return <div className="d-flex h-100 home-container loading-suspense bg-white">
        <div className='w-100 d-flex flex-column bg-white home-layout h-100 justify-content-center align-items-center' style={{marginLeft: 400}}>
            <div class="loader"></div>
        </div>
    </div>
};

export default Loading;