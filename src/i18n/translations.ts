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
    'outreach.cta.p1': 'I enjoy giving talks about AI, from introductions for mixed audiences to more technical presentations on explainability (XAI). I care about making AI understandable and accessible, whether the audience is young or old, technical or not.',
    'outreach.cta.p2': 'I tailor each talk to the audience and context, and try to bring in examples that are relevant and meaningful to the people in the room.',
    'outreach.cta.p3': "If you'd like me to speak at your event or conference, feel free to reach out.",
    'outreach.contact': 'Get in touch →',
    'outreach.talks': 'Talks',
    'outreach.talks-empty': 'Talks coming soon.',
    'outreach.slides': 'Slides',
    'outreach.recording': 'Recording',
    'outreach.podcasts': 'Podcasts',

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
    'nav.greeting': 'Hei, jeg heter',
    'nav.happy': 'Så hyggelig at du er her!',

    'bio.p1': 'Jeg heter Vilde og jeg er <span id="rotating-article">en</span> <span id="rotating-word">forsker</span> som befinner meg i Tromsø, Norge. Jeg lager KI-systemer som jeg håper gjør verden litt bedre, holder foredrag for å gjøre det litt mer tilgjengelig, og lager kunst når jeg kan.',
    'bio.p2': 'Jeg dras mot å lage ting. Jobbmessig har det betydd autonome droner med <a class="tip" data-tip="En studentgruppe som lager autonome droner for moro skyld" href="https://www.ascendntnu.no" target="_blank" rel="noopener noreferrer">Ascend NTNU</a>, satellittbasert oljesøl-deteksjon hos <a class="tip" data-tip="Kongsberg Satellite Services — jordobservasjon via satellitt" href="https://www.ksat.no" target="_blank" rel="noopener noreferrer">KSAT</a>, og nå KI for helsevesen hos <a class="tip" data-tip="Norsk helsetech, brukt av klinikere hver dag" href="https://www.dips.com" target="_blank" rel="noopener noreferrer">DIPS</a>. Utenom jobb er det alltid en hobby som opptar meg — fjelløping, keramikk, søm, maling, crossfit, ski, volleyball. Listen vokser stadig.',
    'bio.p3': 'Forskningen min er innen <span class="tip" data-tip="Forklarbar KI — å forstå hva modeller faktisk gjør">XAI</span>, robotikk og maskinlæring. Jeg har en mastergrad i kybernetikk og robotikk og en PhD i forklarbar KI (XAI) fra NTNU — fordi «hva gjør denne modellen egentlig?» føltes som noe det var verdt å bruke flere år på å finne ut av.',

    'research.title': 'Forskning',
    'research.publications': 'Publikasjoner',
    'research.pubs-empty': 'Publikasjoner kommer snart.',
    'research.scholar-prefix': 'Se hele listen på',
    'research.projects': 'Forskningsprosjekter',

    'outreach.title': 'Formidling',
    'outreach.cta.p1': 'Jeg har stor glede av å holde foredrag om KI, fra grunnleggende introduksjoner for blandede publikum til mer tekniske presentasjoner om forklarbarhet (XAI). Jeg er opptatt av å gjøre KI forståelig og tilgjengelig, uansett om publikum er unge eller gamle, tekniske eller ikke.',
    'outreach.cta.p2': 'Jeg tilpasser hvert foredrag til publikum og kontekst, og prøver å bruke eksempler som er relevante og meningsfulle for de i rommet.',
    'outreach.cta.p3': 'Ta gjerne kontakt hvis du vil ha meg som foredragsholder på ditt arrangement.',
    'outreach.contact': 'Ta kontakt →',
    'outreach.talks': 'Foredrag',
    'outreach.talks-empty': 'Foredrag kommer snart.',
    'outreach.slides': 'Slides',
    'outreach.recording': 'Opptak',
    'outreach.podcasts': 'Podkaster',

    'art.title': 'Kunst',
    'art.intro': 'Bare for gøy!',

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
    { text: 'KI-utvikler', article: 'en' },
    { text: 'KI-forsker', article: 'en' },
    { text: 'hobbykunstner', article: 'en' },
    { text: 'ingeniør', article: 'en' },
  ],
};
