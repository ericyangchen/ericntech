import Navbar from "./components/Navbar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen">
        {/* Navbar */}
        <div className="fixed top-0 z-50 w-full border-b border-base-200 backdrop-blur">
          <div className="mx-auto lg:max-w-7xl">
            <Navbar />
          </div>
        </div>

        {/* children */}
        <div className="pb-16">{children}</div>
      </body>
    </html>
  );
}
