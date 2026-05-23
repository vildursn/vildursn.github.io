export const translations: Record<string, Record<string, string>> = {
  en: {
    'nav.about': 'about',
    'nav.research': 'research',
    'nav.outreach': 'outreach',
    'nav.art': 'art',
    'nav.greeting': "Hi, I'm",
    'nav.happy': "I'm happy you're here!",

    'bio.p1': 'Hi, I\'m Vilde — <span id="rotating-article">a</span> <span id="rotating-word">researcher</span> based in Norway. I build AI that I hope makes the world a little better, give talks to make it feel less scary, and make art whenever I can.',
    'bio.p2': 'I\'m drawn to making things. Professionally that\'s meant autonomous drones with <a class="tip" data-tip="A student group making autonomous drones for the fun of it" href="https://www.ascendntnu.no" target="_blank" rel="noopener noreferrer">Ascend NTNU</a>, satellite oil spill detection at <a class="tip" data-tip="Kongsberg Satellite Services — earth observation through satellites" href="https://www.ksat.no" target="_blank" rel="noopener noreferrer">KSAT</a>, and now AI for healthcare at <a class="tip" data-tip="Norwegian health tech, used by clinicians every day" href="https://www.dips.com" target="_blank" rel="noopener noreferrer">DIPS</a>. Outside of work I apply the same energy to whatever hobby I\'m currently obsessed with — mountain running, ceramics, salsa, crossfit, skiing, volleyball. The list keeps growing.',
    'bio.p3': 'My research is in <span class="tip" data-tip="Explainable AI — making sense of what models actually do">XAI</span>, robotics, and machine learning. I have a degree in cybernetics and robotics and a PhD in Explainable AI from NTNU — because "what is this model actually doing?" felt like a question worth spending years on.',

    'research.title': 'Research',
    'research.publications': 'Publications',
    'research.pubs-empty': 'Publications coming soon.',
    'research.scholar-prefix': 'See the full list on',
    'research.projects': 'Research Projects',

    'outreach.title': 'Outreach',
    'outreach.talks': 'Talks',
    'outreach.cta': "I enjoy giving talks on AI research and related topics. If you'd like me to speak at your event or conference, feel free to reach out.",
    'outreach.contact': 'Get in touch →',
    'outreach.talks-empty': 'Talks coming soon.',
    'outreach.slides': 'Slides',
    'outreach.recording': 'Recording',

    'art.title': 'Art',
    'art.intro': 'Things made for fun.',

    'slideshow.empty': 'Images coming soon.',
    'slideshow.prev': 'Previous artwork',
    'slideshow.next': 'Next artwork',
  },
  no: {
    'nav.about': 'om meg',
    'nav.research': 'forskning',
    'nav.outreach': 'formidling',
    'nav.art': 'kunst',
    'nav.greeting': 'Hei, jeg er',
    'nav.happy': 'Så hyggelig at du er her!',

    'bio.p1': 'Hei, jeg er Vilde — <span id="rotating-article">en</span> <span id="rotating-word">forsker</span> i Norge. Jeg bygger AI som jeg håper gjør verden litt bedre, holder foredrag for å gjøre den litt mindre skummel, og lager kunst når jeg kan.',
    'bio.p2': 'Jeg blir dratt mot å lage ting. Profesjonelt har det betydd autonome droner med <a class="tip" data-tip="En studentgruppe som lager autonome droner for moro skyld" href="https://www.ascendntnu.no" target="_blank" rel="noopener noreferrer">Ascend NTNU</a>, satellittbasert oljesøl-deteksjon hos <a class="tip" data-tip="Kongsberg Satellite Services — jordobservasjon via satellitt" href="https://www.ksat.no" target="_blank" rel="noopener noreferrer">KSAT</a>, og nå AI for helsevesen hos <a class="tip" data-tip="Norsk helsetech, brukt av klinikere hver dag" href="https://www.dips.com" target="_blank" rel="noopener noreferrer">DIPS</a>. Utenom jobb bruker jeg den samme energien på hvilken hobby jeg enn er besatt av for øyeblikket — fjelløping, keramikk, salsa, crossfit, ski, volleyball. Listen vokser stadig.',
    'bio.p3': 'Forskningen min er innen <span class="tip" data-tip="Forklarbar AI — å forstå hva modeller faktisk gjør">XAI</span>, robotikk og maskinlæring. Jeg har en grad i kybernetikk og robotikk og en PhD i forklarbar AI fra NTNU — fordi «hva gjør denne modellen egentlig?» føltes som et spørsmål det var verdt å bruke år på.',

    'research.title': 'Forskning',
    'research.publications': 'Publikasjoner',
    'research.pubs-empty': 'Publikasjoner kommer snart.',
    'research.scholar-prefix': 'Se hele listen på',
    'research.projects': 'Forskningsprosjekter',

    'outreach.title': 'Formidling',
    'outreach.talks': 'Foredrag',
    'outreach.cta': 'Jeg holder gjerne foredrag om AI-forskning og relaterte temaer. Ta kontakt hvis du vil ha meg som foredragsholder på ditt arrangement.',
    'outreach.contact': 'Ta kontakt →',
    'outreach.talks-empty': 'Foredrag kommer snart.',
    'outreach.slides': 'Lysark',
    'outreach.recording': 'Opptak',

    'art.title': 'Kunst',
    'art.intro': 'Laget for moro skyld.',

    'slideshow.empty': 'Bilder kommer snart.',
    'slideshow.prev': 'Forrige kunstverk',
    'slideshow.next': 'Neste kunstverk',
  },
};

export const wordLists: Record<string, { text: string; article: string }[]> = {
  en: [
    { text: 'AI developer', article: 'an' },
    { text: 'AI researcher', article: 'an' },
    { text: 'hobby artist', article: 'a' },
    { text: 'engineer', article: 'an' },
  ],
  no: [
    { text: 'AI-utvikler', article: 'en' },
    { text: 'AI-forsker', article: 'en' },
    { text: 'hobbykunstner', article: 'en' },
    { text: 'ingeniør', article: 'en' },
  ],
};
