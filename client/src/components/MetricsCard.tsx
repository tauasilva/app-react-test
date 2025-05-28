
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
  icon: LucideIcon;
  gradient: string;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  gradient
}) => {
  return (
    <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 group">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-slate-400 text-sm font-medium mb-2">{title}</p>
            <p className="text-2xl font-bold text-white mb-2">{value}</p>
            <div className="flex items-center space-x-1">
              {changeType === 'increase' ? (
                <TrendingUp className="h-4 w-4 text-emerald-500" />
              ) : (
                <TrendingDown className="h-4 w-4 text-red-500" />
              )}
              <span 
                className={`text-sm font-medium ${
                  changeType === 'increase' ? 'text-emerald-500' : 'text-red-500'
                }`}
              >
                {change}
              </span>
              <span className="text-slate-400 text-sm">Meta</span>
            </div>
          </div>
          <div className={`${gradient} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
