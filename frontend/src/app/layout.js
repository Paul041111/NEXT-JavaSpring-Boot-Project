import Navbar from "../components/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div style={{ padding: 20 }}>{children}</div>
      </body>
    </html>
  );
}