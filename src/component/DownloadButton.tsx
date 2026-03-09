interface Props {
    text: string;
    className?: string;
}
export default function DownloadButton({ text, className }: Props) {
    return (
        <button className={`group px-8 hover:scale-[1.1] py-3   border border-border rounded-lg text-text-primary font-medium transition-all duration-300 flex items-center gap-2 ${className}`}>
            {text}

            <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-1 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    className="transition-all duration-300"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1"
                />
                <path
                    className="transition-transform duration-300 group-hover:translate-y-[0.4] "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12"
                />
                <path
                    className="transition-transform duration-300 group-hover:translate-y-[0.4] "
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12l4 4 4-4"
                />
            </svg>
        </button>
    )
}
