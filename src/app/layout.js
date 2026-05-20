import { Inter, Kanit } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "SportOra - Book Your Sports Facility Easily",
  description: "Find and reserve the best sports venues near you instantly.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-body transition-colors duration-300 bg-slate-50 text-slate-900 dark:bg-[#080F1A] dark:text-slate-100">
        <ThemeProvider>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark" 
            stacked 
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
