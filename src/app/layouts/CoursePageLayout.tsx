// src/layouts/CoursePageLayout.tsx
import { SidebarLayout, SidebarLayoutContent } from "@/app/components/sidebar-layout";
import { getModules } from "@/app/data/lessons";
import { LayoutProps } from "rwsdk/router";

export default function CoursePageLayout({ children }: LayoutProps) {

    let modules = getModules();

    return (
        <main className="fontscroll-pt-16 font-sans antialiased dark:bg-gray-950">
            <div className="isolate">
                <SidebarLayout modules={modules}>
                    <SidebarLayoutContent breadcrumbs={['Overview']}>
                        {children}
                    </SidebarLayoutContent>
                </SidebarLayout>
            </div>
        </main>
    );
}