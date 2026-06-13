import { useTranslation } from "react-i18next";

export function FooterSection() {
  const { t } = useTranslation();

  return (
    <footer className="w-full px-4 py-10 border-t border-border-base">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-fg-dim">
          VictorMC Portfolio
        </p>
        <p className="text-xs text-fg-dim">
          {t("footer")}
        </p>
      </div>
    </footer>
  );
}
