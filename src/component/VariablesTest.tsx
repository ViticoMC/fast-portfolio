/**
 * VariablesTest - Componente para verificar que todas las variables CSS funcionan correctamente
 *
 * Para usarlo, impórtalo en App.tsx temporalmente:
 * import VariablesTest from "./component/VariablesTest";
 * <VariablesTest />
 */

export default function VariablesTest() {
  return (
    <div className="p-lg bg- min-h-screen">
      <div className="max-w-6xl mx-auto space-y-xl">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-text-primary mb-md">🎨 Test de Variables CSS</h1>
          <p className="text-text-secondary">
            Verifica que todas las variables globales funcionan correctamente
          </p>
        </div>

        {/* Colores Primarios */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Colores Primarios</h2>
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-primary p-md rounded-lg text-white text-center">
              <p className="font-semibold">Primary</p>
              <code className="text-sm opacity-75">bg-primary</code>
            </div>
            <div className="bg-primary-light p-md rounded-lg text-white text-center">
              <p className="font-semibold">Primary Light</p>
              <code className="text-sm opacity-75">bg-primary-light</code>
            </div>
            <div className="bg-primary-dark p-md rounded-lg text-white text-center">
              <p className="font-semibold">Primary Dark</p>
              <code className="text-sm opacity-75">bg-primary-dark</code>
            </div>
          </div>
        </section>

        {/* Colores Secundarios */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Colores Secundarios</h2>
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-secondary p-md rounded-lg text-white text-center">
              <p className="font-semibold">Secondary</p>
              <code className="text-sm opacity-75">bg-secondary</code>
            </div>
            <div className="bg-secondary-light p-md rounded-lg text-white text-center">
              <p className="font-semibold">Secondary Light</p>
              <code className="text-sm opacity-75">bg-secondary-light</code>
            </div>
            <div className="bg-secondary-dark p-md rounded-lg text-white text-center">
              <p className="font-semibold">Secondary Dark</p>
              <code className="text-sm opacity-75">bg-secondary-dark</code>
            </div>
          </div>
        </section>

        {/* Colores Accent */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Colores Accent</h2>
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-accent p-md rounded-lg text-white text-center">
              <p className="font-semibold">Accent</p>
              <code className="text-sm opacity-75">bg-accent</code>
            </div>
            <div className="bg-accent-light p-md rounded-lg text-white text-center">
              <p className="font-semibold">Accent Light</p>
              <code className="text-sm opacity-75">bg-accent-light</code>
            </div>
            <div className="bg-accent-dark p-md rounded-lg text-white text-center">
              <p className="font-semibold">Accent Dark</p>
              <code className="text-sm opacity-75">bg-accent-dark</code>
            </div>
          </div>
        </section>

        {/* Fondos */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Fondos</h2>
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-bg-primary border border-border p-md rounded-lg text-center">
              <p className="font-semibold text-text-primary">BG Primary</p>
              <code className="text-sm text-text-muted">bg-bg-primary</code>
            </div>
            <div className="bg-bg-secondary p-md rounded-lg text-center">
              <p className="font-semibold text-text-primary">BG Secondary</p>
              <code className="text-sm text-text-muted">bg-bg-secondary</code>
            </div>
            <div className="bg-bg-tertiary p-md rounded-lg text-center">
              <p className="font-semibold text-text-primary">BG Tertiary</p>
              <code className="text-sm text-text-muted">bg-bg-tertiary</code>
            </div>
          </div>
        </section>

        {/* Textos */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Textos</h2>
          <div className="space-y-sm">
            <p className="text-text-primary text-lg">
              <strong>Text Primary:</strong> Este es el texto principal -{" "}
              <code>text-text-primary</code>
            </p>
            <p className="text-text-secondary text-lg">
              <strong>Text Secondary:</strong> Este es texto secundario -{" "}
              <code>text-text-secondary</code>
            </p>
            <p className="text-text-tertiary text-lg">
              <strong>Text Tertiary:</strong> Este es texto terciario -{" "}
              <code>text-text-tertiary</code>
            </p>
            <p className="text-text-muted text-lg">
              <strong>Text Muted:</strong> Este es texto atenuado - <code>text-text-muted</code>
            </p>
          </div>
        </section>

        {/* Gradientes */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Gradientes</h2>
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-gradient-primary p-xl rounded-lg text-white text-center">
              <p className="font-semibold">Gradient Primary</p>
              <code className="text-sm opacity-75">bg-gradient-primary</code>
            </div>
            <div className="bg-gradient-accent p-xl rounded-lg text-white text-center">
              <p className="font-semibold">Gradient Accent</p>
              <code className="text-sm opacity-75">bg-gradient-accent</code>
            </div>
            <div className="bg-gradient-smooth p-xl rounded-lg text-white text-center">
              <p className="font-semibold">Gradient Smooth</p>
              <code className="text-sm opacity-75">bg-gradient-smooth</code>
            </div>
          </div>
        </section>

        {/* Transparencias */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Transparencias</h2>
          <div className="grid grid-cols-4 gap-md">
            <div className="bg-primary/25 p-md rounded-lg text-center border border-primary">
              <p className="font-semibold text-primary">25%</p>
              <code className="text-xs text-text-muted">bg-primary/25</code>
            </div>
            <div className="bg-primary/50 p-md rounded-lg text-white text-center">
              <p className="font-semibold">50%</p>
              <code className="text-xs opacity-75">bg-primary/50</code>
            </div>
            <div className="bg-primary/75 p-md rounded-lg text-white text-center">
              <p className="font-semibold">75%</p>
              <code className="text-xs opacity-75">bg-primary/75</code>
            </div>
            <div className="bg-primary p-md rounded-lg text-white text-center">
              <p className="font-semibold">100%</p>
              <code className="text-xs opacity-75">bg-primary</code>
            </div>
          </div>
        </section>

        {/* Bordes */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Bordes</h2>
          <div className="grid grid-cols-2 gap-md">
            <div className="border-2 border-border p-md rounded-lg text-center">
              <p className="font-semibold text-text-primary">Border Default</p>
              <code className="text-sm text-text-muted">border-border</code>
            </div>
            <div className="border-2 border-border-light p-md rounded-lg text-center">
              <p className="font-semibold text-text-primary">Border Light</p>
              <code className="text-sm text-text-muted">border-border-light</code>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Spacing (Paddings)</h2>
          <div className="space-y-sm">
            <div className="bg-accent/20 border border-accent">
              <div className="p-xs bg-accent text-white inline-block rounded">xs (0.5rem)</div>
            </div>
            <div className="bg-accent/20 border border-accent">
              <div className="p-sm bg-accent text-white inline-block rounded">sm (1rem)</div>
            </div>
            <div className="bg-accent/20 border border-accent">
              <div className="p-md bg-accent text-white inline-block rounded">md (1.5rem)</div>
            </div>
            <div className="bg-accent/20 border border-accent">
              <div className="p-lg bg-accent text-white inline-block rounded">lg (2rem)</div>
            </div>
            <div className="bg-accent/20 border border-accent">
              <div className="p-xl bg-accent text-white inline-block rounded">xl (3rem)</div>
            </div>
          </div>
        </section>

        {/* Animaciones */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Animaciones</h2>
          <div className="grid grid-cols-3 gap-md">
            <div className="bg-primary p-md rounded-lg text-white text-center animate-fade-in">
              <p className="font-semibold">Fade In</p>
              <code className="text-sm opacity-75">animate-fade-in</code>
            </div>
            <div className="bg-secondary p-md rounded-lg text-white text-center animate-fade-in-up">
              <p className="font-semibold">Fade In Up</p>
              <code className="text-sm opacity-75">animate-fade-in-up</code>
            </div>
            <div className="bg-accent p-md rounded-lg text-white text-center animate-scale-in">
              <p className="font-semibold">Scale In</p>
              <code className="text-sm opacity-75">animate-scale-in</code>
            </div>
          </div>
        </section>

        {/* Shadow Glow */}
        <section className="bg-bg-primary p-lg rounded-xl">
          <h2 className="text-2xl font-bold text-text-primary mb-md">Shadow Glow</h2>
          <div className="flex justify-center">
            <div className="bg-primary p-xl rounded-lg text-white text-center shadow-glow">
              <p className="font-semibold text-xl">Elemento con Glow</p>
              <code className="text-sm opacity-75">shadow-glow</code>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center pt-lg border-t border-border">
          <p className="text-text-muted">
            ✅ Si ves todos los colores y efectos correctamente, ¡las variables funcionan!
          </p>
          <p className="text-text-tertiary text-sm mt-sm">
            Cambia entre tema claro/oscuro para verificar la transición
          </p>
        </div>
      </div>
    </div>
  );
}
