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

    const revenue = Number(

        location.state?.revenue || 0
    )

    const targetRevenue = Number(

        location.state?.targetRevenue || 0
    )


    // KPI LOGIC

    const growth =
        revenue >= targetRevenue
        ? 'Target Achieved'

        : revenue >= targetRevenue * 0.7
        ? 'Near Target'

        : 'Below Target'


    const customerStrength =
        revenue > 50000
        ? 'Excellent'

        : revenue > 25000
        ? 'Good'

        : 'Average'


    const revenueDifference =

        targetRevenue - revenue


    // BAR CHART DATA

    const revenueData = [

        {
            name:'Predicted Revenue',
            value:revenue
        },

        {
            name:'Target Revenue',
            value:targetRevenue
        }
    ]


    // PIE CHART DATA

    const pieData = [

        {
            name:'Achieved',
            value:revenue
        },

        {
            name:'Remaining',
            value:
            revenueDifference > 0
            ? revenueDifference
            : 0
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

                            ₹ {Math.round(revenue)}

                        </p>

                    </div>


                    <div className='kpi-card'>

                        <h3>

                            Target Revenue

                        </h3>

                        <p>

                            ₹ {Math.round(targetRevenue)}

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

                            Revenue Gap

                        </h3>

                        <p>

                            ₹ {Math.round(revenueDifference)}

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

                            Target Achievement

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


                {/* PROGRESS */}

                <div className='comparison-card'>

                    <h2>

                        ☕ Revenue Performance Analysis

                    </h2>


                    <div className='progress-bar'>

                        <div

                            className='progress-fill'

                            style={{

                                width:
                                `${(revenue / targetRevenue) * 100}%`
                            }}
                        >

                        </div>

                    </div>


                    <p className='progress-text'>

                        {

                            Math.round(

                                (revenue / targetRevenue) * 100
                            )

                        }% of target achieved

                    </p>

                </div>


                {/* INSIGHTS */}

                <div className='insight-card'>

                    <h2>

                        ☕ AI Business Insights

                    </h2>

                    <ul>

                        <li>

                            Customer traffic significantly
                            impacts predicted revenue.

                        </li>

                        <li>

                            Revenue performance compared
                            against business target.

                        </li>

                        <li>

                            Marketing and operational
                            strategies appear effective.

                        </li>

                    </ul>

                </div>

            </motion.div>

        </div>
    )
}

export default ResultPage