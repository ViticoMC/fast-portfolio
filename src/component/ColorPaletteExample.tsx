// Ejemplo de componente usando variables de color personalizadas

import React from 'react';

export function ColorPaletteExample() {
    return (
        <div className="w-full p-8 bg-bg-primary text-text-primary">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-smooth bg-clip-text text-transparent">
                Sistema de Colores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Ejemplos de colores primarios */}
                <div className="p-4 bg-bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold text-text-primary mb-3">Primarios</h3>
                    <div className="space-y-2">
                        <div className="p-3 bg-primary rounded text-white text-sm font-medium">
                            Color Primario
                        </div>
                        <div className="p-3 bg-primary-light rounded text-white text-sm font-medium">
                            Primario Light
                        </div>
                        <div className="p-3 bg-primary-dark rounded text-white text-sm font-medium">
                            Primario Dark
                        </div>
                    </div>
                </div>

                {/* Ejemplos de colores secundarios */}
                <div className="p-4 bg-bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold text-text-primary mb-3">Secundarios</h3>
                    <div className="space-y-2">
                        <div className="p-3 bg-secondary rounded text-white text-sm font-medium">
                            Color Secundario
                        </div>
                        <div className="p-3 bg-secondary-light rounded text-white text-sm font-medium">
                            Secundario Light
                        </div>
                        <div className="p-3 bg-secondary-dark rounded text-white text-sm font-medium">
                            Secundario Dark
                        </div>
                    </div>
                </div>

                {/* Ejemplos de acentos */}
                <div className="p-4 bg-bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold text-text-primary mb-3">Acentos</h3>
                    <div className="space-y-2">
                        <div className="p-3 bg-accent rounded text-white text-sm font-medium">
                            Color Acento
                        </div>
                        <div className="p-3 bg-accent-light rounded text-white text-sm font-medium">
                            Acento Light
                        </div>
                        <div className="p-3 bg-accent-dark rounded text-white text-sm font-medium">
                            Acento Dark
                        </div>
                    </div>
                </div>

                {/* Gradientes */}
                <div className="p-4 bg-bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold text-text-primary mb-3">Gradientes</h3>
                    <div className="space-y-2">
                        <div className="p-3 bg-gradient-primary rounded text-white text-sm font-medium">
                            Gradiente Primario
                        </div>
                        <div className="p-3 bg-gradient-accent rounded text-white text-sm font-medium">
                            Gradiente Acento
                        </div>
                        <div className="p-3 bg-gradient-smooth rounded text-white text-sm font-medium">
                            Gradiente Suave
                        </div>
                    </div>
                </div>
            </div>

            {/* Niveles de texto */}
            <div className="mt-8 p-4 bg-bg-secondary rounded-lg border border-border">
                <h3 className="font-semibold text-text-primary mb-3">Niveles de Texto</h3>
                <p className="text-text-primary mb-2">Texto Primario</p>
                <p className="text-text-secondary mb-2">Texto Secundario</p>
                <p className="text-text-tertiary mb-2">Texto Terciario</p>
                <p className="text-text-muted">Texto Atenuado</p>
            </div>
        </div>
    );
}
