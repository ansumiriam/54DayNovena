import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNovenaProgress } from '@/hooks/useNovenaProgress';

export function About() {
    const { state } = useNovenaProgress();
    const includeLuminous = state.settings.includeLuminous;
    const isMl = state.settings.language === 'ml';

    const t = {
        title: isMl ? 'നൊവേനയെക്കുറിച്ച്' : 'About the Novena',
        whatIsTitle: isMl ? 'എന്താണ് 54 ദിവസത്തെ ജപമാല യജ്ഞം?' : 'What is the 54-Day Rosary Novena?',
        whatIsDesc1: isMl
            ? 'പരിശുദ്ധ അമ്മയോടുള്ള ഏറ്റവും ശക്തിയേറിയ ഭക്തിമാർഗ്ഗങ്ങളിൽ ഒന്നാണ് 54 ദിവസത്തെ ജപമാല യജ്ഞം. തുടർച്ചയായി 54 ദിവസം, ദിവസവും ജപമാല (അഞ്ച് രഹസ്യങ്ങൾ) ചൊല്ലി പ്രാർത്ഥിക്കുന്നതാണ് ഈ യജ്ഞം.'
            : 'The 54-Day Rosary Novena is one of the most powerful devotions to Our Lady. It consists of praying the Rosary (five decades) every day for 54 consecutive days.',
        whatIsDesc2: isMl
            ? 'ഈ നൊവേന രണ്ട് ഘട്ടങ്ങളായി തിരിച്ചിരിക്കുന്നു:'
            : 'The novena is divided into two phases:',
        phase1: isMl
            ? 'ദിവസങ്ങൾ 1-27: അപേക്ഷയുടെ ഘട്ടം - നിയോഗം സമർപ്പിക്കുന്നു'
            : 'Days 1-27: Petition Phase – asking for your intention',
        phase2: isMl
            ? 'ദിവസങ്ങൾ 28-54: കൃതജ്ഞതയുടെ ഘട്ടം - മുൻകൂട്ടി നന്ദി പറയുന്നു'
            : 'Days 28-54: Thanksgiving Phase – thanking Mary in advance',

        cycleTitle: isMl ? 'ജപമാല രഹസ്യങ്ങൾ' : 'The Mystery Cycle',
        cycleDesc: isMl
            ? `ഓരോ ദിവസവും ഒരു നിശ്ചിത ജപമാല രഹസ്യം ധ്യാനിക്കുന്നു. രഹസ്യങ്ങൾ ${includeLuminous ? '4' : '3'} ദിവസത്തെ ക്രമത്തിൽ ആവർത്തിക്കുന്നു:`
            : `Each day, you meditate on one set of mysteries while praying the Rosary. The mysteries rotate in a ${includeLuminous ? '4' : '3'}-day cycle:`,

        joyful: isMl ? 'സന്തോഷകരമായ രഹസ്യങ്ങൾ' : 'Joyful Mysteries',
        joyfulDays: isMl
            ? `ദിവസങ്ങൾ 1, ${includeLuminous ? '5, 9, 13' : '4, 7, 10'}... (1 മുതൽ ഓരോ ${includeLuminous ? 'നാലാം' : 'മൂന്നാം'} ദിവസവും)`
            : `Days 1, ${includeLuminous ? '5, 9, 13' : '4, 7, 10'}... (every ${includeLuminous ? '4th' : '3rd'} day starting from 1)`,

        sorrowful: isMl ? 'ദുഃഖകരമായ രഹസ്യങ്ങൾ' : 'Sorrowful Mysteries',
        sorrowfulDays: isMl
            ? `ദിവസങ്ങൾ 2, ${includeLuminous ? '6, 10, 14' : '5, 8, 11'}... (2 മുതൽ ഓരോ ${includeLuminous ? 'നാലാം' : 'മൂന്നാം'} ദിവസവും)`
            : `Days 2, ${includeLuminous ? '6, 10, 14' : '5, 8, 11'}... (every ${includeLuminous ? '4th' : '3rd'} day starting from 2)`,

        glorious: isMl ? 'മഹിമകരമായ രഹസ്യങ്ങൾ' : 'Glorious Mysteries',
        gloriousDays: isMl
            ? `ദിവസങ്ങൾ 3, ${includeLuminous ? '7, 11, 15' : '6, 9, 12'}... (3 മുതൽ ഓരോ ${includeLuminous ? 'നാലാം' : 'മൂന്നാം'} ദിവസവും)`
            : `Days 3, ${includeLuminous ? '7, 11, 15' : '6, 9, 12'}... (every ${includeLuminous ? '4th' : '3rd'} day starting from 3)`,

        luminous: isMl ? 'പ്രകാശപൂർണ്ണമായ രഹസ്യങ്ങൾ' : 'Luminous Mysteries',
        luminousDays: isMl
            ? 'ദിവസങ്ങൾ 4, 8, 12, 16... (4 മുതൽ ഓരോ നാലാം ദിവസവും)'
            : 'Days 4, 8, 12, 16... (every 4th day starting from 4)',

        howToTitle: isMl ? 'എങ്ങനെ പ്രാർത്ഥിക്കാം' : 'How to Pray',
        step1: isMl ? 'നൊവേന പ്രാരംഭ പ്രാർത്ഥനയോടെ തുടങ്ങുക' : 'Start with the Novena Opening Prayer',
        step2: isMl ? 'കുരിശടയാളവും വിശ്വാസപ്രമാണവും ചൊല്ലുക' : "Pray the Sign of the Cross and Apostles' Creed",
        step3: isMl ? 'സ്വർഗ്ഗസ്ഥനായ പിതാവേ, 3 നന്മ നിറഞ്ഞ മറിയമേ, ത്രിത്വസ്തുതി എന്നിവ ചൊല്ലുക' : 'Pray the Our Father, 3 Hail Marys, and Glory Be',
        step4: isMl ? 'ഓരോ രഹസ്യത്തിലും: രഹസ്യം ധ്യാനിക്കുക, സ്വർഗ്ഗസ്ഥനായ പിതാവേ, 10 നന്മ നിറഞ്ഞ മറിയമേ, ത്രിത്വസ്തുതി എന്നിവ ചൊല്ലുക' : 'For each decade: announce the mystery, pray Our Father, 10 Hail Marys, and Glory Be',
        step5: isMl ? '5 രഹസ്യങ്ങൾക്ക് ശേഷം, പരിശുദ്ധ രാജ്ഞി ചൊല്ലുക' : 'After all 5 decades, pray the Hail Holy Queen',
        step6: isMl ? 'നൊവേന സമാപന പ്രാർത്ഥനയോടെ അവസാനിപ്പിക്കുക' : 'End with the Novena Closing Prayer',

        originTitle: isMl ? 'ചരിത്രം' : 'Origin',
        originText: isMl
            ? '1884-ൽ ഫോർച്ചുണാ അഗ്രെല്ലി എന്ന പെൺകുട്ടി ഈ നൊവേന പൂർത്തിയാക്കിയ ശേഷം അത്ഭുതകരമായി രോഗശാന്തി നേടിയതോടെയാണ് ഈ ഭക്തി പ്രചരിച്ചത്. പരിശുദ്ധ അമ്മ അവൾക്ക് പ്രത്യക്ഷപ്പെട്ട് ഈ പ്രത്യേക ജപമാല ക്രമം പഠിപ്പിച്ചു നൽകി വാഗ്ദാനം ചെയ്തു: "എന്റെ പക്കൽ നിന്നും കൃപകൾ ആഗ്രഹിക്കുന്നവർ മൂന്ന് നൊവേന (27 ദിവസം) യാചനയായും, മൂന്ന് നൊവേന (27 ദിവസം) കൃതജ്ഞതയായും ജപമാല അർപ്പിക്കട്ടെ."'
            : 'This devotion became known through a young girl named Fortuna Agrelli who was miraculously healed in 1884 after completing this novena. Our Lady appeared to her and taught her this special form of the Rosary novena, promising: "Whoever desires to obtain favors from me should make three novenas of the prayers of the Rosary, and three novenas in thanksgiving."'
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-center">{t.title}</h1>

            <div className="space-y-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{t.whatIsTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                        <p>{t.whatIsDesc1}</p>
                        <p>{t.whatIsDesc2}</p>
                        <ul className="list-disc list-inside space-y-1 ml-2">
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `<strong>ദിവസങ്ങൾ 1-27:</strong> അപേക്ഷയുടെ ഘട്ടം - നിയോഗം സമർപ്പിക്കുന്നു` : `<strong>Days 1-27:</strong> Petition Phase – asking for your intention` }} />
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `<strong>ദിവസങ്ങൾ 28-54:</strong> കൃതജ്ഞതയുടെ ഘട്ടം - മുൻകൂട്ടി നന്ദി പറയുന്നു` : `<strong>Days 28-54:</strong> Thanksgiving Phase – thanking Mary in advance` }} />
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{t.cycleTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                        <p>{t.cycleDesc}</p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-600 flex items-center justify-center text-xs font-bold">{isMl ? 'സ' : 'J'}</span>
                                <div>
                                    <p className="font-medium text-foreground">{t.joyful}</p>
                                    <p className="text-xs">{t.joyfulDays}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-red-500/20 text-red-600 flex items-center justify-center text-xs font-bold">{isMl ? 'ദു' : 'S'}</span>
                                <div>
                                    <p className="font-medium text-foreground">{t.sorrowful}</p>
                                    <p className="text-xs">{t.sorrowfulDays}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-6 h-6 rounded-full bg-slate-300/30 text-slate-600 dark:text-slate-300 flex items-center justify-center text-xs font-bold">{isMl ? 'മ' : 'G'}</span>
                                <div>
                                    <p className="font-medium text-foreground">{t.glorious}</p>
                                    <p className="text-xs">{t.gloriousDays}</p>
                                </div>
                            </div>
                            {includeLuminous && (
                                <div className="flex items-center gap-3">
                                    <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold">{isMl ? 'പ്ര' : 'L'}</span>
                                    <div>
                                        <p className="font-medium text-foreground">{t.luminous}</p>
                                        <p className="text-xs">{t.luminousDays}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{t.howToTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground space-y-3">
                        <ol className="list-decimal list-inside space-y-2 ml-2">
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `<strong>നൊവേന പ്രാരംഭ പ്രാർത്ഥന</strong>യോടെ തുടങ്ങുക` : `Start with the <strong>Novena Opening Prayer</strong>` }} />
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `<strong>കുരിശടയാളവും</strong>, <strong>വിശ്വാസപ്രമാണവും</strong> ചൊല്ലുക` : `Pray the <strong>Sign of the Cross</strong> and <strong>Apostles' Creed</strong>` }} />
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `<strong>സ്വർഗ്ഗസ്ഥനായ പിതാവേ</strong>, 3 <strong>നന്മ നിറഞ്ഞ മറിയമേ</strong>, <strong>ത്രിത്വസ്തുതി</strong> എന്നിവ ചൊല്ലുക` : `Pray the <strong>Our Father</strong>, 3 <strong>Hail Marys</strong>, and <strong>Glory Be</strong>` }} />
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `ഓരോ രഹസ്യത്തിലും: രഹസ്യം ധ്യാനിക്കുക, <strong>സ്വർഗ്ഗസ്ഥനായ പിതാവേ</strong>, 10 <strong>നന്മ നിറഞ്ഞ മറിയമേ</strong>, <strong>ത്രിത്വസ്തുതി</strong> എന്നിവ ചൊല്ലുക` : `For each decade: announce the mystery, pray <strong>Our Father</strong>, 10 <strong>Hail Marys</strong>, and <strong>Glory Be</strong>` }} />
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `5 രഹസ്യങ്ങൾക്ക് ശേഷം, <strong>പരിശുദ്ധ രാജ്ഞി</strong> ചൊല്ലുക` : `After all 5 decades, pray the <strong>Hail Holy Queen</strong>` }} />
                            <li dangerouslySetInnerHTML={{ __html: isMl ? `<strong>നൊവേന സമാപന പ്രാർത്ഥന</strong>യോടെ അവസാനിപ്പിക്കുക` : `End with the <strong>Novena Closing Prayer</strong>` }} />
                        </ol>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{t.originTitle}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-muted-foreground">
                        <p>{t.originText}</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
