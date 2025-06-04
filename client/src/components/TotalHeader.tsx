
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export const TotalHeader = ({ data }) => {

  const progressPercentageMeta = (data.KPIS.faturado / data.KPIS.meta) * 100;
  const progressPercentageLy = (data.KPIS.faturado / data.KPIS.faturado_ly) * 100;
  
  const progressPercentageMetaMtd = (data.KPIS.faturado_mtd / data.KPIS.meta_mtd) * 100;
  const progressPercentageMtdLy = (data.KPIS.faturado_mtd / data.KPIS.faturado_mtd_ly) * 100;

  return (
    <div className="mb-8  border-slate-700">


      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Resumo de Vendas.</h2>
            {/* <p className="text-slate-400">Selecione uma marca para visualizar os dados</p> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-800 border-slate-700 gap-6 mb-6">
          <CardContent className="p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6  text-white">
                <div>
                  <h2 className="text-xl font-semibold mb-2">SELL OUT D-1</h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-slate-400 text-sm mb-2">Total</div>
                <div className="text-3xl font-bold text-white mb-1">R$ ${(data.KPIS.faturado/1000000).toFixed(2)} MM</div>
                <div className="flex items-center space-x-4">
                  <span className="text-slate-400 text-sm">LY</span>
                  <span className="text-slate-300 text-sm">R$ {(data.KPIS.faturado_ly/1000000).toFixed(2)}MM</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  <span className={`text-emerald-400 ${progressPercentageLy >= 100 ? 'text-emerald-400' :
                    progressPercentageLy >= 85 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                    Var. LY {progressPercentageLy.toFixed(1)}%
                  </span>
                  {/* <span className="text-emerald-400">Var. LY {progressPercentageLy.toFixed(1)}%</span> */}
                </div>
              </div>

              <div>
                <div className="text-slate-400 text-sm mb-2">Meta</div>
                <div className="text-2xl font-bold text-white mb-1">R$ ${(data.KPIS.meta/1000000).toFixed(2)}MM</div>
                <div>
                  <div className="text-slate-400 text-sm mb-2">Var. Meta</div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      -7,1%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-slate-400 text-sm mb-2">Progresso da Meta</div>
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-2">
                    {/* Círculo de fundo */}
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#374151"
                        strokeWidth="8"
                        fill="none"
                      />
                      {/* Círculo de progresso */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={progressPercentageMeta >= 100 ? "#10b981" : progressPercentageMeta >= 80 ? "#f59e0b" : "#ef4444"}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - Math.min(progressPercentageMeta, 100) / 100)}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    {/* Texto central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-lg font-bold ${progressPercentageMeta >= 100 ? 'text-emerald-400' :
                        progressPercentageMeta >= 85 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                        {progressPercentageMeta.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 text-center">
                    {progressPercentageMeta >= 100 ? 'Meta Atingida!' :
                      progressPercentageMeta >= 85 ? 'Próximo da Meta' : 'Abaixo da Meta'}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700 gap-6 mb-6">
          <CardContent className="p-6">
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6  text-white">
                <div>
                  <h2 className="text-xl font-semibold mb-2">SELL OUT MTD</h2>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-slate-400 text-sm mb-2">Total</div>
                <div className="text-2xl font-bold text-white mb-1">R$ ${(data.KPIS.faturado_mtd/1000000).toFixed(2)}MM</div>
                <div className="flex items-center space-x-4">
                  <span className="text-slate-400 text-sm">LY</span>
                  <span className="text-slate-300 text-sm">R$ {(data.KPIS.faturado_mtd_ly/1000000).toFixed(2)}MM</span>
                </div>
                <div className="text-xs text-slate-400 mt-1">
                  <span className={`text-emerald-400 ${progressPercentageMtdLy >= 100 ? 'text-emerald-400' :
                    progressPercentageMtdLy >= 85 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                    Var. LY {progressPercentageMtdLy.toFixed(1)}%
                  </span>
                  {/* <span className="text-emerald-400">Var. LY {progressPercentageLy.toFixed(1)}%</span> */}
                </div>
              </div>

              <div>
                <div className="text-slate-400 text-sm mb-2">Meta</div>
                <div className="text-2xl font-bold text-white mb-1">R$ {(data.KPIS.meta_mtd/1000000).toFixed(2)}MM</div>
                <div>
                  <div className="text-slate-400 text-sm mb-2">Var. Meta</div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                      -7,1%
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-slate-400 text-sm mb-2">Progresso da Meta</div>
                <div className="flex flex-col items-center">
                  <div className="relative w-24 h-24 mb-2">
                    {/* Círculo de fundo */}
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke="#374151"
                        strokeWidth="8"
                        fill="none"
                      />
                      {/* Círculo de progresso */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        stroke={progressPercentageMetaMtd >= 100 ? "#10b981" : progressPercentageMetaMtd >= 80 ? "#f59e0b" : "#ef4444"}
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - Math.min(progressPercentageMetaMtd, 100) / 100)}`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    {/* Texto central */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className={`text-lg font-bold ${progressPercentageMetaMtd >= 100 ? 'text-emerald-400' :
                        progressPercentageMetaMtd >= 85 ? 'text-yellow-400' : 'text-red-400'
                        }`}>
                        {progressPercentageMetaMtd.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 text-center">
                    {progressPercentageMetaMtd >= 100 ? 'Meta Atingida!' :
                      progressPercentageMetaMtd >= 85 ? 'Próximo da Meta' : 'Abaixo da Meta'}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
