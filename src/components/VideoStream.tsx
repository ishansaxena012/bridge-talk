
import React from 'react';
import { Card } from '@/components/ui/card';

interface VideoStreamProps {
  isLocal?: boolean;
  userName?: string;
  isConnected?: boolean;
  className?: string;
}

const VideoStream: React.FC<VideoStreamProps> = ({ 
  isLocal = false, 
  userName = "User",
  isConnected = false,
  className = ""
}) => {
  return (
    <Card className={`relative overflow-hidden bg-muted/20 aspect-video ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-bridge-blue-50 to-bridge-purple-50 dark:from-bridge-blue-900/20 dark:to-bridge-purple-900/20">
        {isConnected ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-bridge rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-white font-semibold text-xl">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-muted-foreground">
              {isLocal ? "You" : "Connected"}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <div className="w-16 h-16 bg-muted rounded-full mx-auto mb-3 flex items-center justify-center">
              <span className="text-muted-foreground">📹</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {isLocal ? "Camera Off" : "Waiting for connection..."}
            </p>
          </div>
        )}
      </div>
      
      {isLocal && (
        <div className="absolute top-3 left-3">
          <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            You
          </span>
        </div>
      )}
      
      <div className={`absolute bottom-3 right-3 w-3 h-3 rounded-full ${
        isConnected ? 'bg-green-500' : 'bg-red-500'
      }`} />
    </Card>
  );
};

export default VideoStream;
