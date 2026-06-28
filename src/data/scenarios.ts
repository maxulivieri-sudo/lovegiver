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
  "privacy e intimità": "Diritto a uno spazio personale e riservato, anche all'interno di contesti assistenziali o residenziali.",
  "dignità del rischio": "Principio per cui la persona ha diritto a fare esperienze — anche rischiose — come parte del proprio sviluppo. Eliminare ogni rischio significa eliminare la vita.",
  "transfert": "Fenomeno per cui una persona trasferisce emozioni e aspettative su un'altra — spesso un operatore — che ha un ruolo significativo nella sua vita.",
  "silenzio educativo": "Assenza di linguaggio, spazio e permesso intorno alla sessualità e all'affettività nei contesti di crescita. Produce vergogna, non protezione.",
  "progetto educativo individualizzato": "Documento condiviso tra équipe, persona e famiglia che definisce obiettivi, metodi e responsabilità del percorso di accompagnamento.",
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
          intro: "Valutazione della risposta libera.",
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
    context: "Giada ha 24 anni e frequenta il servizio dove lavori da oltre un anno. Avete un buon rapporto. Durante un'attività individuale, con voce bassa ma decisa, Giada ti dice una cosa che non ti aspettavi.",
    objective: "Gestire una richiesta affettiva diretta rispettando il limite professionale, senza umiliare né colpevolizzare Giada, e riorientando il bisogno verso relazioni possibili.",
    characters: [
      { name: "Giada", role: "Persona seguita al servizio, 24 anni", color: "#9a6cb0", initials: "G" },
      { name: "Tu", role: "Operatore/Operatrice di riferimento", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["limite professionale", "transfert", "dignità del rischio", "affettività", "autodeterminazione"],
    difficulty: "Avanzato",
    duration: "12–15 min",
    status: "available",
    steps: [
      {
        type: "narration",
        text: "Giada è più silenziosa del solito. A metà attività si ferma, ti guarda: «Ti devo dire una cosa. Ti voglio bene, più di tutti. Mi piaci — non come operatore. Potremmo uscire insieme, fuori da qui?»"
      },
      {
        type: "dialogue",
        speaker: "Giada",
        prompt: "Come rispondi alla richiesta di Giada?",
        choices: [
          {
            text: "«Sono contenta che tu te la senta di dirmelo. Quello che provi è reale e non c'è niente di sbagliato in questo. Però devo essere onesta: tra noi c'è una relazione di lavoro, e questo non cambierà.»",
            quality: "good",
            points: 20,
            feedback: "Ottimo: validi il coraggio di Giada e la legittimità dei suoi sentimenti prima di porre il limite. Il confine è chiaro ma non punitivo. Non stai rifiutando lei — stai nominando il tuo ruolo."
          },
          {
            text: "«Giada, sei una persona speciale, ma non posso uscire con te. Non sarebbe giusto.»",
            quality: "partial",
            points: 10,
            feedback: "Il limite c'è, ma il 'non sarebbe giusto' è vago e può essere interpretato come un giudizio su di lei. Manca il riconoscimento che i suoi sentimenti sono legittimi prima di spiegare il confine."
          },
          {
            text: "«Giada, queste cose non si dicono. Devi tenere separati i ruoli.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: stai colpevolizzando Giada per aver espresso un sentimento. 'Non si dice' è una sanzione che genera vergogna e rompe la fiducia. Il confine professionale si spiega, non si impone come divieto."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Giada",
        prompt: "Giada abbassa gli occhi: «Quindi ti faccio schifo? Pensi che sia strana?» Come rispondi?",
        choices: [
          {
            text: "«No, per niente. Sviluppare sentimenti per qualcuno con cui stai bene è umanissimo. La mia risposta non parla di te — parla del mio ruolo, che è diverso da quello di un'amica o di una partner.»",
            quality: "good",
            points: 20,
            feedback: "Separi chiaramente il limite professionale dalla valutazione personale di Giada. Le restituisci normalità e dignità. È esattamente questo che serve: il problema non è lei."
          },
          {
            text: "«Certo che no, sei una persona bellissima. Ma certe cose non si possono fare.»",
            quality: "partial",
            points: 10,
            feedback: "Il tono è caldo ma 'certe cose non si possono fare' suona come una regola astratta. Manca la spiegazione del perché quel limite esiste e a cosa serve."
          },
          {
            text: "«Capisco, ma devi essere realistica su queste cose.»",
            quality: "poor",
            points: 5,
            feedback: "Dire 'sii realistica' sminuisce l'esperienza di Giada e suona paternalistico. Non stai rispondendo alla domanda — stai evitando di starci dentro."
          }
        ]
      },
      {
        type: "free",
        speaker: "Giada",
        prompt: "Giada dice: «Ma allora a chi posso voler bene? Tutti mi mettono dei confini.» Come le rispondi — aiutandola a distinguere i diversi tipi di relazione senza svalutare il bisogno che esprime?",
        placeholder: "Scrivi la tua risposta a Giada…",
        aiFeedback: {
          intro: "Valutazione della risposta libera.",
          strengths: [
            "Nominare le diverse forme di relazione (amicizia, amore, relazione professionale) aiuta a costruire una mappa senza gerarchie.",
            "Validare il bisogno di vicinanza prima di parlare dei confini mantiene il contatto emotivo con Giada."
          ],
          improve: [
            "Esplora con lei dove e con chi potrebbe costruire relazioni: rende il discorso concreto e non solo teorico.",
            "Evita frasi come 'ci sono persone giuste per te': suonano come consolazione e possono risultare sminuenti."
          ],
          missedKeywords: ["limite professionale", "affettività"]
        }
      },
      {
        type: "dialogue",
        speaker: "Giada",
        prompt: "Giada alza lo sguardo: «Ci posso almeno pensare a una relazione, a qualcuno? O anche questo non si può?»",
        choices: [
          {
            text: "«Assolutamente sì. Desiderare una relazione è un diritto. Puoi pensarci, parlarne, esplorarlo. Io sono qui per aiutarti a costruire quelle possibilità — non per toglierle.»",
            quality: "good",
            points: 20,
            feedback: "Restituisci a Giada il suo diritto all'affettività e ridefinisci il tuo ruolo come sostegno, non come limite. Questo chiude il passaggio in modo aperto e orientato al futuro."
          },
          {
            text: "«Sì, certo che puoi. Ma prenditelo con calma.»",
            quality: "partial",
            points: 10,
            feedback: "'Prenditelo con calma' suona come un consiglio non richiesto che infantilizza Giada. La direzione è giusta ma manca la concretezza su come puoi supportarla."
          },
          {
            text: "«Prima lavoriamo un po' su di te, poi le relazioni arrivano da sole.»",
            quality: "poor",
            points: 5,
            feedback: "Condizionare il diritto a una relazione a un percorso di 'miglioramento' personale è sbagliato. Giada non deve guadagnarsi il diritto all'affettività — ce l'ha già."
          }
        ]
      },
      {
        type: "narration",
        text: "Giada annuisce piano. «Ok.» C'è ancora qualcosa di irrisolto nell'aria, com'è giusto che sia. Ma il confine è stato posto senza rompere la relazione — e il desiderio di Giada è rimasto in piedi, degno."
      }
    ],
    criticalErrorsInfo: [
      "Colpevolizzare o correggere la persona per aver espresso un sentimento.",
      "Rispondere al confine professionale con vaghezza o come se fosse una regola astratta.",
      "Condizionare il diritto all'affettività a un percorso di 'maturazione' personale."
    ],
    suggestions: [
      "Valida sempre il sentimento prima di porre il limite: il confine professionale riguarda il tuo ruolo, non il valore della persona.",
      "Spiega perché il limite esiste, non solo che esiste: rende la risposta educativa invece che punitiva.",
      "Distingui il rifiuto della richiesta dal rifiuto della persona — Giada deve uscire dall'incontro sentendosi degna.",
      "Tieni aperto il tema dell'affettività come area di lavoro legittima: il desiderio non scompare perché non puoi uscire con lei."
    ]
  },

  {
    id: "s3",
    num: 3,
    title: "«Del mio corpo non ne parla mai nessuno»",
    shortTitle: "Desiderio, corpo e vergogna",
    context: "Samuele ha 31 anni. Lo segui da quasi due anni. È una persona riservata, a volte ironica, spesso sola. Prima di un'attività si ferma sulla soglia e ti dice che ha una cosa da chiederti — ma non sa se può.",
    objective: "Creare uno spazio sicuro e non giudicante, validare il desiderio come legittimo e aiutare Samuele a nominare la vergogna senza alimentarla.",
    characters: [
      { name: "Samuele", role: "Persona seguita al servizio, 31 anni", color: "#c0894a", initials: "S" },
      { name: "Tu", role: "Educatore/Educatrice", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["vergogna corporea", "silenzio educativo", "affettività", "privacy e intimità", "autodeterminazione"],
    difficulty: "Avanzato",
    duration: "12–15 min",
    status: "available",
    steps: [
      {
        type: "narration",
        text: "Samuele è sulla soglia. Tiene le mani in tasca. «Posso dirti una cosa che non ho mai detto a nessuno? Non so se è una cosa normale da dire.»"
      },
      {
        type: "dialogue",
        speaker: "Samuele",
        prompt: "Come rispondi all'apertura di Samuele?",
        choices: [
          {
            text: "«Sì, puoi. Prenditi il tempo che ti serve.»",
            quality: "good",
            points: 20,
            feedback: "Semplice, diretto, privo di aspettative. Dai a Samuele il permesso senza anticipare o orientare il contenuto. Questo tipo di apertura minima è spesso la più potente."
          },
          {
            text: "«Certo, sono qui per ascoltarti. Cosa c'è?»",
            quality: "partial",
            points: 10,
            feedback: "Il tono è disponibile, ma 'cosa c'è?' spinge verso il contenuto prima che Samuele sia pronto. Meglio lasciare a lui i tempi."
          },
          {
            text: "«Se è una cosa delicata, forse è meglio che ne parli con uno psicologo o con la coordinatrice.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: stai rimandando Samuele altrove prima ancora di sapere cosa vuole dire. Questo comunica che l'argomento è troppo per te — e che lui ha fatto male a iniziare. La fiducia si rompe ancora prima di costruirsi."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Samuele",
        prompt: "Samuele parla guardando il pavimento: «Ho desideri. Come tutti, immagino. Ma quando li sento… mi faccio schifo. Ho sempre pensato di essere sbagliato.» Come stai con questo?",
        choices: [
          {
            text: "«Che tu lo dica non ti rende sbagliato — ti rende onesto. Avere desideri fa parte dell'essere umano. E sentirsi in imbarazzo per questo è comunissimo, anche fuori da qui.»",
            quality: "good",
            points: 20,
            feedback: "Normalizzi senza minimizzare. Distingui la vergogna (che è appresa) dal desiderio (che è naturale). Non hai risolto niente — hai solo aperto uno spazio dove Samuele può esistere senza vergognarsi."
          },
          {
            text: "«Non devi farti schifo, sono cose normali.»",
            quality: "partial",
            points: 10,
            feedback: "Il messaggio di fondo è giusto ma la risposta è troppo rapida. Dire 'sono cose normali' senza riconoscere la vergogna specifica di Samuele può farlo sentire non ascoltato."
          },
          {
            text: "«Capisco. È importante saper gestire questi impulsi in modo sano.»",
            quality: "poor",
            points: 5,
            feedback: "Saltare direttamente alla 'gestione' senza prima riconoscere la vergogna di Samuele conferma implicitamente che c'è qualcosa da controllare. Stai rispondendo prima di ascoltare."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Samuele",
        prompt: "Samuele: «A casa, a scuola — silenzio. Come se non dovessi averli. Come se io fossi diverso dagli altri anche in questo.» Come accogli?",
        choices: [
          {
            text: "«Quel silenzio non era un messaggio sul fatto che sei sbagliato. Era un limite di chi ti stava intorno. Non tuo.»",
            quality: "good",
            points: 20,
            feedback: "Sposti la responsabilità della vergogna dove appartiene: non su Samuele, ma sul contesto che non ha saputo parlargli. È una restituzione importante e liberatoria."
          },
          {
            text: "«Hai ragione, queste cose spesso non vengono dette abbastanza.»",
            quality: "partial",
            points: 10,
            feedback: "Riconosci il problema sistemico ma resti in superficie. Non restituisci a Samuele l'innocenza rispetto alla vergogna che si porta: rimane un dato di fatto, non una costruzione che si può smontare."
          },
          {
            text: "«Certo, sono argomenti che mettono in difficoltà molte famiglie.»",
            quality: "poor",
            points: 5,
            feedback: "Stai spiegando il silenzio invece di stare con Samuele dentro quello che gli ha fatto. La famiglia viene giustificata, lui resta con la vergogna."
          }
        ]
      },
      {
        type: "free",
        speaker: "Samuele",
        prompt: "Samuele ti guarda per la prima volta: «Tu pensi che una persona come me possa avere una vita… affettiva, sessuale, normale?» Come rispondi?",
        placeholder: "Scrivi la tua risposta a Samuele…",
        aiFeedback: {
          intro: "Valutazione della risposta libera.",
          strengths: [
            "Rispondere in modo diretto e affermativo ('sì, puoi') è più utile di una risposta sfumata: Samuele ha bisogno di un permesso chiaro, non di una negoziazione.",
            "Collegare il diritto all'affettività alla sua identità di adulto, non alla sua disabilità, è la risposta più rispettosa."
          ],
          improve: [
            "Evita 'dipende da…': introduce condizioni dove non ce ne sono e riduce la portata del diritto.",
            "Se hai usato la parola 'normale', considera di sostituirla con 'piena' o 'propria': normale presuppone un confronto con una norma esterna."
          ],
          missedKeywords: ["autodeterminazione", "diritto all'affettività"]
        }
      },
      {
        type: "dialogue",
        speaker: "Samuele",
        prompt: "Samuele respira piano: «Non avevo mai parlato con nessuno di questo. Grazie.» Poi chiede: «Si può continuare a parlarne, in un'altra volta?»",
        choices: [
          {
            text: "«Sì. Quando vuoi. Questo spazio è tuo.»",
            quality: "good",
            points: 20,
            feedback: "Breve, pieno, senza condizioni. Confermi che l'apertura di Samuele è stata accolta — e che può tornare. Non hai risolto niente, hai costruito un luogo."
          },
          {
            text: "«Certo, ci organizziamo per un altro momento.»",
            quality: "partial",
            points: 10,
            feedback: "Il contenuto è giusto ma il tono burocratico raffredda quello che è appena successo. 'Ci organizziamo' mette distanza dove serve vicinanza."
          },
          {
            text: "«Sì, magari la prossima volta coinvolgiamo anche la coordinatrice così siamo in più.»",
            quality: "poor",
            points: 5,
            feedback: "Portare qualcun altro nello spazio che Samuele ha appena aperto — senza che lui lo abbia chiesto — tradisce la fiducia che ha appena riposto in te. Proteggi quello che è stato costruito."
          }
        ]
      },
      {
        type: "narration",
        text: "Samuele esce più leggero di com'è entrato. Non è cambiato niente, e tuttavia qualcosa si è mosso: per la prima volta qualcuno gli ha detto, con semplicità, che i suoi desideri esistono e hanno diritto di stare al mondo."
      }
    ],
    criticalErrorsInfo: [
      "Rimandare la persona altrove prima ancora di sapere cosa vuole dire.",
      "Rispondere ai bisogni con soluzioni pratiche prima di riconoscere l'emozione.",
      "Frammentare la fiducia appena costruita coinvolgendo terzi senza consenso."
    ],
    suggestions: [
      "Il silenzio degli adulti non è innocuo: ha insegnato a Samuele che i suoi desideri sono sbagliati. Il tuo compito è smontare quella lezione.",
      "Normalizzare non significa banalizzare: puoi dire che è normale senza che sembri una frase fatta.",
      "Uno spazio sicuro si costruisce con la coerenza nel tempo, non con una sola risposta giusta.",
      "Non anticipare i contenuti: lascia che sia la persona a scegliere cosa porta e quando."
    ]
  },

  {
    id: "s4",
    num: 4,
    title: "«La sessualità non è compito nostro»",
    shortTitle: "L'équipe in disaccordo",
    context: "Riunione d'équipe. Si discute il progetto educativo individualizzato di Marco, 29 anni. La coordinatrice propone di inserire obiettivi legati all'affettività e alle relazioni. Non tutti sono d'accordo.",
    objective: "Facilitare un confronto professionale costruttivo, ancorare la discussione ai diritti e ai bisogni di Marco, e contribuire a costruire una posizione condivisa e sostenibile.",
    characters: [
      { name: "Coordinatrice", role: "Responsabile del servizio", color: "#3a6f8f", initials: "Co" },
      { name: "Collega", role: "Educatore senior, scettico", color: "#a85a4a", initials: "Cl" },
      { name: "Tu", role: "Membro dell'équipe", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["presa in carico", "diritto all'affettività", "progetto educativo individualizzato", "alleanza educativa", "limite professionale"],
    difficulty: "Intermedio",
    duration: "14–16 min",
    status: "available",
    steps: [
      {
        type: "narration",
        text: "La coordinatrice apre la riunione: «Marco ci ha parlato più volte di voler avere un'amica, forse una fidanzata. Proporrei di inserire obiettivi legati alle relazioni nel suo PEI.» Il tuo collega batte le nocche sul tavolo: «Ma scherziamo? La sessualità non è compito nostro. Abbiamo già abbastanza problemi. E se lo vengono a sapere i genitori?»"
      },
      {
        type: "dialogue",
        speaker: "Collega",
        prompt: "Come rispondi alla posizione del collega?",
        choices: [
          {
            text: "«Capisco la preoccupazione sul carico di lavoro. Però il bisogno affettivo di Marco non sparisce perché non ne parliamo — anzi, si accumula. Cosa succederebbe se lo ignorassimo?»",
            quality: "good",
            points: 20,
            feedback: "Riconosci la preoccupazione del collega senza svalutarla, poi sposti il punto: non è una questione di carico ma di cosa accade a Marco se l'équipe tace. Apri una domanda invece di dare una risposta — è il modo migliore per far riflettere."
          },
          {
            text: "«Nei documenti internazionali è un diritto riconosciuto, non possiamo ignorarlo.»",
            quality: "partial",
            points: 10,
            feedback: "Il riferimento normativo è corretto, ma può suonare come una chiusura dall'alto. Il collega non ha bisogno di una citazione — ha bisogno di sentirsi ascoltato prima di cambiare posizione."
          },
          {
            text: "«Hai ragione, forse è meglio evitare temi così scivolosi.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: assecondare l'evitamento rinforza il silenzio attorno a Marco. Come membro dell'équipe hai la responsabilità di portare la voce della persona — non di facilitare la sua invisibilità."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Coordinatrice",
        prompt: "La coordinatrice annuisce: «Come potremmo affrontare il tema senza che diventi un campo minato per tutti?» Come contribuisci?",
        choices: [
          {
            text: "«Potremmo partire da quello che Marco esprime già — il voler avere amici, essere visto, non essere solo — e costruire obiettivi concreti da lì, documentati e condivisi con lui.»",
            quality: "good",
            points: 20,
            feedback: "Ancori la proposta a Marco e a ciò che lui già esprime, non a una teoria. Rendi la cosa fattibile e verificabile. È un contributo professionale solido che sposta il confronto dal 'se' al 'come'."
          },
          {
            text: "«Potremmo chiamare un esperto esterno per una supervisione sul tema, così non siamo soli.»",
            quality: "partial",
            points: 10,
            feedback: "Non è sbagliato, ma rischia di rinviare ancora. La supervisione esterna è utile in un secondo momento — adesso serve un primo passo interno che l'équipe si senta di fare."
          },
          {
            text: "«Basta aggiungere un obiettivo generico su 'relazioni sociali' senza entrare nei dettagli.»",
            quality: "poor",
            points: 5,
            feedback: "Un obiettivo vago non aiuta Marco e non tutela l'équipe: è un modo per mettere una firma su qualcosa senza impegnarsi. La genericità non protegge — nasconde."
          }
        ]
      },
      {
        type: "free",
        speaker: "Collega",
        prompt: "Il collega insiste: «E i genitori? Se si viene a sapere che affrontiamo certi argomenti, succede un casino.» Come rispondi all'équipe su questo punto?",
        placeholder: "Scrivi come risponderesti al collega davanti all'équipe…",
        aiFeedback: {
          intro: "Valutazione della risposta libera.",
          strengths: [
            "Nominare i genitori come possibili alleati — non come ostacoli — cambia la prospettiva: li includi invece di temerli.",
            "Distinguere il 'parlare di relazioni' dall'educazione sessuale esplicita aiuta a ridurre l'allarme del collega."
          ],
          improve: [
            "Proporre che la comunicazione con i genitori sia parte del progetto — non un rischio da gestire — rafforza l'alleanza educativa.",
            "Evita di minimizzare le preoccupazioni del collega: 'non succederà niente' non è rassicurante, è una promessa che non puoi mantenere."
          ],
          missedKeywords: ["alleanza educativa", "presa in carico"]
        }
      },
      {
        type: "dialogue",
        speaker: "Collega",
        prompt: "Il collega sospira: «Va bene, proviamo. Ma chi se ne occupa concretamente? Non voglio che ricada tutto su uno solo.»",
        choices: [
          {
            text: "«Possiamo definire chi ha il rapporto più diretto con Marco e avviare da lì. Poi ci confrontiamo in supervisione insieme — non è un lavoro solitario.»",
            quality: "good",
            points: 20,
            feedback: "Rispondi alla preoccupazione concreta del collega (il carico) con una proposta concreta. La supervisione condivisa trasforma il tema da peso individuale a responsabilità del gruppo."
          },
          {
            text: "«Lo decidiamo nelle prossime settimane, adesso chiudiamo qui.»",
            quality: "poor",
            points: 5,
            feedback: "Rimandare la decisione operativa rischia di vanificare il lavoro appena fatto. Il collega ha bisogno di una risposta concreta ora — altrimenti l'accordo rimane sulla carta."
          },
          {
            text: "«Chi vuole se ne occupa, non è obbligatorio.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: rendere facoltativo un obiettivo del PEI di Marco significa che non diventerà mai reale. I bisogni delle persone non possono dipendere dalla disponibilità volontaria di qualcuno."
          }
        ]
      },
      {
        type: "narration",
        text: "La riunione si chiude con un accordo di minima: un obiettivo documentato, un referente, un momento di verifica tra sei settimane. Non è la rivoluzione. Ma Marco ha un'équipe che adesso sa che quei bisogni esistono e hanno un posto nel progetto."
      }
    ],
    criticalErrorsInfo: [
      "Assecondare l'evitamento del tema rinunciando a rappresentare i bisogni di Marco.",
      "Rendere facoltativa la presa in carico di un bisogno già emerso.",
      "Usare la vaghezza degli obiettivi come forma di non impegno."
    ],
    suggestions: [
      "In un'équipe in disaccordo, la tua prima mossa è riconoscere le preoccupazioni altrui — non confutarle.",
      "Ancorare il confronto alla persona concreta (Marco, i suoi bisogni, le sue parole) sposta il piano dall'ideologico al professionale.",
      "I genitori sono alleati da coinvolgere, non ostacoli da aggirare: prevedi come includerli nel processo.",
      "Un accordo parziale e sostenibile vale più di una posizione teoricamente corretta che nessuno applica."
    ]
  },

  {
    id: "s5",
    num: 5,
    title: "«Lo faccio per il suo bene»",
    shortTitle: "Cura, controllo e rispetto",
    context: "Francesco ha 35 anni e una disabilità intellettiva lieve. Vive con suo padre Franco, 62 anni. Durante un colloquio individuale Francesco ti ha confidato che suo padre legge i suoi messaggi, sceglie le sue amicizie e limita le sue uscite. Hai chiesto un incontro con Franco.",
    objective: "Aiutare Franco a distinguere la cura dal controllo, riconoscere la privacy e l'autodeterminazione di Francesco come diritti reali, e trovare alternative concrete che tutelino entrambi.",
    characters: [
      { name: "Franco", role: "Padre e caregiver di Francesco, 62 anni", color: "#7a8a5a", initials: "F" },
      { name: "Tu", role: "Assistente sociale di riferimento", color: "#1f4d46", initials: "Tu" }
    ],
    keywords: ["controllo vs cura", "autodeterminazione", "privacy e intimità", "sostegno alle decisioni", "dignità del rischio"],
    difficulty: "Intermedio",
    duration: "12–14 min",
    status: "available",
    steps: [
      {
        type: "narration",
        text: "Franco si siede con la rigidità di chi sa già di essere lì per giustificarsi. «Ho sentito che Francesco le ha parlato di me. Voglio che sappia: io lo faccio per il suo bene. Se non controllo io, chi lo fa?»"
      },
      {
        type: "dialogue",
        speaker: "Franco",
        prompt: "Come entri nella conversazione con Franco?",
        choices: [
          {
            text: "«Capisco che vuole proteggerlo. Cosa teme succeda se Francesco ha più spazio per scegliere da solo?»",
            quality: "good",
            points: 20,
            feedback: "Riconosci l'intenzione di Franco senza validare il metodo, e apri una domanda sul timore che muove il controllo. È la stessa tecnica che funziona con i genitori iperprotettivi: prima ascolti la paura, poi parli di diritti."
          },
          {
            text: "«Francesco ha diritto alla privacy. Leggere i suoi messaggi non è legale.»",
            quality: "partial",
            points: 10,
            feedback: "Il punto legale è corretto, ma iniziare da lì mette Franco sulla difensiva. Probabilmente sa già che è un confine — il problema è che non riesce a non attraversarlo. Serve capire perché."
          },
          {
            text: "«Ha ragione, con persone come Francesco è meglio stare attenti.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: validare il controllo come risposta appropriata alla disabilità di Francesco rinforza l'infantilizzazione. Stai dicendo che il controllo è giustificato dalla sua condizione — non è così."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Franco",
        prompt: "Franco: «L'ho trovato in chat con uno sconosciuto. E se lo adescano? Se lo sfruttano? Non capisce certi pericoli.» Come risponde?",
        choices: [
          {
            text: "«La preoccupazione ha senso. Ma leggere i suoi messaggi di nascosto gli insegna che non può fidarsi di nessuno, neanche di lei. Come potremmo aiutarlo a riconoscere i rischi da solo?»",
            quality: "good",
            points: 20,
            feedback: "Validi la preoccupazione senza giustificare il metodo. Poi sposti la domanda: non 'come lo proteggo io' ma 'come lo aiuto a proteggersi'. È la differenza tra tutela sostitutiva e sostegno alle decisioni."
          },
          {
            text: "«Possiamo lavorare con Francesco su come riconoscere le situazioni pericolose online.»",
            quality: "partial",
            points: 10,
            feedback: "La proposta è giusta ma risponde al bisogno di Franco più che al problema di fondo. Non hai ancora detto a Franco cosa sta facendo a Francesco con quella lettura."
          },
          {
            text: "«Forse è meglio che usi solo applicazioni controllate e monitorate.»",
            quality: "poor",
            points: 5,
            feedback: "Proporre app monitorate sposta il controllo su strumenti tecnici invece di smontarlo. Non stai aiutando Francesco a costruire autonomia: stai aiutando Franco a controllare con meno sforzo."
          }
        ]
      },
      {
        type: "free",
        speaker: "Franco",
        prompt: "Franco si appoggia allo schienale: «Ma se succede qualcosa di brutto, la colpa è mia? Io non dormo la notte. Ho paura di sbagliare da tutte e due le parti.» Come rispondi a questa apertura?",
        placeholder: "Scrivi come rispondi a Franco…",
        aiFeedback: {
          intro: "Valutazione della risposta libera.",
          strengths: [
            "Riconoscere la fatica di Franco — non solo come errore da correggere — lo mantiene in relazione con te e lo rende più disponibile a cambiare.",
            "Nominare la 'dignità del rischio' (il diritto di Francesco a fare esperienze, anche difficili) aiuta Franco a capire che proteggere troppo non è neutro."
          ],
          improve: [
            "Evita di rassicurarlo ('non succederà niente di brutto'): non puoi saperlo e Franco lo sa. Meglio parlare di come rispondere se succede.",
            "Proponi una visione alternativa della cura: non assenza di rischio, ma presenza di Franco come persona di riferimento a cui Francesco può tornare."
          ],
          missedKeywords: ["dignità del rischio", "controllo vs cura"]
        }
      },
      {
        type: "dialogue",
        speaker: "Franco",
        prompt: "Franco: «Va bene. Allora cosa dovrei fare, concretamente?»",
        choices: [
          {
            text: "«Smettere di leggere i messaggi. E dirlo a Francesco — che ha cambiato approccio. Poi parlargli insieme di sicurezza online: non come sorvegliante, come padre.»",
            quality: "good",
            points: 20,
            feedback: "Dai a Franco un'azione concreta e reversibile, e la ridefinisci all'interno di un ruolo che lui già riconosce: padre, non controllore. La trasparenza con Francesco è fondamentale — altrimenti il cambiamento rimane invisibile."
          },
          {
            text: "«Dargli più spazio, gradualmente. Senza fretta.»",
            quality: "partial",
            points: 10,
            feedback: "La direzione è giusta ma troppo vaga. Franco ha bisogno di sapere cosa fare domani — non di una filosofia del cambiamento graduale. Senza un primo passo concreto, tutto rimane uguale."
          },
          {
            text: "«Lasci che sia il servizio a occuparsi della parte educativa. Si toglie da una situazione difficile.»",
            quality: "poor",
            points: 5,
            feedback: "Delegare al servizio significa escludere Franco dal percorso di crescita di Francesco. Il padre non è un problema da rimuovere — è una risorsa da riorientare. Toglierlo dalla scena non aiuta nessuno."
          }
        ]
      },
      {
        type: "narration",
        text: "Franco se ne va con più domande di quante ne aveva all'inizio — e qualcuna in meno. Non ha smesso di amare suo figlio. Ha cominciato, forse, a chiedersi se amarlo significhi anche lasciarlo vivere."
      }
    ],
    criticalErrorsInfo: [
      "Validare il controllo come risposta appropriata alla disabilità della persona.",
      "Rassicurare il caregiver promettendo assenza di rischi.",
      "Escludere il caregiver dal percorso invece di riorientarlo."
    ],
    suggestions: [
      "La paura di Franco è reale: va accolta prima di essere ridiscussa. Un genitore che non si sente capito non cambia.",
      "Distingui cura e controllo con esempi concreti: non basta enunciare il principio.",
      "La trasparenza è parte del cambiamento: Franco deve dire a Francesco che ha cambiato approccio, non solo cambiarlo.",
      "Il caregiver ha bisogno di un ruolo alternativo che abbia senso: da controllore a persona di riferimento."
    ]
  }
];
