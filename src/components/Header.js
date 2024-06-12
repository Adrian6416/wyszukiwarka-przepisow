import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
`;

function Header() {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Wyszukiwarka Przepisów
        </Typography>
      </Toolbar>
    </StyledAppBar>
  );
}

export default Header;
