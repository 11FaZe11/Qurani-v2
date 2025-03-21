export interface Hadith {
  id: number
  arabic: string
  english: string
  source: string
  narrator: string
}

export const weeklyHadiths: Record<string, Hadith[]> = {
  sunday: [
    {
      id: 1,
      arabic:
        "إنما الأعمال بالنيات، وإنما لكل امرئ ما نوى، فمن كانت هجرته إلى الله ورسوله فهجرته إلى الله ورسوله، ومن كانت هجرته لدنيا يصيبها أو امرأة ينكحها فهجرته إلى ما هاجر إليه.",
      english:
        "Actions are judged by intentions, so each man will have what he intended. Thus, he whose migration was to Allah and His Messenger, his migration is to Allah and His Messenger; but he whose migration was for some worldly thing he might gain, or for a wife he might marry, his migration is to that for which he migrated.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Umar Ibn Al-Khattab",
    },
    {
      id: 2,
      arabic: "من سلك طريقا يلتمس فيه علما سهل الله له به طريقا إلى الجنة.",
      english: "Whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise.",
      source: "Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 3,
      arabic: "الدين النصيحة. قلنا: لمن؟ قال: لله ولكتابه ولرسوله ولأئمة المسلمين وعامتهم.",
      english:
        "The religion is sincerity. We said: To whom? He said: To Allah, His Book, His Messenger, the leaders of the Muslims, and their common folk.",
      source: "Sahih Muslim",
      narrator: "Tamim Al-Dari",
    },
    {
      id: 4,
      arabic: "لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه.",
      english: "None of you truly believes until he loves for his brother what he loves for himself.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Anas Ibn Malik",
    },
    {
      id: 5,
      arabic:
        "من كان يؤمن بالله واليوم الآخر فليقل خيرا أو ليصمت، ومن كان يؤمن بالله واليوم الآخر فليكرم جاره، ومن كان يؤمن بالله واليوم الآخر فليكرم ضيفه.",
      english:
        "Whoever believes in Allah and the Last Day, let him speak good or remain silent. Whoever believes in Allah and the Last Day, let him honor his neighbor. Whoever believes in Allah and the Last Day, let him honor his guest.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
  ],
  monday: [
    {
      id: 6,
      arabic: "من صام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه.",
      english: "Whoever fasts Ramadan out of faith and in the hope of reward, his previous sins will be forgiven.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 7,
      arabic: "من قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه.",
      english:
        "Whoever stands (in prayer) during the Night of Decree out of faith and in the hope of reward, his previous sins will be forgiven.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 8,
      arabic:
        "إن الله طيب لا يقبل إلا طيبا، وإن الله أمر المؤمنين بما أمر به المرسلين فقال: ﴿يَا أَيُّهَا الرُّسُلُ كُلُوا مِنَ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا﴾، وقال: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ﴾.",
      english:
        "Allah is Pure and accepts only what is pure. Allah has commanded the believers to do what He commanded the Messengers, saying: 'O Messengers, eat from the pure foods and work righteousness' and 'O you who believe, eat from the pure things which We have provided for you.'",
      source: "Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 9,
      arabic: "اتق الله حيثما كنت، وأتبع السيئة الحسنة تمحها، وخالق الناس بخلق حسن.",
      english:
        "Fear Allah wherever you are, follow a bad deed with a good deed to erase it, and treat people with good character.",
      source: "Jami' At-Tirmidhi",
      narrator: "Abu Dharr and Mu'adh Ibn Jabal",
    },
    {
      id: 10,
      arabic:
        "لا تدخلون الجنة حتى تؤمنوا، ولا تؤمنوا حتى تحابوا، أولا أدلكم على شيء إذا فعلتموه تحاببتم؟ أفشوا السلام بينكم.",
      english:
        "You will not enter Paradise until you believe, and you will not believe until you love one another. Shall I tell you about something which, if you do it, you will love one another? Spread the greeting of peace among yourselves.",
      source: "Sahih Muslim",
      narrator: "Abu Hurairah",
    },
  ],
  tuesday: [
    {
      id: 11,
      arabic:
        "من غسل يوم الجمعة واغتسل، ثم بكر وابتكر، ومشى ولم يركب، ودنا من الإمام، واستمع ولم يلغ، كان له بكل خطوة عمل سنة أجر صيامها وقيامها.",
      english:
        "Whoever performs ablution on Friday and does it well, then goes early to the mosque, walking not riding, and sits close to the Imam, and listens attentively without engaging in idle talk, will have the reward of a year of fasting and praying for every step he takes.",
      source: "Sunan Abu Dawud, Jami' At-Tirmidhi",
      narrator: "Aws Ibn Aws Ath-Thaqafi",
    },
    {
      id: 12,
      arabic:
        "من توضأ فأحسن الوضوء، ثم قال: أشهد أن لا إله إلا الله وحده لا شريك له، وأشهد أن محمدا عبده ورسوله، اللهم اجعلني من التوابين واجعلني من المتطهرين، فتحت له ثمانية أبواب الجنة، يدخل من أيها شاء.",
      english:
        "Whoever performs ablution and does it well, then says: 'I testify that there is no god but Allah alone with no partner, and I testify that Muhammad is His servant and Messenger. O Allah, make me among those who repent and make me among those who purify themselves,' the eight gates of Paradise will be opened for him, and he may enter through whichever one he wishes.",
      source: "Sunan At-Tirmidhi",
      narrator: "Umar Ibn Al-Khattab",
    },
    {
      id: 13,
      arabic: "إن في الجسد مضغة إذا صلحت صلح الجسد كله، وإذا فسدت فسد الجسد كله، ألا وهي القلب.",
      english:
        "Beware! There is a piece of flesh in the body, if it is sound, the whole body is sound, and if it is corrupt, the whole body is corrupt. Behold, it is the heart.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "An-Nu'man Ibn Bashir",
    },
    {
      id: 14,
      arabic: "ما من مسلم يغرس غرسا، أو يزرع زرعا، فيأكل منه طير أو إنسان أو بهيمة، إلا كان له به صدقة.",
      english:
        "If a Muslim plants a tree or sows a field and humans, beasts, or birds eat from it, it shall be counted as charity from him.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Anas Ibn Malik",
    },
    {
      id: 15,
      arabic: "من كان آخر كلامه لا إله إلا الله دخل الجنة.",
      english: "Whoever's last words are 'There is no god but Allah' will enter Paradise.",
      source: "Sunan Abu Dawud",
      narrator: "Mu'adh Ibn Jabal",
    },
  ],
  wednesday: [
    {
      id: 16,
      arabic: "من صلى البردين دخل الجنة.",
      english: "Whoever prays the two cool prayers (Fajr and Asr) will enter Paradise.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Musa Al-Ash'ari",
    },
    {
      id: 17,
      arabic:
        "سبعة يظلهم الله في ظله يوم لا ظل إلا ظله: إمام عادل، وشاب نشأ في عبادة الله، ورجل قلبه معلق بالمساجد، ورجلان تحابا في الله اجتمعا عليه وتفرقا عليه، ورجل دعته امرأة ذات منصب وجمال فقال إني أخاف الله، ورجل تصدق بصدقة فأخفاها حتى لا تعلم شماله ما تنفق يمينه، ورجل ذكر الله خاليا ففاضت عيناه.",
      english:
        "Seven people will be shaded by Allah under His shade on the day when there will be no shade except His: a just ruler; a young person who grew up worshipping Allah; a person whose heart is attached to the mosque; two people who love each other for Allah's sake, meeting and parting for this reason; a man who is invited by a woman of high status and beauty but declines, saying, 'I fear Allah'; a person who gives charity so secretly that his left hand doesn't know what his right hand gives; and a person who remembers Allah in solitude and his eyes overflow with tears.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 18,
      arabic:
        "من قرأ حرفا من كتاب الله فله به حسنة، والحسنة بعشر أمثالها، لا أقول الم حرف، ولكن ألف حرف ولام حرف وميم حرف.",
      english:
        "Whoever recites a letter from the Book of Allah will receive a good deed, and each good deed is multiplied by ten. I do not say that Alif-Lam-Mim is one letter, but Alif is a letter, Lam is a letter, and Mim is a letter.",
      source: "Jami' At-Tirmidhi",
      narrator: "Abdullah Ibn Mas'ud",
    },
    {
      id: 19,
      arabic:
        "إن الله كتب الإحسان على كل شيء، فإذا قتلتم فأحسنوا القتلة، وإذا ذبحتم فأحسنوا الذبحة، وليحد أحدكم شفرته، وليرح ذبيحته.",
      english:
        "Allah has prescribed excellence in all things. So if you kill, kill well; and if you slaughter, slaughter well. Let each one of you sharpen his blade and let him spare suffering to the animal he slaughters.",
      source: "Sahih Muslim",
      narrator: "Shaddad Ibn Aws",
    },
    {
      id: 20,
      arabic:
        "من سأل الله الجنة ثلاث مرات، قالت الجنة: اللهم أدخله الجنة، ومن استجار من النار ثلاث مرات، قالت النار: اللهم أجره من النار.",
      english:
        "Whoever asks Allah for Paradise three times, Paradise says: 'O Allah, admit him to Paradise.' And whoever seeks protection from the Fire three times, the Fire says: 'O Allah, protect him from the Fire.'",
      source: "Jami' At-Tirmidhi, Sunan Ibn Majah",
      narrator: "Anas Ibn Malik",
    },
  ],
  thursday: [
    {
      id: 21,
      arabic: "من قال سبحان الله وبحمده في يوم مائة مرة، حطت خطاياه وإن كانت مثل زبد البحر.",
      english:
        "Whoever says 'Glory be to Allah and His is the praise' one hundred times a day, his sins will be wiped away, even if they are like the foam of the sea.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 22,
      arabic:
        "من قال لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير، في يوم مائة مرة، كانت له عدل عشر رقاب، وكتبت له مائة حسنة، ومحيت عنه مائة سيئة، وكانت له حرزا من الشيطان يومه ذلك حتى يمسي، ولم يأت أحد بأفضل مما جاء به إلا رجل عمل أكثر منه.",
      english:
        "Whoever says 'There is no god but Allah alone with no partner; to Him belongs the dominion and praise, and He has power over all things' one hundred times a day, it will be equivalent to freeing ten slaves, one hundred good deeds will be written for him, one hundred sins will be erased from him, and it will be a shield for him from Satan on that day until evening, and no one will come with anything better than what he has brought except someone who has done more than that.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 23,
      arabic:
        "كلمتان خفيفتان على اللسان، ثقيلتان في الميزان، حبيبتان إلى الرحمن: سبحان الله وبحمده، سبحان الله العظيم.",
      english:
        "There are two phrases that are light on the tongue, heavy on the scales, and beloved to the Most Merciful: 'Glory be to Allah and His is the praise' and 'Glory be to Allah, the Magnificent.'",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 24,
      arabic: "من صلى علي واحدة صلى الله عليه بها عشرا.",
      english: "Whoever sends one blessing upon me, Allah will send ten blessings upon him.",
      source: "Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 25,
      arabic:
        "الطهور شطر الإيمان، والحمد لله تملأ الميزان، وسبحان الله والحمد لله تملآن - أو تملأ - ما بين السماء والأرض.",
      english:
        "Purification is half of faith. 'Praise be to Allah' fills the scales, and 'Glory be to Allah and praise be to Allah' fill—or fills—what is between heaven and earth.",
      source: "Sahih Muslim",
      narrator: "Abu Malik Al-Ash'ari",
    },
  ],
  friday: [
    {
      id: 26,
      arabic:
        "إن من أفضل أيامكم يوم الجمعة، فيه خلق آدم، وفيه قبض، وفيه النفخة، وفيه الصعقة، فأكثروا علي من الصلاة فيه، فإن صلاتكم معروضة علي.",
      english:
        "The best of your days is Friday: on it Adam was created, on it he died, on it the Trumpet will be blown, and on it all of creation will swoon. So send abundant blessings upon me on that day, for your blessings will be presented to me.",
      source: "Sunan Abu Dawud",
      narrator: "Aws Ibn Aws",
    },
    {
      id: 27,
      arabic: "من قرأ سورة الكهف في يوم الجمعة، أضاء له من النور ما بين الجمعتين.",
      english: "Whoever recites Surah Al-Kahf on Friday, a light will shine for him between the two Fridays.",
      source: "Al-Bayhaqi",
      narrator: "Abu Sa'id Al-Khudri",
    },
    {
      id: 28,
      arabic: "إن في الجمعة لساعة لا يوافقها عبد مسلم وهو قائم يصلي يسأل الله شيئا إلا أعطاه إياه.",
      english:
        "There is an hour on Friday when, if a Muslim servant stands in prayer and asks Allah for something, He will give it to him.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 29,
      arabic:
        "من اغتسل يوم الجمعة غسل الجنابة ثم راح، فكأنما قرب بدنة، ومن راح في الساعة الثانية، فكأنما قرب بقرة، ومن راح في الساعة الثالثة، فكأنما قرب كبشا أقرن، ومن راح في الساعة الرابعة، فكأنما قرب دجاجة، ومن راح في الساعة الخامسة، فكأنما قرب بيضة، فإذا خرج الإمام حضرت الملائكة يستمعون الذكر.",
      english:
        "Whoever takes a bath on Friday like the bath for ceremonial purity, and then goes to the mosque in the first hour, it is as if he has sacrificed a camel. Whoever goes in the second hour, it is as if he has sacrificed a cow. Whoever goes in the third hour, it is as if he has sacrificed a horned ram. Whoever goes in the fourth hour, it is as if he has sacrificed a hen. Whoever goes in the fifth hour, it is as if he has offered an egg. When the Imam comes out, the angels come to listen to the sermon.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 30,
      arabic:
        "خير يوم طلعت عليه الشمس يوم الجمعة، فيه خلق آدم، وفيه أدخل الجنة، وفيه أخرج منها، ولا تقوم الساعة إلا في يوم الجمعة.",
      english:
        "The best day on which the sun has risen is Friday: on it Adam was created, on it he was admitted to Paradise, on it he was expelled from it, and the Hour will not be established except on Friday.",
      source: "Sahih Muslim",
      narrator: "Abu Hurairah",
    },
  ],
  saturday: [
    {
      id: 31,
      arabic: "من صام رمضان ثم أتبعه ستا من شوال كان كصيام الدهر.",
      english:
        "Whoever fasts Ramadan and then follows it with six days of Shawwal, it is as if he has fasted the entire year.",
      source: "Sahih Muslim",
      narrator: "Abu Ayyub Al-Ansari",
    },
    {
      id: 32,
      arabic: "من صام يوما في سبيل الله باعد الله وجهه عن النار سبعين خريفا.",
      english:
        "Whoever fasts a day for the sake of Allah, Allah will distance his face from the Fire by seventy years.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Sa'id Al-Khudri",
    },
    {
      id: 33,
      arabic: "الصيام جنة، فإذا كان يوم صوم أحدكم فلا يرفث ولا يصخب، فإن سابه أحد أو قاتله فليقل: إني صائم.",
      english:
        "Fasting is a shield. When any one of you is fasting, he should neither indulge in obscene language nor raise his voice. If someone insults him or tries to fight with him, he should say: 'I am fasting.'",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 34,
      arabic: "من قام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه.",
      english:
        "Whoever stands (in prayer) during Ramadan out of faith and in the hope of reward, his previous sins will be forgiven.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
    {
      id: 35,
      arabic: "إذا جاء رمضان فتحت أبواب الجنة، وغلقت أبواب النار، وصفدت الشياطين.",
      english:
        "When Ramadan begins, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained.",
      source: "Sahih Al-Bukhari, Sahih Muslim",
      narrator: "Abu Hurairah",
    },
  ],
}

