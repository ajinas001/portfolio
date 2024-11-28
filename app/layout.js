import localFont from "next/font/local";
import "./globals.css";

// Load your custom font
const elronMono = localFont({
  src: "./fonts/Elronmonospace.ttf", // path to your font file
  variable: "--font-elron-mono", // name of the CSS variable
  weight: "500", // You can adjust the weight if applicable
});

export const metadata = {
  title: "Ajinas Portfolio",
  description: "Personal portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${elronMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
