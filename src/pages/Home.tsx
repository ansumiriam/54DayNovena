import { useNavigate } from 'react-router-dom';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { NovenaProgressBar } from '@/components/ProgressBar';
import { Play, CheckCircle2, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getMysteryInfoForDay } from '@/lib/novena-utils';

export function Home() {
    const navigate = useNavigate();
    const { state, currentPhase, todayMystery } = useNovenaProgress();

    const isMl = state.settings.language === 'ml';
    const t = {
        todayIs: isMl ? 'ഇന്ന്' : 'Today is',
        day: isMl ? 'ദിവസം' : 'Day',
        phase: isMl ? (currentPhase === 'Petition' ? 'അപേക്ഷ' : 'കൃതജ്ഞത') : currentPhase,
        phaseLabel: isMl ? 'ഘട്ടം' : 'Phase',
        todaysMystery: isMl ? 'ഇന്നത്തെ രഹസ്യം' : "Today's Mystery",
        startPrayer: isMl ? 'പ്രാർത്ഥന ആരംഭിക്കുക' : 'Start Prayer',
        yourJourney: isMl ? 'നിങ്ങളുടെ യാത്ര' : 'Your Journey',
        mysteryName: isMl ?
            (todayMystery === 'Joyful' ? 'സന്തോഷകരമായ' :
                todayMystery === 'Sorrowful' ? 'ദുഃഖകരമായ' :
                    todayMystery === 'Glorious' ? 'മഹിമകരമായ' : 'പ്രകാശപൂർണ്ണമായ')
            : todayMystery
    };

    const days = Array.from({ length: 54 }, (_, i) => i + 1);

    return (
        <div className="space-y-6">
            {/* Header Card */}
            <Card className="bg-primary text-primary-foreground border-none shadow-lg">
                <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-primary-foreground/80 font-medium">{t.todayIs}</p>
                            <h1 className="text-4xl font-bold">{t.day} {state.currentDay}</h1>
                        </div>
                        <div className="text-right">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/20 text-xs font-semibold backdrop-blur-sm">
                                {t.phase} {t.phaseLabel}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <p className="text-sm text-primary-foreground/80">{t.todaysMystery}</p>
                        <h2 className="text-2xl font-serif font-semibold">{t.mysteryName}</h2>
                    </div>

                    <div className="pt-2">
                        <Button
                            variant="secondary"
                            size="lg"
                            className="w-full font-semibold shadow-md"
                            onClick={() => navigate('/pray')}
                        >
                            <Play className="mr-2 h-5 w-5 fill-current" /> {t.startPrayer}
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
                <h3 className="font-semibold text-lg">{t.yourJourney}</h3>
                <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
                    {days.map((day) => {
                        const isCompleted = day < state.currentDay;
                        const isCurrent = day === state.currentDay;
                        const isFuture = day > state.currentDay;
                        const historyDate = state.history[day];
                        const mystery = getMysteryInfoForDay(day, state.settings.includeLuminous);

                        // Handle Malayalam Abbreviations
                        let abbrev: string = mystery.abbrev;
                        if (isMl) {
                            switch (mystery.name) {
                                case 'Joyful': abbrev = 'സ'; break;
                                case 'Sorrowful': abbrev = 'ദു'; break;
                                case 'Glorious': abbrev = 'മ'; break;
                                case 'Luminous': abbrev = 'പ്ര'; break;
                            }
                        }

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
                                {/* Mystery Badge */}
                                <span className={cn(
                                    "absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold",
                                    isCurrent ? "bg-primary-foreground/20 text-primary-foreground" : mystery.color
                                )}>
                                    {abbrev}
                                </span>

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
