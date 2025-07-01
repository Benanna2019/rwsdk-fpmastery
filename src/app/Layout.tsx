import { LayoutProps } from "rwsdk/router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function BaseLayout({ children }: LayoutProps) {
  return (
    <main
      className="flex min-h-screen flex-col bg-stone-100 font-mono text-gray-950 dark:bg-stone-900 dark:text-white"
    >
      <Navbar />

      <div className="">{children}</div>
      <Footer />
    </main>
  );
}

