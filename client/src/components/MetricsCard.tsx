
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';


export const MetricsCard = ({ data }) => {

  // "indicador": "Sell Out Dia",
  // "valor": 4.4,
  // "meta": 4.3,
  // "valor_ly": 4.7,
  // "icon": "CircleDollarSign",
  // "gradient": "gradient-mint"


  const progressPercentageMeta = (data.valor / data.meta) * 100;
  const progressPercentageLy = (data.valor / data.valor_ly) * 1

  const Icon = Icons[data.icon] || Icons.HelpCircle;
  return (
    <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 group">
      <CardContent className="p-6">
        
        <p className="text-slate-400 text-1xl font-medium mb-2">{data.indicador}</p>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            



            <p className="text-2xl font-bold text-white mb-2">R$ {data.valor}{data.tipo}</p>
            <div className="flex items-center space-x-1">
              {progressPercentageLy >= 100 ? (
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${progressPercentageLy >= 100 ? 'text-emerald-500' : 'text-red-500'
                  }`}
              >
                {progressPercentageLy.toFixed(1)}%
              </span>
              <span className="text-slate-400 text-sm">LY</span>
            </div>
          </div>
          <div>

            <p className="text-1xl font-bold text-white mb-2">META R$ {data.meta}{data.tipo}</p>
            <div className="flex items-center space-x-1">
              {progressPercentageMeta >= 100 ? (
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ${progressPercentageMeta >= 100 ? 'text-emerald-500' : 'text-red-500'
                  }`}
              >
                {progressPercentageMeta.toFixed(1)}%
              </span>
              <span className="text-slate-400 text-sm">LY</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
