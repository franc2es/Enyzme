'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export function PriceChart() {
  const data = [
    { time: '00:00', price: 3400, value: 3400 },
    { time: '04:00', price: 3420, value: 3420 },
    { time: '08:00', price: 3380, value: 3380 },
    { time: '12:00', price: 3430, value: 3430 },
    { time: '16:00', price: 3410, value: 3410 },
    { time: '20:00', price: 3440, value: 3440 },
    { time: '24:00', price: 3460, value: 3460 },
    { time: '28:00', price: 3425, value: 3425 },
    { time: '32:00', price: 3455, value: 3455 },
    { time: '36:00', price: 3478, value: 3478 },
    { time: '40:00', price: 3445, value: 3445 },
    { time: '44:00', price: 3480, value: 3480 },
    { time: '48:00', price: 3456, value: 3456 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#0f2038]/95 backdrop-blur-xl border border-gray-700 rounded-xl p-3 shadow-xl">
          <p className="text-sm text-gray-400 mb-1">{label}</p>
          <p className="text-lg font-bold text-white">
            ${payload[0].value.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
        <XAxis
          dataKey="time"
          stroke="#9ca3af"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          padding={{ left: 20, right: 20 }}
        />
        <YAxis
          stroke="#9ca3af"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
          padding={{ top: 20, bottom: 20 }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#22c55e"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#chartGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
