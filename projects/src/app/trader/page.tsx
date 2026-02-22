'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PriceChart } from '@/components/PriceChart';

export default function TraderPage() {
  const [positionType, setPositionType] = useState<'long' | 'short'>('long');
  const [selectedAsset, setSelectedAsset] = useState('ETH');

  const assets = ['ETH', 'USDT', 'WBTC', 'USDC', 'DAI'];

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hover:bg-yellow-500/30">
            Interest Rate Trader
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            Trade Interest Rates
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Participants speculate on interest rate movements and market volatility to earn profits. Take long positions expecting rates to rise, or short positions expecting them to fall.
          </p>
        </div>

        {/* Main Trading Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Trading Panel */}
          <Card className="bg-gradient-to-br from-[#0f2038]/80 to-[#0a1628]/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-6 lg:col-span-1 shadow-2xl shadow-yellow-500/10">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Trade Position</h2>
              <p className="text-gray-400">Speculate on interest rate movements</p>
            </div>

            {/* Asset Selection */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Asset
              </label>
              <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                <SelectTrigger className="w-full bg-[#0a1628]/50 border border-gray-700 rounded-2xl text-white hover:border-yellow-500/50 transition-colors">
                  <SelectValue placeholder="Select an asset" />
                </SelectTrigger>
                <SelectContent className="bg-[#0f2038] border border-gray-700">
                  {assets.map((asset) => (
                    <SelectItem
                      key={asset}
                      value={asset}
                      className="text-white hover:bg-yellow-500/10 focus:bg-yellow-500/20"
                    >
                      {asset}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Long/Short Toggle */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Position Type
              </label>
              <Tabs
                defaultValue="long"
                onValueChange={(value) => setPositionType(value as 'long' | 'short')}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 bg-[#0a1628]/50 border border-gray-700 rounded-2xl p-1">
                  <TabsTrigger
                    value="long"
                    className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500/20 data-[state=active]:to-green-600/20 data-[state=active]:text-green-400"
                  >
                    Long
                  </TabsTrigger>
                  <TabsTrigger
                    value="short"
                    className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-red-500/20 data-[state=active]:to-red-600/20 data-[state=active]:text-red-400"
                  >
                    Short
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Balance Input */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Balance
              </label>
              <div className="space-y-3">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="0.00"
                    className="bg-[#0a1628]/50 border border-gray-700 rounded-2xl text-white h-12 pr-24 hover:border-yellow-500/50 transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-yellow-400 font-semibold">
                    YU-ETH
                  </span>
                </div>
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="0.00"
                    className="bg-[#0a1628]/50 border border-gray-700 rounded-2xl text-white h-12 pr-24 hover:border-yellow-500/50 transition-colors"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-yellow-400 font-semibold">
                    USDT
                  </span>
                </div>
              </div>
            </div>

            {/* Leverage Slider */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-300 mb-3">
                Leverage: <span className="text-yellow-400">5x</span>
              </label>
              <Slider
                defaultValue={[50]}
                max={100}
                step={10}
                className="mt-2"
              />
              <div className="mt-3 grid grid-cols-4 gap-2">
                {[1, 2, 5, 10].map((lev) => (
                  <button
                    key={lev}
                    className={`py-2 rounded-xl text-sm font-semibold transition-all ${
                      lev === 5
                        ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-[#0a1628]/50 text-gray-400 border border-gray-700 hover:border-yellow-500/30'
                    }`}
                  >
                    {lev}x
                  </button>
                ))}
              </div>
            </div>

            {/* Trade Button */}
            <Button
              size="lg"
              className={`w-full h-14 text-lg font-semibold rounded-2xl shadow-lg transition-all duration-300 ${
                positionType === 'long'
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-green-500/30 hover:shadow-green-500/40'
                  : 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-red-500/30 hover:shadow-red-500/40'
              }`}
            >
              {positionType === 'long' ? 'Open Long Position' : 'Open Short Position'}
            </Button>

            {/* Current Position Info */}
            <div className="mt-6 p-4 bg-[#0a1628]/30 rounded-2xl border border-gray-700">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Current Position</span>
                <Badge
                  className={
                    positionType === 'long'
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border-red-500/30'
                  }
                >
                  {positionType === 'long' ? 'Long' : 'Short'} ETH
                </Badge>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Entry Price</span>
                <span className="text-sm text-white font-semibold">$3,456.78</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Unrealized PNL</span>
                <span className="text-sm font-semibold text-green-400">+$234.56</span>
              </div>
            </div>
          </Card>

          {/* Chart Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Chart Card */}
            <Card className="bg-gradient-to-br from-[#0f2038]/80 to-[#0a1628]/90 backdrop-blur-xl border border-yellow-500/20 rounded-3xl p-6 shadow-2xl shadow-yellow-500/10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-1">YU-ETH/USDT Price Chart</h2>
                  <p className="text-gray-400">Real-time interest rate movements</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    +2.45%
                  </Badge>
                  <span className="text-lg font-bold text-white">$3,456.78</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-[#0a1628]/30 rounded-2xl border border-gray-700 p-4 h-[400px] relative overflow-hidden">
                <PriceChart />
              </div>

              {/* Time Range Selector */}
              <div className="flex justify-center mt-4 space-x-2">
                {['1H', '4H', '1D', '1W', '1M'].map((range) => (
                  <button
                    key={range}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      range === '1D'
                        ? 'bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-[#0a1628]/50 text-gray-400 border border-gray-700 hover:border-yellow-500/30'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </Card>

            {/* Market Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-4">
                <p className="text-sm text-gray-400 mb-1">24h Volume</p>
                <p className="text-xl font-bold text-white">$12.3M</p>
              </Card>
              <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-4">
                <p className="text-sm text-gray-400 mb-1">Open Interest</p>
                <p className="text-xl font-bold text-white">$45.6M</p>
              </Card>
              <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-4">
                <p className="text-sm text-gray-400 mb-1">Funding Rate</p>
                <p className="text-xl font-bold text-green-400">0.025%</p>
              </Card>
              <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-4">
                <p className="text-sm text-gray-400 mb-1">24h Change</p>
                <p className="text-xl font-bold text-green-400">+2.45%</p>
              </Card>
            </div>

            {/* Trading Tips */}
            <Card className="bg-gradient-to-br from-[#0f2038]/60 to-[#0a1628]/80 backdrop-blur-xl border border-yellow-500/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Trading Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-400 text-sm">↗</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Go Long</h4>
                    <p className="text-xs text-gray-400">When expecting interest rates to rise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-sm">↘</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Go Short</h4>
                    <p className="text-xs text-gray-400">When expecting interest rates to fall</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-400 text-sm">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Use Leverage</h4>
                    <p className="text-xs text-gray-400">Amplify potential returns up to 10x</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-400 text-sm">📊</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1">Monitor Volatility</h4>
                    <p className="text-xs text-gray-400">Track market movements closely</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
