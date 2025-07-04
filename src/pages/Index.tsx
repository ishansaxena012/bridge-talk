
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LanguageSelect from '@/components/LanguageSelect';
import ThemeToggle from '@/components/ThemeToggle';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleStartCall = () => {
    navigate('/call-room');
  };

  const handleJoinRoom = () => {
    if (roomId.trim()) {
      navigate('/call-room');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-bridge-blue-50/20 dark:to-bridge-purple-900/10">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🌉</div>
            <h1 className="text-xl font-bold text-gradient">
              LanguageBridge
            </h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Break Language Barriers</span>
              <br />
              <span className="text-foreground">with Emotional Intelligence</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Real-time multilingual calls with emotion detection and cultural context. 
              Experience seamless communication that understands not just what you say, but how you feel.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                <span className="text-base">🎤</span>
                <span className="text-sm font-medium">Live Translation</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                <span className="text-base">😊</span>
                <span className="text-sm font-medium">Emotion Detection</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                <span className="text-base">🌍</span>
                <span className="text-sm font-medium">Cultural Context</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 rounded-full px-4 py-2">
                <span className="text-base">🔒</span>
                <span className="text-sm font-medium">E2E Encrypted</span>
              </div>
            </div>
          </div>

          {/* Main Card */}
          <Card className="max-w-2xl mx-auto shadow-xl border-0 bg-card/80 backdrop-blur">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl">Start Your Bridge Call</CardTitle>
              <CardDescription className="text-base">
                Select your languages and connect with the world
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Language Selection */}
              <div className="space-y-4">
                <Label className="text-base font-medium">Language Pair</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">From</Label>
                    <LanguageSelect
                      value={sourceLanguage}
                      onValueChange={setSourceLanguage}
                      placeholder="Source language"
                    />
                  </div>
                  
                  <div className="flex justify-center">
                    <div className="w-8 h-8 rounded-full bridge-gradient flex items-center justify-center">
                      <span className="text-white text-sm">⇄</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label className="text-sm text-muted-foreground">To</Label>
                    <LanguageSelect
                      value={targetLanguage}
                      onValueChange={setTargetLanguage}
                      placeholder="Target language"
                    />
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button 
                  onClick={handleStartCall}
                  className="w-full h-12 text-base bridge-gradient hover:opacity-90 transition-opacity"
                  size="lg"
                >
                  🚀 Start New Call
                </Button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or join existing room
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Input
                    placeholder="Enter room ID"
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleJoinRoom}
                    variant="outline"
                    disabled={!roomId.trim()}
                  >
                    Join
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center p-6 bg-gradient-to-br from-bridge-blue-50 to-transparent dark:from-bridge-blue-900/20 border-bridge-blue-200/50">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="font-semibold mb-2">Emotion Detection</h3>
              <p className="text-sm text-muted-foreground">
                AI-powered emotion recognition adapts translations to match your feelings and tone
              </p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-bridge-purple-50 to-transparent dark:from-bridge-purple-900/20 border-bridge-purple-200/50">
              <div className="text-3xl mb-4">🌏</div>
              <h3 className="font-semibold mb-2">Cultural Context</h3>
              <p className="text-sm text-muted-foreground">
                Smart cultural adaptation ensures your message is appropriate for different regions
              </p>
            </Card>

            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-transparent dark:from-green-900/20 border-green-200/50">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="font-semibold mb-2">Real-time</h3>
              <p className="text-sm text-muted-foreground">
                Lightning-fast translation with minimal latency for natural conversations
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16 py-8">
        <div className="container text-center text-sm text-muted-foreground">
          <p>Built with ❤️ for breaking down communication barriers worldwide</p>
          <p className="mt-2">LanguageBridge © 2024 - Connecting hearts through words</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
