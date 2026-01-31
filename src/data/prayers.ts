export type MysteryType = "Joyful" | "Sorrowful" | "Glorious" | "Luminous";

export interface Mystery {
    name: MysteryType;
    decades: Decade[];
}

export interface Decade {
    name: string;
    fruit: string;
    prayer: string; // The specific intention/prayer for this mystery
}

export interface NovenaPrayers {
    opening: {
        petition: string;
        thanksgiving: string;
    };
    closing: {
        petition: string;
        thanksgiving: string;
    };
    mysteries: Record<MysteryType, Mystery>;
}

export const NOVENA_DATA: NovenaPrayers = {
    opening: {
        petition: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I humbly kneel to offer thee a Crown of Roses, snow white buds to remind thee of thy joys, each bud recalling to thee a holy mystery, each 10 bound together with my petition for a particular grace. O Holy Queen, dispenser of God’s graces, and Mother of all who invoke thee, thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my petition; from thy bounty thou wilt give me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
        thanksgiving: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I gratefully kneel to offer thee a Crown of Roses, snow white buds to remind thee of thy joys, each bud recalling to thee a holy mystery; each ten bound together with my petition for a particular grace. O Holy Queen, Dispenser of God’s graces. and Mother of all who invoke thee! thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my thanksgiving; from thy bounty thou hast given me the favor I so earnestly and trustingly sought. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
    },
    closing: {
        petition: `Sweet Mother Mary, I offer thee this spiritual communion to bind my bouquets in a wreath to place upon thy brow. O my Mother! Look with favor upon my gift, and in thy love obtain for me my request.`,
        thanksgiving: `Sweet Mother Mary, I offer thee this Spiritual Communion to bind my bouquets in a wreath to place upon thy brow in thanksgiving for my request which thou in thy love hast obtained for me.`
    },
    mysteries: {
        Joyful: {
            name: "Joyful",
            decades: [
                { name: "The Annunciation", fruit: "Humility", prayer: "I bind these snow-white buds with a petition for the virtue of humility and humbly lay this bouquet at thy feet." },
                { name: "The Visitation", fruit: "Charity", prayer: "I bind these snow-white buds with a petition for the virtue of charity and humbly lay this bouquet at thy feet." },
                { name: "The Nativity", fruit: "Detachment", prayer: "I bind these snow-white buds with a petition for the virtue of detachment from the world and humbly lay this bouquet at thy feet." },
                { name: "The Presentation", fruit: "Purity", prayer: "I bind these snow-white buds with a petition for the virtue of purity and humbly lay this bouquet at thy feet." },
                { name: "The Finding in the Temple", fruit: "Obedience", prayer: "I bind these snow-white buds with a petition for the virtue of obedience to the will of God and humbly lay this bouquet at thy feet." }
            ]
        },
        Sorrowful: {
            name: "Sorrowful",
            decades: [
                { name: "The Agony in the Garden", fruit: "Resignation", prayer: "I bind these blood red roses with a petition for the virtue of resignation to the will of God and humbly lay this bouquet at thy feet." },
                { name: "The Scourging at the Pillar", fruit: "Mortification", prayer: "I bind these blood red roses with a petition for the virtue of mortification and humbly lay this bouquet at thy feet." },
                { name: "The Crowning with Thorns", fruit: "Humility", prayer: "I bind these blood red roses with a petition for the virtue of humility and humbly lay this bouquet at thy feet." },
                { name: "The Carrying of the Cross", fruit: "Patience", prayer: "I bind these blood red roses with a petition for the virtue of patience in adversity and humbly lay this bouquet at thy feet." },
                { name: "The Crucifixion", fruit: "Love of Enemies", prayer: "I bind these blood red roses with a petition for the virtue of love of our enemies and humbly lay this bouquet at thy feet." }
            ]
        },
        Glorious: {
            name: "Glorious",
            decades: [
                { name: "The Resurrection", fruit: "Faith", prayer: "I bind these full-blown roses with a petition for the virtue of faith and humbly lay this bouquet at thy feet." },
                { name: "The Ascension", fruit: "Hope", prayer: "I bind these full-blown roses with a petition for the virtue of hope and humbly lay this bouquet at thy feet." },
                { name: "The Descent of the Holy Spirit", fruit: "Charity", prayer: "I bind these full-blown roses with a petition for the virtue of charity and humbly lay this bouquet at thy feet." },
                { name: "The Assumption", fruit: "Union with Christ", prayer: "I bind these full-blown roses with a petition for the virtue of union with Christ and humbly lay this bouquet at thy feet." },
                { name: "The Coronation", fruit: "Union with Mary", prayer: "I bind these full-blown roses with a petition for the virtue of union with thee and humbly lay this bouquet at thy feet." }
            ]
        },
        Luminous: { // Placeholder if enabled
            name: "Luminous",
            decades: []
        }
    }
};
