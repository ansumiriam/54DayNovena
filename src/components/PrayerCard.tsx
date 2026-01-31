import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"


interface PrayerCardProps {
    title: string;
    content: string;
    className?: string;
}

export function PrayerCard({ title, content, className }: PrayerCardProps) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle className="text-lg font-serif text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="whitespace-pre-wrap text-base leading-relaxed font-serif text-muted-foreground">
                    {content}
                </div>
            </CardContent>
        </Card>
    )
}
