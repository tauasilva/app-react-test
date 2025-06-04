
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

export const PriceAnalysis = ({data}) => {

  const chartData_teste = data.dias.map(item => ({
    day: item.day,
    fullPrice: item.fullprice,
    markdown: item.markdown
  }));

  const total = data.indicadores.Sellout_fp + data.indicadores.Sellout_md
  const percentMd = (data.indicadores.Sellout_md*100)/total
  const percentFp = (data.indicadores.Sellout_fp*100)/total  

  const total_ly = data.indicadores.Sellout_fp_ly + data.indicadores.Sellout_md_ly
  const percentMd_ly = (data.indicadores.Sellout_md_ly*100)/total
  const percentFp_ly = (data.indicadores.Sellout_fp_ly*100)/total 

  const [selectedPeriod, setSelectedPeriod] = useState('Diária');

  return (
    <div className="mb-8">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Full Price x Markdown</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Header com totais */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
            <div className=" bg-slate-900 p-4 rounded-lg">
              <div className="text-slate-400 text-sm mb-1">Sellout acumulado Full Price</div>
              <div className="text-2xl font-bold text-white mb-1">R$ {(data.indicadores.Sellout_fp/1000000).toFixed(1)}MM</div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 text-xs">LY</span>
                <span className="text-slate-300 text-xs">R$ {(data.indicadores.Sellout_fp_ly/1000000).toFixed(1)}MM</span>
              </div>
            </div>
            
            <div className="bg-slate-900 p-4 rounded-lg">
              <div className="text-slate-400 text-sm mb-1">Sellout acumulado Markdown</div>
              <div className="text-2xl font-bold text-white mb-1">R$ {(data.indicadores.Sellout_md/1000000).toFixed(1)}MM</div>
              <div className="flex items-center space-x-2">
                <span className="text-slate-400 text-xs">LY</span>
                <span className="text-slate-300 text-xs">R$ {(data.indicadores.Sellout_md_ly/1000000).toFixed(1)}MM</span>
              </div>
            </div>
            
            <div className="bg-slate-900 p-4 rounded-lg text-center">
              <div className="text-slate-400 text-sm mb-1">% Full Price</div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">{percentMd.toFixed(1)}%</div>
              <div className="flex items-center justify-center space-x-1">
                <span className="text-slate-400 text-xs">LY</span>
                <span className="text-slate-300 text-xs">{percentMd_ly.toFixed(1)}%</span>
              </div>
            </div>
            
            <div className="bg-slate-900 p-4 rounded-lg text-center">
              <div className="text-slate-400 text-sm mb-1">% Markdown</div>
              <div className="text-3xl font-bold text-blue-400 mb-1">{percentFp.toFixed(1)}%</div>
              <div className="flex items-center justify-center space-x-1">
                <span className="text-slate-400 text-xs">LY</span>
                <span className="text-slate-300 text-xs">{percentFp_ly.toFixed(1)}%</span>
              </div>
            </div>
          </div>

          {/* Gráfico */}
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData_teste} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="day" 
                  stroke="#9ca3af"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#9ca3af"
                  fontSize={12}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  formatter={(value, name) => {
                    const labelMap = {
                      fullPrice: 'Full Price',
                      markdown: 'Markdown'
                    };
                    return [`${value}%`, labelMap[name] || name];
                  }}
                />
                <Legend
                  wrapperStyle={{ color: '#9ca3af' }}
                  formatter={(name) => {
                    const legendMap = {
                      fullPrice: 'Full Price',
                      markdown: 'Markdown'
                    };
                    return [legendMap[name]]
                  }}
                />
                <Bar 
                  dataKey="markdown" 
                  // stackId="a" 
                  fill="#1f498" 
                  name="markdown"
                />
                <Bar 
                  dataKey="fullPrice" 
                  // stackId="a" 
                  fill="#6b7280" 
                  name="fullPrice"
                />

              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
