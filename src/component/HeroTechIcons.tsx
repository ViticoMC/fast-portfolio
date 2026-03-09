

import { useEffect, useState } from 'react';
import {
    NextJS,
    React,
    Github,
    HTML,
    CSS,
    TailwindCSS,
    TypeScript,
} from './icons'

const icons = [
    { name: 'css', item: CSS },
    { name: 'github', item: Github },
    { name: 'html5', item: HTML },
    { name: 'nextdotjs', item: NextJS },
    { name: 'react', item: React },
    { name: 'tailwindcss', item: TailwindCSS },
    { name: 'typescript', item: TypeScript },
];

// Genera una posición inicial desde la esquina superior izquierda
const getStartPosition = () => {
    return { x: -10, y: -10 };
};

// Posiciones predefinidas para distribución en el cuadrante superior izquierdo
const getEndPosition = (index: number) => {
    const positions = [
        { x: 10, y: 15 },  // css
        { x: 18, y: 25 },  // github
        { x: 12, y: 35 },  // html5
        { x: 22, y: 18 },  // nextdotjs
        { x: 8, y: 42 },   // react
        { x: 20, y: 32 },  // tailwindcss
        { x: 16, y: 45 },  // typescript
    ];

    return positions[index] || { x: 15, y: 30 };
};



export default function HeroTechIcons() {
    const [animated, setAnimated] = useState(false);
    const [iconPositions] = useState(() =>
        icons.map((_, index) => ({
            start: getStartPosition(),
            end: getEndPosition(index),
            delay: Math.random() * 0.8,
            duration: Math.random() * 1 + 1.2,
            rotation: Math.random() * 40 - 20,
            scale: Math.random() * 0.3 + 0.9,
        }))
    );

    useEffect(() => {
        // Forzar un reflow antes de animar
        requestAnimationFrame(() => {
            setAnimated(true);
        });
    }, []);



    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            {icons.map((icon, index) => {
                const pos = iconPositions[index];
                const IconComponent = icon.item;
                return (
                    <div
                        key={icon.name}
                        className="absolute pointer-events-auto hover:scale-110 transition-transform duration-300"
                        style={{
                            left: animated ? `${pos.end.x}%` : `${pos.start.x}%`,
                            top: animated ? `${pos.end.y}%` : `${pos.start.y}%`,
                            transform: animated
                                ? `translate(-50%, -50%) rotate(${pos.rotation}deg) scale(${pos.scale})`
                                : 'translate(-50%, -50%) rotate(0deg) scale(0.5)',
                            transition: `all ${pos.duration}s cubic-bezier(0.34, 1.56, 0.64, 1) ${pos.delay}s`,
                            opacity: animated ? 0.7 : 0,
                        }}
                    >
                        <div
                            className="md:w-12 md:h-12 w-9 h-9 text-white/60 hover:text-white"
                            style={{
                                filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.3)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.15))',
                            }}
                        >
                            {IconComponent}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
