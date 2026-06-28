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
    duration: "15–18 min",
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
            feedback: "Il principio è giusto ma il tempismo no: contrapporti subito mette Maria sulla difensiva e rompe l'alleanza prima ancora di costruirla. I diritti si introducono dopo aver accolto la paura, non prima."
          },
          {
            text: "«Ha ragione, forse è meglio non alimentare certe aspettative.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: assecondare la negazione conferma l'infantilizzazione di Luca e nega il suo diritto all'affettività. Il tuo ruolo non è rassicurare il genitore a scapito della persona seguita."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Maria",
        prompt: "Maria abbassa lo sguardo: «Ho paura che si illuda, che lo prendano in giro… che soffra. Io non ci sarò per sempre.» Come prosegui?",
        choices: [
          {
            text: "«La paura che soffra dice quanto gli vuole bene. Possiamo lavorare insieme perché Luca impari a riconoscere le situazioni e a chiedere aiuto?»",
            quality: "good",
            points: 20,
            feedback: "Riconosci l'amore dietro il controllo e trasformi la protezione in competenza. Sposti il focus da 'evitare il rischio' a 'attrezzare Luca' — è la differenza tra tutela sostitutiva e sostegno alle decisioni."
          },
          {
            text: "«Soffrire fa parte della vita di tutti, anche Luca ha diritto di sbagliare.»",
            quality: "partial",
            points: 10,
            feedback: "Il principio della dignità del rischio è corretto, ma detto così suona freddo. Va accompagnato dal riconoscimento della paura, altrimenti Maria si sente sola — e chiusa, non aperta."
          },
          {
            text: "«Non si preoccupi, lo terremo d'occhio noi così non gli succede niente.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola: promettere sorveglianza totale sposta il controllo dall'asse familiare a quello del servizio, ma non lo smonta. Stai dicendo a Maria che la soluzione è monitorare Luca — che è esattamente il problema."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Maria",
        prompt: "Maria: «Il suo medico di base mi ha sempre detto di non esporlo a cose emotivamente impegnative — che per lui la stabilità è fondamentale. Non dovremmo sentire anche lui prima di procedere?»",
        choices: [
          {
            text: "«Il medico di base cura la salute fisica di Luca. Le competenze su come accompagnare la sua crescita affettiva appartengono all'équipe educativa. Possiamo decidere insieme i tempi — ma non abbiamo bisogno di un via libera medico per riconoscere un bisogno umano.»",
            quality: "good",
            points: 20,
            feedback: "Distingui le competenze senza svalutare il medico e impedisci la medicalizzazione del bisogno affettivo. Il diritto all'affettività non si prescrive e non si nega con una valutazione clinica."
          },
          {
            text: "«Capisce che dobbiamo fare attenzione — forse vale la pena sentire anche la psicologa del centro prima di procedere.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola professionale (medicalizzazione): rimandare a un esperto clinico prima di affrontare un bisogno relazionale comunica che l'affettività è qualcosa da valutare, non da supportare. Stai condizionando un diritto a una diagnosi di 'prontezza'."
          },
          {
            text: "«Ha ragione: se il medico consiglia stabilità, aspettiamo che Luca dia segni più chiari di essere pronto.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico (medicalizzazione + gatekeeping): subordinare il diritto all'affettività a un 'via libera' medico o a una presunta prontezza è infantilizzazione mascherata da cautela. I diritti non si guadagnano con la maturità — esistono già."
          }
        ]
      },
      {
        type: "free",
        speaker: "Maria",
        prompt: "Maria chiede: «Ma lei, concretamente, che cosa vorrebbe fare con mio figlio?» Scrivi con parole tue come spiegheresti l'obiettivo educativo, tenendo insieme il diritto di Luca e la paura di Maria.",
        placeholder: "Scrivi la tua risposta a Maria…",
        aiFeedback: {
          intro: "Valutazione euristica della risposta. Attenzione ai pattern che seguono.",
          strengths: [
            "Usi verbi come 'accompagnare', 'costruire insieme', 'sostenere': linguaggio coerente con il sostegno alle decisioni, non con la tutela sostitutiva.",
            "Menzioni Luca come soggetto attivo della propria vita — non come oggetto della preoccupazione di Maria.",
            "Proponi passi concreti e verificabili: rende l'obiettivo credibile e meno minaccioso per il genitore."
          ],
          improve: [
            "Hai usato frasi come 'decidiamo noi cosa è meglio' o 'ne parleremo con la famiglia'? Queste tolgono centralità a Luca — sono segnali di delega impropria.",
            "Hai condizionato il percorso a una valutazione ('quando sarà pronto', 'se si dimostra in grado')? L'affettività è un diritto, non un traguardo da meritare.",
            "Proponi un momento a tre — tu, Luca e Maria — per costruire insieme il percorso? Rafforza l'alleanza educativa senza escludere nessuno."
          ],
          missedKeywords: ["autodeterminazione", "alleanza educativa", "sostegno alle decisioni"]
        }
      },
      {
        type: "dialogue",
        speaker: "Maria",
        prompt: "Maria: «Questa ragazza — lei la conosce? Che famiglia ha? Voglio sapere con chi ha a che fare mio figlio.»",
        choices: [
          {
            text: "«Capisco che voglia sapere. Posso dirle che il contesto del centro è strutturato e sicuro. Ma non posso condividere informazioni su altre persone: anche lei, come Luca, ha diritto alla sua privacy.»",
            quality: "good",
            points: 20,
            feedback: "Tuteli la privacy della ragazza senza essere freddo. Maria capisce che il limite non nasconde qualcosa di pericoloso — rispetta qualcuno. Stai modellando anche per Maria cosa significa rispettare l'autonomia di un'altra persona."
          },
          {
            text: "«Le posso dire che frequenta il centro da tempo e non ci sono segnalazioni particolari.»",
            quality: "partial",
            points: 10,
            feedback: "Hai mantenuto la privacy formale, ma 'non ci sono segnalazioni' è già un'informazione sul profilo della ragazza. Anche rispondere in negativo può violare la riservatezza. Meglio spiegare il principio che applicarlo in modo parziale."
          },
          {
            text: "«Le racconto un po' chi è — fa parte del processo di alleanza con la famiglia. È importante che lei sia tranquilla.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico (violazione della privacy): condividere informazioni su un'altra persona con la famiglia di un terzo è una violazione grave. Usare il termine 'alleanza educativa' come giustificazione è una trappola: l'alleanza si costruisce nella trasparenza con le persone stesse, non nel passaggio di informazioni tra famiglie."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Maria",
        prompt: "Maria sembra più morbida: «E se le cose vanno male?» Qual è la proposta più utile?",
        choices: [
          {
            text: "«Concordiamo insieme dei passi piccoli e verificabili, e ci rivediamo tra due settimane per fare il punto — lei, io e Luca.»",
            quality: "good",
            points: 20,
            feedback: "Perfetto: dai una cornice concreta, condivisa e reversibile. Maria entra nel processo come alleata, non come ostacolo, e Luca resta al centro come protagonista."
          },
          {
            text: "«Decidiamo noi dell'équipe il percorso migliore e poi la teniamo aggiornata.»",
            quality: "poor",
            points: 5,
            feedback: "Delega impropria in direzione opposta: escludere Maria dalla costruzione del percorso rompe l'alleanza appena costruita. Le decisioni si condividono, non si comunicano a cose fatte."
          },
          {
            text: "«Le prometto che non andrà male — ci pensiamo noi a gestire tutto.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: nessuno può garantire assenza di sofferenza, e prometterlo è una trappola. Stai di nuovo controllando l'esperienza di Luca invece di sostenerla — e costruendo aspettative che non puoi mantenere."
          }
        ]
      },
      {
        type: "narration",
        text: "Maria si scioglie un poco. «Va bene. Proviamo. Ma voglio esserci anch'io.» Hai aperto uno spazio dove Luca può essere accompagnato — non frenato — nel suo desiderio di relazione. E Maria, da ostacolo, è diventata una risorsa."
      }
    ],
    criticalErrorsInfo: [
      "Assecondare la negazione del bisogno affettivo (infantilizzazione).",
      "Delegare la valutazione del bisogno affettivo al medico di base (medicalizzazione).",
      "Condividere informazioni su altri utenti per rassicurare il genitore (violazione della privacy).",
      "Promettere protezione totale o assenza di sofferenza."
    ],
    suggestions: [
      "Accogli sempre l'emozione del genitore prima di introdurre i principi: senza alleanza i diritti non passano.",
      "Trasforma la protezione in competenza: l'obiettivo non è eliminare il rischio ma attrezzare la persona.",
      "Mantieni Luca protagonista: parla 'con' lui e non solo 'di' lui.",
      "Nessun esperto clinico deve autorizzare il diritto all'affettività — chiedere un via libera medico è medicalizzazione."
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
    duration: "15–18 min",
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
            feedback: "Il limite c'è, ma 'non sarebbe giusto' è vago e può essere interpretato come un giudizio su di lei. Manca il riconoscimento esplicito che i suoi sentimenti sono legittimi prima di spiegare il confine professionale."
          },
          {
            text: "«Giada, queste cose non si dicono. Devi tenere separati i ruoli.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: stai colpevolizzando Giada per aver espresso un sentimento. 'Non si dice' è una sanzione che genera vergogna e rompe la fiducia costruita in un anno. Il confine professionale si spiega con rispetto, non si impone come divieto morale."
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
            feedback: "Separi chiaramente il limite professionale dalla valutazione personale di Giada. Le restituisci normalità e dignità. Il problema non è lei — è la struttura del ruolo, e glielo dici esplicitamente."
          },
          {
            text: "«Certo che no, sei una persona bellissima. Ma certe cose non si possono fare.»",
            quality: "partial",
            points: 10,
            feedback: "Il tono è caldo ma 'certe cose non si possono fare' suona come una regola astratta. Manca la spiegazione del perché quel limite esiste e a cosa serve — senza di essa Giada resta con il dubbio che ci sia qualcosa di sbagliato in lei."
          },
          {
            text: "«Capisco, ma devi essere realistica su queste cose.»",
            quality: "poor",
            points: 5,
            feedback: "Dire 'sii realistica' sminuisce l'esperienza di Giada e suona paternalistico. Non stai rispondendo alla domanda — stai evitando di entrarci dentro. Giada ha chiesto se le fai schifo: le meriti una risposta."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Giada",
        prompt: "Giada: «Ma se non posso stare con te, puoi almeno aiutarmi tu a trovare qualcuno? Tipo venire con me in qualche posto dove si conoscono persone?»",
        choices: [
          {
            text: "«L'idea di costruire nuove relazioni è bellissima, ed è qualcosa su cui possiamo lavorare insieme. Ma uscire io e te come se fossi un'amica non è qualcosa che posso fare — il mio ruolo è diverso. Possiamo però esplorare contesti e opportunità per te.»",
            quality: "good",
            points: 20,
            feedback: "Validi il desiderio e ridefinisci il ruolo senza freddezza: non 'non posso io' ma 'possiamo costruire come farlo tu'. È esattamente la differenza tra sostenere l'autonomia e sostituirsi."
          },
          {
            text: "«Sì, posso accompagnarti a qualche attività del territorio — fa parte del mio lavoro favorire l'inclusione sociale.»",
            quality: "partial",
            points: 10,
            feedback: "La risposta rischia di colludere con la richiesta: 'uscire insieme' in contesti sociali informali può rinforzare l'attaccamento invece di orientarlo. Serve distinguere l'accompagnamento strutturato dall'uscita informale come pari."
          },
          {
            text: "«Prima lavoriamo un po' su di te — sulla tua sicurezza, sulla tua autostima. Poi le relazioni vengono da sole.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola (gatekeeping): condizionare il diritto a una relazione a un percorso di crescita personale è sbagliato. Giada non deve guadagnarsi il diritto all'affettività — ce l'ha già. Stai usando il linguaggio terapeutico per rinviare un diritto."
          }
        ]
      },
      {
        type: "free",
        speaker: "Giada",
        prompt: "Giada dice: «Ma allora a chi posso voler bene? Tutti mi mettono dei confini.» Come le rispondi — aiutandola a distinguere i diversi tipi di relazione senza svalutare il bisogno che esprime?",
        placeholder: "Scrivi la tua risposta a Giada…",
        aiFeedback: {
          intro: "Valutazione euristica. Cerca questi pattern nella tua risposta.",
          strengths: [
            "Distingui i diversi tipi di relazione (amicizia, amore, relazione professionale) senza metterli in gerarchia: nessuno è 'meno vero' dell'altro.",
            "Validi il bisogno di vicinanza prima di parlare dei confini — mantieni il contatto emotivo con Giada.",
            "Non usi 'ci sono persone giuste per te': è condiscendente e riduce Giada a qualcuno che aspetta il matching giusto."
          ],
          improve: [
            "Hai scritto 'dipende da te' o 'devi lavorare su te stessa prima'? Sono forme di gatekeeping: condizionano un diritto a una prestazione personale.",
            "Hai detto 'capisco' senza esplorare concretamente dove Giada potrebbe costruire relazioni? La comprensione senza azione è consolazione vuota.",
            "Proponi contesti specifici e realistici dove Giada può incontrare persone? Rende il discorso concreto e non solo teorico."
          ],
          missedKeywords: ["limite professionale", "affettività", "autodeterminazione"]
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
            feedback: "'Prenditelo con calma' suona come un consiglio non richiesto che infantilizza Giada. La direzione è giusta ma manca la concretezza su come puoi supportarla — e il messaggio diventa vago."
          },
          {
            text: "«Sì, ma è importante che tu lo faccia con persone che ti rispettano davvero e che sono adatte a te.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola (selezione paternalistica): chi decide chi è 'adatto' a Giada? Stai implicitamente mettendo in dubbio la sua capacità di scegliere — che è infantilizzazione mascherata da cura."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Giada",
        prompt: "Giada: «Ma quello che ti dico rimane tra noi? O lo dici alla coordinatrice o scrivi qualcosa?»",
        choices: [
          {
            text: "«Quello che mi hai condiviso oggi rimane tra noi, a meno che non emerga qualcosa che mette in pericolo te o un'altra persona — questo è il confine della riservatezza professionale. Ti dico sempre prima se devo condividere qualcosa.»",
            quality: "good",
            points: 20,
            feedback: "Spieghi il principio della riservatezza in modo onesto e completo: né totale né vaga. Giada sa esattamente dove è il limite e perché — questo genera fiducia reale, non cieca."
          },
          {
            text: "«Sì, quello che mi dici è riservato. Puoi stare tranquilla.»",
            quality: "partial",
            points: 10,
            feedback: "Non è del tutto falso, ma la riservatezza ha limiti legali e professionali che non hai nominato. Dare una rassicurazione totale crea aspettative che potrebbero non reggere — e allora la fiducia si rompe in modo peggiore."
          },
          {
            text: "«Lo porto in supervisione, come faccio sempre per i casi delicati — ma senza fare il tuo nome.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola professionale: la supervisione è necessaria, ma detto così genera ansia invece di chiarezza. 'Lo dico a qualcuno ma senza il tuo nome' suona come una violazione parziale, non come una garanzia. La supervisione va contestualizzata nel tuo mandato professionale, non offerta come dato rassicurante."
          }
        ]
      },
      {
        type: "narration",
        text: "Giada annuisce piano. «Ok.» C'è ancora qualcosa di irrisolto nell'aria, com'è giusto che sia. Ma il confine è stato posto senza rompere la relazione — e il desiderio di Giada è rimasto in piedi, degno. La fiducia non si è rotta: è diventata più onesta."
      }
    ],
    criticalErrorsInfo: [
      "Colpevolizzare o correggere la persona per aver espresso un sentimento ('non si dice').",
      "Condizionare il diritto all'affettività a un percorso di 'maturazione' personale.",
      "Dare una rassicurazione totale e falsa sulla riservatezza."
    ],
    suggestions: [
      "Valida sempre il sentimento prima di porre il limite: il confine professionale riguarda il tuo ruolo, non il valore della persona.",
      "Spiega perché il limite esiste, non solo che esiste: rende la risposta educativa invece che punitiva.",
      "Distingui il rifiuto della richiesta dal rifiuto della persona — Giada deve uscire dall'incontro sentendosi degna.",
      "La riservatezza ha confini: spiegarli onestamente costruisce fiducia più duratura di una promessa assoluta."
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
    duration: "15–18 min",
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
            feedback: "Semplice, diretto, privo di aspettative. Dai a Samuele il permesso senza anticipare o orientare il contenuto. Questo tipo di apertura minima è spesso la più potente perché lascia a lui il controllo."
          },
          {
            text: "«Certo, sono qui per ascoltarti. Cosa c'è?»",
            quality: "partial",
            points: 10,
            feedback: "Il tono è disponibile, ma 'cosa c'è?' spinge verso il contenuto prima che Samuele sia pronto. Meglio lasciare a lui i tempi senza accelerare."
          },
          {
            text: "«Se è una cosa delicata, forse è meglio che ne parli con uno psicologo o con la coordinatrice.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico (delega impropria): stai rimandando Samuele altrove prima ancora di sapere cosa vuole dire. Questo comunica che l'argomento è troppo per te — e che lui ha fatto male a iniziare. La fiducia si rompe prima di costruirsi."
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
            feedback: "Il messaggio è giusto ma la risposta è troppo rapida. Dire 'sono cose normali' senza riconoscere la vergogna specifica di Samuele può farlo sentire non ascoltato — come se la sua esperienza fosse liquidata invece di accolta."
          },
          {
            text: "«Capisco. È importante saper gestire questi impulsi in modo sano.»",
            quality: "poor",
            points: 5,
            feedback: "Saltare alla 'gestione' senza prima riconoscere la vergogna conferma implicitamente che c'è qualcosa da controllare. Stai rispondendo prima di ascoltare — e stai medicalizzando un bisogno normale."
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
            feedback: "Sposti la responsabilità della vergogna dove appartiene: non su Samuele, ma sul contesto che non ha saputo parlargli. È una restituzione importante — libera Samuele da una colpa che non è sua."
          },
          {
            text: "«Hai ragione, queste cose spesso non vengono dette abbastanza.»",
            quality: "partial",
            points: 10,
            feedback: "Riconosci il problema sistemico ma resti in superficie. Non restituisci a Samuele l'innocenza rispetto alla vergogna che si porta — rimane un dato di fatto, non una costruzione smontabile."
          },
          {
            text: "«Certo, sono argomenti che mettono in difficoltà molte famiglie. È comprensibile.»",
            quality: "poor",
            points: 5,
            feedback: "Stai giustificando il silenzio invece di stare con Samuele dentro quello che gli ha fatto. La famiglia viene assolta, lui resta con la vergogna. 'È comprensibile' non aiuta chi ha cresciuto pensando di essere sbagliato."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Samuele",
        prompt: "Samuele: «Ho sentito che esistono... cose. Non so come si chiamano. Materiali, libri, video — per capire queste cose. Sai dove si trovano?»",
        choices: [
          {
            text: "«Sì, esistono materiali educativi pensati per questo — accessibili e rispettosi. Possiamo cercarli insieme, se vuoi. Non c'è niente di strano nel voler capire meglio.»",
            quality: "good",
            points: 20,
            feedback: "Accogli la richiesta senza imbarazzo e senza sovra-reazione. Offrire di cercare insieme riduce la vergogna e trasforma una ricerca solitaria — spesso affidata a fonti inadatte — in un processo guidato. È educazione sessuale nella sua forma più utile."
          },
          {
            text: "«È una domanda legittima. Ne parlo con la coordinatrice per capire se rientra nel nostro mandato, e ti faccio sapere.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola (delega + silenzio educativo): delegare alla coordinatrice una domanda di educazione sessuale legittima comunica che l'argomento è ancora fuori limite. Il rimando è già un messaggio di chiusura — proprio il silenzio educativo che ha prodotto la vergogna di Samuele."
          },
          {
            text: "«Bisogna fare attenzione con questi materiali — online c'è di tutto. Forse è meglio parlarne prima con uno psicologo, per capire cosa ti serve davvero.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico (medicalizzazione + silenzio educativo): rispondere a una richiesta di educazione con un avviso di pericolo e un rimando clinico è esattamente il meccanismo che produce vergogna e isolamento. Stai dicendo che informarsi sulla sessualità è rischioso e che ha bisogno di un esperto per farlo."
          }
        ]
      },
      {
        type: "free",
        speaker: "Samuele",
        prompt: "Samuele ti guarda per la prima volta: «Tu pensi che una persona come me possa avere una vita… affettiva, sessuale, normale?» Come rispondi?",
        placeholder: "Scrivi la tua risposta a Samuele…",
        aiFeedback: {
          intro: "Valutazione euristica. Cerca questi pattern nella tua risposta.",
          strengths: [
            "Hai risposto in modo diretto e affermativo ('sì, puoi', 'hai diritto'): Samuele ha bisogno di un permesso chiaro, non di una risposta sfumata.",
            "Hai collegato il diritto all'affettività alla sua identità di adulto — non alla sua disabilità, non a una valutazione della sua capacità.",
            "Hai evitato la parola 'normale' sostituendola con 'piena', 'propria', 'tua': normale presuppone un confronto con una norma esterna che non esiste."
          ],
          improve: [
            "Hai usato 'dipende da…'? Questa formula introduce condizioni dove non ce ne sono — riduce la portata di un diritto a una negoziazione.",
            "Hai risposto con una domanda invece di una risposta chiara? Samuele non ha bisogno di essere esplorato: ha bisogno di essere visto.",
            "Hai condizionato la risposta a una valutazione ('se ti senti pronto', 'se trovi la persona giusta')? Sono forme di gatekeeping mascherate da prudenza."
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
            feedback: "Breve, pieno, senza condizioni. Confermi che l'apertura di Samuele è stata accolta — e che può tornare. Non hai risolto niente, hai costruito un luogo sicuro."
          },
          {
            text: "«Certo, ci organizziamo per un altro momento.»",
            quality: "partial",
            points: 10,
            feedback: "Il contenuto è giusto ma il tono burocratico raffredda quello che è appena successo. 'Ci organizziamo' mette distanza dove serve continuità."
          },
          {
            text: "«Sì, magari la prossima volta coinvolgiamo anche la coordinatrice così siamo in più a supportarti.»",
            quality: "poor",
            points: 5,
            feedback: "Portare qualcun altro nello spazio che Samuele ha appena aperto — senza che lui lo abbia chiesto — tradisce la fiducia che ha riposto in te. Proteggi quello che è stato costruito: non allargare senza consenso."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Samuele",
        prompt: "Samuele: «Non vorrei che ne parlassi in giro. Voglio dire — dentro il centro. Che rimanga tra noi.»",
        choices: [
          {
            text: "«Quello che mi hai detto oggi è tuo. Non lo condividerò senza che tu lo voglia, a meno che non ci sia qualcosa che ti mette in pericolo. E se un domani fosse utile coinvolgere qualcuno, te lo chiederei prima.»",
            quality: "good",
            points: 20,
            feedback: "Rispetti la richiesta senza promettere una riservatezza impossibile. Gli spieghi i confini e — fondamentale — gli dici che manterrà il controllo su cosa condividere. È rispetto della privacy nell'unico modo onesto in cui può esistere in un contesto professionale."
          },
          {
            text: "«Capisco. Non dirò niente — quello che succede qui rimane qui.»",
            quality: "partial",
            points: 10,
            feedback: "Il gesto è rispettoso ma la promessa assoluta potrebbe non reggere. Se un giorno dovessi usare la supervisione o fare una segnalazione, la fiducia si romperebbe in modo peggiore. Meglio spiegare i confini reali."
          },
          {
            text: "«Lo annoto nella tua cartella personale, ma solo per uso interno: serve al team per seguirti meglio.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico (violazione della privacy): documentare in cartella quello che Samuele ti ha chiesto esplicitamente di non condividere è una violazione della fiducia e della sua intimità. 'Per uso interno' non è una giustificazione quando c'è una richiesta esplicita di riservatezza su un contenuto personale — non su un bisogno di cura."
          }
        ]
      },
      {
        type: "narration",
        text: "Samuele esce più leggero di com'è entrato. Non è cambiato niente, e tuttavia qualcosa si è mosso: per la prima volta qualcuno gli ha detto, con semplicità, che i suoi desideri esistono e hanno diritto di stare al mondo. E che il silenzio di prima non era colpa sua."
      }
    ],
    criticalErrorsInfo: [
      "Rimandare la persona altrove prima ancora di sapere cosa vuole dire (delega impropria).",
      "Rispondere alla richiesta di educazione con avvisi di pericolo e rimandi clinici (medicalizzazione).",
      "Documentare in cartella contenuti personali esplicitamente marcati come riservati (violazione della privacy)."
    ],
    suggestions: [
      "Il silenzio degli adulti non è innocuo: ha insegnato a Samuele che i suoi desideri sono sbagliati. Il tuo compito è smontare quella lezione.",
      "Una risposta diretta e affermativa vale più di mille sfumature: Samuele ha bisogno di un permesso chiaro.",
      "La riservatezza ha confini reali — spiegarli onestamente costruisce fiducia più duratura di una promessa assoluta.",
      "Non allargare lo spazio senza il consenso esplicito della persona: la fiducia si costruisce one-to-one, non si delega."
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
    duration: "16–19 min",
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
            text: "«Nei documenti internazionali è un diritto riconosciuto. Non possiamo ignorarlo.»",
            quality: "partial",
            points: 10,
            feedback: "Il riferimento normativo è corretto, ma può suonare come una chiusura dall'alto. Il collega non ha bisogno di una citazione — ha bisogno di sentirsi ascoltato prima di cambiare posizione."
          },
          {
            text: "«Hai ragione, forse è meglio evitare temi così scivolosi. Non è il momento giusto.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: assecondare l'evitamento rinforza il silenzio attorno a Marco. Come membro dell'équipe hai la responsabilità di portare la voce della persona — non di facilitare la sua invisibilità. 'Non è il momento giusto' è la frase con cui i diritti vengono rinviati per sempre."
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
            feedback: "Ancori la proposta a Marco e a ciò che lui già esprime, non a una teoria. Rendi la cosa fattibile e verificabile. Sposti il confronto dal 'se' al 'come' — è un contributo professionale solido."
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
            feedback: "Un obiettivo vago non aiuta Marco e non tutela l'équipe — è un modo per mettere una firma senza impegnarsi. La genericità non protegge: nasconde. E di solito non porta a nessuna azione concreta."
          }
        ]
      },
      {
        type: "free",
        speaker: "Collega",
        prompt: "Il collega insiste: «E i genitori? Se si viene a sapere che affrontiamo certi argomenti, succede un casino.» Come rispondi all'équipe su questo punto?",
        placeholder: "Scrivi come risponderesti al collega davanti all'équipe…",
        aiFeedback: {
          intro: "Valutazione euristica. Attenzione a questi pattern nella tua risposta.",
          strengths: [
            "Nomini i genitori come possibili alleati da coinvolgere — non come ostacoli da aggirare: includi invece di temere.",
            "Distingui il 'lavorare sulle relazioni' dall'educazione sessuale esplicita: riduce l'allarme senza rinunciare all'obiettivo.",
            "Proponi che la comunicazione con i genitori sia parte del progetto, non un rischio da gestire a posteriori."
          ],
          improve: [
            "Hai scritto 'non succederà niente' o 'non se ne accorgeranno'? Non puoi saperlo — e Franco lo sa. Queste frasi minano la tua credibilità invece di rassicurare.",
            "Hai minimizzato le preoccupazioni del collega invece di riconoscerle? Un collega che non si sente ascoltato non cambia posizione.",
            "Hai proposto di tenere i genitori all'oscuro? È l'approccio più rischioso — e contraddice il principio di alleanza educativa."
          ],
          missedKeywords: ["alleanza educativa", "presa in carico"]
        }
      },
      {
        type: "dialogue",
        speaker: "Collega",
        prompt: "Un'altra collega interviene: «Prima di inserire obiettivi, non dovremmo far valutare Marco dal nostro psichiatra? Per capire se è davvero pronto, se è una cosa che lo mette in difficoltà psicologicamente.»",
        choices: [
          {
            text: "«La valutazione psichiatrica serve per la salute mentale — non per stabilire se una persona ha diritto a una vita affettiva. Se Marco lo esprime, è già la risposta. L'obiettivo è costruire contesti, non decidere se può desiderare.»",
            quality: "good",
            points: 20,
            feedback: "Nomini e smonti la trappola della medicalizzazione in modo chiaro: lo psichiatra non è il gatekeeper dell'affettività. Distingui la valutazione clinica dal diritto all'autodeterminazione — è un contributo preciso che aiuta l'équipe a non confondere ambiti."
          },
          {
            text: "«Potrebbe essere utile come supporto, non come prerequisito. Chiediamo una consulenza in parallelo.»",
            quality: "partial",
            points: 10,
            feedback: "La distinzione tra consulenza e prerequisito è importante, ma suona come una concessione. Il rischio è che l'équipe aspetti la consulenza prima di muoversi. Meglio essere più netti: l'affettività non ha bisogno di una valutazione clinica per stare nel PEI."
          },
          {
            text: "«Ha senso: avere una valutazione professionale ci copre anche da eventuali contestazioni. Così siamo tutelati.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico (medicalizzazione + delega impropria): usare il linguaggio della 'tutela professionale' per giustificare una valutazione psichiatrica del diritto all'affettività è una trappola. Il tuo mandato educativo non ha bisogno di una firma clinica per essere legittimo. Stai congela il diritto di Marco dietro una burocrazia difensiva."
          }
        ]
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
            feedback: "Rispondi alla preoccupazione concreta del collega con una proposta concreta. La supervisione condivisa trasforma il tema da peso individuale a responsabilità del gruppo — che è dove deve stare."
          },
          {
            text: "«Lo decidiamo nelle prossime settimane, adesso chiudiamo qui.»",
            quality: "poor",
            points: 5,
            feedback: "Rimandare la decisione operativa rischia di vanificare il lavoro appena fatto. Il collega ha bisogno di una risposta concreta adesso — altrimenti l'accordo rimane sulla carta e nessuno fa niente."
          },
          {
            text: "«Chi vuole se ne occupa, non è obbligatorio.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: rendere facoltativo un obiettivo del PEI di Marco significa che non diventerà mai reale. I bisogni delle persone non possono dipendere dalla disponibilità volontaria di qualcuno. Stai trasformando un diritto in un favore."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Coordinatrice",
        prompt: "La coordinatrice: «Bene. Inseriamo l'obiettivo. Ma chi lo dice a Marco? E come?»",
        choices: [
          {
            text: "«Glielo diciamo noi, direttamente. Marco deve essere il primo a sapere che stiamo costruendo qualcosa per lui — e deve poter dire se lo vuole davvero. Non si firma un PEI su qualcuno senza coinvolgerlo.»",
            quality: "good",
            points: 20,
            feedback: "Il PEI deve essere costruito con Marco, non per Marco. Il tuo intervento riporta al centro il principio del sostegno alle decisioni — e impedisce che il documento esista in modo autoreferenziale, senza che la persona lo riconosca come suo."
          },
          {
            text: "«Lo mettiamo nel documento e quando lo firma durante la riunione di PEI, avrà modo di leggerlo.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola burocratica: far firmare un PEI già scritto non è coinvolgimento — è ratifica. Marco deve essere consultato prima, non informato dopo. La firma non sostituisce la partecipazione al processo."
          },
          {
            text: "«Glielo diciamo nel prossimo colloquio individuale — decidiamo noi come presentarlo, in modo da non creare false aspettative.»",
            quality: "partial",
            points: 10,
            feedback: "L'intenzione è buona, ma 'decidiamo noi come presentarlo' è già paternalistico. Marco non deve ricevere qualcosa di già confezionato: deve poter partecipare alla costruzione — il 'come presentarlo' lo decide anche lui."
          }
        ]
      },
      {
        type: "narration",
        text: "La riunione si chiude con un accordo di minima: un obiettivo documentato, un referente, un momento di verifica tra sei settimane. Non è la rivoluzione. Ma Marco ha un'équipe che adesso sa che quei bisogni esistono — e che hanno un posto nel suo progetto di vita."
      }
    ],
    criticalErrorsInfo: [
      "Assecondare l'evitamento del tema rinunciando a rappresentare i bisogni di Marco.",
      "Subordinare il diritto all'affettività a una valutazione psichiatrica (medicalizzazione).",
      "Rendere facoltativa la presa in carico di un bisogno già emerso.",
      "Costruire il PEI senza consultare Marco (tutela sostitutiva)."
    ],
    suggestions: [
      "In un'équipe in disaccordo, la tua prima mossa è riconoscere le preoccupazioni altrui — non confutarle.",
      "Ancorare il confronto alla persona concreta (Marco, i suoi bisogni, le sue parole) sposta il piano dall'ideologico al professionale.",
      "La valutazione psichiatrica non è il prerequisito dell'affettività: confonderli è medicalizzazione.",
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
    duration: "16–19 min",
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
            feedback: "Il punto legale è corretto, ma iniziare da lì mette Franco sulla difensiva. Probabilmente sa già che è un confine — il problema è che non riesce a non attraversarlo. Serve capire perché prima di dire cosa deve smettere di fare."
          },
          {
            text: "«Ha ragione, con persone come Francesco è meglio stare attenti — la famiglia è la prima tutela.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: validare il controllo come risposta appropriata alla disabilità di Francesco rinforza l'infantilizzazione. Stai dicendo che il controllo è giustificato dalla sua condizione — che è esattamente il problema, non la soluzione."
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
            text: "«Forse è meglio che Francesco usi solo applicazioni controllate e monitorate, così è più sicuro.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola (sorveglianza tecnologica): proporre app monitorate sposta il controllo su strumenti tecnici invece di smontarlo. Non stai aiutando Francesco a costruire autonomia: stai aiutando Franco a controllare con meno sforzo e con meno visibilità."
          },
          {
            text: "«Possiamo lavorare con Francesco su come riconoscere le situazioni pericolose online, così impara.»",
            quality: "partial",
            points: 10,
            feedback: "La proposta è giusta ma risponde al bisogno di Franco più che al problema di fondo. Non hai ancora detto a Franco cosa sta facendo a Francesco con quella lettura segreta — che è il punto centrale."
          }
        ]
      },
      {
        type: "free",
        speaker: "Franco",
        prompt: "Franco si appoggia allo schienale: «Ma se succede qualcosa di brutto, la colpa è mia? Io non dormo la notte. Ho paura di sbagliare da tutte e due le parti.» Come rispondi a questa apertura?",
        placeholder: "Scrivi come rispondi a Franco…",
        aiFeedback: {
          intro: "Valutazione euristica. Cerca questi pattern nella tua risposta.",
          strengths: [
            "Riconosci la fatica di Franco — non solo come errore da correggere: questo lo mantiene in relazione con te e lo rende più disponibile a cambiare.",
            "Nomini la 'dignità del rischio': il diritto di Francesco a fare esperienze, anche difficili, come parte del proprio sviluppo.",
            "Proponi una visione alternativa della cura: non assenza di rischio, ma presenza di Franco come punto di riferimento a cui Francesco può tornare."
          ],
          improve: [
            "Hai scritto 'non succederà niente di brutto' o 'non si preoccupi'? Franco lo sa che non puoi saperlo — e queste frasi tolgono credibilità invece di rassicurare. Meglio parlare di come rispondere se succede qualcosa.",
            "Hai proposto che 'ci pensa il servizio'? È delega impropria: Franco non è un problema da rimuovere, è una risorsa da riorientare.",
            "Hai distinto 'sbagliare come padre' da 'sbagliare come controllore'? La paura di Franco è reale — ma il controllo non la risolve, la amplifica."
          ],
          missedKeywords: ["dignità del rischio", "controllo vs cura", "sostegno alle decisioni"]
        }
      },
      {
        type: "dialogue",
        speaker: "Franco",
        prompt: "Franco: «Mia moglie faceva così — leggeva i messaggi, gestiva le amicizie. Francesco ci era cresciuto, non ha mai protestato. Perché adesso dovrebbe essere diverso?»",
        choices: [
          {
            text: "«Capisce che quello che ha ricevuto è stato fatto con amore. Ma Francesco adesso ha 35 anni — quello che era protezione da bambino, su un adulto diventa limitazione. Il punto non è come è sempre stato, ma chi è Francesco oggi.»",
            quality: "good",
            points: 20,
            feedback: "Riconosci la continuità affettiva senza validare il comportamento. Sposti l'asse dal passato (come è sempre stato) al presente (chi è Francesco oggi). La disabilità non è un'infanzia permanente — ed è fondamentale che Franco lo ascolti da te."
          },
          {
            text: "«Non dico che sua moglie sbagliava — ma i tempi sono cambiati, ci sono approcci più aggiornati.»",
            quality: "partial",
            points: 10,
            feedback: "'I tempi sono cambiati' suona come un aggiornamento normativo, non come un ragionamento su Francesco. Franco ha bisogno di capire perché questo cambio è necessario per suo figlio — non di essere aggiornato sulle linee guida."
          },
          {
            text: "«Se Francesco non ha mai protestato, è un buon segno — significa che ha fiducia in lei. Potremmo rivedere qualcosa insieme, ma con gradualità.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico: interpretare il silenzio come consenso è una trappola classica. Francesco potrebbe non aver protestato per abitudine, dipendenza o paura — non perché fosse d'accordo. 'Non ha mai protestato' non è un indicatore di benessere: è un segnale da esplorare, non da usare come rassicurazione."
          }
        ]
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
            feedback: "Dai a Franco un'azione concreta e la ridefinisci all'interno di un ruolo che lui già riconosce: padre, non controllore. La trasparenza con Francesco è fondamentale — il cambiamento deve essere visibile a chi ne beneficia."
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
            feedback: "Trappola (delega impropria): delegare al servizio significa escludere Franco dal percorso di crescita di Francesco. Il padre non è un problema da rimuovere — è una risorsa da riorientare. Toglierlo dalla scena non aiuta nessuno."
          }
        ]
      },
      {
        type: "dialogue",
        speaker: "Franco",
        prompt: "Franco: «Va bene, non leggo più i messaggi. Ma posso almeno sapere i nomi delle persone che frequenta? Solo i nomi, nient'altro — per stare tranquillo.»",
        choices: [
          {
            text: "«Capisce la differenza tra sapere e sorvegliare? Francesco può scegliere di dirle chi frequenta — se vuole condividerlo con lei. Ma non è qualcosa che il servizio può fare al posto suo: sarebbe sorveglianza per delega.»",
            quality: "good",
            points: 20,
            feedback: "Nomini chiaramente il meccanismo — sorveglianza per delega — senza colpevolizzare Franco. E riporti la questione al posto giusto: se Francesco vuole condividere la sua rete con il padre, è suo diritto farlo. Non è il servizio a farlo per lui."
          },
          {
            text: "«Solo i nomi non sono informazioni sensibili — possiamo condividerli, se aiuta la tranquillità di lei.»",
            quality: "poor",
            points: 5,
            feedback: "Trappola (minimizzazione): 'solo i nomi' non cambia la sostanza del controllo. Anche un nome ha valore informativo, e condividerlo senza il consenso di Francesco viola la sua autonomia. La tranquillità di Franco non si ottiene a spese della libertà di Francesco."
          },
          {
            text: "«Possiamo tenere un occhio sulla sua rete relazionale — fa parte della nostra presa in carico.»",
            quality: "critical",
            points: 0,
            critical: true,
            feedback: "Errore critico (sorveglianza per delega): offrire al padre un monitoraggio della rete relazionale di Francesco attraverso il servizio costruisce un sistema di controllo indiretto usando la relazione professionale come strumento. La 'presa in carico' non include mappare la vita sociale di qualcuno per i suoi familiari."
          }
        ]
      },
      {
        type: "narration",
        text: "Franco se ne va con più domande di quante ne aveva all'inizio — e qualcuna in meno. Non ha smesso di amare suo figlio. Ha cominciato, forse, a chiedersi se amarlo significhi anche lasciarlo vivere. E questo — non una promessa di sicurezza — è il punto di partenza."
      }
    ],
    criticalErrorsInfo: [
      "Validare il controllo come risposta appropriata alla disabilità della persona.",
      "Interpretare il silenzio della persona come consenso al controllo.",
      "Offrire al caregiver un monitoraggio della rete relazionale attraverso il servizio (sorveglianza per delega).",
      "Rassicurare il caregiver promettendo assenza di rischi."
    ],
    suggestions: [
      "La paura di Franco è reale: va accolta prima di essere ridiscussa. Un genitore che non si sente capito non cambia.",
      "Distingui cura e controllo con esempi concreti — non basta enunciare il principio.",
      "Il silenzio non è consenso: Francesco potrebbe non aver mai protestato per dipendenza o paura.",
      "Il caregiver ha bisogno di un ruolo alternativo che abbia senso: da controllore a persona di riferimento a cui tornare."
    ]
  }
];
