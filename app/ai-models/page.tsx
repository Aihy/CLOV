import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Brain, Cpu, Database, Network, Zap, TrendingUp, Shield, Layers } from "lucide-react"

export default function AIModelsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-500/20 text-lime-300 border-lime-500/30">Advanced AI Technology</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-lime-300">Models</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the cutting-edge artificial intelligence models and algorithms that power our influencer valuation
            system with unprecedented accuracy.
          </p>
        </div>

        {/* Model Architecture */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Multi-Model <span className="text-lime-300">Architecture</span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-lime-300" />
                </div>
                <CardTitle className="text-white">Large Language Models</CardTitle>
                <CardDescription className="text-gray-400">Advanced NLP for content analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">GPT-4 Integration</span>
                      <span className="text-lime-300">Active</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Claude-3 Sonnet</span>
                      <span className="text-lime-300">Active</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Gemini Pro</span>
                      <span className="text-lime-300">Active</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-lime-300" />
                </div>
                <CardTitle className="text-white">Predictive Models</CardTitle>
                <CardDescription className="text-gray-400">Market cap estimation algorithms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">XGBoost Ensemble</span>
                      <span className="text-lime-300">94.2%</span>
                    </div>
                    <Progress value={94.2} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Neural Networks</span>
                      <span className="text-lime-300">91.8%</span>
                    </div>
                    <Progress value={91.8} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Random Forest</span>
                      <span className="text-lime-300">89.5%</span>
                    </div>
                    <Progress value={89.5} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-lime-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-lime-300" />
                </div>
                <CardTitle className="text-white">Deep Learning</CardTitle>
                <CardDescription className="text-gray-400">Pattern recognition & analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Transformer Models</span>
                      <span className="text-lime-300">96.1%</span>
                    </div>
                    <Progress value={96.1} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">CNN Analysis</span>
                      <span className="text-lime-300">93.7%</span>
                    </div>
                    <Progress value={93.7} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">LSTM Networks</span>
                      <span className="text-lime-300">90.3%</span>
                    </div>
                    <Progress value={90.3} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Core Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Core <span className="text-lime-300">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Database className="w-6 h-6 text-lime-300" />
                  Data Processing Pipeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Real-time Data Ingestion</h4>
                      <p className="text-gray-300">Continuous collection from 15+ social media platforms</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Multi-dimensional Analysis</h4>
                      <p className="text-gray-300">Engagement, sentiment, reach, and demographic data processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Feature Engineering</h4>
                      <p className="text-gray-300">Advanced feature extraction and normalization algorithms</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-3">
                  <Cpu className="w-6 h-6 text-lime-300" />
                  Pump Activity Detection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Anomaly Detection</h4>
                      <p className="text-gray-300">Identifies unusual engagement patterns and artificial inflation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Market Manipulation Analysis</h4>
                      <p className="text-gray-300">Detects coordinated pump activities and bot networks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-lime-300 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-white font-semibold">Risk Assessment</h4>
                      <p className="text-gray-300">Calculates manipulation risk scores and confidence intervals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Model Performance */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Performance <span className="text-lime-300">Metrics</span>
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Zap className="w-8 h-8 text-lime-300 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-white">94.2%</CardTitle>
                <CardDescription className="text-gray-400">Prediction Accuracy</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Shield className="w-8 h-8 text-lime-300 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-white">98.7%</CardTitle>
                <CardDescription className="text-gray-400">Fraud Detection</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Layers className="w-8 h-8 text-lime-300 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-white">15M+</CardTitle>
                <CardDescription className="text-gray-400">Data Points Analyzed</CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-center">
              <CardHeader>
                <Brain className="w-8 h-8 text-lime-300 mx-auto mb-2" />
                <CardTitle className="text-2xl font-bold text-white">{"<30s"}</CardTitle>
                <CardDescription className="text-gray-400">Average Processing Time</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Technical Specifications */}
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm mb-16">
          <CardHeader>
            <CardTitle className="text-white text-center text-2xl">
              Technical <span className="text-lime-300">Specifications</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-lime-300" />
                  Data Sources
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Instagram API & Web Scraping</li>
                  <li>• TikTok Analytics Integration</li>
                  <li>• YouTube Data API v3</li>
                  <li>• Twitter/X API v2</li>
                  <li>• LinkedIn Professional API</li>
                  <li>• Twitch Helix API</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-lime-300" />
                  Infrastructure
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• AWS GPU Clusters (A100)</li>
                  <li>• Kubernetes Orchestration</li>
                  <li>• Redis Caching Layer</li>
                  <li>• PostgreSQL Data Warehouse</li>
                  <li>• Apache Kafka Streaming</li>
                  <li>• Docker Containerization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <Network className="w-5 h-5 text-lime-300" />
                  AI Frameworks
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• PyTorch & TensorFlow</li>
                  <li>• Hugging Face Transformers</li>
                  <li>• OpenAI API Integration</li>
                  <li>• Anthropic Claude API</li>
                  <li>• Google Vertex AI</li>
                  <li>• Custom CUDA Kernels</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Research & Development */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">
            Continuous <span className="text-lime-300">Innovation</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Our research team continuously improves our models with the latest advances in AI, machine learning, and
            blockchain technology to maintain industry-leading accuracy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-300 mb-2">50+</div>
              <div className="text-gray-300">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-300 mb-2">12</div>
              <div className="text-gray-300">PhD Researchers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-lime-300 mb-2">24/7</div>
              <div className="text-gray-300">Model Training</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-8 py-3 text-lg mr-4">
            Try Our Models
          </Button>
          <Button
            variant="outline"
            className="border-lime-500/30 text-lime-300 hover:bg-lime-500/10 px-8 py-3 text-lg bg-transparent"
          >
            Technical Whitepaper
          </Button>
        </div>
      </div>
    </div>
  )
}
