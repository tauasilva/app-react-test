import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, ShoppingCart, Package, Users } from 'lucide-react';
import { MetricsCard } from './MetricsCard';
import { ProductsTable } from './ProductsTable';
import { SalesChart } from './SalesChart';

const brands = ['AREZZO', 'SCHUTZ', 'ANACAPRI', 'VANS', 'ALEXANDRE BIRMAN'];

const formatK = (value: number) => {
  console.log(`value ---> ${value}`)
  return `R$ ${(value / 1000000).toFixed(1)}MM`;
};

const Dashboard = () => {
  const [selectedBrand, setSelectedBrand] = useState('AREZZO');
  const [kpis, setKpis] = useState<any | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchKpis = async () => {
      try {
        const response = await fetch(`https://app-react-test-3879198595418316.aws.databricksapps.com/api/dados`);
        const data = await response.json();
        setKpis(data[0]);
      } catch (error) {
        console.error('Erro ao buscar os KPIs:', error);
        const data =  [{
                        "faturado":3712105.0,
                        "meta":11394037.0,
                        "franquias":1853416.0,
                        "franquias_meta":1853416.0,
                        "loja_propria":504515.0,
                        "loja_propria_meta":504515.0,
                        "outlet":100525.0,
                        "outlet_meta":100525.0,
                        "ecommerce":1253649.0,
                        "ecommerce_meta":1253649.0}
                      ]
        setKpis(data[0]);
        setCarregando(false);
      } finally {
        setCarregando(false);
      }
    };

    fetchKpis();
  }, [selectedBrand]);

  if (carregando || !kpis) return <p className="text-white p-4">Carregando KPIs...</p>;

  const metricsData = [
    {
      title: 'Sell Out Dia',
      value: formatK(kpis.faturado),
      change: formatK(kpis.meta),
      changeType: 'increase' as const,
      icon: DollarSign,
      gradient: 'gradient-mint'
    },
    {
      title: 'Total Franquias',
      value: formatK(kpis.franquias),
      change: formatK(kpis.franquias_meta),
      changeType: 'increase' as const,
      icon: ShoppingCart,
      gradient: 'gradient-blue'
    },
    {
      title: 'Total LP',
      value: formatK(kpis.loja_propria),
      change: formatK(kpis.loja_propria_meta),
      changeType: 'increase' as const,
      icon: Package,
      gradient: 'gradient-purple'
    },
    {
      title: 'Total Ecomm',
      value: formatK(kpis.ecommerce),
      change: formatK(kpis.ecommerce_meta),
      changeType: 'decrease' as const,
      icon: Users,
      gradient: 'gradient-orange'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Dashboard de Vendas
              </h1>
              <img src="/zzdata.png" alt="ZZ Data Logo" className="h-10 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {/* Brand Selector */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Resumo de Vendas</h2>
              <p className="text-slate-400">Selecione uma marca para visualizar os dados</p>
            </div>
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-48 bg-slate-800 border-slate-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-700">
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand} className="text-white hover:bg-slate-700">
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {metricsData.map((metric, index) => (
            <MetricsCard key={index} {...metric} />
          ))}
        </div>

        {/* Charts and Tables */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-2">
            <SalesChart />
          </div>
          <div>
            <Card className="bg-slate-800 border-slate-700 h-full">
              <CardHeader>
                <CardTitle className="text-white">Performance por Canal</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">Loja Física</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-slate-700 rounded-full h-2">
                        <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-300">E-commerce</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-20 bg-slate-700 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Products Table */}
        <ProductsTable selectedBrand={selectedBrand} />
      </main>
    </div>
  );
};

export default Dashboard;
