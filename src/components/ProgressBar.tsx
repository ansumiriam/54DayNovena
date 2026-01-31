import { Progress } from "./ui/progress"

interface NovenaProgressBarProps {
    currentDay: number;
}

export function NovenaProgressBar({ currentDay }: NovenaProgressBarProps) {
    const progress = (currentDay / 54) * 100;

    return (
        <div className="w-full space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
                <span>Day {currentDay} of 54</span>
                <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="w-full" />
        </div>
    )
}
