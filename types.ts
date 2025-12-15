import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface AmenityItem {
  label: string;
  detail?: string;
}

export interface SectionData {
  id: string;
  title: string;
  icon: LucideIcon;
  content: React.ReactNode;
}

export interface LinkData {
  text: string;
  url: string;
}