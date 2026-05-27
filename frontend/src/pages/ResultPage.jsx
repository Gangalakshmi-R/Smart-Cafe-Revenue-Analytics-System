import React from 'react'

import { useLocation } from 'react-router-dom'

import { motion } from 'framer-motion'

import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell

} from 'recharts'

function ResultPage() {

    const location = useLocation()

    const revenue = location.state?.revenue || 0


    // KPI LOGIC

    const growth =
        revenue > 50000
        ? 'High Growth'
        : revenue > 25000
        ? 'Moderate Growth'
        : 'Low Growth'

    const customerStrength =
        revenue > 50000
        ? 'Excellent'
        : revenue > 25000
        ? 'Good'
        : 'Average'


    // BAR CHART DATA

    const revenueData = [

        {
            name:'Revenue',
            value:revenue
        },

        {
            name:'Target',
            value:60000
        }
    ]


    // PIE CHART DATA

    const pieData = [

        {
            name:'Revenue',
            value:revenue
        },

        {
            name:'Remaining',
            value:70000 - revenue
        }
    ]

    const COLORS = [

        '#D4A373',
        '#EFE7DD'
    ]


    return (

        <div className='main-container'>

            <motion.div

                className='result-dashboard'

                initial={{ opacity:0 }}

                animate={{ opacity:1 }}

                transition={{ duration:0.6 }}
            >

                {/* TITLE */}

                <h1 className='result-title'>

                    ☕ Revenue Analytics Dashboard

                </h1>


                {/* KPI SECTION */}

                <div className='kpi-grid'>

                    <div className='kpi-card'>

                        <h3>

                            Predicted Revenue

                        </h3>

                        <p>

                            ₹ {revenue}

                        </p>

                    </div>


                    <div className='kpi-card'>

                        <h3>

                            Growth Status

                        </h3>

                        <p>

                            {growth}

                        </p>

                    </div>


                    <div className='kpi-card'>

                        <h3>

                            Customer Strength

                        </h3>

                        <p>

                            {customerStrength}

                        </p>

                    </div>


                    <div className='kpi-card'>

                        <h3>

                            AI Confidence

                        </h3>

                        <p>

                            94%

                        </p>

                    </div>

                </div>


                {/* CHARTS */}

                <div className='chart-grid'>


                    {/* BAR CHART */}

                    <div className='chart-card'>

                        <h2>

                            Revenue Comparison

                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >

                            <BarChart data={revenueData}>

                                <XAxis dataKey="name" />

                                <YAxis />

                                <Tooltip />

                                <Bar
                                    dataKey="value"
                                    fill="#D4A373"
                                    radius={[10,10,0,0]}
                                />

                            </BarChart>

                        </ResponsiveContainer>

                    </div>


                    {/* PIE CHART */}

                    <div className='chart-card'>

                        <h2>

                            Revenue Target Analysis

                        </h2>

                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >

                            <PieChart>

                                <Pie

                                    data={pieData}

                                    cx="50%"

                                    cy="50%"

                                    outerRadius={100}

                                    dataKey="value"

                                    label
                                >

                                    {

                                        pieData.map((entry,index)=>(

                                            <Cell

                                                key={index}

                                                fill={COLORS[index]}
                                            />
                                        ))
                                    }

                                </Pie>

                                <Tooltip />

                            </PieChart>

                        </ResponsiveContainer>

                    </div>

                </div>


                {/* BUSINESS INSIGHTS */}

                <div className='insight-card'>

                    <h2>

                        ☕ AI Business Insights

                    </h2>

                    <ul>

                        <li>

                            High customer traffic positively
                            impacts revenue growth.

                        </li>

                        <li>

                            Marketing investment appears
                            effective for business expansion.

                        </li>

                        <li>

                            Revenue trend indicates strong
                            café performance potential.

                        </li>

                    </ul>

                </div>


                {/* QUOTES */}

                <div className='quote-box'>

                    <p>

                        “Great coffee and smart analytics
                        build successful cafés.”

                    </p>

                    <p>

                        “Data-driven decisions create
                        profitable businesses.”

                    </p>

                </div>

            </motion.div>

        </div>
    )
}

export default ResultPage