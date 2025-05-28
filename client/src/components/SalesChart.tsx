import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const SalesChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const data_ = [{"hora":"00:10","vendas":6543.0,"metas":17879.0},{"hora":"00:20","vendas":15939.0,"metas":29696.0},{"hora":"00:30","vendas":23887.0,"metas":40147.0},{"hora":"00:40","vendas":32369.0,"metas":48726.0},{"hora":"00:50","vendas":47100.0,"metas":56814.0},{"hora":"00:59","vendas":51061.0,"metas":62848.0},{"hora":"01:10","vendas":53078.0,"metas":69577.0},{"hora":"01:20","vendas":56732.0,"metas":74835.0},{"hora":"01:30","vendas":58883.0,"metas":79736.0},{"hora":"01:40","vendas":62531.0,"metas":84119.0},{"hora":"01:50","vendas":63781.0,"metas":87843.0},{"hora":"01:59","vendas":66229.0,"metas":91041.0},{"hora":"02:10","vendas":68153.0,"metas":93887.0},{"hora":"02:20","vendas":68853.0,"metas":96377.0},{"hora":"02:30","vendas":74828.0,"metas":98858.0},{"hora":"02:40","vendas":76404.0,"metas":100608.0},{"hora":"02:50","vendas":77702.0,"metas":102624.0},{"hora":"02:59","vendas":77987.0,"metas":103969.0},{"hora":"03:10","vendas":79080.0,"metas":105588.0},{"hora":"03:20","vendas":79530.0,"metas":106979.0},{"hora":"03:30","vendas":80972.0,"metas":108173.0},{"hora":"03:40","vendas":82647.0,"metas":109226.0},{"hora":"03:50","vendas":82647.0,"metas":110319.0},{"hora":"03:59","vendas":82647.0,"metas":111218.0},{"hora":"04:10","vendas":85605.0,"metas":112775.0},{"hora":"04:20","vendas":86924.0,"metas":113786.0},{"hora":"04:30","vendas":87154.0,"metas":114799.0},{"hora":"04:40","vendas":88269.0,"metas":116044.0},{"hora":"04:50","vendas":89354.0,"metas":116992.0},{"hora":"04:59","vendas":90084.0,"metas":118195.0},{"hora":"05:10","vendas":90568.0,"metas":119731.0},{"hora":"05:20","vendas":90918.0,"metas":121157.0},{"hora":"05:30","vendas":91924.0,"metas":122890.0},{"hora":"05:40","vendas":91924.0,"metas":124356.0},{"hora":"05:50","vendas":92849.0,"metas":126608.0},{"hora":"05:59","vendas":94610.0,"metas":128307.0},{"hora":"06:10","vendas":98256.0,"metas":130839.0},{"hora":"06:20","vendas":101431.0,"metas":134748.0},{"hora":"06:30","vendas":105891.0,"metas":138177.0},{"hora":"06:40","vendas":111293.0,"metas":142371.0},{"hora":"06:50","vendas":117600.0,"metas":147090.0},{"hora":"06:59","vendas":122935.0,"metas":152421.0},{"hora":"07:10","vendas":131395.0,"metas":159307.0},{"hora":"07:20","vendas":138690.0,"metas":166312.0},{"hora":"07:30","vendas":148553.0,"metas":174477.0},{"hora":"07:40","vendas":158788.0,"metas":184370.0},{"hora":"07:50","vendas":170236.0,"metas":194475.0},{"hora":"07:59","vendas":180061.0,"metas":205425.0},{"hora":"08:10","vendas":196752.0,"metas":220932.0},{"hora":"08:20","vendas":222726.0,"metas":236563.0},{"hora":"08:30","vendas":236928.0,"metas":254800.0},{"hora":"08:40","vendas":268756.0,"metas":274138.0},{"hora":"08:50","vendas":285640.0,"metas":296835.0},{"hora":"08:59","vendas":305649.0,"metas":318357.0},{"hora":"09:10","vendas":328852.0,"metas":353182.0},{"hora":"09:20","vendas":348580.0,"metas":391866.0},{"hora":"09:30","vendas":372051.0,"metas":434786.0},{"hora":"09:40","vendas":393385.0,"metas":484693.0},{"hora":"09:50","vendas":414179.0,"metas":536892.0},{"hora":"09:59","vendas":429531.0,"metas":588866.0},{"hora":"10:10","vendas":460353.0,"metas":661034.0},{"hora":"10:20","vendas":491506.0,"metas":740792.0},{"hora":"10:30","vendas":515732.0,"metas":832662.0},{"hora":"10:40","vendas":533267.0,"metas":935899.0},{"hora":"10:50","vendas":552970.0,"metas":1046567.0},{"hora":"10:59","vendas":571585.0,"metas":1152084.0},{"hora":"11:10","vendas":606076.0,"metas":1279867.0},{"hora":"11:20","vendas":636256.0,"metas":1407549.0},{"hora":"11:30","vendas":665537.0,"metas":1534442.0},{"hora":"11:40","vendas":685567.0,"metas":1666206.0},{"hora":"11:50","vendas":707297.0,"metas":1800248.0},{"hora":"11:59","vendas":737440.0,"metas":1922320.0},{"hora":"12:10","vendas":768295.0,"metas":2065095.0},{"hora":"12:20","vendas":799081.0,"metas":2196890.0},{"hora":"12:30","vendas":821524.0,"metas":2333498.0},{"hora":"12:40","vendas":844385.0,"metas":2469041.0},{"hora":"12:50","vendas":866280.0,"metas":2607034.0},{"hora":"12:59","vendas":887729.0,"metas":2728128.0},{"hora":"13:10","vendas":914631.0,"metas":2880571.0},{"hora":"13:20","vendas":941675.0,"metas":3018602.0},{"hora":"13:30","vendas":971007.0,"metas":3157815.0},{"hora":"13:40","vendas":998767.0,"metas":3299495.0},{"hora":"13:50","vendas":1024590.0,"metas":3447389.0},{"hora":"13:59","vendas":1051488.0,"metas":3582368.0},{"hora":"14:10","vendas":1079749.0,"metas":3749670.0},{"hora":"14:20","vendas":1106246.0,"metas":3909284.0},{"hora":"14:30","vendas":1135118.0,"metas":4076014.0},{"hora":"14:40","vendas":1159944.0,"metas":4249954.0},{"hora":"14:50","vendas":1185777.0,"metas":4421747.0},{"hora":"14:59","vendas":1208457.0,"metas":4581475.0},{"hora":"15:10","vendas":1232759.0,"metas":4782476.0},{"hora":"15:20","vendas":1263619.0,"metas":4970483.0},{"hora":"15:30","vendas":1300809.0,"metas":5161181.0},{"hora":"15:40","vendas":1324019.0,"metas":5357181.0},{"hora":"15:50","vendas":1348195.0,"metas":5555827.0},{"hora":"15:59","vendas":1368658.0,"metas":5731062.0},{"hora":"16:10","vendas":1398693.0,"metas":5945326.0},{"hora":"16:20","vendas":1418752.0,"metas":6143073.0},{"hora":"16:30","vendas":1445781.0,"metas":6344528.0},{"hora":"16:40","vendas":1472095.0,"metas":6539665.0},{"hora":"16:50","vendas":1494662.0,"metas":6738701.0},{"hora":"16:59","vendas":1509034.0,"metas":6916838.0},{"hora":"17:10","vendas":1520177.0,"metas":7131166.0},{"hora":"17:20","vendas":1520177.0,"metas":7332479.0},{"hora":"17:30","vendas":1520177.0,"metas":7530333.0},{"hora":"17:40","vendas":1520177.0,"metas":7728587.0},{"hora":"17:50","vendas":1520177.0,"metas":7925903.0},{"hora":"17:59","vendas":1520177.0,"metas":8100715.0},{"hora":"18:10","vendas":1520177.0,"metas":8302742.0},{"hora":"18:20","vendas":1520177.0,"metas":8473167.0},{"hora":"18:30","vendas":1520177.0,"metas":8638583.0},{"hora":"18:40","vendas":1520177.0,"metas":8796979.0},{"hora":"18:50","vendas":1520177.0,"metas":8951910.0},{"hora":"18:59","vendas":1520177.0,"metas":9085633.0},{"hora":"19:10","vendas":1520177.0,"metas":9247604.0},{"hora":"19:20","vendas":1520177.0,"metas":9389898.0},{"hora":"19:30","vendas":1520177.0,"metas":9523280.0},{"hora":"19:40","vendas":1520177.0,"metas":9656494.0},{"hora":"19:50","vendas":1520177.0,"metas":9789468.0},{"hora":"19:59","vendas":1520177.0,"metas":9905926.0},{"hora":"20:10","vendas":1520177.0,"metas":10037253.0},{"hora":"20:20","vendas":1520177.0,"metas":10153879.0},{"hora":"20:30","vendas":1520177.0,"metas":10263963.0},{"hora":"20:40","vendas":1520177.0,"metas":10372839.0},{"hora":"20:50","vendas":1520177.0,"metas":10478484.0},{"hora":"20:59","vendas":1520177.0,"metas":10566139.0},{"hora":"21:10","vendas":1520177.0,"metas":10674223.0},{"hora":"21:20","vendas":1520177.0,"metas":10765978.0},{"hora":"21:30","vendas":1520177.0,"metas":10853280.0},{"hora":"21:40","vendas":1520177.0,"metas":10933735.0},{"hora":"21:50","vendas":1520177.0,"metas":11008688.0},{"hora":"21:59","vendas":1520177.0,"metas":11066116.0},{"hora":"22:10","vendas":1520177.0,"metas":11118414.0},{"hora":"22:20","vendas":1520177.0,"metas":11150492.0},{"hora":"22:30","vendas":1520177.0,"metas":11180560.0},{"hora":"22:40","vendas":1520177.0,"metas":11207833.0},{"hora":"22:50","vendas":1520177.0,"metas":11233399.0},{"hora":"22:59","vendas":1520177.0,"metas":11254901.0},{"hora":"23:10","vendas":1520177.0,"metas":11278897.0},{"hora":"23:20","vendas":1520177.0,"metas":11297645.0},{"hora":"23:30","vendas":1520177.0,"metas":11315681.0},{"hora":"23:40","vendas":1520177.0,"metas":11332678.0},{"hora":"23:50","vendas":1520177.0,"metas":11347488.0},{"hora":"23:59","vendas":1520177.0,"metas":11360271.0}];



  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await fetch('https://app-react-test-3879198595418316.aws.databricksapps.com/api/vendahorahora');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Erro ao buscar dados de vendas:', error);
        setData(data_)
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  if (loading) {
    return <p className="text-slate-400 text-sm">Carregando dados...</p>;
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white">Tendência de Vendas</CardTitle>
        <p className="text-slate-400 text-sm">Performance mensal de vendas e pedidos</p>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="hora" minTickGap={40} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="vendas"
              stroke="#4F46E5"
              name="Vendas"
              dot={false}
              strokeWidth={2}
            />
            <Line
              type="monotone"
              dataKey="metas"
              stroke="#F97316"
              name="Meta"
              dot={false}
              strokeWidth={2}
              strokeDasharray="4 4" // Pontilhado
            />
          </LineChart>
        </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};