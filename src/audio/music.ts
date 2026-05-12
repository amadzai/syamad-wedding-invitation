import { Howl } from 'howler';

const STORAGE_KEY = 'muted';

const readStoredMuted = (): boolean => {
  if (typeof localStorage === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY) === 'true';
};

let mutedState = readStoredMuted();

export const music = new Howl({
  src: ['/music.mp3'],
  loop: true,
  volume: 0.6,
  html5: true,
  preload: true,
  mute: mutedState,
  onplayerror: () => {
    music.once('unlock', () => {
      music.play();
    });
  },
});

export const startMusic = (): void => {
  if (!music.playing()) music.play();
};

export const stopMusic = (): void => {
  music.stop();
};

export const setMuted = (next: boolean): void => {
  mutedState = next;
  music.mute(next);
  localStorage.setItem(STORAGE_KEY, String(next));
};

export const isMuted = (): boolean => mutedState;
