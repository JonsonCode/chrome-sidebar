import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from '@pages/options/Options';
import '@pages/options/index.css';
import refreshOnUpdate from 'virtual:reload-on-update-in-view';
import { useEffect } from 'react';
import RightTabs from './compoents/tabs';
import { attachTwindStyle } from '@src/shared/style/twind';

refreshOnUpdate('pages/options');

function SideBarApp() {
    useEffect(() => {
      console.log('content view loaded');
    }, []);
  
    return  <RightTabs></RightTabs>
}
function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);
  attachTwindStyle(appContainer, document);

  root.render(<div className="container mx-auto">
    <SideBarApp></SideBarApp>
</div>  );
}

init();
