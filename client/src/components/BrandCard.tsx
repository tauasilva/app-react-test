
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown } from 'lucide-react';


export const BrandCard = ({ data }) => {
  

  const progressPercentageMeta = (data.faturado / data.meta) * 100;
  const progressPercentageLy = (data.faturado / data.faturado_ly) * 1

  return (
    <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-200">
      <CardContent className="p-4">
        
        <div className="flex items-center justify-between">
        <div className="mb-3">
          <h3 className="text-3xl font-bold text-white uppercase tracking-wider">
            {/* {data.marca} */}
            <img src= {`/${data.marca}.png`} alt="ZZ Data Logo" className="h-8 w-auto" />
          </h3>
        </div>
          <div className="mb-3">
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">
            
            <span className="text-slate-400 text-xs">Var. Meta</span>
            <div className="flex items-center space-x-1">

              {progressPercentageMeta >= 100 ? <TrendingUp className="h-3 w-3 text-emerald-400" />
                :
                <TrendingDown className="h-3 w-3 text-red-400" />
              }
              <span className={`text-lg font-bold ${progressPercentageMeta >= 100 ? 'text-emerald-400' : 'text-red-400'
                }`}>
                {progressPercentageMeta.toFixed(1)}%
              </span>
            </div>
          </h3>
        </div>      
        </div>

        <div className="mb-3">
          <div className="text-2xl font-bold text-white mb-1">
            R$ {(data.faturado/1000000).toFixed(1)}MM
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-slate-400">LY</span>
            <span className="text-slate-300">R$ {(data.faturado_ly/1000000).toFixed(1)}MM</span>
          </div>
        </div>

        <div className="flex items-center justify-between">


          <div className="text-xs text-slate-400">
            <span className={progressPercentageLy >= 100 ? 'text-emerald-400' : 'text-red-400'}>
              Var. LY {progressPercentageLy.toFixed(1)}%
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
