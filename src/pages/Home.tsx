import { useNavigate } from 'react-router-dom';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NovenaProgressBar } from '@/components/ProgressBar';
import { Play, CheckCircle2, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';


export function Home() {
    const navigate = useNavigate();
    const { state, currentPhase, todayMystery } = useNovenaProgress();

    const days = Array.from({ length: 54 }, (_, i) => i + 1);

    return (
        <div className="space-y-6">
            {/* Header Card */}
            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-primary-foreground/80 font-medium">Today is</p>
                            <h1 className="text-4xl font-bold">Day {state.currentDay}</h1>
                        </div>
                        <div className="text-right">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-xs font-semibold backdrop-blur-sm">
                                {currentPhase} Phase
                            </span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-primary-foreground/80">Today's Mystery</p>
                        <h2 className="text-2xl font-serif font-semibold">{todayMystery}</h2>
                    </div>

                    <div className="pt-2">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full font-semibold shadow-md"
                            onClick={() => navigate('/pray')}
                        >
                            <Play className="mr-2 h-5 w-5 fill-current" /> Start Prayer
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Progress Bar */}
            <div className="bg-card rounded-lg p-4 border shadow-sm">
                <NovenaProgressBar currentDay={state.currentDay} />
            </div>

            {/* Calendar Grid */}
            <div className="space-y-2">
                <h3 className="font-semibold text-lg">Your Journey</h3>
                <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
                    {days.map((day) => {
                        const isCompleted = day < state.currentDay;
                        const isCurrent = day === state.currentDay;
                        const isFuture = day > state.currentDay;
                        const historyDate = state.history[day];

                        return (
                            <div
                                key={day}
                                className={cn(
                                    "aspect-square rounded-md flex flex-col items-center justify-center border text-xs relative transition-all",
                                    isCompleted && "bg-primary/10 border-primary/20 text-primary",
                                    isCurrent && "bg-primary text-primary-foreground border-primary shadow-md scale-105 z-10",
                                    isFuture && "bg-muted text-muted-foreground border-transparent opacity-50"
                                )}
                            >
                                <span className="font-bold">{day}</span>
                                {isCompleted && historyDate && (
                                    <span className="text-[0.6rem] leading-none opacity-80 mt-1">{historyDate}</span>
                                )}
                                {isCompleted && !historyDate && (
                                    <CheckCircle2 className="h-3 w-3 mt-1 opacity-50" />
                                )}
                                {isFuture && <Lock className="h-3 w-3 mt-1 opacity-20" />}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Spacer for bottom nav */}
            <div className="h-8" />
        </div>
    );
}
