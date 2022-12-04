import React from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";

interface sidebarItemType {
	id: string;
	name: string;
	icon: React.ReactElement;
	path: string;
}

const sidebarList: sidebarItemType[][] = [
	[
		{
			id: "home",
			name: "ホーム",
			icon: <HomeRoundedIcon />,
			path: "/"
		}
	]
];

interface SidebarProps {
	open: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({ open }) => {
	return (
		<>
			<List>
				{sidebarList.map((list) =>
					list.map((item) => (
						<ListItem
							key={item.id}
							disablePadding
							sx={{ display: "block" }}
							component={Link}
							to={item.path}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										marginRight: open ? 3 : "auto",
										justifyContent: "center"
									}}
								>
									{item.icon}
								</ListItemIcon>
								<ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0, color: "black" }} />
							</ListItemButton>
						</ListItem>
					))
				)}
			</List>
		</>
	);
};
