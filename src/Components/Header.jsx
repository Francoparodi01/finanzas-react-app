import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, Box } from '@mui/material';
import { styled } from '@mui/system';
import { MdNightlight, MdSunny } from "react-icons/md";
import { Link } from 'react-router-dom';


const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
}));

const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
    fontSize: '2rem',
    fontWeight: 'bold',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
        marginLeft: theme.spacing(1),
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
