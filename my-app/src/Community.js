import React from 'react';
import community from './assets/community.png';

function Community() {
    return (
        <div className="Community">
          <img src={community} className="Feed" alt="logo" />
          {/* The entire screen will navigate to /names when clicked */}
        </div>
      );
    }
export default Community;