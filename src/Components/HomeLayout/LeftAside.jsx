import React, { Suspense } from 'react';
import Category from '../Category';

const LeftAside = () => {
    return (
      <div>
        <Suspense
          fallback={<span className="loading loading-dots loading-xs"></span>}
        >
          <Category></Category>
        </Suspense>
        
      </div>
    );
};

export default LeftAside;