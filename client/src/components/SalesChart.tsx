
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Area, AreaChart } from 'recharts';

const data = [
  { name: 'Jan', vendas: 45000, pedidos: 320 },
  { name: 'Fev', vendas: 52000, pedidos: 380 },
  { name: 'Mar', vendas: 48000, pedidos: 350 },
  { name: 'Abr', vendas: 61000, pedidos: 420 },
  { name: 'Mai', vendas: 55000, pedidos: 390 },
  { name: 'Jun', vendas: 67000, pedidos: 480 },
  { name: 'Jul', vendas: 72000, pedidos: 520 },
  { name: 'Ago', vendas: 69000, pedidos: 490 },
  { name: 'Set', vendas: 76000, pedidos: 550 },
  { name: 'Out', vendas: 82000, pedidos: 590 },
  { name: 'Nov', vendas: 88000, pedidos: 630 },
  { name: 'Dez', vendas: 95000, pedidos: 680 },
];

export const SalesChart = () => {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Tendência de Vendas</CardTitle>
        <p className="text-slate-400 text-sm">Performance mensal de vendas e pedidos</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="ordersGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="name" 
                stroke="#9ca3af"
                fontSize={12}
              />
              <YAxis 
                stroke="#9ca3af"
                fontSize={12}
              />
              <Area 
                type="monotone" 
                dataKey="vendas" 
                stroke="#10b981" 
                strokeWidth={3}
                fill="url(#salesGradient)"
              />
              <Line 
                type="monotone" 
                dataKey="pedidos" 
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-slate-300">Vendas (R$)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-slate-300">Pedidos</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
