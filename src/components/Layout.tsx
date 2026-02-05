import { Link, useLocation } from 'react-router-dom';
import { Home, ScrollText, Settings, Info, BookOpen } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';
import { useNovenaProgress } from '../hooks/useNovenaProgress';

export function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const { state } = useNovenaProgress();
    const isMl = state.settings.language === 'ml';

    const t = {
        title: isMl ? '54 ദിവസത്തെ നൊവേന' : '54-Day Novena',
        home: isMl ? 'ഹോം' : 'Home',
        petitions: isMl ? 'നിയോഗങ്ങൾ' : 'Petitions',
        settings: isMl ? 'ക്രമീകരണങ്ങൾ' : 'Settings',
        prayers: isMl ? 'പ്രാർത്ഥനകൾ' : 'Prayers',
        about: isMl ? 'കുറിച്ചുള്ള' : 'About'
    };

    const tempNavItems = [
        { name: t.home, icon: Home, path: '/' },
        { name: t.petitions, icon: ScrollText, path: '/petitions' },
        { name: t.settings, icon: Settings, path: '/settings' },
    ];

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
            {/* Header */}
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex items-center justify-between h-14 px-4">
                    <h1 className="text-lg font-semibold">{t.title}</h1>
                    <div className="flex items-center gap-1">
                        <Link to="/prayers">
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <BookOpen className="h-5 w-5" />
                                <span className="sr-only">{t.prayers}</span>
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="ghost" size="icon" className="h-9 w-9">
                                <Info className="h-5 w-5" />
                                <span className="sr-only">{t.about}</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-1 container mx-auto p-4 pb-24">
                {children}
            </main>

            <nav className="fixed bottom-0 left-0 right-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
                <div className="flex justify-around items-center h-16">
                    {tempNavItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={cn(
                                    "flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors",
                                    isActive ? "text-primary" : "text-muted-foreground hover:text-primary"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                <span className="text-[10px] font-medium">{item.name}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}
