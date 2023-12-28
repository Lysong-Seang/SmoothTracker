// app/layout.tsx
import NavBar from "./NavBar";
import Homepage from "./Welcome";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <Homepage />
          {children}
        </Providers>
      </body>
    </html>
  );
}
