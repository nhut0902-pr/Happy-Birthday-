
export enum CelebrationStage {
  QUESTION = 'QUESTION',
  COUNTDOWN = 'COUNTDOWN',
  ENVELOPE = 'ENVELOPE',
  CARD = 'CARD',
  PHOTOS = 'PHOTOS'
}

export interface Photo {
  id: number;
  url: string;
  rotation: number;
  x: number;
  y: number;
}
