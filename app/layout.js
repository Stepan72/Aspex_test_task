import Navbar from "@/components/Navbar";
import "./styles/globals.css";
import ProviderWrap from "./../store/ProviderWrap";
import LoginWrapper from "@/components/LoginWrapper";

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
          <LoginWrapper>
            <Navbar />
            <main>{children} </main>
          </LoginWrapper>
        </ProviderWrap>
      </body>
    </html>
  );
}
