"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, TrendingDown, Users, DollarSign, Activity, Eye } from "lucide-react"

const marketData = [
  { month: "Jan", value: 2.4 },
  { month: "Feb", value: 3.1 },
  { month: "Mar", value: 4.2 },
  { month: "Apr", value: 3.8 },
  { month: "May", value: 5.1 },
  { month: "Jun", value: 6.3 },
]

const platformData = [
  { platform: "Instagram", valuations: 1240 },
  { platform: "TikTok", valuations: 980 },
  { platform: "YouTube", valuations: 750 },
  { platform: "Twitter", valuations: 620 },
  { platform: "Twitch", valuations: 340 },
]

const categoryData = [
  { name: "Gaming", value: 35, color: "#84cc16" },
  { name: "Lifestyle", value: 25, color: "#06b6d4" },
  { name: "Tech", value: 20, color: "#8b5cf6" },
  { name: "Finance", value: 12, color: "#f59e0b" },
  { name: "Other", value: 8, color: "#ef4444" },
]

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-500/20 text-lime-300 border-lime-500/30">Market Intelligence</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Analytics <span className="text-lime-300">Dashboard</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time insights into influencer valuations, market trends, and AI performance metrics.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Valuations</CardTitle>
              <Users className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">12,847</div>
              <p className="text-xs text-lime-300 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Avg Market Cap</CardTitle>
              <DollarSign className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$2.4M</div>
              <p className="text-xs text-red-400 flex items-center">
                <TrendingDown className="w-3 h-3 mr-1" />
                -3.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">AI Accuracy</CardTitle>
              <Activity className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">94.2%</div>
              <p className="text-xs text-lime-300 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +2.1% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Active Users</CardTitle>
              <Eye className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">8,432</div>
              <p className="text-xs text-lime-300 flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18.7% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Market Cap Trends</CardTitle>
              <CardDescription className="text-gray-400">Average influencer token valuations over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={marketData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#84cc16"
                    strokeWidth={3}
                    dot={{ fill: "#84cc16", strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Platform Distribution</CardTitle>
              <CardDescription className="text-gray-400">Valuations by social media platform</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={platformData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="platform" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1f2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="valuations" fill="#84cc16" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Category Breakdown and Top Performers */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Category Breakdown</CardTitle>
              <CardDescription className="text-gray-400">Influencer categories by valuation volume</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Top Performers</CardTitle>
              <CardDescription className="text-gray-400">Highest valued influencers this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-lime-500/20 rounded-full flex items-center justify-center">
                      <span className="text-lime-300 font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">@techinfluencer</p>
                      <p className="text-gray-400 text-sm">Technology</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$12.4M</p>
                    <p className="text-lime-300 text-sm">+24%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-lime-500/20 rounded-full flex items-center justify-center">
                      <span className="text-lime-300 font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">@gamingpro</p>
                      <p className="text-gray-400 text-sm">Gaming</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$8.7M</p>
                    <p className="text-lime-300 text-sm">+18%</p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-lime-500/20 rounded-full flex items-center justify-center">
                      <span className="text-lime-300 font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">@lifestyleguru</p>
                      <p className="text-gray-400 text-sm">Lifestyle</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">$6.2M</p>
                    <p className="text-lime-300 text-sm">+15%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Performance Metrics */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-white">AI Model Performance</CardTitle>
            <CardDescription className="text-gray-400">
              Real-time performance metrics of our AI valuation models
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Prediction Accuracy</span>
                  <span className="text-white font-bold">94.2%</span>
                </div>
                <Progress value={94.2} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Processing Speed</span>
                  <span className="text-white font-bold">98.7%</span>
                </div>
                <Progress value={98.7} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Data Coverage</span>
                  <span className="text-white font-bold">91.5%</span>
                </div>
                <Progress value={91.5} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 text-lg">
            Get Detailed Report
          </Button>
        </div>
      </div>
    </div>
  )
}
