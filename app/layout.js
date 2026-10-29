export const metadata = {
  title: 'gnomies.io — Lime Green Closest-Wins Courier',
  description: 'Item-drop desk for documents & ≤10 lb parcels. Cybercab Austin + Waymo Austin/LA. Phoenix Clippy soul.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  lime: '#39FF14',
                  limeDark: '#00CC00',
                  obsidian: '#0A0A0A',
                }
              }
            }
          }
        </script>
      </head>
      <body className="bg-obsidian text-white">{children}</body>
    </html>
  );
}