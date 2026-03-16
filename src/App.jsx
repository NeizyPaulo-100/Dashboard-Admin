import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";

export default function App() {
	const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
	const [curentPage, setCurentPage] = useState("dashboard");
	return (
		<div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50
			dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500"
		>
			<div className="flex h-screen overflow-hidden">
				<Sidebar
					collapsed={sidebarCollapsed}
					onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
					currentPage={curentPage}
					onPageChange={setCurentPage}
				/>
				<div className="flex-1 flex flex-col overflow-hidden">
					<Header
						sidebarCollapsed={sidebarCollapsed}
						onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
					/>
				</div>
			</div>
		</div>
	)
}