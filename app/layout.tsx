import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Studio Pixel',
  description: 'Landing page en español para Studio Pixel, una agencia creativa de Monterrey especializada en branding, diseño web, estrategia digital y fotografía de marca. La experiencia posiciona su trayectoria, metodología colaborativa y portafolio mediante una estética editorial, limpia y contemporánea.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
