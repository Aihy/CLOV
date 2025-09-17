"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { User, Search, TrendingUp, Star, Settings, CreditCard, BarChart3, Plus, Eye } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg?height=64&width=64" />
              <AvatarFallback className="bg-lime-500/20 text-lime-300 text-xl">JD</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold text-white">Welcome back, John</h1>
              <p className="text-gray-300">Premium Member since March 2024</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button className="bg-lime-500 hover:bg-lime-600 text-black">
              <Plus className="w-4 h-4 mr-2" />
              New Analysis
            </Button>
            <Button variant="outline" className="border-lime-500/30 text-lime-300 hover:bg-lime-500/10 bg-transparent">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Total Analyses</CardTitle>
              <BarChart3 className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">247</div>
              <p className="text-xs text-lime-300">+12 this month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Avg Valuation</CardTitle>
              <TrendingUp className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$3.2M</div>
              <p className="text-xs text-lime-300">+8.5% from last month</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">API Calls</CardTitle>
              <Eye className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">1,847</div>
              <p className="text-xs text-gray-300">153 remaining</p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-300">Success Rate</CardTitle>
              <Star className="h-4 w-4 text-lime-300" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">96.8%</div>
              <p className="text-xs text-lime-300">Above average</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="recent" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 border-white/10">
            <TabsTrigger
              value="recent"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              Recent Analyses
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              Favorites
            </TabsTrigger>
            <TabsTrigger
              value="search"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              New Search
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              Account
            </TabsTrigger>
          </TabsList>

          <TabsContent value="recent" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Recent Analyses</CardTitle>
                <CardDescription className="text-gray-400">
                  Your latest influencer valuations and results
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      influencer: "@techguru_ai",
                      platform: "Instagram",
                      valuation: "$8.4M",
                      confidence: 94,
                      date: "2 hours ago",
                      status: "completed",
                    },
                    {
                      influencer: "@cryptoqueen",
                      platform: "TikTok",
                      valuation: "$12.1M",
                      confidence: 87,
                      date: "1 day ago",
                      status: "completed",
                    },
                    {
                      influencer: "@gaminglegend",
                      platform: "Twitch",
                      valuation: "$6.7M",
                      confidence: 91,
                      date: "2 days ago",
                      status: "completed",
                    },
                    {
                      influencer: "@lifestyle_maven",
                      platform: "YouTube",
                      valuation: "Processing...",
                      confidence: 0,
                      date: "5 minutes ago",
                      status: "processing",
                    },
                  ].map((analysis, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-lime-500/20 text-lime-300">
                            {analysis.influencer.slice(1, 3).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-white font-medium">{analysis.influencer}</p>
                          <p className="text-gray-400 text-sm">
                            {analysis.platform} • {analysis.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        {analysis.status === "completed" ? (
                          <>
                            <div className="text-right">
                              <p className="text-white font-bold">{analysis.valuation}</p>
                              <p className="text-lime-300 text-sm">{analysis.confidence}% confidence</p>
                            </div>
                            <Button
                              size="sm"
                              variant="outline"
                              className="border-lime-500/30 text-lime-300 hover:bg-lime-500/10 bg-transparent"
                            >
                              <Eye className="w-4 h-4 mr-1" />
                              View
                            </Button>
                          </>
                        ) : (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-lime-300 border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-gray-300">Processing...</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Favorite Influencers</CardTitle>
                <CardDescription className="text-gray-400">
                  Track your most watched influencers and their valuation trends
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "@elonmusk", platform: "Twitter", current: "$45.2M", change: "+12.3%" },
                    { name: "@mrbeast", platform: "YouTube", current: "$38.7M", change: "+8.1%" },
                    { name: "@kyliejenner", platform: "Instagram", current: "$52.1M", change: "-2.4%" },
                    { name: "@ninja", platform: "Twitch", current: "$15.8M", change: "+5.7%" },
                  ].map((fav, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-black/20 rounded-lg">
                      <div className="flex items-center gap-4">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <div>
                          <p className="text-white font-medium">{fav.name}</p>
                          <p className="text-gray-400 text-sm">{fav.platform}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">{fav.current}</p>
                        <p className={`text-sm ${fav.change.startsWith("+") ? "text-lime-300" : "text-red-400"}`}>
                          {fav.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="search" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Analyze New Influencer</CardTitle>
                <CardDescription className="text-gray-400">
                  Enter an influencer's social media handle to get their valuation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Enter influencer handle (e.g., @username)"
                      className="bg-black/20 border-white/10 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button className="bg-lime-500 hover:bg-lime-600 text-black">
                    <Search className="w-4 h-4 mr-2" />
                    Analyze
                  </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-white font-semibold mb-2">Quick Analysis</h3>
                      <p className="text-gray-400 text-sm mb-3">Basic metrics and valuation</p>
                      <Badge className="bg-lime-500/20 text-lime-300">Free</Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-white font-semibold mb-2">Deep Analysis</h3>
                      <p className="text-gray-400 text-sm mb-3">Comprehensive report with trends</p>
                      <Badge className="bg-blue-500/20 text-blue-300">Premium</Badge>
                    </CardContent>
                  </Card>

                  <Card className="bg-black/20 border-white/10">
                    <CardContent className="p-4 text-center">
                      <h3 className="text-white font-semibold mb-2">Enterprise</h3>
                      <p className="text-gray-400 text-sm mb-3">Full analysis with API access</p>
                      <Badge className="bg-purple-500/20 text-purple-300">Pro</Badge>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="account" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-lime-300" />
                    Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="text-gray-300 text-sm">Email</label>
                    <Input
                      value="john.doe@example.com"
                      className="bg-black/20 border-white/10 text-white mt-1"
                      readOnly
                    />
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm">Plan</label>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-white">Premium Plan</span>
                      <Badge className="bg-lime-500/20 text-lime-300">Active</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-gray-300 text-sm">API Usage</label>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">1,847 / 2,000 calls</span>
                        <span className="text-lime-300">92.4%</span>
                      </div>
                      <Progress value={92.4} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-lime-300" />
                    Billing & Usage
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Current Plan</span>
                    <span className="text-white font-semibold">$49/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Next Billing</span>
                    <span className="text-white">April 15, 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Total Analyses</span>
                    <span className="text-white">247 this month</span>
                  </div>
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black">Upgrade Plan</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
