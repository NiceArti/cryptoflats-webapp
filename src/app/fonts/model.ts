import { nunito } from './fonts';
import { clsx } from 'clsx';

/**
 * Get the next font
 * @return {string} - combined next fonts
 */
export const getFonts = (): string => {
  return clsx(nunito.variable);
};
