import Navbar from "@/components/Navbar";
import "./styles/globals.css";
import ProviderWrap from "./../store/ProviderWrap";

export const metadata = {
  title: "Restaraunt booking",
  description: "Next app for booking",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderWrap>
          <Navbar />
          <main>{children} </main>
        </ProviderWrap>
      </body>
    </html>
  );
}
