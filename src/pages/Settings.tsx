import { useNovenaProgress } from '../hooks/useNovenaProgress';
import { useTheme } from '../components/theme-provider';
import { Switch } from '../components/ui/switch';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "../components/ui/dialog"

export function Settings() {
    const { state, toggleLuminous, resetNovena, resetPetitions } = useNovenaProgress();
    const { theme, setTheme } = useTheme();

    return (
        <div className="space-y-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold">Settings</h1>

            <Card>
                <CardHeader>
                    <CardTitle>Appearance</CardTitle>
                    <CardDescription>Customize the look and feel.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">Dark Mode</div>
                            <div className="text-sm text-muted-foreground">
                                Enable dark theme for night reading.
                            </div>
                        </div>
                        <Switch
                            checked={theme === 'dark'}
                            onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Novena Options</CardTitle>
                    <CardDescription>Adjust the prayer structure.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">Luminous Mysteries</div>
                            <div className="text-sm text-muted-foreground">
                                Include Luminous mysteries in the cycle.
                            </div>
                        </div>
                        <Switch
                            checked={state.settings.includeLuminous}
                            onCheckedChange={toggleLuminous}
                        />
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/20">
                <CardHeader>
                    <CardTitle className="text-destructive">Danger Zone</CardTitle>
                    <CardDescription>Reset your progress or data.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">Reset Petitions</div>
                            <div className="text-sm text-muted-foreground">
                                Clear all your personal intentions.
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                                    Reset
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Reset Petitions?</DialogTitle>
                                    <DialogDescription>
                                        This will permanently delete all your saved petitions. This action cannot be undone.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button variant="destructive" onClick={resetPetitions}>Yes, Clear All</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">Reset Progress</div>
                            <div className="text-sm text-muted-foreground">
                                Start over from Day 1.
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="destructive" size="sm">
                                    Start Over
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Restart Novena?</DialogTitle>
                                    <DialogDescription>
                                        This will reset your progress to Day 1. Your petitions will be kept.
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">Cancel</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button variant="destructive" onClick={resetNovena}>Yes, Restart</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </CardContent>
            </Card>

            <div className="text-center text-xs text-muted-foreground pt-4">
                v1.0.0 • Made with ❤️
            </div>
        </div>
    );
}
