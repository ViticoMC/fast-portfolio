'use client';

interface LanguageToggleProps {
    language: 'es' | 'en';
    onToggle: (lang: 'es' | 'en') => void;
}

export default function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
    return (
        <div className="fixed top-6 right-6 z-50 animate-fade-in">
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-full p-1 shadow-2xl">
                {/* Toggle Track */}
                <div className="flex items-center gap-1">
                    {/* ES Button */}
                    <button
                        onClick={() => onToggle('es')}
                        className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${language === 'es'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        ES
                    </button>

                    {/* EN Button */}
                    <button
                        onClick={() => onToggle('en')}
                        className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${language === 'en'
                            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        EN
                    </button>
                </div>
            </div>

            {/* Tooltip decorativo */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-500/10 rounded-full blur-xl -z-10"></div>
        </div>
    );
}
