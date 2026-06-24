export type Quality = 'good' | 'partial' | 'poor' | 'critical';
export type StepType = 'narration' | 'dialogue' | 'free';
export type Screen = 'home' | 'catalog' | 'scenario' | 'report' | 'dashboard';

export interface Character {
  name: string;
  role: string;
  color: string;
  initials: string;
}

export interface Choice {
  text: string;
  quality: Quality;
  points: number;
  feedback: string;
  critical?: boolean;
}

export interface AiFeedback {
  intro: string;
  strengths: string[];
  improve: string[];
  missedKeywords?: string[];
}

export interface Step {
  type: StepType;
  text?: string;
  speaker?: string;
  prompt?: string;
  placeholder?: string;
  choices?: Choice[];
  aiFeedback?: AiFeedback;
}

export interface Scenario {
  id: string;
  num: number;
  title: string;
  shortTitle: string;
  context: string;
  objective: string;
  characters: Character[];
  keywords: string[];
  difficulty: string;
  duration: string;
  status: 'available' | 'preview';
  steps?: Step[];
  criticalErrorsInfo?: string[];
  suggestions?: string[];
}

export interface StepResult {
  stepIndex: number;
  type: 'dialogue' | 'free';
  choiceText?: string;
  text?: string;
  quality: Quality;
  points: number;
  max: number;
  feedback?: string;
  critical?: boolean;
  ai?: AiFeedback;
}

export interface GlossaryMap {
  [term: string]: string;
}
