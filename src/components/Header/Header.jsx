import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, Box } from '@mui/material';
import { styled } from '@mui/system';
import { MdNightlight, MdSunny } from "react-icons/md";
import { Link } from 'react-router-dom';


const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
}));

const Title = styled(Typography)(({ theme }) => ({
    color: 'white',
    marginRight: 'auto',
    cursor: 'pointer',
    '&:hover': {
        color: 'white',
    },
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: 'white',
    '&:hover': {
        color: 'white',
    },
    marginLeft: '16px',
    textTransform: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': { 
        color: 'white',
    },
}));

const Header = ({ isDarkMode, toggleDarkMode }) => {
    const backgroundColor = isDarkMode ? '#5f438b' : '#6538ae'; 

    return (
        <Root>
            <AppBar position="static" sx={{ backgroundColor }}>
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Title variant="h4">Finanzas App</Title>
                    </Link>
                    <Box sx={{ display: { xs: 'none', sm: 'flex'}, alignItems: 'center', marginLeft: '450px' }}>
                        <NavButton href="/dolar">Cotización dolar</NavButton>
                        <NavButton>About</NavButton>
                        <NavButton>Contact</NavButton>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                        <Switch 
                            checked={isDarkMode} 
                            onChange={toggleDarkMode} 
                            color="primary" 
                        />
                        <Typography variant="body1" style={{ color: 'white', marginLeft: '8px' }}>
                            {isDarkMode ? <MdSunny /> : <MdNightlight />}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Root>
    );
};

export default Header;