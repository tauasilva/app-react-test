
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductsTableProps {
  selectedBrand: string;
}

const productsData = {
  Nike: [
    { id: 1, name: 'Air Max 270', category: 'Tênis', sales: 156, revenue: 'R$ 18.720', status: 'high' },
    { id: 2, name: 'Dri-FIT T-Shirt', category: 'Vestuário', sales: 89, revenue: 'R$ 4.450', status: 'medium' },
    { id: 3, name: 'Air Force 1', category: 'Tênis', sales: 234, revenue: 'R$ 25.740', status: 'high' },
    { id: 4, name: 'Tech Fleece Hoodie', category: 'Vestuário', sales: 67, revenue: 'R$ 8.040', status: 'medium' },
  ],
  Adidas: [
    { id: 1, name: 'Ultraboost 22', category: 'Tênis', sales: 198, revenue: 'R$ 35.640', status: 'high' },
    { id: 2, name: 'Essentials 3-Stripes', category: 'Vestuário', sales: 145, revenue: 'R$ 7.250', status: 'medium' },
    { id: 3, name: 'Stan Smith', category: 'Tênis', sales: 312, revenue: 'R$ 24.960', status: 'high' },
    { id: 4, name: 'Adicolor Tracksuit', category: 'Vestuário', sales: 78, revenue: 'R$ 11.700', status: 'medium' },
  ]
};

export const ProductsTable: React.FC<ProductsTableProps> = ({ selectedBrand }) => {
  const products = productsData[selectedBrand as keyof typeof productsData] || productsData.Nike;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'high':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50';
      case 'medium':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-slate-500/20 text-slate-400 border-slate-500/50';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'high':
        return 'Alto';
      case 'medium':
        return 'Médio';
      default:
        return 'Baixo';
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Top Produtos - {selectedBrand}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 px-4 text-slate-400 font-medium">#</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Produto</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Categoria</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Vendas</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Receita</th>
                <th className="text-left py-3 px-4 text-slate-400 font-medium">Performance</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="border-b border-slate-700/50 hover:bg-slate-700/30 transition-colors">
                  <td className="py-4 px-4 text-slate-300">{String(index + 1).padStart(2, '0')}</td>
                  <td className="py-4 px-4">
                    <div className="text-white font-medium">{product.name}</div>
                  </td>
                  <td className="py-4 px-4 text-slate-300">{product.category}</td>
                  <td className="py-4 px-4 text-white font-medium">{product.sales}</td>
                  <td className="py-4 px-4 text-white font-medium">{product.revenue}</td>
                  <td className="py-4 px-4">
                    <Badge className={getStatusColor(product.status)}>
                      {getStatusText(product.status)}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
