// Este archivo amplía los tipos de i18next para proporcionar autocompletado y seguridad de tipos.
import 'i18next';
import { Translations } from '@/language/types';

declare module 'i18next' {
  // Extiende la interfaz `CustomTypeOptions` para que coincida con tu estructura de recursos.
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: Translations;
    };
  }
}
