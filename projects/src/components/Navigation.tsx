'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Provider', href: '/', description: 'Provide Collateral' },
    { name: 'Holder', href: '/holder', description: 'Hold Yield Units' },
    { name: 'Trader', href: '/trader', description: 'Trade Interest Rates' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-gradient-to-b from-[#0a1628]/95 to-[#0a1628]/90 border-b border-yellow-500/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <span className="text-xl font-bold text-[#0a1628]">Y</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              YieldFi
            </span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'relative px-6 py-2.5 rounded-2xl font-medium transition-all duration-300 group',
                    isActive
                      ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 text-yellow-400 shadow-lg shadow-yellow-500/20'
                      : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-500/10'
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500 to-yellow-600 opacity-20 blur-sm" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <button className="px-6 py-2.5 rounded-2xl font-semibold text-[#0a1628] bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
