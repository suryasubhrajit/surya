import "./globals.css";
import { Kanit } from "next/font/google";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "Surya Subhrajit Portfolio",
  icons: {
    icon: "/images/potrait_face.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={kanit.className}>{children}</body>
    </html>
  );
}