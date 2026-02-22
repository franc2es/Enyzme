import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';
import { Navigation } from '@/components/Navigation';

export const metadata: Metadata = {
  title: {
    default: 'YieldFi - DeFi Yield Platform',
    template: '%s | YieldFi',
  },
  description:
    'Our platform lets users provide over-collateralized assets from Aave as Rate Payers, mint Yield Units to deliver predictable funding streams, and ensures protection against market volatility through automated liquidation and insurance mechanisms.',
  keywords: [
    'YieldFi',
    'DeFi',
    'Yield Units',
    'Aave',
    'Liquidation',
    'Insurance',
    'Interest Rates',
    'Trading',
  ],
  authors: [{ name: 'YieldFi Team' }],
  generator: 'YieldFi',
  openGraph: {
    title: 'YieldFi - Predictable Funding Streams',
    description:
      'Provide collateral, hold yield units, and trade interest rates with full protection against market volatility.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <html lang="en" className="dark">
      <body className="antialiased min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f1c35] to-[#0a1628]">
        {isDev && <Inspector />}
        <Navigation />
        <main className="relative">
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10">{children}</div>
        </main>
      </body>
    </html>
  );
}
