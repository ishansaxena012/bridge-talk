
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import EmotionBadge from './EmotionBadge';

interface TranscriptionMessage {
  id: string;
  speaker: string;
  originalText: string;
  translatedText: string;
  emotion: string;
  confidence: number;
  timestamp: Date;
  culturalContext?: string;
}

interface TranscriptionBoxProps {
  messages: TranscriptionMessage[];
  isLive?: boolean;
  className?: string;
}

const TranscriptionBox: React.FC<TranscriptionBoxProps> = ({
  messages = [],
  isLive = false,
  className = ""
}) => {
  return (
    <Card className={`h-80 ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          Live Translation
          {isLive && (
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">Live</span>
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="h-64 overflow-y-auto px-4 pb-4 space-y-3">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl mb-2">🎤</div>
                <p>Start speaking to see live translations</p>
              </div>
            </div>
          ) : (
            messages.map((message) => (
              <div key={message.id} className="animate-slide-in-up">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm">{message.speaker}</span>
                      <EmotionBadge 
                        emotion={message.emotion} 
                        confidence={message.confidence}
                      />
                      <span className="text-xs text-muted-foreground">
                        {message.timestamp.toLocaleTimeString()}
                      </span>
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">
                        "{message.originalText}"
                      </p>
                      <p className="text-sm font-medium">
                        "{message.translatedText}"
                      </p>
                    </div>
                    
                    {message.culturalContext && (
                      <div className="bg-cultural-accent/10 border border-cultural-accent/20 rounded-md p-2">
                        <p className="text-xs text-cultural-accent font-medium mb-1">
                          Cultural Context:
                        </p>
                        <p className="text-xs">{message.culturalContext}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TranscriptionBox;
