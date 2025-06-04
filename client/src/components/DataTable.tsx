
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';


export const DataTable = ({ data }) => {


  return (
    <Card className="bg-slate-800 border-slate-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white">Top Operadores</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">#</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Operador</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Faturado</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Meta</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Tickets</th>
              </tr>
            </thead>
            <tbody>
              {data.map((operador, index) => (
                <tr key={operador.operador} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                  <td className="py-4 px-4 text-slate-300">{String(index + 1).padStart(2, '0')}</td>
                  <td className="py-4 px-4">
                    <div className="text-white font-medium">{operador.operador}</div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="text-white font-medium">R$ {operador.faturado}K</div>
                  </td>
                  <td className="py-4 px-4 text-slate-300">R$ {operador.meta}K</td>
                  <td className="py-4 px-4 text-white font-medium">{operador.tickets}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
