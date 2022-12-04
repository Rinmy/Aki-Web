import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

interface createMCResourcePackDataType {
	name: string;
	version: string;
	mcVersion: string;
	link: string;
}

interface createTableListType {
	name: string;
	list: createMCResourcePackDataType[];
	description: string;
	title: string[];
}

const createTableList = (
	name: string,
	description: string,
	list: createMCResourcePackDataType[],
	...title: string[]
): createTableListType => {
	return { name, description, list, title };
};

const createMCResourcePackData = (
	name: string,
	version: string,
	mcVersion: string,
	link: string
): createMCResourcePackDataType => {
	return { name, version, mcVersion, link };
};

const fileList = [
	createTableList(
		"Kawaii Piglin",
		"ピグリンをかわいい女の子にするリソースパック\nこのリソースパックの動作にはOptifineが必要です！",
		[
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.18.2", "Kawaii-Piglin-1.0-for-1.18.2.zip"),
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.18.1", "Kawaii-Piglin-1.0-for-1.18.1.zip"),
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.18", "Kawaii-Piglin-1.0-for-1.18.zip"),
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.17.1", "Kawaii-Piglin-1.0-for-1.17.1.zip"),
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.17", "Kawaii-Piglin-1.0-for-1.17.zip"),
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.16.5", "Kawaii-Piglin-1.0-for-1.16.5.zip"),
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.16.4", "Kawaii-Piglin-1.0-for-1.16.4.zip"),
			createMCResourcePackData("Kawaii Piglin", "1.0", "1.16.3", "Kawaii-Piglin-1.0-for-1.16.3.zip")
		],
		"タイトル",
		"バージョン",
		"Minecraft バージョン",
		"ダウンロード"
	),
	createTableList(
		"Kawaii Piglin",
		"トライデントを紙飛行機にするリソースパック\nこのリソースパックの動作にはOptifineが必要です！",
		[
			createMCResourcePackData(
				"Paper Airplane Trident Edition",
				"1.0",
				"1.17.1",
				"Paper-Airplane-Trident-Edition-1.0-for-1.17.1.zip"
			),
			createMCResourcePackData(
				"Paper Airplane Trident Edition",
				"1.0",
				"1.17",
				"Paper-Airplane-Trident-Edition-1.0-for-1.17.zip"
			),
			createMCResourcePackData(
				"Paper Airplane Trident Edition",
				"1.0",
				"1.16.5",
				"Paper-Airplane-Trident-Edition-1.0-for-1.16.5.zip"
			)
		],
		"タイトル",
		"バージョン",
		"Minecraft バージョン",
		"ダウンロード"
	)
];

export const Download: React.FC = () => {
	return (
		<>
			{fileList.map((category, index) => (
				<Box key={index}>
					<Typography component="p" sx={{ my: 3, whiteSpace: "pre-wrap" }}>
						{category.description}
					</Typography>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label="simple table">
							<TableHead>
								<TableRow>
									{category.title.map((title) => (
										<TableCell key={title}>{title}</TableCell>
									))}
								</TableRow>
							</TableHead>
							<TableBody>
								{category.list.map((file, index) => (
									<TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
										<TableCell component="th" scope="row">
											{file.name}
										</TableCell>
										<TableCell component="th" scope="row">
											{file.version}
										</TableCell>
										<TableCell component="th" scope="row">
											{file.mcVersion}
										</TableCell>
										<TableCell>
											<IconButton
												color="primary"
												component="a"
												href={`/assets/downloads/${file.link}`}
											>
												<DownloadRoundedIcon />
											</IconButton>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			))}
		</>
	);
};
