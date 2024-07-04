import React from "react";
import SideNav from "../ui/dashboard/sidenav";

export default function Layout({ children }: { children: React.ReactNode}) {
    return(
        <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
            <div className="w-full md:w-64 flex-none">
                <SideNav />
            </div>
            <div className="flex-grow md:p-12 p-6 md:overflow-y-auto">{children}</div>
        </div>
    );
}