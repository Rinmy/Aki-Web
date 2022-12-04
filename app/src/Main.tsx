import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/components/pages/Home";
import { Download } from "@/components/pages/Download";
import "@/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/download" element={<Download />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
);
