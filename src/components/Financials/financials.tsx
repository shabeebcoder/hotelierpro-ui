import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { z } from "zod";

const propsSchema = z.object({
    name: z.string(),
    uv: z.number(),
}).array();

export type IFinancialChart = z.infer<typeof propsSchema>


export default function FinancialChart({ data }: { data: IFinancialChart }) {

    const datas = [
        {
            name: 'Jan',
            revenue: 4000,
            occupancyRate: 70,
        },
        {
            name: 'Feb',
            revenue: 3000,
            occupancyRate: 60,
        },
        {
            name: 'Mar',
            revenue: 2000,
            occupancyRate: 40,
        },
        {
            name: 'Apr',
            revenue: 1000,
            occupancyRate: 10,
        },
        {
            name: 'May',
            revenue: 8000,
            occupancyRate: 90,
        },

        {
            name: 'Jun',
            revenue: 5000,
            occupancyRate: 75,
        },]

    return (
        <div style={{ width: '100%' }}>




            <ResponsiveContainer width="100%" height={500}>
                <LineChart
                    width={500}
                    height={300}
                    data={datas}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" label={{ value: 'Revenue', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" label={{ value: 'Occupancy Rate (%)', angle: 90, position: 'insideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="occupancyRate" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );

}
