import { useNavigate } from "react-router-dom";

interface Props {
  label?: string;
}

export function BackButton({ label = "Back" }: Props) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/projects")}
      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-base text-sm font-medium text-fg-muted hover:text-fg-base hover:border-copper/30 transition-all duration-200 active:scale-[0.97]"
    >
      <svg
        className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-0.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
      {label}
    </button>
  );
}
