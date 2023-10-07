import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import { ListItem } from '@mui/material';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useHeaderVisiblityStore from '../../storages/HeaderVisibility';


const SideBar = ({ items, icons, selectedIndex, setSelectedIndex }) => {

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const { mobileOpen, setMobileOpen } = useHeaderVisiblityStore();

    const drawerWidth = 240;
    const container = window !== undefined ? () => window.document.body : undefined;

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    return (
        <React.Fragment>

            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto', mt: 1 }}>
                    <List>
                        {items.map((text, index) => (
                            <ListItem key={index} disablePadding >
                                <ListItemButton selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}>
                                    <ListItemIcon>
                                        {icons[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />

                </Box>
            </Drawer>

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    display: { xs: 'none', sm: 'block' },
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },

                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {items.map((text, index) => (
                            <ListItem key={index} disablePadding >
                                <ListItemButton selected={selectedIndex === index}
                                    onClick={(event) => handleListItemClick(event, index)}>
                                    <ListItemIcon>
                                        {icons[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />

                </Box>
            </Drawer>
        </React.Fragment>
    )
}

export default SideBar