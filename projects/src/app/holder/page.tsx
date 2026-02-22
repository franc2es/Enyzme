'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';

export default function HolderPage() {
  const yieldUnits = [
    {
      id: 1,
      symbol: 'YU-ETH',
      name: 'ETH Yield Unit',
      apy: '12.5%',
      totalSupply: '1,234,567',
      fundingStream: '$12,345.67',
      holders: 234,
      price: '$45.67',
    },
    {
      id: 2,
      symbol: 'YU-WBTC',
      name: 'WBTC Yield Unit',
      apy: '8.9%',
      totalSupply: '892,345',
      fundingStream: '$8,923.45',
      holders: 189,
      price: '$923.45',
    },
    {
      id: 3,
      symbol: 'YU-USDC',
      name: 'USDC Yield Unit',
      apy: '6.7%',
      totalSupply: '2,456,789',
      fundingStream: '$24,567.89',
      holders: 456,
      price: '$1.02',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30">
            Yield Unit Holder
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Hold Yield Units
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Holder can earn predictable funding streams by holding Yield Units, and by contributing to the Liquidity Booster Pool they can provide additional capital to the market and earn enhanced, double-layered yields while still benefiting from the platform's collateralization, automated liquidation, and insurance protection.
          </p>
        </div>

        {/* Liquidity Booster Pool Card */}
        <Card className="bg-gradient-to-br from-[#0f2038]/80 to-[#0a1628]/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-8 md:p-12 shadow-2xl shadow-yellow-500/10 mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Liquidity Booster Pool</h2>
            <p className="text-gray-400">
              Contribute additional capital and earn enhanced, double-layered yields
            </p>
          </div>

          <Separator className="bg-yellow-500/20 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Amount to Contribute
              </label>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="0.00"
                  className="bg-[#0a1628]/50 border border-gray-700 rounded-2xl text-white h-12 pr-20 hover:border-yellow-500/50 transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-yellow-400 font-semibold">
                  USDC
                </span>
              </div>
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-gray-400">Balance:</span>
                <span className="text-white">10,000 USDC</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Leverage: <span className="text-yellow-400">2x</span>
              </label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={10}
                className="mt-2"
              />
              <div className="mt-3 flex justify-between text-sm">
                <span className="text-gray-400">Estimated APY:</span>
                <span className="text-yellow-400 font-semibold">18.5%</span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button
              size="lg"
              className="w-full md:w-auto min-w-[200px] h-14 text-lg font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 text-[#0a1628] hover:from-yellow-500 hover:to-yellow-700 rounded-2xl shadow-lg shadow-yellow-500/30 hover:shadow-xl hover:shadow-yellow-500/40 transition-all duration-300"
            >
              Contribute to Pool
            </Button>
          </div>
        </Card>

        {/* Yield Units Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Available Yield Units</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {yieldUnits.map((unit) => (
            <Card
              key={unit.id}
              className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10"
            >
              {/* Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">{unit.symbol}</h3>
                  <p className="text-sm text-gray-400">{unit.name}</p>
                </div>
                <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                  {unit.apy} APY
                </Badge>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Total Supply</span>
                  <span className="text-sm text-white font-semibold">{unit.totalSupply}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Funding Stream</span>
                  <span className="text-sm text-yellow-400 font-semibold">{unit.fundingStream}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Price</span>
                  <span className="text-sm text-white font-semibold">{unit.price}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Holders</span>
                  <span className="text-sm text-white font-semibold">{unit.holders}</span>
                </div>
              </div>

              <Separator className="bg-yellow-500/10 mb-4" />

              {/* Action */}
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30 hover:bg-gradient-to-r hover:from-yellow-500/30 hover:to-yellow-700/30 hover:border-yellow-500/50 rounded-xl transition-all duration-300"
              >
                Hold Yield Unit
              </Button>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <Card className="mt-12 bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-4">Benefits of Holding</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">💰</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Predictable Yields</h4>
                <p className="text-xs text-gray-400">Steady funding streams</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🔒</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Collateral Protection</h4>
                <p className="text-xs text-gray-400">Asset-backed security</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">⚡</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Auto Liquidation</h4>
                <p className="text-xs text-gray-400">Risk mitigation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl">🛡️</span>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Insurance Coverage</h4>
                <p className="text-xs text-gray-400">Additional protection</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
