import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DollarSign, ShoppingCart, Package, Users } from 'lucide-react';
import { MetricsCard } from './MetricsCard';
import { DataTable } from './DataTable';
import { SalesChart } from './SalesChart';
import { TotalHeader } from './TotalHeader';
import { BrandCard } from './BrandCard';
import { PriceAnalysis } from './PriceAnalysis';
import dataExample from '../data/example.json'

const brands = ['AREZZO', 'SCHUTZ', 'ANACAPRI', 'VANS', 'ALEXANDRE BIRMAN'];

// const formatK = (value: number) => {
//   console.log(`value ---> ${value}`)
//   return `R$ ${(value / 1000000).toFixed(1)}MM`;
// };

const Dashboard = () => {
  const [selectedBrand, setSelectedBrand] = useState('AREZZO');
  const [kpis, setKpis] = useState<any | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const fetchKpis = async () => {
      try {
        const response = await fetch(`https://app-react-test-3879198595418316.aws.databricksapps.com/api/dados`);
        const data = await response.json();

        setKpis(data);
      } catch (error) {
        console.error('Erro ao buscar os KPIs:', error);
        const data = dataExample

        setKpis(data);

        setCarregando(false);
      } finally {
        setCarregando(false);
      }
    };

    fetchKpis();
  }, [selectedBrand]);

  if (carregando || !kpis) return <p className="text-white p-4">Carregando KPIs...</p>;


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
        <TotalHeader data={kpis} />


        {/* Brand Cards Grid */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-6 text-white">Performance por Marca</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {kpis.MARCAS.sort((a, b) => b.faturado - a.faturado).map((brand, index) => (
              <BrandCard data={brand} />
            ))}
          </div>
        </div>


        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Resumo de Vendas</h2>
              <p className="text-slate-400">Selecione uma marca para visualizar os dados</p>
            </div>
          </div>
        </div>



        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {
          
          kpis.INDICADORES_GERAIS.map((metric, index) => (
            <MetricsCard data={metric} />
          ))}
        </div>



        {/* Charts and Tables */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="xl:col-span-3">
            <SalesChart dataHoraHora={kpis.HORA_HORA} />
          </div>
          <div>
          </div>
        </div>


        {/* Price Analysis */}
        <PriceAnalysis data={kpis.fullprice_markdown} />

        {/* Products Table */}
        <DataTable data={kpis.TOP_OPERADORES} />
      </main>
    </div>
  );
};

export default Dashboard;
