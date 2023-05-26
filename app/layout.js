import Navbar from "@/components/Navbar";
import "./styles/globals.css";
import ProviderWrap from "./../store/ProviderWrap";

export const metadata = {
  title: "ResBooking",
  description: "Next app for booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpg" />
      </head>
      <body>
        <ProviderWrap>
          <Navbar />
          <main>{children} </main>
        </ProviderWrap>
      </body>
    </html>
  );
}
