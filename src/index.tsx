import ReactDOM from 'react-dom/client';
import React from 'react';
import { ApiCall } from './ApiCall';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
   <>
      {/* <ProductManagement /> */}
      <ApiCall />
   </>
);
