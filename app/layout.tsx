import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'الخدمات والعروض الحصرية',
  description: ' الخدمات والعروض الحصرية و الدفع السريع وإتمام عمليات الدفع بسرعة وسهولة, قم بدفع جميع فواتيرك إلكترونياً الخدمات والعروض الحصرية,',
 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
