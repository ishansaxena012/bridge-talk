
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface EmotionBadgeProps {
  emotion: string;
  confidence?: number;
  className?: string;
}

const emotionMap: Record<string, { emoji: string; color: string }> = {
  happy: { emoji: '😊', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300' },
  sad: { emoji: '😢', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300' },
  angry: { emoji: '😠', color: 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300' },
  surprised: { emoji: '😲', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300' },
  neutral: { emoji: '😐', color: 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300' },
  excited: { emoji: '🤩', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300' },
  confused: { emoji: '😕', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300' },
};

const EmotionBadge: React.FC<EmotionBadgeProps> = ({ 
  emotion, 
  confidence = 0.85,
  className = ""
}) => {
  const emotionData = emotionMap[emotion.toLowerCase()] || emotionMap.neutral;
  
  return (
    <Badge 
      variant="outline" 
      className={`${emotionData.color} border-none font-medium animate-pulse-emotion ${className}`}
    >
      <span className="mr-2 text-base">{emotionData.emoji}</span>
      <span className="capitalize">{emotion}</span>
      <span className="ml-2 text-xs opacity-75">
        {Math.round(confidence * 100)}%
      </span>
    </Badge>
  );
};

export default EmotionBadge;
