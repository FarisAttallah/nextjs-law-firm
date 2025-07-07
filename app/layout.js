import "../styles/globals.css";

export const metadata = {
  title: "Attallah Law Firm | مكتب عطا الله للمحاماة",
  description: "Professional legal services | خدمات قانونية متخصصة",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
