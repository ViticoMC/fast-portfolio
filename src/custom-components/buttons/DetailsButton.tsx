interface Props {
  onClick?: () => void;
  label: string;
}

export default function DetailsButton({ onClick, label }: Props) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border-base text-fg-muted text-xs font-medium transition-all duration-200 active:scale-[0.97] hover:text-fg-base hover:border-copper/30"
    >
      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      {label}
    </button>
  );
}
