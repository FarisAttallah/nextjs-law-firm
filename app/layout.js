import "../styles/globals.css";

export const metadata = {
  title: "Hussein Almohmmed Law & Legal Consultations",
  description: "Professional legal services and consultations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
