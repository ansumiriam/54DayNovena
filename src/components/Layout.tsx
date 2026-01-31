import { Link, useLocation } from 'react-router-dom';
import { Home, ScrollText, Settings } from 'lucide-react';
import { cn } from '../lib/utils';
import { ThemeProvider } from './theme-provider';

export function Layout({ children }: { children: React.ReactNode }) {
    const location = useLocation();

    const tempNavItems = [
        { name: 'Home', icon: Home, path: '/' },
        { name: 'Petitions', icon: ScrollText, path: '/petitions' },
        { name: 'Settings', icon: Settings, path: '/settings' },
    ];

    return (
        <ThemeProvider defaultTheme="system" storageKey="novena-theme">
            <div className="min-h-screen bg-background text-foreground flex flex-col font-sans antialiased">
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
                                    key={item.name}
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
        </ThemeProvider>
    );
}
