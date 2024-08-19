import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
//import ClientSideProviderTest from "@/components/clientSideProviderTest";


// https://github.com/safak/next14-tutorial/blob/main/src/app/layout.js

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default:"Next.js 14 Homepage",
    template:"%s | Next.js 14"
  },
  description: "Next.js starter app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClientSideProviderTest> */}
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        {/* </ClientSideProviderTest> */}
      </body>
    </html>
  );
}








// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "@/components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Next App",
//   description: "Next.js starter app",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <div className = "container">
//           <Navbar />
//           {children}
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }
