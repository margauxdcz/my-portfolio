import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Margarita Dela Cruz",
  description: "An overview of my activities, projects, and interests.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}