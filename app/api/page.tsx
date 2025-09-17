import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Key, Zap, Shield, Globe, BookOpen } from "lucide-react"

export default function APIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-500/20 text-lime-300 border-lime-500/30">Developer Tools</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            API <span className="text-lime-300">Documentation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Integrate CLOV's AI-powered influencer valuation directly into your applications with our RESTful API.
          </p>
        </div>

        {/* Quick Start */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Key className="w-8 h-8 text-lime-300" />
              </div>
              <CardTitle className="text-white">Get API Key</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center mb-4">
                Sign up for a developer account to receive your API key and start making requests.
              </p>
              <Button className="w-full bg-lime-500 hover:bg-lime-600 text-black">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-lime-300" />
              </div>
              <CardTitle className="text-white">Make Request</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center mb-4">
                Use our simple REST endpoints to analyze influencers and get valuations.
              </p>
              <Button
                variant="outline"
                className="w-full border-lime-500/30 text-lime-300 hover:bg-lime-500/10 bg-transparent"
              >
                View Examples
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-lime-300" />
              </div>
              <CardTitle className="text-white">Get Results</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-center mb-4">
                Receive comprehensive valuation data in JSON format within seconds.
              </p>
              <Button
                variant="outline"
                className="w-full border-lime-500/30 text-lime-300 hover:bg-lime-500/10 bg-transparent"
              >
                See Response
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* API Documentation Tabs */}
        <Tabs defaultValue="endpoints" className="mb-16">
          <TabsList className="grid w-full grid-cols-4 bg-white/5 border-white/10">
            <TabsTrigger
              value="endpoints"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              Endpoints
            </TabsTrigger>
            <TabsTrigger
              value="authentication"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              Authentication
            </TabsTrigger>
            <TabsTrigger
              value="examples"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              Examples
            </TabsTrigger>
            <TabsTrigger
              value="responses"
              className="data-[state=active]:bg-lime-500/20 data-[state=active]:text-lime-300"
            >
              Responses
            </TabsTrigger>
          </TabsList>

          <TabsContent value="endpoints" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="bg-green-500 text-black px-2 py-1 rounded text-sm font-mono">POST</span>
                  /api/v1/analyze
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Analyze an influencer and get market cap valuation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Request Body:</div>
                  <pre className="text-lime-300">{`{
  "platform": "instagram",
  "username": "influencer_handle",
  "analysis_depth": "comprehensive"
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-mono">GET</span>
                  /api/v1/status/{"{analysis_id}"}
                </CardTitle>
                <CardDescription className="text-gray-400">Check the status of an ongoing analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Response:</div>
                  <pre className="text-lime-300">{`{
  "status": "completed",
  "progress": 100,
  "estimated_completion": null
}`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-mono">GET</span>
                  /api/v1/results/{"{analysis_id}"}
                </CardTitle>
                <CardDescription className="text-gray-400">Retrieve completed analysis results</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2">Response includes:</div>
                  <ul className="text-lime-300 space-y-1">
                    <li>• Market cap estimation</li>
                    <li>• Confidence score</li>
                    <li>• Detailed metrics</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Shield className="w-5 h-5 text-lime-300" />
                  API Key Authentication
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Secure your API requests with authentication headers
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-gray-400 mb-2">Required Headers:</div>
                  <pre className="text-lime-300">{`Authorization: Bearer YOUR_API_KEY
Content-Type: application/json`}</pre>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Rate Limits</h4>
                      <p className="text-gray-300">1000 requests per hour for standard plans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">API Keys</h4>
                      <p className="text-gray-300">Keep your API keys secure and rotate them regularly</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">JavaScript Example</CardTitle>
                <CardDescription className="text-gray-400">
                  Analyze an Instagram influencer using fetch API
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-lime-300">{`const response = await fetch('https://api.clov.ai/v1/analyze', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    platform: 'instagram',
    username: 'example_influencer',
    analysis_depth: 'comprehensive'
  })
});

const result = await response.json();
console.log(result);`}</pre>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Python Example</CardTitle>
                <CardDescription className="text-gray-400">
                  Using requests library to analyze a TikTok influencer
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-lime-300">{`import requests

headers = {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
}

data = {
    'platform': 'tiktok',
    'username': 'example_creator',
    'analysis_depth': 'standard'
}

response = requests.post(
    'https://api.clov.ai/v1/analyze',
    headers=headers,
    json=data
)

result = response.json()
print(result)`}</pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="responses" className="space-y-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Successful Analysis Response</CardTitle>
                <CardDescription className="text-gray-400">Complete valuation data structure</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-black/50 rounded-lg p-4 font-mono text-sm">
                  <pre className="text-lime-300">{`{
  "analysis_id": "clv_abc123def456",
  "status": "completed",
  "influencer": {
    "platform": "instagram",
    "username": "example_influencer",
    "followers": 2500000,
    "engagement_rate": 4.2
  },
  "valuation": {
    "estimated_market_cap": 8500000,
    "confidence_score": 0.87,
    "risk_level": "medium",
    "price_range": {
      "min": 6200000,
      "max": 12800000
    }
  },
  "metrics": {
    "influence_score": 92,
    "authenticity_score": 88,
    "growth_potential": 76
  },
  "timestamp": "2024-01-15T10:30:00Z"
}`}</pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Globe className="w-8 h-8 text-lime-300 mb-4" />
              <CardTitle className="text-white">Global Coverage</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Analyze influencers from all major social media platforms worldwide with multi-language support.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <Zap className="w-8 h-8 text-lime-300 mb-4" />
              <CardTitle className="text-white">Real-time Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Get valuation results in under 30 seconds with our optimized AI processing pipeline.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <BookOpen className="w-8 h-8 text-lime-300 mb-4" />
              <CardTitle className="text-white">Comprehensive Docs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Detailed documentation, SDKs, and code examples to get you started quickly.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 text-lg mr-4">
            Get API Access
          </Button>
          <Button
            variant="outline"
            className="border-lime-500/30 text-lime-300 hover:bg-lime-500/10 px-8 py-3 text-lg bg-transparent"
          >
            View Full Docs
          </Button>
        </div>
      </div>
    </div>
  )
}
