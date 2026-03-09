import React from 'react';

/**
 * Componente de prueba para verificar que las variables CSS globales funcionan correctamente
 */
export function ColorTest() {
    return (
        <div className="fixed bottom-4 left-4 z-50 p-4 bg-bg-secondary border border-border rounded-lg text-xs space-y-2 max-w-xs">
            <h3 className="text-text-primary font-semibold mb-2">🎨 Test Variables CSS</h3>

            {/* Test colores primarios */}
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-text-secondary">Primary</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-secondary rounded"></div>
                    <span className="text-text-secondary">Secondary</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent rounded"></div>
                    <span className="text-text-secondary">Accent</span>
                </div>
            </div>

            {/* Test fondos */}
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-bg-primary border border-border rounded"></div>
                    <span className="text-text-secondary">BG Primary</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-bg-secondary border border-border rounded"></div>
                    <span className="text-text-secondary">BG Secondary</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-bg-tertiary border border-border rounded"></div>
                    <span className="text-text-secondary">BG Tertiary</span>
                </div>
            </div>

            {/* Test texto */}
            <div className="space-y-1">
                <div className="text-text-primary">Primary Text</div>
                <div className="text-text-secondary">Secondary Text</div>
                <div className="text-text-tertiary">Tertiary Text</div>
                <div className="text-text-muted">Muted Text</div>
            </div>

            {/* Test gradiente */}
            <div className="w-full h-4 bg-gradient-primary rounded"></div>

            {/* Test animación */}
            <div className="w-4 h-4 bg-accent animate-fade-in rounded"></div>
        </div>
    );
}

export default ColorTest;