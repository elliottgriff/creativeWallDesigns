import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CWDAppBar from '../components/CWDAppBar';
import Toolbar from '../components/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

function AppAppBar() {
  return (
    <div>
      <CWDAppBar position="fixed"></CWDAppBar>
    </div>
  );
}

export default AppAppBar;
