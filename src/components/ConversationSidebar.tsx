
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import EmotionBadge from './EmotionBadge';

interface ConversationMessage {
  id: string;
  speaker: string;
  originalText: string;
  translatedText: string;
  emotion: string;
  confidence: number;
  timestamp: Date;
  culturalAdaptation?: boolean;
}

interface ConversationSidebarProps {
  messages: ConversationMessage[];
  className?: string;
}

const ConversationSidebar: React.FC<ConversationSidebarProps> = ({
  messages = [],
  className = ""
}) => {
  return (
    <Card className={`w-80 h-full ${className}`}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">Conversation History</CardTitle>
        <p className="text-sm text-muted-foreground">
          {messages.length} messages
        </p>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-96 px-4">
          <div className="space-y-4">
            {messages.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <div className="text-2xl mb-2">💬</div>
                <p>Conversation history will appear here</p>
              </div>
            ) : (
              messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{message.speaker}</span>
                    <span className="text-xs text-muted-foreground">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <EmotionBadge 
                        emotion={message.emotion} 
                        confidence={message.confidence}
                        className="text-xs"
                      />
                      {message.culturalAdaptation && (
                        <Badge variant="outline" className="text-xs bg-cultural-accent/10 text-cultural-accent border-cultural-accent/20">
                          Cultural ✨
                        </Badge>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">
                        Original: "{message.originalText}"
                      </p>
                      <p className="text-sm">
                        Translated: "{message.translatedText}"
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default ConversationSidebar;
