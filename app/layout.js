import '../app/ui/global.css';
import { inter } from '../app/ui/fonts';

export const metadata = {
  title: {
    template: '%s | Documentatie Optimus S2T',
    default: 'Documentatie Optimus S2T'
  },
  description: 'Pagina oficiala cu documentatie utilizator S2T',
  metadataBase: new URL('https://optimus.just.ro/'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}