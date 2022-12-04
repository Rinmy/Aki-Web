import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/components/pages/Home";
import "@/reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<Home />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	</React.StrictMode>
);
