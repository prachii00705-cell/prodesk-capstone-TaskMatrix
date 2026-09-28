import "./globals.css";
import StoreProvider from "@/components/providers/StoreProvider";
import { nunito } from "@/lib/fonts";

export const metadata = {
  title: "TaskMatrix",
  description: "TaskMatrix enterprise project management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
