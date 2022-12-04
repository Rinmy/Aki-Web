import React from "react";
import { Link } from "react-router-dom";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer, { DrawerProps as MuiDrawerProps } from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import { Sidebar } from "@/components/Sidebar";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`
	}
});

const AppBar = styled(MuiAppBar)(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1
}));

interface DrawerProps extends MuiDrawerProps {
	open: boolean;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })<DrawerProps>(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme)
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme)
	})
}));

interface LayoutProps {
	children: React.ReactElement;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [open, setOpen] = React.useState(true);

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar position="fixed">
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open sidebar"
						onClick={() => {
							setOpen(!open);
						}}
						edge="start"
						sx={{
							marginRight: 5
						}}
					>
						{open ? <MenuOpenRoundedIcon /> : <MenuRoundedIcon />}
					</IconButton>
					<Typography
						variant="h6"
						noWrap
						component={Link}
						to="/"
						sx={{ color: "white", textDecoration: "none" }}
					>
						Live EYE
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<Toolbar />
				<Sidebar open={open} />
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
				<Toolbar />
				{children}
			</Box>
		</Box>
	);
};
