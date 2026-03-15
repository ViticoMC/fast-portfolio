import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';

export function ControlsBar() {
    return (
        <div className="fixed top-4 right-4 z-50 flex gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
        </div>
    );
}
