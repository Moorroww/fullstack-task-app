import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kanban",
  description: "Task management web app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={plusJakartaSans.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}

          <Toaster
            position="bottom-center"
            closeButton
            toastOptions={{
              unstyled: false,
              classNames: {
                error: "group-[.toaster]:bg-red-400",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
