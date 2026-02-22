'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProviderPage() {
  const [assetSort, setAssetSort] = useState('');

  const assets = [
    'ETH',
    'WBTC',
    'USDC',
    'USDT',
    'DAI',
    'LINK',
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30">
            Rate Payer Protocol
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Provide Collateral
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our platform lets users provide over-collateralized assets from Aave as Rate Payers, mint Yield Units to deliver predictable funding streams, and ensures protection against market volatility through automated liquidation and insurance mechanisms.
          </p>
        </div>

        {/* Main Card */}
        <Card className="bg-gradient-to-br from-[#0f2038]/80 to-[#0a1628]/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-yellow-500/10">
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">Provide Assets</h2>
            <p className="text-gray-400">Select your collateral and mint Yield Units</p>
          </div>

          {/* Asset Sort Dropdown */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Asset Sort
            </label>
            <Select value={assetSort} onValueChange={setAssetSort}>
              <SelectTrigger className="w-full bg-[#0a1628]/50 border border-gray-700 rounded-2xl text-white hover:border-yellow-500/50 transition-colors">
                <SelectValue placeholder="Select an asset" />
              </SelectTrigger>
              <SelectContent className="bg-[#0f2038] border border-gray-700">
                {assets.map((asset) => (
                  <SelectItem
                    key={asset}
                    value={asset.toLowerCase()}
                    className="text-white hover:bg-yellow-500/10 focus:bg-yellow-500/20"
                  >
                    {asset}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Health Factor - Fixed Value */}
          <div className="mb-12">
            <label className="block text-sm font-semibold text-gray-300 mb-3">
              Health Factor
            </label>
            <div className="w-full bg-[#0a1628]/50 border border-gray-700 rounded-2xl text-white h-12 flex items-center px-4">
              <span className="text-yellow-400 font-semibold">2.2</span>
            </div>
          </div>

          {/* Provide Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="w-full md:w-auto min-w-[200px] h-14 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0a1628] hover:from-yellow-500 hover:to-yellow-700 rounded-2xl shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Provide
            </Button>
          </div>
        </Card>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Over-Collateralized</h3>
            <p className="text-sm text-gray-400">
              Assets from Aave with automated liquidation protection
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mb-4">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Predictable Yields</h3>
            <p className="text-sm text-gray-400">
              Mint Yield Units for stable, predictable funding streams
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Insurance Protection</h3>
            <p className="text-sm text-gray-400">
              Automated liquidation and insurance mechanisms
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
