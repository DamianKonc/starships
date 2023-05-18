import "./globals.css";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata = {
  title: "Starships",
  description: "Star Wars Starships",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body style={{ backgroundColor: "lightgray" }}>
        {" "}
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
