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
    const { state, toggleLuminous, resetNovena, resetPetitions, toggleLanguage } = useNovenaProgress();
    const { theme, setTheme } = useTheme();
    const isMl = state.settings.language === 'ml';

    const t = {
        title: isMl ? 'ക്രമീകരണങ്ങൾ' : 'Settings',
        appearance: isMl ? 'കാഴ്ച' : 'Appearance',
        appearanceDesc: isMl ? 'നിറം ക്രമീകരിക്കുക.' : 'Customize the look and feel.',
        darkMode: isMl ? 'ഡാർക്ക് മോഡ്' : 'Dark Mode',
        darkModeDesc: isMl ? 'രാത്രിയിൽ വായിക്കാൻ ഡാർക്ക് തീം ഉപയോഗിക്കുക.' : 'Enable dark theme for night reading.',
        novenaOptions: isMl ? 'നൊവേന ഓപ്ഷനുകൾ' : 'Novena Options',
        novenaOptionsDesc: isMl ? 'പ്രാർത്ഥന ക്രമം മാറ്റുക.' : 'Adjust the prayer structure.',
        luminous: isMl ? 'പ്രകാശപൂർണ്ണമായ രഹസ്യങ്ങൾ' : 'Luminous Mysteries',
        luminousDesc: isMl ? 'രഹസ്യങ്ങളുടെ കൂടെ പ്രകാശപൂർണ്ണമായ രഹസ്യങ്ങളും ഉൾപ്പെടുത്തുക.' : 'Include Luminous mysteries in the cycle.',
        language: 'Language (മലയാളം)',
        languageDesc: isMl ? 'ഇംഗ്ലീഷിലേക്ക് മാറ്റുക.' : 'Switch between English and Malayalam.',
        dangerZone: isMl ? 'ശ്രദ്ധിക്കുക' : 'Danger Zone',
        dangerZoneDesc: isMl ? 'പുരോഗതിയോ വിവരങ്ങളോ പുനഃക്രമീകരിക്കുക.' : 'Reset your progress or data.',
        resetPetitions: isMl ? 'നിയോഗങ്ങൾ നീക്കം ചെയ്യുക' : 'Reset Petitions',
        resetPetitionsDesc: isMl ? 'നിങ്ങളുടെ എല്ലാ നിയോഗങ്ങളും മായ്ച്ചുകളയുക.' : 'Clear all your personal intentions.',
        resetButton: isMl ? 'നീക്കം ചെയ്യുക' : 'Reset',
        resetPetitionsTitle: isMl ? 'നിയോഗങ്ങൾ നീക്കം ചെയ്യണോ?' : 'Reset Petitions?',
        resetPetitionsConfirm: isMl ? 'ഏല്ലാ നിയോഗങ്ങളും മായ്ച്ചുകളയണോ? ഈ പ്രവൃത്തി തിരിച്ചെടുക്കാനാവില്ല.' : 'This will permanently delete all your saved petitions. This action cannot be undone.',
        cancel: isMl ? 'വേണ്ട' : 'Cancel',
        confirmClear: isMl ? 'അതെ, മായ്ച്ചുകളയുക' : 'Yes, Clear All',
        resetProgress: isMl ? 'നൊവേന വീണ്ടും തുടങ്ങുക' : 'Reset Progress',
        resetProgressDesc: isMl ? 'ഒന്നാം ദിവസം മുതൽ വീണ്ടും തുടങ്ങുക.' : 'Start over from Day 1.',
        startOverButton: isMl ? 'വീണ്ടും തുടങ്ങുക' : 'Start Over',
        restartTitle: isMl ? 'നൊവേന വീണ്ടും തുടങ്ങണോ?' : 'Restart Novena?',
        restartConfirm: isMl ? 'നിങ്ങളുടെ പുരോഗതി ഒന്നാം ദിവസത്തിലേക്ക് മാറും. നിയോഗങ്ങൾ നിലനിൽക്കും.' : 'This will reset your progress to Day 1. Your petitions will be kept.',
        confirmRestart: isMl ? 'അതെ, വീണ്ടും തുടങ്ങുക' : 'Yes, Restart',
        madeWith: isMl ? 'സ്നേഹത്തോടെ നിർമ്മിച്ചത്' : 'Made with ❤️'
    };

    return (
        <div className="space-y-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold">{t.title}</h1>

            <Card>
                <CardHeader>
                    <CardTitle>{t.appearance}</CardTitle>
                    <CardDescription>{t.appearanceDesc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">{t.darkMode}</div>
                            <div className="text-sm text-muted-foreground">
                                {t.darkModeDesc}
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
                    <CardTitle>{t.novenaOptions}</CardTitle>
                    <CardDescription>{t.novenaOptionsDesc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">{t.luminous}</div>
                            <div className="text-sm text-muted-foreground">
                                {t.luminousDesc}
                            </div>
                        </div>
                        <Switch
                            checked={state.settings.includeLuminous}
                            onCheckedChange={toggleLuminous}
                        />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">{t.language}</div>
                            <div className="text-sm text-muted-foreground">
                                {t.languageDesc}
                            </div>
                        </div>
                        <div className="flex items-center bg-muted/50 p-1 rounded-lg border border-border/50">
                            <button
                                onClick={() => toggleLanguage('en')}
                                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all duration-200 ${state.settings.language === 'en'
                                        ? 'bg-background text-foreground shadow-sm ring-1 ring-border/50'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => toggleLanguage('ml')}
                                className={`px-4 py-1.5 rounded-md text-sm font-bold transition-all duration-200 ${state.settings.language === 'ml'
                                        ? 'bg-background text-foreground shadow-sm ring-1 ring-border/50'
                                        : 'text-muted-foreground hover:text-foreground'
                                    }`}
                            >
                                മല
                            </button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="border-destructive/20">
                <CardHeader>
                    <CardTitle className="text-destructive">{t.dangerZone}</CardTitle>
                    <CardDescription>{t.dangerZoneDesc}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">{t.resetPetitions}</div>
                            <div className="text-sm text-muted-foreground">
                                {t.resetPetitionsDesc}
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
                                    {t.resetButton}
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{t.resetPetitionsTitle}</DialogTitle>
                                    <DialogDescription>
                                        {t.resetPetitionsConfirm}
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">{t.cancel}</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button variant="destructive" onClick={resetPetitions}>{t.confirmClear}</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                            <div className="font-medium">{t.resetProgress}</div>
                            <div className="text-sm text-muted-foreground">
                                {t.resetProgressDesc}
                            </div>
                        </div>

                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="destructive" size="sm">
                                    {t.startOverButton}
                                </Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>{t.restartTitle}</DialogTitle>
                                    <DialogDescription>
                                        {t.restartConfirm}
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button variant="outline">{t.cancel}</Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button variant="destructive" onClick={resetNovena}>{t.confirmRestart}</Button>
                                    </DialogClose>
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </div>
                </CardContent>
            </Card>

            <div className="text-center text-xs text-muted-foreground pt-4">
                v1.0.0 • {t.madeWith}
            </div>
        </div>
    );
}
