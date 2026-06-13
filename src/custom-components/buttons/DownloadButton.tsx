interface Props {
  text: string;
}

export default function DownloadButton({ text }: Props) {
  return (
    <a
      href="/VICTOR-CVE.docx"
      download
      className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border-base text-sm font-medium text-fg-muted hover:text-fg-base hover:border-copper transition-all duration-300 active:scale-[0.97]"
    >
      {text}
      <svg
        className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
      </svg>
    </a>
  );
}
