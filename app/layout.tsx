import "./globals.css";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Margaux Portfolio",
  description: "Minimalist and professional portfolio",
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