import React from "react";
import Financials from "./financials";

export default {
    title: "hotelierPro/reports/financials"
};

export const FinancialsExample = () => {
    const data = [
        { name: 'Page A', uv: 4000 },
        { name: 'Page B', uv: 3000 },
        { name: 'Page C', uv: 2000 },
        { name: 'Page D', uv: 100 },
        { name: 'Page E', uv: 1890 },
        { name: 'Page F', uv: 2390 },
        { name: 'Page G', uv: 3490 },
    ];

    return <Financials data={data} />
};


