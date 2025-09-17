import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, TrendingUp, Users, Zap } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-500/20 text-lime-300 border-lime-500/30">AI-Powered Analysis</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            How It <span className="text-lime-300">Works</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our advanced AI algorithms analyze social media influencers across multiple platforms to provide accurate
            cryptocurrency market cap valuations.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-lime-300" />
              </div>
              <CardTitle className="text-white">1. Submit Influencer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Simply provide the social media handle or profile of any influencer you want analyzed.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-lime-300" />
              </div>
              <CardTitle className="text-white">2. AI Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Our AI models analyze engagement, reach, sentiment, and market trends across platforms.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-lime-300" />
              </div>
              <CardTitle className="text-white">3. Market Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Advanced algorithms calculate potential market cap based on influence metrics and pump activity data.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-lime-300" />
              </div>
              <CardTitle className="text-white">4. Get Valuation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center">
                Receive a comprehensive valuation report with market cap estimates and confidence scores.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analysis Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Multi-Platform <span className="text-lime-300">Analysis</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Social Media Metrics</h3>
                  <p className="text-gray-300">
                    Follower count, engagement rates, post frequency, and audience demographics across all major
                    platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Sentiment Analysis</h3>
                  <p className="text-gray-300">
                    AI-powered sentiment analysis of comments, mentions, and community discussions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Market Trends</h3>
                  <p className="text-gray-300">
                    Historical data analysis of similar influencer token launches and market performance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              AI <span className="text-lime-300">Technology</span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Multiple AI Models</h3>
                  <p className="text-gray-300">
                    Combines predictions from several large language models for enhanced accuracy.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Pump Activity Analysis</h3>
                  <p className="text-gray-300">
                    Specialized algorithms that analyze historical pump patterns and market manipulation indicators.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Real-time Updates</h3>
                  <p className="text-gray-300">
                    Continuous learning from new data to improve valuation accuracy over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 text-lg">
            Try It Now <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
