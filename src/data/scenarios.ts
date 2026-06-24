import type { GlossaryMap, Scenario } from '@/types';

export const glossary: GlossaryMap = {
  "autodeterminazione": "Diritto della persona a compiere scelte autonome sulla propria vita, inclusa la sfera affettiva e sessuale, con il sostegno necessario.",
  "affettività": "Insieme dei bisogni e delle esperienze legate al legame emotivo, all'intimità e alla relazione con l'altro.",
  "consenso": "Accordo libero, informato, reversibile e consapevole alla partecipazione a un'esperienza relazionale o sessuale.",
  "sostegno alle decisioni": "Approccio che affianca la persona nelle scelte invece di sostituirsi a lei, contrapposto alla tutela sostitutiva.",
  "infantilizzazione": "Tendenza a trattare una persona adulta con disabilità come se fosse un bambino, negandone maturità e diritti.",
  "diritto all'affettività": "Riconoscimento che la vita affettiva e sessuale è parte dei diritti fondamentali della persona (Convenzione ONU sui diritti delle persone con disabilità).",
  "vergogna corporea": "Disagio interiorizzato verso il proprio corpo e i propri desideri, spesso indotto da messaggi sociali ed educativi.",
  "alleanza educativa": "Relazione di fiducia e collaborazione tra operatore, persona e famiglia, basata su obiettivi condivisi.",
  "limite professionale": "Confine etico e di ruolo che orienta la risposta dell'operatore di fronte a richieste personali o intime.",
  "presa in carico": "Processo strutturato con cui l'équipe accompagna la persona, definendo obiettivi e responsabilità.",
  "controllo vs cura": "Distinzione tra assistere una persona (cura) e limitarne le scelte per gestirne il rischio (controllo).",
  "privacy e intimità": "Diritto a uno spazio personale e riservato, anche all'interno di contesti assistenziali o residenziali."
};

export const scenarios: Scenario[] = [
  {
    id: "s1",
    num: 1,
    title: "«Mio figlio non ha bisogno di queste cose»",
    shortTitle: "Il genitore iperprotettivo",
    context: "Luca ha 27 anni e una disabilità intellettiva lieve. Frequenta il centro diurno dove lavori. Da settimane parla di una ragazza del gruppo e vorrebbe invitarla a uscire. Hai chiesto un colloquio con sua madre, Maria, per condividere il percorso. Maria arriva tesa.",
    objective: "Accogliere la paura del genitore senza negarla, riconoscere il diritto di Luca all'affettività e costruire un'alleanza educativa orientata all'autodeterminazione.",
    characters: [
      { name: "Maria", role: "Madre di Luca, 58 anni", color: "#b5654a", initials: "M" },
      { name: "Tu", role: "Educatore/Educatrice del centro diurno", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["diritto all'affettività", "infantilizzazione", "autodeterminazione", "alleanza educativa", "sostegno alle decisioni"],
    difficulty: "Intermedio",
    duration: "12–15 min",
    status: "available",
    steps: [
      {
        type: "narration",
        text: "Maria si siede, tiene la borsa stretta sulle ginocchia. «La ringrazio per il tempo, ma le dico subito: questo discorso della ragazza è una fantasia. Luca è fragile, non ha bisogno di queste cose. Si farebbe solo del male.»"
      },
      {
        type: "dialogue",
        speaker: "Maria",
        prompt: "Come rispondi alla prima apertura di Maria?",
        choices: [
          {
            text: "«Capisco che la preoccupi. Mi racconta che cosa la spaventa di più in questo momento?»",
            quality: "good",
            points: 20,
            feedback: "Ottimo. Accogli l'emozione senza giudicarla e apri uno spazio di ascolto. Dare un nome alla paura è il primo passo per non lasciarla decidere al posto di Luca."
          },
          {
            text: "«Signora, Luca è adulto e ha tutto il diritto di avere una relazione. Non può impedirglielo.»",
            quality: "poor",
            points: 5,
            feedback: "Il principio è giusto ma il tempismo no: contrapporti subito mette Maria sulla difensiva e rompe l'alleanza. I diritti si introducono dopo aver accolto la paura."
          },
          {
            text: "«Ha ragione, forse è meglio non alimentare certe aspettative.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: assecondare la negazione conferma l'infantilizzazione di Luca e nega il suo diritto all'affettività. Il tuo ruolo non è rassicurare il genitore a scapito della persona."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Maria",
        prompt: "Maria abbassa lo sguardo: «Ho paura che si illuda, che lo prendano in giro… che soffra. Io non ci sarò per sempre.» Come prosegui?",
        choices: [
          {
            text: "«La paura che soffra dice quanto gli vuole bene. Possiamo lavorare insieme perché impari a riconoscere le situazioni e a chiedere aiuto?»",
            quality: "good",
            points: 20,
            feedback: "Riconosci l'amore dietro il controllo e trasformi la protezione in competenza. Sposti il focus da 'evitare il rischio' a 'attrezzare Luca'."
          },
          {
            text: "«Soffrire fa parte della vita di tutti, anche Luca ha diritto di sbagliare.»",
            quality: "partial",
            points: 10,
            feedback: "Il principio della dignità del rischio è corretto, ma detto così suona freddo. Va accompagnato dal riconoscimento della paura, altrimenti Maria si sente sola."
          },
          {
            text: "«Non si preoccupi, lo terremo d'occhio noi così non gli succede niente.»",
            quality: "poor",
            points: 5,
            feedback: "Promettere sorveglianza totale rinforza il controllo e l'idea che Luca vada protetto da, non preparato a. Stai spostando la tutela, non costruendo autonomia."
          }
        ]
      },
      {
        type: "free",
        speaker: "Maria",
        prompt: "Maria chiede: «Ma lei, concretamente, che cosa vorrebbe fare con mio figlio?» Scrivi con parole tue come spiegheresti l'obiettivo educativo, tenendo insieme il diritto di Luca e la paura di Maria.",
        placeholder: "Scrivi la tua risposta a Maria…",
        aiFeedback: {
          intro: "Valutazione della risposta libera (simulazione del modello che analizza testo, tono e contenuti chiave).",
          strengths: [
            "Hai parlato di accompagnamento e non di sostituzione: coerente con il sostegno alle decisioni.",
            "Il riferimento concreto a 'piccoli passi' rende l'obiettivo credibile e meno minaccioso per il genitore."
          ],
          improve: [
            "Esplicita che Luca resta protagonista delle scelte: rende più chiaro il principio di autodeterminazione.",
            "Proponi un momento successivo a tre (tu, Luca, Maria): rafforza l'alleanza educativa."
          ],
          missedKeywords: ["autodeterminazione", "alleanza educativa"]
        }
      },
      {
        type: "dialogue",
        speaker: "Maria",
        prompt: "Maria sembra più morbida: «E se le cose vanno male?» Qual è la proposta più utile?",
        choices: [
          {
            text: "«Concordiamo insieme dei passi piccoli e verificabili, e ci rivediamo tra due settimane per fare il punto, lei, io e Luca.»",
            quality: "good",
            points: 20,
            feedback: "Perfetto: dai una cornice concreta, condivisa e reversibile. Maria entra nel processo come alleata, non come ostacolo, e Luca resta al centro."
          },
          {
            text: "«Decidiamo noi dell'équipe il percorso migliore e poi le facciamo sapere.»",
            quality: "poor",
            points: 5,
            feedback: "Escludere Maria dal processo rompe l'alleanza appena costruita. Le decisioni vanno condivise, non comunicate a cose fatte."
          },
          {
            text: "«Le prometto che non andrà male, ci pensiamo noi a gestire tutto.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: nessuno può garantire che non ci sarà sofferenza, e prometterlo significa di nuovo controllare l'esperienza di Luca invece di sostenerla."
          }
        ]
      },
      {
        type: "narration",
        text: "Maria si scioglie un poco. «Va bene. Proviamo. Ma voglio esserci anch'io.» Hai aperto uno spazio dove Luca può essere accompagnato — non frenato — nel suo desiderio di relazione."
      }
    ],
    criticalErrorsInfo: [
      "Assecondare la negazione del bisogno affettivo (infantilizzazione).",
      "Promettere protezione totale o assenza di sofferenza.",
      "Escludere la persona o la famiglia dalle decisioni che li riguardano."
    ],
    suggestions: [
      "Accogli sempre l'emozione del genitore prima di introdurre i principi: senza alleanza i diritti non passano.",
      "Trasforma la protezione in competenza: l'obiettivo non è eliminare il rischio ma attrezzare la persona.",
      "Mantieni Luca protagonista: parla 'con' e non solo 'di' lui.",
      "Usa passi piccoli, verificabili e reversibili: rendono il cambiamento sostenibile per tutti."
    ]
  },
  {
    id: "s2",
    num: 2,
    title: "«Mi piaci. Possiamo stare insieme?»",
    shortTitle: "La richiesta esplicita",
    context: "Durante un'attività individuale, una persona con disabilità che segui da mesi ti rivolge una richiesta affettiva ed esplicita diretta a te. Resti spiazzato e devi rispondere senza ferire e senza confondere i ruoli.",
    objective: "Gestire una richiesta personale rispettando il limite professionale, senza umiliare né colpevolizzare la persona, e riorientando il bisogno verso relazioni possibili.",
    characters: [
      { name: "Giada", role: "Persona seguita al servizio, 24 anni", color: "#9a6cb0", initials: "G" },
      { name: "Tu", role: "Operatore/Operatrice di riferimento", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["limite professionale", "consenso", "affettività", "vergogna corporea"],
    difficulty: "Avanzato",
    duration: "10–12 min",
    status: "preview"
  },
  {
    id: "s3",
    num: 3,
    title: "«Del mio corpo non ne parla mai nessuno»",
    shortTitle: "Desiderio, corpo e vergogna",
    context: "Una persona con disabilità ti chiede uno spazio per parlare di desiderio, del proprio corpo e di una vergogna che si porta dietro da sempre. Vuole essere ascoltata, non corretta.",
    objective: "Creare uno spazio sicuro e non giudicante, validare il desiderio come legittimo e nominare la vergogna senza alimentarla.",
    characters: [
      { name: "Samuele", role: "Persona seguita al servizio, 31 anni", color: "#c0894a", initials: "S" },
      { name: "Tu", role: "Educatore/Educatrice", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["vergogna corporea", "affettività", "privacy e intimità", "autodeterminazione"],
    difficulty: "Avanzato",
    duration: "10–12 min",
    status: "preview"
  },
  {
    id: "s4",
    num: 4,
    title: "«La sessualità non è compito nostro»",
    shortTitle: "L'équipe in disaccordo",
    context: "In riunione d'équipe si discute se inserire il tema dell'affettività e della sessualità nel progetto educativo di un utente. Le posizioni sono divise tra chi teme problemi e chi rivendica un diritto.",
    objective: "Facilitare un confronto professionale, ancorare la discussione ai diritti e ai bisogni della persona e arrivare a una posizione condivisa e sostenibile.",
    characters: [
      { name: "Coordinatrice", role: "Responsabile del servizio", color: "#3a6f8f", initials: "Co" },
      { name: "Collega", role: "Educatore senior, scettico", color: "#a85a4a", initials: "Cl" },
      { name: "Tu", role: "Membro dell'équipe", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["presa in carico", "diritto all'affettività", "alleanza educativa", "limite professionale"],
    difficulty: "Intermedio",
    duration: "12–15 min",
    status: "preview"
  },
  {
    id: "s5",
    num: 5,
    title: "«Lo faccio per il suo bene»",
    shortTitle: "Cura, controllo e rispetto",
    context: "Un caregiver, in buona fede, prende decisioni al posto della persona assistita: ne legge i messaggi, ne sceglie le amicizie, ne limita le uscite. Confonde assistenza, controllo e rispetto dell'autodeterminazione.",
    objective: "Aiutare il caregiver a distinguere cura da controllo, riconoscere la privacy e l'autodeterminazione e individuare alternative concrete e rispettose.",
    characters: [
      { name: "Franco", role: "Caregiver familiare, 62 anni", color: "#7a8a5a", initials: "F" },
      { name: "Tu", role: "Assistente sociale", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["controllo vs cura", "autodeterminazione", "privacy e intimità", "sostegno alle decisioni"],
    difficulty: "Intermedio",
    duration: "10–12 min",
    status: "preview"
  }
];
