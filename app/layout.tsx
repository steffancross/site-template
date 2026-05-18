import { Providers } from './providers';
import './globals.css';

export const metadata = {
  title: 'Site Template',
  description: 'Replace per site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Funding Choices stub for AdSense consent — uncomment and add publisher ID when ads launch.
            <script async src="https://fundingchoicesmessages.google.com/i/PUBLISHER_ID?ers=1" /> */}
      </head>
      <body suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
