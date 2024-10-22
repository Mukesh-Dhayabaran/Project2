import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Logo from './images/Logo.png'


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    
  };
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    marginLeft: '150px',
    width: '400px',
   
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      width: '100%',
     }));
  

  return (
    <AppBar position="fixed"  sx={{backgroundColor:'#1C1C1C'}}>
      {/* <Container maxWidth="xl"  sx={{height:'5px'}}> */}
        <Toolbar disableGutters sx={{padding:'0px',display: 'flex', alignItems: 'center'}}>
              <Box 
            component="img"
            src={Logo}
            alt='logo'
            sx={{
              width: '115px',
              height: '70px',
              padding:'0',
              margin:'0'
            }}
         />
              <Box
            sx={{
              borderLeft: '2px solid white', // The vertical line
              height: '20px',  // Adjust the height of the line
              marginLeft: '5px',  // Optional: Add some margin for positioning
              marginRight:'10px'
            }}
          />
          
          <Typography
            variant='h8'
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{

              fontFamily: 'sans-serif',
               fontWeight: 100,
             
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PROPERTY  MANAGEMENT  SOLUTION
          </Typography>

          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{marginRight:'0px',marginLeft:'280px'}}>
          <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge variant='dot' sx={{
        '& .MuiBadge-dot': {
          backgroundColor: 'lightblue', // Change this to any color you want
        }
      }}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box
      sx={{
        borderLeft: '2px solid white', // The vertical line
        height: '40px',  
        marginLeft: '15px',  // Optional: Add some margin for positioning
        marginRight:'10px',
        marginTop:'2px'
      }}
    />
          <Box sx={{ flexGrow: 0 ,marginRight:'5px'}}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            
      
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1,flexDirection:'column' }}>
        <Typography
          variant="h6"
          noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
          sx={{ color: '#FFFFFF', fontWeight: 500, lineHeight: 1 }}
        >
          Bala Ganesh<br/>
        </Typography>
        <Typography
          variant="subtitle2"
          noWrap
            // component="a"
            // href="#app-bar-with-responsive-menu"
          sx={{ color: '#A5A5A5', fontWeight: 400 }}
        >
          Super Admin
        </Typography>
      </Box>

      {/* Dropdown Icon */}
      <IconButton color="inherit">
        <ArrowDropDownIcon sx={{ color: '#FFFFFF' }} />
      </IconButton>
       
        </Toolbar>
      {/* </Container> */}
     
    </AppBar>
  );
}
export default ResponsiveAppBar;
