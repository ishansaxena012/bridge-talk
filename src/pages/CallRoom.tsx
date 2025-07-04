
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import VideoStream from '@/components/VideoStream';
import TranscriptionBox from '@/components/TranscriptionBox';
import ConversationSidebar from '@/components/ConversationSidebar';
import LanguageSelect from '@/components/LanguageSelect';
import ThemeToggle from '@/components/ThemeToggle';

const CallRoom: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [emotionAware, setEmotionAware] = useState(true);
  const [culturalAdaptation, setCulturalAdaptation] = useState(true);
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [showSidebar, setShowSidebar] = useState(true);

  // Mock data for demonstration
  const mockMessages = [
    {
      id: '1',
      speaker: 'You',
      originalText: 'Hello, how are you doing today?',
      translatedText: '¡Hola! ¿Cómo estás hoy?',
      emotion: 'happy',
      confidence: 0.92,
      timestamp: new Date(),
      culturalContext: 'Added informal greeting style common in Spanish-speaking cultures'
    },
    {
      id: '2',
      speaker: 'Remote User',
      originalText: 'Estoy muy bien, gracias por preguntar',
      translatedText: 'I am doing very well, thank you for asking',
      emotion: 'grateful',
      confidence: 0.88,
      timestamp: new Date(),
    }
  ];

  const conversationHistory = mockMessages.map(msg => ({
    ...msg,
    culturalAdaptation: !!msg.culturalContext
  }));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gradient">
              LanguageBridge
            </h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Call Active
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              💬
            </Button>
            <ThemeToggle />
            <Button variant="destructive" size="sm">
              End Call
            </Button>
          </div>
        </div>
      </header>

      <div className="container py-6">
        <div className="flex gap-6">
          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Video Streams */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <VideoStream 
                isLocal={true} 
                userName="You" 
                isConnected={true}
              />
              <VideoStream 
                isLocal={false} 
                userName="Remote User" 
                isConnected={true}
              />
            </div>

            {/* Controls */}
            <Card className="p-4">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-4">
                  <Button
                    variant={isMuted ? "destructive" : "default"}
                    size="sm"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? '🔇 Unmute' : '🎤 Mute'}
                  </Button>
                </div>

                <div className="flex items-center gap-2">
                  <LanguageSelect
                    value={sourceLanguage}
                    onValueChange={setSourceLanguage}
                    placeholder="From"
                    className="w-40"
                  />
                  <span className="text-muted-foreground">→</span>
                  <LanguageSelect
                    value={targetLanguage}
                    onValueChange={setTargetLanguage}
                    placeholder="To"
                    className="w-40"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="emotion-aware"
                    checked={emotionAware}
                    onCheckedChange={setEmotionAware}
                  />
                  <Label htmlFor="emotion-aware" className="text-sm font-medium">
                    Emotion-aware translation
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Switch
                    id="cultural-adaptation"
                    checked={culturalAdaptation}
                    onCheckedChange={setCulturalAdaptation}
                  />
                  <Label htmlFor="cultural-adaptation" className="text-sm font-medium">
                    Cultural adaptation
                  </Label>
                </div>
              </div>
            </Card>

            {/* Live Transcription */}
            <TranscriptionBox 
              messages={mockMessages}
              isLive={true}
            />
          </div>

          {/* Sidebar */}
          {showSidebar && (
            <ConversationSidebar 
              messages={conversationHistory}
              className="hidden lg:block"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CallRoom;
