interface Props {
    onClick?: () => void;
    label: string;
}

export default function DetailsButton({ onClick, label }: Props) {
    return (
        <button
            onClick={onClick}
            className="hover:scale-[1.1] flex items-center justify-center gap-2 px-6 py-3 bg-foreground/5 hover:bg-foreground/10 border border-foreground/20 hover:border-foreground/40 text-foreground text-sm font-semibold rounded-xl transition-all duration-300"
        >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {label}
        </button>
    )
}
