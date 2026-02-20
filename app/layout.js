import "./globals.css";

export const metadata = {
  title: "Amar Kumar Mandal | Portfolio",
  description:
    "Portfolio of Amar Kumar Mandal, aspiring DevOps Engineer with interests in Cloud and Cybersecurity."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
