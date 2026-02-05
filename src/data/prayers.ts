export type MysteryType = "Joyful" | "Sorrowful" | "Glorious" | "Luminous";

export interface Mystery {
    name: string;
    decades: Decade[];
}

export interface Decade {
    name: string;
    fruit: string;
    prayer: string;
    verse: string;
    reference: string;
}

export interface MysteryPrayers {
    opening: {
        petition: string;
        thanksgiving: string;
    };
    closing: {
        petition: string;
        thanksgiving: string;
    };
}

export interface NovenaPrayers {
    mysteryPrayers: Record<MysteryType, MysteryPrayers>;
    mysteries: Record<MysteryType, Mystery>;
}

// Common Catholic Prayers
export interface CommonPrayer {
    id: string;
    name: string;
    text: string;
}

export const COMMON_PRAYERS: CommonPrayer[] = [
    {
        id: 'sign-of-cross',
        name: 'Sign of the Cross',
        text: `In the name of the Father, and of the Son, and of the Holy Spirit. Amen.`
    },
    {
        id: 'apostles-creed',
        name: "Apostles' Creed",
        text: `I believe in God, the Father Almighty, Creator of heaven and earth; and in Jesus Christ, His only Son, our Lord; who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father Almighty; from there He will come to judge the living and the dead.

I believe in the Holy Spirit, the Holy Catholic Church, the communion of Saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.`
    },
    {
        id: 'our-father',
        name: 'Our Father',
        text: `Our Father, who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.`
    },
    {
        id: 'hail-mary',
        name: 'Hail Mary',
        text: `Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.`
    },
    {
        id: 'glory-be',
        name: 'Glory Be',
        text: `Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen.`
    },
    {
        id: 'fatima-prayer',
        name: 'O My Jesus (Fatima Prayer)',
        text: `O my Jesus, forgive us our sins, save us from the fires of hell, and lead all souls to Heaven, especially those in most need of Thy mercy. Amen.`
    },
    {
        id: 'hail-holy-queen',
        name: 'Hail Holy Queen',
        text: `Hail, holy Queen, mother of mercy, our life, our sweetness, and our hope. To you we cry, poor banished children of Eve; to you we send up our sighs, mourning and weeping in this valley of tears.

Turn, then, most gracious advocate, your eyes of mercy toward us; and after this, our exile, show unto us the blessed fruit of your womb, Jesus. O clement, O loving, O sweet Virgin Mary.

Pray for us, O holy Mother of God.
That we may be made worthy of the promises of Christ.`
    },
    {
        id: 'rosary-prayer',
        name: 'Prayer After the Rosary',
        text: `O God, whose Only Begotten Son, by His Life, Death, and Resurrection, has purchased for us the rewards of eternal life, grant, we beseech thee, that while meditating on these mysteries of the most holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ our Lord. Amen.`
    }
];

export const NOVENA_DATA: NovenaPrayers = {
    mysteryPrayers: {
        Joyful: {
            opening: {
                petition: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I humbly kneel to offer thee a Crown of Roses, snow white buds to remind thee of thy joys, each bud recalling to thee a holy mystery, each ten bound together with my petition for a particular grace. O Holy Queen, dispenser of God's graces, and Mother of all who invoke thee, thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my petition; from thy bounty thou wilt give me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I gratefully kneel to offer thee a Crown of Roses, snow white buds to remind thee of thy joys, each bud recalling to thee a holy mystery; each ten bound together with my petition for a particular grace. O Holy Queen, Dispenser of God's graces, and Mother of all who invoke thee! Thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my thanksgiving; from thy bounty thou hast given me the favor I so earnestly and trustingly sought. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            },
            closing: {
                petition: `Sweet Mother Mary, I offer thee this spiritual communion to bind my bouquets in a wreath to place upon thy brow. O my Mother! Look with favor upon my gift, and in thy love obtain for me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Sweet Mother Mary, I offer thee this Spiritual Communion to bind my bouquets in a wreath to place upon thy brow in thanksgiving for the favor which thou in thy love hast obtained for me. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            }
        },
        Sorrowful: {
            opening: {
                petition: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I humbly kneel to offer thee a Crown of Roses, blood red roses to remind thee of the passion of thy divine Son, with Whom thou didst so fully partake of its bitterness, each rose recalling to thee a holy mystery, each ten bound together with my petition for a particular grace. O Holy Queen, dispenser of God's graces, and Mother of all who invoke thee, thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my petition; from thy bounty thou wilt give me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I gratefully kneel to offer thee a Crown of Roses, blood red roses to remind thee of the passion of thy divine Son, with Whom thou didst so fully partake of its bitterness, each rose recalling to thee a holy mystery; each ten bound together with my petition for a particular grace. O Holy Queen, Dispenser of God's graces, and Mother of all who invoke thee! Thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my thanksgiving; from thy bounty thou hast given me the favor I so earnestly and trustingly sought. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            },
            closing: {
                petition: `Sweet Mother Mary, I offer thee this spiritual communion to bind my bouquets in a wreath to place upon thy brow. O my Mother! Look with favor upon my gift, and in thy love obtain for me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Sweet Mother Mary, I offer thee this Spiritual Communion to bind my bouquets in a wreath to place upon thy brow in thanksgiving for the favor which thou in thy love hast obtained for me. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            }
        },
        Glorious: {
            opening: {
                petition: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I humbly kneel to offer thee a Crown of Roses, full-blown white roses, tinged with the red of the passion, to remind thee of thy glories, fruits of the sufferings of thy Son and thee, each rose recalling to thee a holy mystery, each ten bound together with my petition for a particular grace. O Holy Queen, dispenser of God's graces, and Mother of all who invoke thee, thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my petition; from thy bounty thou wilt give me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I gratefully kneel to offer thee a Crown of Roses, full-blown white roses, tinged with the red of the passion, to remind thee of thy glories, fruits of the sufferings of thy Son and thee, each rose recalling to thee a holy mystery; each ten bound together with my petition for a particular grace. O Holy Queen, Dispenser of God's graces, and Mother of all who invoke thee! Thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my thanksgiving; from thy bounty thou hast given me the favor I so earnestly and trustingly sought. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            },
            closing: {
                petition: `Sweet Mother Mary, I offer thee this spiritual communion to bind my bouquets in a wreath to place upon thy brow. O my Mother! Look with favor upon my gift, and in thy love obtain for me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Sweet Mother Mary, I offer thee this Spiritual Communion to bind my bouquets in a wreath to place upon thy brow in thanksgiving for the favor which thou in thy love hast obtained for me. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            }
        },
        Luminous: {
            opening: {
                petition: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I humbly kneel to offer thee a Crown of Roses, snow white buds to remind thee of thy joys, each bud recalling to thee a holy mystery, each ten bound together with my petition for a particular grace. O Holy Queen, dispenser of God's graces, and Mother of all who invoke thee, thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my petition; from thy bounty thou wilt give me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Hail, Queen of the Most Holy Rosary, my Mother Mary, hail! At thy feet I gratefully kneel to offer thee a Crown of Roses, snow white buds to remind thee of thy joys, each bud recalling to thee a holy mystery; each ten bound together with my petition for a particular grace. O Holy Queen, Dispenser of God's graces, and Mother of all who invoke thee! Thou canst not look upon my gift and fail to see its binding. As thou receivest my gift, so wilt thou receive my thanksgiving; from thy bounty thou hast given me the favor I so earnestly and trustingly sought. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            },
            closing: {
                petition: `Sweet Mother Mary, I offer thee this spiritual communion to bind my bouquets in a wreath to place upon thy brow. O my Mother! Look with favor upon my gift, and in thy love obtain for me the favor I so earnestly and trustingly seek. I despair of nothing that I ask of thee. Show thyself my Mother!`,
                thanksgiving: `Sweet Mother Mary, I offer thee this Spiritual Communion to bind my bouquets in a wreath to place upon thy brow in thanksgiving for the favor which thou in thy love hast obtained for me. I despaired not of what I asked of thee, and thou hast truly shown thyself my Mother.`
            }
        }
    },
    mysteries: {
        Joyful: {
            name: "Joyful",
            decades: [
                {
                    name: "The Annunciation",
                    fruit: "Humility",
                    prayer: "I bind these snow-white buds with a petition for the virtue of humility and humbly lay this bouquet at thy feet.",
                    verse: "And when the angel had come to her, he said, \"Hail, full of grace, the Lord is with thee. Blessed art thou among women.\"",
                    reference: "Luke 1:28"
                },
                {
                    name: "The Visitation",
                    fruit: "Charity",
                    prayer: "I bind these snow-white buds with a petition for the virtue of charity and humbly lay this bouquet at thy feet.",
                    verse: "Elizabeth was filled with the Holy Spirit and cried out in a loud voice: \"Blest are you among women and blest is the fruit of your womb.\"",
                    reference: "Luke 1:41-42"
                },
                {
                    name: "The Nativity",
                    fruit: "Detachment",
                    prayer: "I bind these snow-white buds with a petition for the virtue of detachment from the world and humbly lay this bouquet at thy feet.",
                    verse: "She gave birth to her first-born Son and wrapped Him in swaddling clothes and laid Him in a manger, because there was no room for them in the place where travelers lodged.",
                    reference: "Luke 2:7"
                },
                {
                    name: "The Presentation",
                    fruit: "Purity",
                    prayer: "I bind these snow-white buds with a petition for the virtue of purity and humbly lay this bouquet at thy feet.",
                    verse: "When the day came to purify them according to the law of Moses, the couple brought Him up to Jerusalem so that He could be presented to the Lord.",
                    reference: "Luke 2:22-23"
                },
                {
                    name: "The Finding in the Temple",
                    fruit: "Obedience",
                    prayer: "I bind these snow-white buds with a petition for the virtue of obedience to the will of God and humbly lay this bouquet at thy feet.",
                    verse: "On the third day they came upon Him in the temple sitting in the midst of the teachers, listening to them and asking them questions.",
                    reference: "Luke 2:46"
                }
            ]
        },
        Sorrowful: {
            name: "Sorrowful",
            decades: [
                {
                    name: "The Agony in the Garden",
                    fruit: "Sorrow for Sin",
                    prayer: "I bind these blood red roses with a petition for the virtue of sorrow for sin and humbly lay this bouquet at thy feet.",
                    verse: "In His anguish He prayed with all the greater intensity, and His sweat became like drops of blood falling to the ground. Then He rose from prayer and came to His disciples, only to find them asleep, exhausted with grief.",
                    reference: "Luke 22:44-45"
                },
                {
                    name: "The Scourging at the Pillar",
                    fruit: "Purity",
                    prayer: "I bind these blood red roses with a petition for the virtue of purity and humbly lay this bouquet at thy feet.",
                    verse: "Pilate's next move was to take Jesus and have Him scourged.",
                    reference: "John 19:1"
                },
                {
                    name: "The Crowning with Thorns",
                    fruit: "Courage",
                    prayer: "I bind these blood red roses with a petition for the virtue of courage and humbly lay this bouquet at thy feet.",
                    verse: "They stripped off His clothes and wrapped Him in a scarlet military cloak. Weaving a crown out of thorns they fixed it on His head, and stuck a reed in His right hand…",
                    reference: "Matthew 27:28-29"
                },
                {
                    name: "The Carrying of the Cross",
                    fruit: "Patience",
                    prayer: "I bind these blood red roses with a petition for the virtue of patience in adversity and humbly lay this bouquet at thy feet.",
                    verse: "Carrying the cross by Himself, He went out to what is called the Place of the Skull (in Hebrew, Golgotha).",
                    reference: "John 19:17"
                },
                {
                    name: "The Crucifixion",
                    fruit: "Perseverance",
                    prayer: "I bind these blood red roses with a petition for the virtue of perseverance and humbly lay this bouquet at thy feet.",
                    verse: "Jesus uttered a loud cry and said, \"Father, into Your hands I commend My spirit.\" After He said this, He expired.",
                    reference: "Luke 23:46"
                }
            ]
        },
        Glorious: {
            name: "Glorious",
            decades: [
                {
                    name: "The Resurrection",
                    fruit: "Faith",
                    prayer: "I bind these full-blown roses with a petition for the virtue of faith and humbly lay this bouquet at thy feet.",
                    verse: "You need not be amazed! You are looking for Jesus of Nazareth, the one who was crucified. He has been raised up; He is not here. See the place where they laid Him.",
                    reference: "Mark 16:6"
                },
                {
                    name: "The Ascension",
                    fruit: "Hope",
                    prayer: "I bind these full-blown roses with a petition for the virtue of hope and humbly lay this bouquet at thy feet.",
                    verse: "Then, after speaking to them, the Lord Jesus was taken up into Heaven and took His seat at God's right hand.",
                    reference: "Mark 16:19"
                },
                {
                    name: "The Descent of the Holy Spirit",
                    fruit: "Love of God",
                    prayer: "I bind these full-blown roses with a petition for the virtue of love of God and humbly lay this bouquet at thy feet.",
                    verse: "All were filled with the Holy Spirit. They began to express themselves in foreign tongues and make bold proclamation as the Spirit prompted them.",
                    reference: "Acts 2:4"
                },
                {
                    name: "The Assumption",
                    fruit: "Grace of a Happy Death",
                    prayer: "I bind these full-blown roses with a petition for the grace of a happy death and humbly lay this bouquet at thy feet.",
                    verse: "You are the glory of Jerusalem… you are the splendid boast of our people… God is pleased with what you have wrought. May you be blessed by the Lord Almighty forever and ever.",
                    reference: "Judith 15:9-10"
                },
                {
                    name: "The Coronation",
                    fruit: "Trust in Mary's Intercession",
                    prayer: "I bind these full-blown roses with a petition for trust in thy intercession and humbly lay this bouquet at thy feet.",
                    verse: "A great sign appeared in the sky, a woman clothed with the sun, with the moon under her feet, and on her head a crown of twelve stars.",
                    reference: "Revelation 12:1"
                }
            ]
        },
        Luminous: {
            name: "Luminous",
            decades: [
                {
                    name: "The Baptism of Jesus in the Jordan",
                    fruit: "Openness to the Holy Spirit",
                    prayer: "I bind these radiant roses with a petition for openness to the Holy Spirit and humbly lay this bouquet at thy feet.",
                    verse: "And when Jesus was baptized, the heavens were opened and He saw the Spirit of God descending like a dove, and alighting on Him, and lo, a voice from heaven, saying \"This is My beloved Son, with whom I am well pleased.\"",
                    reference: "Matthew 3:16-17"
                },
                {
                    name: "The Wedding Feast at Cana",
                    fruit: "To Jesus through Mary",
                    prayer: "I bind these radiant roses with a petition to come to Jesus through thee and humbly lay this bouquet at thy feet.",
                    verse: "His mother said to the servants, \"Do whatever He tells you.\" Jesus said to them, \"Fill the jars with water.\" And they filled them up to the brim.",
                    reference: "John 2:5-7"
                },
                {
                    name: "The Proclamation of the Kingdom of God",
                    fruit: "Repentance and Trust in God",
                    prayer: "I bind these radiant roses with a petition for repentance and trust in God and humbly lay this bouquet at thy feet.",
                    verse: "And preach as you go, saying, 'The kingdom of heaven is at hand.' Heal the sick, raise the dead, cleanse lepers, cast out demons.",
                    reference: "Matthew 10:7-8"
                },
                {
                    name: "The Transfiguration",
                    fruit: "Desire for Holiness",
                    prayer: "I bind these radiant roses with a petition for the desire for holiness and humbly lay this bouquet at thy feet.",
                    verse: "And as He was praying, the appearance of His countenance was altered and His raiment became dazzling white. And a voice came out of the cloud saying, \"This is My Son, My chosen; listen to Him!\"",
                    reference: "Luke 9:29, 35"
                },
                {
                    name: "The Institution of the Eucharist",
                    fruit: "Eucharistic Adoration",
                    prayer: "I bind these radiant roses with a petition for deeper devotion to the Blessed Sacrament and humbly lay this bouquet at thy feet.",
                    verse: "And He took bread, and when He had given thanks He broke it and gave it to them, saying, \"This is My body which is given for you.\"",
                    reference: "Luke 22:19"
                }
            ]
        }
    }
};
