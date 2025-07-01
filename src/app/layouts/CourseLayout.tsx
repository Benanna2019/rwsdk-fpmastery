import { SidebarLayout } from "@/components/sidebar-layout";
import type { Module } from "@/data/lessons";
import type React from "react";
import "../styles/global.css";

export default function CourseLayout({
    children,
    modules,
}: {
    children: React.ReactNode;
    modules: Module[];
}) {
    return <SidebarLayout modules={modules}>{children}</SidebarLayout>;
}
