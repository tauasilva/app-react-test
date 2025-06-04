
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = [
  { hora: '08:00', realizado: 12000, meta: 15000 },
  { hora: '09:00', realizado: 18000, meta: 20000 },
  { hora: '10:00', realizado: 25000, meta: 25000 },
  { hora: '11:00', realizado: 32000, meta: 30000 },
  { hora: '12:00', realizado: 28000, meta: 35000 },
  { hora: '13:00', realizado: 22000, meta: 28000 },
  { hora: '14:00', realizado: 35000, meta: 32000 },
  { hora: '15:00', realizado: 42000, meta: 38000 },
  { hora: '16:00', realizado: 38000, meta: 40000 },
  { hora: '17:00', realizado: 45000, meta: 42000 },
  { hora: '18:00', realizado: 52000, meta: 48000 },
  { hora: '19:00', realizado: 48000, meta: 50000 },
];

export const SalesChart = () => {
  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Tendência de Vendas por Hora</CardTitle>
        <p className="text-slate-400 text-sm">Performance horária: realizado vs meta</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis 
                dataKey="hora" 
                stroke="#9ca3af"
                fontSize={12}
              />
              <YAxis 
                stroke="#9ca3af"
                fontSize={12}
                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: '#1f2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }}
                formatter={(value, name) => [
                  `R$ ${Number(value).toLocaleString()}`,
                  name === 'realizado' ? 'Realizado' : 'Meta'
                ]}
                labelStyle={{ color: '#9ca3af' }}
              />
              <Legend 
                wrapperStyle={{ color: '#9ca3af' }}
                formatter={(value) => value === 'realizado' ? 'Realizado' : 'Meta'}
              />
              <Line 
                type="monotone" 
                dataKey="realizado" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                name="realizado"
              />
              <Line 
                type="monotone" 
                dataKey="meta" 
                stroke="#3b82f6" 
                strokeWidth={3}
                strokeDasharray="5 5"
                dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
                name="meta"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span className="text-sm text-slate-300">Realizado</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-slate-300">Meta</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
