import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tool',
  description:
    "Tech I'm currently using for coding, videos, and music.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        tools i'm using
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>Windows 11, Acer Nitro</li>
          <li>31.5&quot; LG UltraFine 32UN880</li>
          <li>Logitech MX Master 3 Mouse</li>
          <li>Autonomous SmartDesk 2</li>
          <li>Autonomous ErgoChair 2</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor 1: VSCode 
          </li>
          <li>Editor 2: PHPStorm</li>
          <li>Theme: Mariana Pro</li>
          <li>Terminal: Windows Terminal / zsh</li>
        </ul>
        <h3 id="coding">Dev</h3>
        <ul>
          <li>
            Laravel
          </li>
          <li>Livewire</li>
          <li>Docker</li>
          <li>Next.js</li>
          <li>React.js</li>
          <li>Alpine.js</li>
          <li>Tailwind</li>
          <li>Brave / Chrome</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>1Password</li>
          <li>Spotify</li>
          <li>CleanShot X</li>
          <li>RetroClip</li>
          <li>Grammarly</li> 
        </ul>
      </div>
    </section>
  );
}
