import Header from "@/components/Header"; // Ensure you import Header if it's not already there
import Footer from "@/components/Footer"; // Import the new Footer
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata = {
  title: "Daily News | Best News Portal",
  description: "Latest news from Bangladesh and the world",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}
