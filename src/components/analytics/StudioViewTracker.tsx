'use client';

import { useEffect } from 'react';
import { trackStudioView } from '@/lib/analytics';

export default function StudioViewTracker({ studioName }: { studioName: string }) {
  useEffect(() => {
    trackStudioView(studioName);
  }, [studioName]);
  return null;
}
