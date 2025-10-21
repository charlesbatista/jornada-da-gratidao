import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 🗄️ BACKUP AUTOMÁTICO - 2025-10-21T03-24-44
 * 
 * Este arquivo foi gerado automaticamente pelo script de backup
 * Contém todos os dados do banco no momento do backup
 * 
 * Para restaurar: npm run restore
 */
async function restoreBackup() {
  try {
    console.log('🔄 Restaurando backup de 2025-10-21T03-24-44...')
    
    // Limpar dados existentes
    console.log('🗑️  Limpando dados existentes...')
    await prisma.day.deleteMany({})
    await prisma.journey.deleteMany({})
    
    const journeysData = [
  {
    "id": "cmg2k6mvp0000ktk4hwot1e3e",
    "startDate": "2025-08-29",
    "totalDays": 90,
    "createdAt": "2025-09-27T17:42:41.749Z",
    "updatedAt": "2025-09-27T17:42:41.749Z",
    "days": [
      {
        "dayNumber": 1,
        "isCompleted": true,
        "reflection": "Depressão, tristeza, prejuízos financeiros, não reconhecer a si mesmo.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-08-29"
      },
      {
        "dayNumber": 2,
        "isCompleted": true,
        "reflection": "Morte. Destruição. Atrasos de sonhos. Continuar construindo patrimônio.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-08-30"
      },
      {
        "dayNumber": 3,
        "isCompleted": true,
        "reflection": "Confiança em nós mesmos, dinheiro, saúde física, mental.",
        "difficulty": "medio",
        "completedAt": "2025-08-31"
      },
      {
        "dayNumber": 4,
        "isCompleted": true,
        "reflection": "Ansiedade, medo, tristeza, arrependimento.",
        "difficulty": "medio",
        "completedAt": "2025-09-01"
      },
      {
        "dayNumber": 5,
        "isCompleted": true,
        "reflection": "Falta de confiança, amor, admiração, parece que a gente se odeia.",
        "difficulty": "medio",
        "completedAt": "2025-09-02"
      },
      {
        "dayNumber": 6,
        "isCompleted": true,
        "reflection": "Fracasso, falta de palavra, falta de admiração, não ter vontade de viver. Não ter vontade de trabalhar. Sentir-se manipulável.",
        "difficulty": "facil",
        "completedAt": "2025-09-03"
      },
      {
        "dayNumber": 7,
        "isCompleted": true,
        "reflection": "Viver com mais tranquilidade, saber que conseguimos, somos capazes, recarregar as energias.",
        "difficulty": "facil",
        "completedAt": "2025-09-04"
      },
      {
        "dayNumber": 8,
        "isCompleted": true,
        "reflection": "ouvir e ficar em alerta mesmo que a gente queira ignorar.",
        "difficulty": "facil",
        "completedAt": "2025-09-05"
      },
      {
        "dayNumber": 9,
        "isCompleted": true,
        "reflection": "tentar recuperar o dinheiro que perdeu (principal).",
        "difficulty": "facil",
        "completedAt": "2025-09-06"
      },
      {
        "dayNumber": 10,
        "isCompleted": true,
        "reflection": "privação de sono, ansiedade, distorção de dopamina, cansaço mental.",
        "difficulty": "facil",
        "completedAt": "2025-09-07"
      },
      {
        "dayNumber": 11,
        "isCompleted": true,
        "reflection": "vergonha da minha palavra, de mim mesmo, deixar de ter a percepção real do dinheiro e sentir vergonha ao comparar-se com outras pessoas que suam ao ganhar dinheiro, sentimos vergonha da gente e também vergonha do que fizemos com o nosso dinheiro.",
        "difficulty": "facil",
        "completedAt": "2025-09-08"
      },
      {
        "dayNumber": 12,
        "isCompleted": true,
        "reflection": "Academia, fazer essas reuniões, videogames, autoanálise, terapia, amor próprio, gratidão e pensar no que ainda podemos perder.",
        "difficulty": "facil",
        "completedAt": "2025-09-09"
      },
      {
        "dayNumber": 13,
        "isCompleted": true,
        "reflection": "não acreditar que somos merecedores, dignos de confiança, depreciação própria.",
        "difficulty": "facil",
        "completedAt": "2025-09-10"
      },
      {
        "dayNumber": 14,
        "isCompleted": true,
        "reflection": "trabalho, investimentos, casas, barulhos.",
        "difficulty": "facil",
        "completedAt": "2025-09-11"
      },
      {
        "dayNumber": 15,
        "isCompleted": true,
        "reflection": "adrenalina, o dinheiro que eu tinha/deveria ter (recuperar). em suma, recuperar, e sabemos que jamais recuperaremos.",
        "difficulty": "facil",
        "completedAt": "2025-09-12"
      },
      {
        "dayNumber": 16,
        "isCompleted": true,
        "reflection": "não há.",
        "difficulty": "facil",
        "completedAt": "2025-09-13"
      },
      {
        "dayNumber": 17,
        "isCompleted": true,
        "reflection": "inteligentes, agraciados, prósperos, do bem, abençoados, ricos, alegres, engraçados, cheios de vida e de Deus.",
        "difficulty": "facil",
        "completedAt": "2025-09-14"
      },
      {
        "dayNumber": 18,
        "isCompleted": true,
        "reflection": "a raiva de lembrar do que perdemos faz a gente querer recair.",
        "difficulty": "facil",
        "completedAt": "2025-09-15"
      },
      {
        "dayNumber": 19,
        "isCompleted": true,
        "reflection": "tristeza, arrependimentos, decisões financeiras.",
        "difficulty": "facil",
        "completedAt": "2025-09-16"
      },
      {
        "dayNumber": 20,
        "isCompleted": true,
        "reflection": "se reconhecer vulneráveis nos faz mais fortes porque podemos traçar estratégias.",
        "difficulty": "facil",
        "completedAt": "2025-09-17"
      },
      {
        "dayNumber": 21,
        "isCompleted": true,
        "reflection": "não convidar, lembrar das perdas, zerar os dias vencidos, nos convencer de que em todos os cenários, jogar é péssimo.",
        "difficulty": "medio",
        "completedAt": "2025-09-18"
      },
      {
        "dayNumber": 22,
        "isCompleted": true,
        "reflection": "trabalho, vídeogame, valorizar o que temos, viajar, comer, sair, comprar coisas que a gente gosta.",
        "difficulty": "medio",
        "completedAt": "2025-09-19"
      },
      {
        "dayNumber": 23,
        "isCompleted": true,
        "reflection": "reuniões diárias, academias, horário pra dormir, trabalho, lazer (incluir mais).",
        "difficulty": "medio",
        "completedAt": "2025-09-20"
      },
      {
        "dayNumber": 24,
        "isCompleted": true,
        "reflection": "traz clareza a tona aos nossos verdadeiros pensamentos que nós queremos nos livrar dessa maldição.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-21"
      },
      {
        "dayNumber": 25,
        "isCompleted": true,
        "reflection": "projetar o futuro, o que pode acontecer, lembrar do que aconteceu.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-22"
      },
      {
        "dayNumber": 26,
        "isCompleted": true,
        "reflection": "foi importante criar barreiras porque elas nos faz lembrar de onde não queremos estar, do que não podemos fazer, faz pensar 2x ou mais antes de depositar.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-23"
      },
      {
        "dayNumber": 27,
        "isCompleted": true,
        "reflection": "pequenas vitorias como dialogos para acalmar, dinheiro entrando e a gente resistindo e não perdendo mais.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-24"
      },
      {
        "dayNumber": 28,
        "isCompleted": true,
        "reflection": "imaginar todos os cenários possíveis e lembrar de tudo que a gente já passou, lembrar constantemente faz com que a gente tenha consciências dos nossos atos, principalmente antes de depositar.",
        "difficulty": "muito_dificil",
        "completedAt": "2025-09-25"
      },
      {
        "dayNumber": 29,
        "isCompleted": true,
        "reflection": "Nos afastou da nossa casa, que era nosso grande sonho. Nos tirou possíveis viagens, uma tranquilidade maior de poder ajudar pessoas ao nosso redor, nos tirou uma tranquilidade financeira que estava muito próxima de acontecer, quase tirou nosso maior sonho: que é ter um casamento saudável e próspero, rodeado de pessoas maravilhosas e com possibilidade de alçar voos muito maiores do que cada um poderia conseguir sozinho. ",
        "difficulty": "facil",
        "completedAt": "2025-09-26"
      },
      {
        "dayNumber": 30,
        "isCompleted": true,
        "reflection": "Significa uma vida onde as obrigações e o lazer convivem de forma harmoniosa. O jogo consegue bagunçar tudo, onde momentos que eram pra ser de trabalho/dedicação, cuidar da saúde, cuidar do casamento, viram momentos de estresse, preocupação, perda financeira, brigas conjugais, distorção da realidade, influencia a vontade de não trabalhar mais porque tira o sentido de ganhar dinheiro, porque a gente vai lá e joga tudo fora depois. Tira a razão do trabalho, das economias, das boas escolhas, de uma vida com mais racionalidade, e tira também o prazer dos momentos que são reservados para lazer.",
        "difficulty": "facil",
        "completedAt": "2025-09-27"
      },
      {
        "dayNumber": 31,
        "isCompleted": true,
        "reflection": "Não alimentar pensamentos relacionados ao vício; poder mostrar pra si mesmo e pro dinheiro que você consegue controlá-los, que o jogo não tem poder de nada. Reconhecendo principalmente as nossas vulnerabilidades, olhar olho a olho e reconhecer a gravidade da situação, que a gente estava beirando a destruição do nosso casamento, do nosso patrimônio. Estamos enxergando que levar a sério o tratamento dá resultado. Que entramos nisso juntos e que juntos também somos capazes de vencer essa luta diária, com muita resilência, paciência, amor, cooperação, respeito um pelo outro, e entender o poder da destruição disso, e não levar na brincadeira como muitas vezes nós levamos. Já tiveram dias que a gente relativizou muito o jogo, fazendo brincadeiras, associando diversão, e outras coisas. E toda vez que a gente falhava, a gente repetia frases horríveis sobre nós mesmos: que não eramos dignos de confiança, que eramos mentirosos, que não nos amavamos, que não eramos merecedores de que tudo que conquistamos e que ainda poderíamos conquista. Sinto que reconstruir a autoconfiança é um processo diário que através dessas reflexões da jornada, a gente entende. Entende que é um passo de cada vez, que é literalmente 1 dia após o outro; que é possível vencer as próximas 24h e não mais vencer os próximos 30 ou 60 dias. E com isso, a nossa autoconfiança vai sendo regada, com muita paciência, com muito dialógo, com um abrindo o olho do outro quando vê que o outro está precisando de ajuda, e não afundá-lo mais ainda, como fazíamos antes. A gente via que o outro estava ansioso, com abstiência, ou triste pelo que fez, e ao invés de ajudar, a gente só levava mais ainda para o buraco. Hoje, vencendo o dia 31, a gente enxerga melhor que SIM, podemos confiar em nós mesmos e no outro, porque estamos sendo capazes de provar dia após dia que, se a gente estiver alinhado com um mesmo propósito, que se a gente lembrar todo dia do buraco que a gente estava metido e sentir que o nosso amor pode nos libertar dessa prisão que só destruia, a gente entende que é capaz de vencer qualquer desafio. <3",
        "difficulty": "facil",
        "completedAt": "2025-09-28"
      },
      {
        "dayNumber": 32,
        "isCompleted": true,
        "reflection": "Charles: Você acha que o papel da família e dos amigos é super importante na recuperação, porque eles podem estar do seu lado, te ajudar, orar por você, enfim, oferecer um suporte. Mas, no seu caso, você sentiu que a sua família não te deu a atenção que você precisava. Você chegou a falar com eles, mas sentiu que não levaram muito a sério, e isso te deixou bem sozinho e desamparado. Hoje, ironicamente, quem tá te ajudando bastante é o seu pai, que você nem esperava, porque ele já passou por algo parecido e tá te dando uns conselhos valiosos. Então, a sua visão é que a família é importante, mas no seu caso pessoal, você não sentiu tanto esse apoio, embora agora esteja conseguindo lidar com isso melhor.\n\nWelder: Pra você, o papel da família fez toda a diferença. Você contou pra sua mãe nos momentos mais difíceis, quando perdeu mais dinheiro, e isso ajudou bastante. No ano passado, você já tinha conseguido ficar uns três meses ou mais sem jogar, muito pensando nela, no que ela poderia fazer com aquele dinheiro e na decepção que você poderia causar. E isso foi um incentivo importante. Hoje ela ainda tem esse papel, mas vocês estão escondendo que vocês tiveram umas recaídas e que, na verdade, estão há 32 dias sem jogar, enquanto ela acha que já são quase quatro meses. Você prefere não contar pra não preocupá-la agora. Mas, no fim, o apoio dela foi e continua sendo importante pra você se manter firme e, daqui a alguns meses, contar pra ela que, apesar das recaídas, você tá de pé e não vai cair de novo.",
        "difficulty": "medio",
        "completedAt": "2025-09-30"
      },
      {
        "dayNumber": 33,
        "isCompleted": true,
        "reflection": "A verdade é que tudo começou pq uma amiga ficou pressionando demais. A gente dizia não várias vezes, não queria entrar nisso, mas a insistência foi tanta que uma hora acabou acontecendo. Foi por causa dessa pressão que demos o primeiro passo nesse mundo dos jogos. E depois que entramos, as influências começaram a vir de todos os lados.\n\nO Welder conheceu o Tigrinho por causa da influenciadora Leandrinha, e foi ele quem me mostrou o jogo. Esse momento foi a porta de entrada pra um lugar que acabou fazendo a gente perder muito dinheiro. A partir daí, começaram a aparecer cada vez mais propagandas, influenciadores e conteúdos nas redes sociais, TV, aeroporto, Instagram, TikTok, tudo. E isso mexia com a nossa cabeça, pq lembrava a gente dos ganhos que já tevimos, mesmo sabendo que perdemos muito mais depois.\n\nO pior é que esses influenciadores apostam valores altos e mostram ganhos enormes, o que faz parecer que a gente também consegue. Foi isso que nos fez começar a apostar mais alto, mesmo com medo, achando que podia dar certo. Mas hoje a gente sabe que 99% das pessoas não entram nesse vício sozinhas, sempre tem um gatilho externo. No nosso caso, foi primeiro a pressão da amiga e depois a influência da Leandrinha.\n\nAgora a gente tenta se proteger. Bloqueamos perfis, colocamos filtros nas redes sociais, evitamos ver qualquer coisa relacionada a jogos e tentamos transformar qualquer vontade em repulsa quando aparece uma propaganda. Ainda tem pressão em todo canto, mas hoje a gente lembra do que passou e do quanto isso fez mal. Pra mim, nossa história com o vício resume numa palavra: pressão. A gente só entrou por causa disso. E por saber disso, estamos focados em não cair de novo e seguir firmes pra sair desse ciclo.",
        "difficulty": "facil",
        "completedAt": "2025-10-01"
      },
      {
        "dayNumber": 34,
        "isCompleted": true,
        "reflection": "Welder: Que aprendi a ter mais paciência, que tudo que foi perdido vai faltar pra minha mãe através do trabalho e não do jogo. Que eu nao tenho controle de nada, que não adianta traçar estratégia no jogo que sempre serei manipulado. Que essas ondas de abstinência vem mas que passam, basta ter paciência e força. E que a gente unidos somos mais fortes, parece clichê mas é muito verdade, juntos conseguimos vencer.\n\nCharles: aprendi que nunca estarei no controle quando o assunto é jogo/vício. Nunca serei forte o suficiente pra jogar e saber parar, jogar e saber como jogar, achar que estou num lugar que eu consigo dominar. Não é verdade. É um lugar que me controla totalmente. Eu aprendi que preciso me afastar 100% daquele ambiente e de tudo que me estimula. Aprendi que somos fortes pra vencer o vício juntos, que se eu decidir, eu consigo cumprir. Que preciso ter paciência no processo, porque tem dias que serão fáceis e dias muito difíceis, mas que a recompensa diária vem, seja no dinheiro que poderia ter sido perdido se mantendo em minha posse, seja na autoconfiança recuperada dia após dia, seja a paz no casamento e nas realizações pessoais, e principalmente, que dia após dia a minha percepção da realidade vai voltando, devagar mas vai.\n\nHoje especialmente foi um dia de lutas internas de ambos. Não que tenha sido DÍFICIL, mas foi um dia que os pensamentos vieram mais frequentes, ou mais fortes no sentido de criar possibilidades, cenários, etc.",
        "difficulty": "medio",
        "completedAt": "2025-10-02"
      },
      {
        "dayNumber": 35,
        "isCompleted": true,
        "reflection": "A forma de transformação é justamente o que estamos fazendo: seguir um dia de cada vez, conversando e continuando a ser quem somos  pessoas que pesquisam, pechincham e procuram sempre os melhores preços. Nossa relação com o dinheiro foi abalada durante os períodos de jogo. Acredito que chegamos a beirar uma linha difícil de retornar, mas, felizmente, conseguimos enxergar o caminho de volta a tempo.",
        "difficulty": "facil",
        "completedAt": "2025-10-03"
      },
      {
        "dayNumber": 36,
        "isCompleted": true,
        "reflection": "Welder: Lealdade com as pessoas que eu confio e que confiam em mim, empatia (principalmente comigo mesmo), entender que eu também erro e que consigo me levantar, e ambição (para sempre querer mais, querer melhorar, tanto pessoalmente quanto profissionalmente, e poder também ajudar as pessoas que estão junto comigo. \n\nCharles: ser honesto e verdadeiro, ético nas coisas, cultivar amor próprio.",
        "difficulty": "facil",
        "completedAt": "2025-10-04"
      },
      {
        "dayNumber": 37,
        "isCompleted": true,
        "reflection": "Charles: dar chances a novos esportes, iniciar por exemplo, vôlei com grupos, iniciar aulas de tênis ou qualquer outro esporte. Não criar desculpas, como: não gosto, não quero, não tenho tempo, não tenho dinheiro. Parar de deixar essas coisas no imaginável e começar a decidir datas. Vou ir ao médico pra ver se tenho liberação pra praticar esses esportes. Ou pelo menos começar a jogar beach tenis, que é um esporte mais tranquilo, que tem do lado de casa, que vai ajudar no físico, no mental, a criar uma nova rotina, ocupar o tempo a noite que antes a gente ocupava com jogo. Tava até falando isso pro Welder, que antes a gente não só agíamos como viciados e queriamos jogar a noite, mas como criamos um hábito, como qualquer outro, e a rotina pede que a gente siga hábitos, e o jogo também se tornou um. Temos que substituir, e graças a Deus tem inúmeras opções mais saudáveis, tanto para o corpo, quanto pra mente.\n\nWelder: não é hobbie, mas tem se tornado um: trabalho! Trabalhar mantem uma chance acessa do entusiamo, de ganhar dinheiro, de se sentir útil, de se sentir importante, ocupar o tempo com coisas que dão retorno e que fazem me sentir vivo! Fora isso, videogame tem sido um novo hobbie que tem ajudado bastante. Academia também, quero voltar a ser mais firme, porque tem me feito muito bem, mesmo não gostando hahaha. Me COMPROMETO a jogar beach tenis com o Charles, mesmo que eu tbm não gosto nenhum pouco. Acho que vai me fazer bem também, sair de casa, brincar, e vai ser bom pra mente e pro corpo.",
        "difficulty": "facil",
        "completedAt": "2025-10-05"
      },
      {
        "dayNumber": 38,
        "isCompleted": true,
        "reflection": "Com as reuniões, nos identificamos vulneráveis. Sem as reuniões, nós não falávamos do assunto e isso ia nos sufocando e acabávamos recaindo. Sem as reuniões, talvez não estaríamos no dia 38. É um remédio que estamos tomando todos os dias e lembrando o quanto aquele lugar é um lugar ruim e que não queremos voltar para lá. As reuniões não está sendo apenas uma reflexão, ela se tornou a base, uma rede de proteção em que estamos \"seguros\" falando disso todo dia e se protegendo, um ajudando o outro, todos os dias.  ",
        "difficulty": "medio",
        "completedAt": "2025-10-06"
      },
      {
        "dayNumber": 39,
        "isCompleted": true,
        "reflection": "Identificamos que precisamos de um tempo de tédio não produtivo, sem fugir para atividades distrativas. Estamos buscando maneiras de lidar com o tédio através de outras atividades, como videogames ou séries, para evitar pensar em jogos. Nosso objetivo é equilibrar esses momentos de tédio com atividades que não causem vício, e estamos progredindo, mas ainda precisamos melhorar a forma como lidamos com o tédio.",
        "difficulty": "medio",
        "completedAt": "2025-10-07"
      },
      {
        "dayNumber": 40,
        "isCompleted": true,
        "reflection": "CHARLES:\n\nA importância do perdão na recuperação é justamente o que a gente tá falando hoje. Se a gente não se perdoar, não vai conseguir vencer isso. É mais uma coisa que a gente precisa quebrar: essa angústia, esse arrependimento, essa tristeza, esse sentimento de que podia ter sido diferente.\n\nO passado não muda. É impossível voltar, então a única saída é se perdoar. Se a gente não fizer isso, vai continuar se remoendo, comparando, pensando no que deixou de fazer, no que poderia ter comprado ou construído, e isso só alimenta o vício.\n\nHoje a gente tá mais fraco. Talvez o dia esteja mais difícil justamente porque não estamos nos perdoando. Você se culpa, eu me culpo também, pensando por que não parei antes, por que não pensei diferente. Mas a verdade é que, se a gente jogar agora, vai se afundar ainda mais.\n\nA gente começa a inventar desculpas, achar que vai ser diferente, que dessa vez vai ter controle, mas a gente já viu que não tem. E, desde o primeiro dia, você mesmo falou que esse é um lugar onde não se deve colocar o pé, e a gente tem conseguido respeitar isso. Ninguém abriu o site, ninguém desbloqueou aplicativo, e isso já mostra força.\n\nO processo é doloroso, a lembrança machuca, mas o perdão é fundamental pra seguir em frente. Se a gente não praticar o perdão, vai viver nessa tristeza pra sempre. É importante olhar o que ainda temos e o que ainda podemos construir. A dor é recente, mas vai passar.\n\nVai chegar o dia em que a gente vai olhar pra trás e dizer que bom que conseguimos. Vamos ver nossos projetos andando, os negócios funcionando, as viagens acontecendo, o dinheiro voltando de forma saudável.\n\nA gente sabe que, se voltar a jogar, o arrependimento vem. Pode até ganhar muito, mas logo depois vem a perda e o vazio. Olha o tanto de sentimento que estamos vivendo hoje sem jogar. Imagina se estivéssemos jogando.\n\nO perdão é um dos pilares da recuperação, junto com a autoconfiança. Se a gente não praticar o perdão diariamente, não vai conseguir avançar. E quando a gente não faz isso, acaba sendo ingrato com o que ainda tem.\n\nNão é errado ficar triste com o que se perdeu. Realmente foi muita coisa. Mas é preciso lembrar que ainda temos muito também. Eu tô falando pra mim e pra você. Quantas vezes mais a gente vai precisar repetir esse ciclo pra aprender?\n\n#########################\n\nWELDER:\n\nEu acho que o perdão é fundamental também, mas pra mim tem sido muito difícil me perdoar. Eu achei que já tinha superado, que já estava tudo resolvido, que tinha feito as pazes comigo mesmo e com os erros do passado. Mas hoje eu tô muito fraco. Tô vulnerável. Tô pensando demais.\n\nTenho dívidas pra pagar e sei que, se eu usar o dinheiro que ainda tenho pra isso, ele vai diminuir muito. E o que mais me dói é saber que esse dinheiro já esteve ali, tranquilo, disponível pra eu investir, pra eu realizar tanta coisa, pra começar novos projetos, e eu simplesmente joguei fora.\n\nEssa tristeza hoje tá pesada em mim. Acho que é muito por causa do que a gente falou ontem:\nvocê ter 700 e gastar 200, sobrando 500, é uma coisa.\nMas ter 400 e gastar 200, sobrando só 200, é completamente diferente.\nÉ duro, é ruim, mas o perdão é essencial.\n\nPorque se eu não conseguir me perdoar, a chance de eu acabar voltando ou de você voltar é muito grande. A gente precisa entender que o jogo não deve nada pra gente. Não há nada a reparar.\n\nMesmo assim, minha cabeça insiste em dizer que o dinheiro ainda tá lá, o meu, o seu, aquele dinheiro que a gente queria recuperar. Mas eu sei que não tá. Já foi. Já era. O jogo não me deve nada.\n\nEu sei da importância do perdão, sei que ele é o caminho pra seguir em frente, mas hoje pra mim tá difícil. Talvez amanhã, ou mais tarde, eu esteja mais em paz. Só que uma coisa eu tenho certeza: eu não quero voltar pra esse lugar.\n\nPorque se eu jogar de novo, eu vou me arrepender. E quando a gente deposita, não é só dinheiro, é caráter, é cabeça, é tudo. Esse é um ciclo que precisa ser fechado, não repetido.\n\nNão adianta planejar estratégia, dizer que vai parar depois de ganhar dois mil por dia. Porque, na prática, quando a gente ganha, acha que pode ganhar mais. E só entende o erro quando tá lá dentro.\n\nQuando a gente tá fora, é racional. Lá dentro, é irracional. E mesmo nesse processo de me perdoar, eu sei que esse é um caminho que me fez muito mal, que já me tirou demais, e eu não quero deixar que tire mais.\n\nEu sei também que não vou recuperar tudo o que perdi da noite pro dia. É um processo, lento, mas possível. E como eu disse esses dias, não importa quanto tempo leve, o que importa é que eu quero me recuperar.\n\nEu acredito que, mais pra frente, as coisas vão fazer mais sentido.",
        "difficulty": "dificil",
        "completedAt": "2025-10-07"
      },
      {
        "dayNumber": 41,
        "isCompleted": true,
        "reflection": "Nos motiva pensar em quanto ainda podemos perder. Nos motiva lembrar do passado e ver o quanto o jogo já nos tirou — tempo, dinheiro, paz. Nos motiva saber que somos capazes de nos reerguer e que um erro não nos define. Acreditar que podemos construir uma nova história, longe dos vícios e das ilusões. Queremos proporcionar muitas coisas um ao outro, aos nossos pais e amigos, e temos a certeza de que iremos conseguir realizar tudo isso... mas longe dos jogos. \n\nOBS: Hoje foi o dia mais dificil. Quase tivemos uma recaída. Mas, fomos fortes e falamos NÃO ao vício. Só mais 24 horas, esse é o nosso lema. ",
        "difficulty": "muito_dificil",
        "completedAt": "2025-10-09"
      },
      {
        "dayNumber": 42,
        "isCompleted": true,
        "reflection": "Acreditamos fortemente que a disciplina de como ganhar, gerenciar e valorizar nosso dinheiro tenha sido perdida nesses tempo todo de jogo e vício.\n\nDurante esses mais de 2 anos, aprendemos a desmerecer nosso dinheiro, fruto do nosso trabalho, seja não achando que somos merecedores do que temos, seja lidando com altas quantias e sentido que são apenas números (já que o jogo cria essa ilusão) e aí a gente acha que pode gastar que tá tudo bem; seja ganhando dinheiro ou recebendo o salário e nem sentindo alegria porque a gente meio que sabia que a gente ia perder tudo.\n\nEssa disciplina de ganhar nosso dinheiro e pagar as contas, investir, gastar com que é necessário, gastar com nossos sonhos, foi perdida. Estamos no processo de regastá-la e vamos conseguir, com fé em Deus. Eu creio nisso.\n\nJá teve DIVERSOS momentos em que nos sentimos incapazes de gerir nosso próprio dinheiro, de acreditar que somos capazes de controlar nossos impulsos, de achar que tudo deveria ser travado em investimentos de longo prazo, de achar que tudo deveria ter sido enviado pra contas de pessoas de confiança porque sentimos que não éramos mais donos de nós mesmos. Mas esses dias acabaram!\n\nHoje, temos dinheiro \"disponível\" pra negócios do Welder, tenho meu dinheiro investido e dinheiro na conta corrente pra gastos inesperados, e SIM, somos capazes de fazer escolhas reais, seguras, inteligentes, somos disciplinados sim.\n\nVamos recuperar todo o dinheiro perdido em trabalho e muito esforço. Tenho certeza disso. Amém!",
        "difficulty": "dificil",
        "completedAt": "2025-10-10"
      },
      {
        "dayNumber": 43,
        "isCompleted": true,
        "reflection": "Durante muito tempo, o jogo nos colocou em um estado de cegueira emocional, vivíamos tomados por impulsos, acreditando que tínhamos o controle, quando na verdade já não tínhamos mais. Aos poucos, o vício foi distorcendo nossos valores. Passamos a decidir com base na emoção, no calor do momento, e não na razão. Perdemos a capacidade de avaliar com clareza o que realmente queríamos ou precisávamos. Quando estávamos imersos no jogo, grandes decisões financeiras pareciam pequenas. Afinal, se já estávamos “perdendo tudo”, comprar algo ou gastar um pouco mais parecia quase inofensivo. Esse pensamento deturpado fazia com que nossas escolhas fossem movidas por um misto de desespero e tentativa de compensação, e não por consciência ou planejamento. O jogo também roubou a nossa liberdade. Liberdade financeira, porque o dinheiro deixou de ser um instrumento para realizar sonhos e passou a ser combustível para a ilusão. Liberdade mental, porque a mente passou a girar em torno do próximo jogo, da próxima chance, da próxima “virada”. E liberdade de vida, porque deixamos de sonhar, de planejar e até de acreditar que poderíamos escolher outro caminho. Falamos também sobre como esse desequilíbrio emocional afetou decisões recentes, como a compra do carro. Percebemos que, se estivéssemos com a mente realmente livre do peso do jogo, talvez tivéssemos analisado melhor, esperado o momento certo ou tomado outra decisão. Mas, ainda sob o reflexo da impulsividade que o vício alimenta, acabamos escolhendo pela emoção.",
        "difficulty": "medio",
        "completedAt": "2025-10-11"
      },
      {
        "dayNumber": 44,
        "isCompleted": true,
        "reflection": "A paciência na recuperação é algo que a gente tem aprendido a cultivar todos os dias. A gente entende que esse processo é longo, diário, e exige muita entrega e consciência. Não é algo que acontece de uma hora pra outra, é uma caminhada que pede calma, fé e perseverança.\n\nA cada dia, a gente precisa lembrar o quanto o vício nos fez mal e o quanto ele tirou da gente: paz, tempo, energia, dinheiro e até o senso de quem a gente era. Mesmo estando longe disso agora, ainda sentimos o impacto do que vivemos, e é justamente por isso que precisamos continuar firmes.\n\nA verdade é que voltar pra essa vida seria se afastar de tudo o que a gente mais quer construir: os sonhos, a estabilidade, o futuro que a gente tanto fala e deseja. A gente sabe que o dinheiro que foi perdido não vai voltar por meio de jogo,ele vai voltar aos poucos, com paciência, trabalho e escolhas conscientes. E essa paciência é o que vai nos fortalecer de verdade.\n\nGraças a Deus, a gente tem consciência de que, apesar de tudo, a nossa vida é maravilhosa. A gente tem uma condição boa, uma base sólida, e isso é um motivo enorme pra agradecer e continuar lutando. A recuperação é sobre se limpar por dentro, se curar de verdade e se afastar, a cada dia, de tudo aquilo que nos destruiu.\n\nA gente merece uma vida leve, próspera, cheia de paz e coisas boas ,e é por isso que vale tanto a pena continuar com paciência, acreditando que o melhor ainda está vindo.",
        "difficulty": "dificil",
        "completedAt": "2025-10-12"
      },
      {
        "dayNumber": 45,
        "isCompleted": true,
        "reflection": "A gente conversou sobre o quanto essas reuniões têm ajudado a lidar com esses momentos, porque é nelas que a gente coloca pra fora tudo o que sente, inclusive os pensamentos ruins, a vontade de jogar, de traçar estratégias, de achar que agora seria diferente.\n\nQuando a gente fala sobre isso, acaba tirando o peso de dentro e, ao mesmo tempo, lembrando um ao outro que o jogo não leva a lugar nenhum. A gente já sabe o quanto esse caminho foi dolorido, o quanto machucou, tirou nossa paz, nossa vontade de trabalhar, de viver, de viajar, de fazer as coisas que a gente ama.\n\nEssas reflexões têm sido fundamentais pra gente, porque quando a vontade vem e a gente fala sobre ela, ela perde força. Um apoiando o outro, a gente consegue se acalmar e lembrar que o dinheiro que a gente perdeu não vai voltar pelo jogo, só com trabalho, com paciência e com o foco na vida que a gente quer construir.\n\nFalar sobre isso todos os dias tem feito a diferença. A vontade existe, o impulso vem, mas agora a gente sabe lidar melhor com eles. E é isso que está ajudando a gente a se manter firme, longe do jogo e cada vez mais perto da liberdade.",
        "difficulty": "dificil",
        "completedAt": "2025-10-12"
      },
      {
        "dayNumber": 46,
        "isCompleted": true,
        "reflection": "Eu acredito que reencontrar o sentido da vida sem o jogo vem através da gratidão diária, lembrar todos os dias das coisas que ainda temos e das que ainda vamos conquistar. Ser grato por acordar, por ter comida na mesa, um teto sobre a cabeça, por viver uma vida confortável e cheia de bênçãos, mesmo depois de tudo o que o jogo nos tirou.\n\nA gente tem uma família maravilhosa, um relacionamento incrível e, graças a Deus, saúde. É sobre reconhecer as maravilhas que Deus faz todos os dias na nossa vida. Muita gente olha pra gente e diz que vivemos uma vida de rico, e de certa forma, é verdade. Temos acesso a tudo o que precisamos, temos uma vida boa.\n\nPor isso, é importante lembrar que o jogo só nos afastou de tudo isso. Ele não trouxe nada de bom. O verdadeiro sentido da vida está em valorizar o que temos, o que já conquistamos e o que ainda está por vir. A vida é boa de ser vivida, e cada dia é uma nova chance de agradecer, até o dia acabar, até a semana, o mês, o ano terminarem. Gratidão é o caminho pra reencontrar o sentido e seguir em paz. <3",
        "difficulty": "dificil",
        "completedAt": "2025-10-14"
      },
      {
        "dayNumber": 47,
        "isCompleted": true,
        "reflection": "A gente acredita que vai conseguir desenvolver uma mentalidade de crescimento a partir do momento em que realmente reconhecer nossos valores e tudo o que já conquistamos até aqui. Quando a gente passa a perceber o quanto tem, e o quanto ainda pode alcançar, não só em termos financeiros, mas também em aspectos pessoais, mentais, intelectuais e espirituais, a vida começa a se transformar. Essa mudança vem de dentro, vem da consciência de que somos capazes, de que temos força e potencial para continuar evoluindo.\n\nÉ importante que todos os dias a gente se lembre das nossas conquistas, das oportunidades que temos, das pessoas que nos cercam e do quanto somos abençoados por viver o que vivemos. Ser grato faz com que a energia da escassez dê lugar à energia da abundância, e é isso que faz a vida fluir melhor.\n\nQuando a gente escolhe enxergar o lado bom, mesmo diante das dificuldades, a gente muda o nosso padrão mental e atrai ainda mais crescimento. E eu tenho certeza de que a abundância e o progresso que sempre fizeram parte da nossa história vão continuar se multiplicando, só que agora com mais consciência, equilíbrio e propósito.",
        "difficulty": "facil",
        "completedAt": "2025-10-15"
      },
      {
        "dayNumber": 48,
        "isCompleted": true,
        "reflection": "Charles: \n\nEu acho que é sobre isso que a gente conversa todos os dias, né? Eu tenho certeza que não temos controle sobre nada. Não adianta pensar que temos, porque o jogo nos dá essa sensação de controle. Podemos ajustar valores, mudar o jogo, parar e continuar outro dia. Parece que sabemos quando parar, mas na verdade, o jogo cria essa narrativa de controle, que sabemos que não é assim. É um monte de programas feitos para tirar dinheiro das pessoas. Até comentei com você hoje que, se o jogo pagasse 50% do que ganha para algumas pessoas, seria mais legal. Mas pagar apenas 5% é injusto, como se estivéssemos caindo em um golpe todos os dias. E estávamos. Precisamos estar atentos a isso porque sabemos que não temos controle. Mesmo que ganhemos em um dia aleatório, voltamos no dia seguinte ou dias depois e podemos perder tudo, como sempre aconteceu. Então, acho que é isso: não temos esse controle. Você tá falando sobre isso todos os dias, né? Que agora vai dar certo e que vamos ter controle, porque estou ciente das coisas, e que podemos recuperar nosso dinheiro, que agora vamos parar se ganhar. Enfim. Pura ilusão. É um monte de sistemas aleatórios e programados para tirar seu dinheiro e te enganar, criando a ilusão de que você tá no controle. Você nunca tá no controle. Estamos querendo voltar a jogar hoje, mesmo tendo dito que íamos parar. Quem me garante que se voltarmos a jogar, e ganhar, vamos parar, se hoje estamos com vontade, né?\n\n##########################\n\nWelder:\n\nEu acho que essa questão da falta de controle é óbvia, mas é como eu tenho falado nesses dias: essa ideia de traçar uma estratégia, de se planejar para colocar R$ 2.000 e transformar em R$ 4.000, estipulando uma meta diária, simplesmente não existe. Não existe controle, não existe garantia de que vai dar certo. Pode ser que a gente coloque os R$ 2.000, vire R$ 6.000, pare, e no dia seguinte coloque os mesmos R$ 2.000 e não dê certo — como já aconteceu muitas vezes.\n\nAí entra o ciclo de novo: tentar recuperar o que perdeu, e nessa tentativa acabar jogando não só o que “ganhou”, entre aspas, mas também o que realmente tinha. Foi o que a gente fez. Não nos contentamos em perder o dinheiro que já havíamos ganhado — fomos além e perdemos o que era nosso.\n\nEssa sensação de controle é criada pelo próprio jogo, para fazer a gente acreditar que tem algum tipo de domínio, que “sente” a hora que vai cair, mas tudo é totalmente aleatório. Não há como prever se vai ou não acontecer, e mesmo quando acontece, hoje a gente já enxerga isso de forma negativa, porque todas as vezes que ganhamos, perdemos tudo em poucos dias. Já chegamos a ganhar R$ 60.000 e, em seguida, jogar tudo de novo e perder tudo — e ainda mais.\n\nPortanto, não existe controle. A verdade é que essa ideia de controle é uma ilusão. No jogo, você ganha e perde ao mesmo tempo. Quando “ganha”, já está perdendo — perdendo a capacidade de gerenciar o próprio dinheiro, de entender o valor real dele e de saber como gastá-lo. É isso: não existe controle quando se fala em apostas online, pelo menos no nosso caso.",
        "difficulty": "dificil",
        "completedAt": "2025-10-16"
      },
      {
        "dayNumber": 49,
        "isCompleted": true,
        "reflection": "Charles:\n\nEu acredito que correr atrás do prejuízo é uma das maiores armadilhas, justamente porque a gente não se perdoa pelo que perdeu. A gente fica com essa falsa sensação de que está correndo atrás do próprio dinheiro — um dinheiro que, ao mesmo tempo, está lá e não está. Acredita-se que esse prejuízo pode ser revertido pelo mesmo caminho em que foi perdido. Mas a gente sabe que isso é uma mentira, porque isso nunca aconteceu e nunca vai acontecer. Essa é a grande ilusão do jogo para quem é viciado: achar que algo bom pode vir do próprio vício. Na prática, na pele e na mente, a gente já percebeu que isso só machuca e destrói. Por isso, pra mim, correr atrás do prejuízo é realmente a maior armadilha, porque nos prende nessa busca incessante por um dinheiro que já se foi. Então, pra mim, não tem conversa — é aceitar, aprender e seguir em frente.\n\n########################\n\nWelder:\n\nPra mim, correr atrás do prejuízo significa tudo isso que você falou. Mas, além disso, parece também uma tentativa de reparar algo que machucou muita gente — inclusive a nós mesmos. É como se essa busca fosse movida por uma mistura de culpa e esperança, de tentar consertar o que já foi destruído, especialmente o dinheiro que a gente perdeu. E como o jogo, em alguns momentos, até deu alguma coisa, a gente se agarra a essa lembrança. Só que mesmo nesses momentos, o que ele dava era muito pequeno diante do que já tinha tomado.\n\nA gente entra nessa ilusão de que, se recuperar uma parte — perdeu 100, recuperou 30 ou 40 — já é alguma coisa. Mas quando esse dinheiro estava na conta, a gente não deu valor. Então essa busca pelo prejuízo acaba sendo uma desculpa. Porque, no fundo, não é só o dinheiro que a gente quer recuperar, é a sensação que o jogo trazia. Não é apenas uma questão financeira — é emocional, é viciante.\n\nE é exatamente por isso que é uma armadilha. Porque, quando você volta, mesmo que seja “só pra tentar recuperar”, você fortalece de novo os laços com o jogo, e cada vez fica mais difícil sair. É por isso que, quando vem uma recaída, parece que a gente volta pior — não necessariamente em frequência, mas em volume de dinheiro perdido. Como já se perdeu muito, pra tentar recuperar, a aposta precisa ser cada vez maior. E é aí que o ciclo recomeça, mais cruel e mais pesado que antes.",
        "difficulty": "dificil",
        "completedAt": "2025-10-17"
      },
      {
        "dayNumber": 50,
        "isCompleted": true,
        "reflection": "Welder\n\nEu acho que o vício em apostas me isolou de amigos e familiares, mas não no sentido de deixar de sair com as pessoas. Foi um isolamento diferente, de estar presente fisicamente, mas não de corpo e alma. Muitas vezes a gente jogou, se sentiu péssimo, e mesmo assim tentou seguir a vida normalmente. Eu já te forcei a isso e você já me forçou também. A gente tentava agir como se estivesse tudo bem, mas por dentro não estava.\n\nNo começo, o isolamento foi maior. A gente ficava jogando até de madrugada, sem hora pra parar. Com o tempo, isso diminuiu, a frequência caiu, a gente começou a tentar colocar horário pra jogar, mas ainda assim continuava difícil. Mesmo quando saíamos com os amigos, a gente já tinha jogado antes, e parecia que não conseguia estar de verdade naquele momento.\n\nQuando a gente tentava falar sobre o que estava acontecendo, ninguém ouvia. Ninguém dava a devida importância. A gente chegou a falar sobre estar muito mal, até sobre querer morrer, e mesmo assim ninguém levou a sério. Isso fazia a vontade de se isolar crescer ainda mais. A gente só queria um apoio, um abraço, alguém que dissesse “vem cá, eu vou cuidar de você”.\n\nPor isso, pra mim, o que a Jéssica fez naquele período foi muito importante. Ela realmente mostrou preocupação comigo, e por causa dela eu fiquei vários dias sem jogar. Foi a primeira vez que eu senti que alguém realmente se importava.\n\nAcho que o isolamento, pra mim, não veio só por causa do jogo. Aconteceu também porque a gente percebeu que não podia contar muito com as pessoas. Que não adiantava desabafar, porque nunca levava a lugar nenhum. A gente não sentia o amparo que precisava naquele momento.\n\nEntão a gente começou a se afastar emocionalmente das pessoas. Cada uma foi ficando em uma “caixinha”: aquela é a pessoa que conversa sobre tal assunto, aquela é a pessoa com quem a gente ri, mas pra desabafar mesmo, pra dividir as dores, não tinha ninguém.\n\nNo fim, a gente acabou se isolando sim, mas não foi um isolamento total do mundo. Foi um isolamento emocional. A gente passou a confiar só um no outro. E mesmo com a minha mãe, que a gente compartilhou muita coisa, eu ainda sentia que a importância que ela dava não era tão grande quanto eu esperava. Quando a gente contou pra ela que tinha perdido sessenta mil reais, ela ficou chocada, mas pra mim pareceu que não foi o suficiente. Pra gente aquilo foi devastador, e pra ela foi algo que passou.\n\nEntão acho que o isolamento veio disso: da falta de compreensão, da falta de empatia. A gente começou a se fechar, a dividir as coisas só entre nós dois, porque percebemos que ninguém realmente entendia.\n\n##############\n\nCharles: \n\nComo o vício em apostas me isolou de alguns amigos… eu acho que foi o que a gente acabou de falar. Eu, pelo menos, lembro das vezes em que a gente jogou e não quis sair com ninguém. Mesmo assim, eu me forcei — e te forcei — a sair, pra tentar manter uma vida normal.\n\nMas, pensando melhor, acho que essa pergunta vai além disso. Eu aprendi a me esconder. A esconder o que sinto, a não depender de ninguém. Hoje eu sinto que estou isolado, não porque parei de sair, mas porque parei de me abrir. Eu não chego mais pra nenhum amigo meu, nem pra nenhum familiar, pra desabafar. E eu era esse tipo de pessoa: gostava de contar, de dividir o que eu sentia.\n\nQuando eu desabafei com o Vinicius e não senti a atenção que eu esperava, isso me marcou muito. Mesmo que ele também esteja sofrendo, quando a gente vê alguém que ama sofrendo, a gente tenta ajudar. E eu não senti isso.\n\nMinha mãe também… várias vezes eu falei com ela, contei as coisas, e ninguém nunca levou a sério. Acho que o isolamento veio daí: não do jogo em si, mas da falta de atenção das pessoas.\n\nO jogo não me fez parar de sair, mas me fez perder a confiança. Eu comecei a sentir que a vida é só eu e você. E, no fundo, parece que é isso mesmo. Porque ninguém está vivendo a nossa dor, ninguém está fazendo nada pra ajudar.\n\nAs pessoas até escutam um pouco, mas é só por cima, ninguém trata o assunto com a seriedade que ele tem. Teve vezes que a gente contou que tinha jogado, que estava perdendo, e no dia seguinte ninguém perguntou nada. Como se não tivesse acontecido.\n\nEntão, pra mim, o isolamento é isso: entender que minha vida é eu por você e você por mim. Não acho que isso tenha nos feito parar de sair, mas me isolou emocionalmente. Eu perdi a conexão com muita gente, e não só por causa do jogo.\n\nEu percebi que a gente não tem amigo de verdade, nem familiar que compre a nossa dor como a gente esperava. A gente sempre oferece apoio quando alguém precisa, mas quando foi a nossa vez, ninguém fez o mesmo.\n\nEu sinto que o vício me isolou não do mundo, mas das pessoas. Eu deixei de acreditar que posso contar com alguém além de você.",
        "difficulty": "medio",
        "completedAt": "2025-10-18"
      },
      {
        "dayNumber": 51,
        "isCompleted": true,
        "reflection": "Charles:\n\nEu acredito que é justamente isso. A gente fica nessa sensação de que está ganhando algum dinheiro nesse jogo. Que o dia que a gente coloca R$ 1.000, ele vira R$ 10 mil; o dia que a gente coloca R$ 5.000, ele vira R$ 30.000. Mas, no outro dia, a gente perde todo esse dinheiro que supostamente ganhou, somado com o dinheiro que colocou. E a gente termina esse dinheiro que colocamos com a sensação de que o jogo paga, que somos nós que não sabemos parar, que somos burros. E aí dá vontade de continuar jogando, porque o jogo mostrou que paga, mas você só tem que parar. Aí você coloca mais dinheiro e começa a perder cada vez mais. Abre a porta do inferno!\n\nEntão, essa sensação, esse ciclo vicioso, se repete realmente: “vou ganhar alguma coisinha aqui”, sendo que, na realidade, a gente perde muito mais. Na nossa mente — e eu acho que na mente de qualquer viciado — é isso: a falsa sensação de ganhar. Igual você mesmo está falando esses dias aí: “ah, eu quero ganhar nem que seja mais um pouco, já ganhei muito dinheiro nesse jogo.” Cadê o dinheiro que você ganhou nesse jogo? \"Me dá um real desse dinheiro que você ganhou?\" Só que nunca teve,  é uma ilusão, é um cenário criado, é uma realidade paralela de todo mundo que joga isso.\n\nEu mesmo coloquei R$ 2.000 e, em um dia, virou R$ 90.000. Cadê os R$ 90.000 que viraram? Cadê? Eu perdi. Eu perdi os 90 e muito mais depois. E aí, por que a gente tende a acreditar que isso é verdade, sendo que na verdade não é? É sobre entender que isso não existe. Um dos fatores que faz a gente querer jogar é a sensação — ou a falsa sensação — de que a gente vai ganhar e que a gente só não ganhou porque não tem controle. Sendo que não é verdade. Vida que segue. Não é assim que funciona. Então, pra mim, é uma grande ilusão isso. Uma grande ilusão.\n\n####################\n\nWelder:\n\nEu também concordo com o que você falou, e eu acho que o jogo é muito inteligente. Nos momentos em que você deposita algum dinheiro ali, rapidamente esse dinheiro nas vezes que a gente jogou, na maioria das vezes evoluía muito rápido. Então, às vezes, a gente colocava, sei lá, R$ 5.000; esses cinco rapidamente viravam sete, que viravam 10, que depois caíam pra oito, que já não fazia mais sentido ser oito, tinha que voltar a ser 10. Quando chegava em 10, a gente queria mais, aí descia de novo até ficar zerado.\n\nEntão, essa sensação de recuperar alguma coisa hoje não faz sentido, porque nem se a gente jogar todo o dinheiro que a gente tem hoje, a gente vai recuperar tudo que perdeu. Não tem como recuperar um milhão de reais que talvez, somando tudo, foi isso que a gente perdeu. Sei lá o quanto foi, eu evito até fazer essa conta. Mas é total ilusão, porque a partir do momento que você ganha, seu cérebro fica condicionado a achar que você não pode perder aquilo. E, nessa busca de não perder ou de tentar recuperar, você perde muito mais.\n\nA gente já perdeu muito. Se a gente colocar hoje R$ 10.000 pra jogar, a chance de virar 20 existe, é ok, pode ser que vire mesmo. Só que aí a gente não vai parar. E outra: a gente vai estar recuperando uma fatia muito pequena de uma coisa que o jogo só tomou da gente. E a gente tá vendo o quanto isso foi prejudicial, porque estamos no dia 51 e estamos falando dessas dores todos os dias,  o tanto que é uma ilusão, o tanto que jogar, recair, não é uma opção. Porque, a partir do momento que você abre a porta, o ciclo se repete todo de novo.",
        "difficulty": "facil",
        "completedAt": "2025-10-19"
      },
      {
        "dayNumber": 52,
        "isCompleted": true,
        "reflection": "Welder:\n\nPra mim, tanto a mentira quanto a desonestidade acabaram virando um hábito.\nEm muitos momentos, a gente dizia um pro outro que não estava jogando, mesmo sem ter nenhum tipo de combinado, quando na verdade estávamos, sim, jogando escondido. Isso, pra mim, foi um sinal de infidelidade, uma traição. Porque quando você fala que não está fazendo algo, mas está escondendo, está mentindo. E esconder de mim também é mentir.\n\nO jogo fez com que a gente criasse esse hábito de mentir e se tornasse pessoas desonestas enquanto jogava. Acho que, naquele nível de vício, de desespero pra tentar recuperar alguma coisa, a gente não era mais digno da confiança de ninguém. A única coisa que passava pela cabeça era recuperar o que tinha perdido, colocar mais dinheiro, tentar de novo.\n\nAté hoje, às vezes, passa pela minha cabeça a vontade de jogar escondido. Mas, na mesma hora, eu corto o pensamento e penso: “Você tá doido? Não vai fazer isso!”. Além de não querer mentir pra você, a gente tem um combinado muito forte. A gente vai sair disso juntos. E é por isso que eu não faço.\n\nHoje, não é mais um hábito. A gente caiu muito, errou muito, conversou muito até enxergar o quanto isso estava sendo prejudicial. Mas já foi um hábito. Mentir, pra gente, antes, não era um problema. Esconder, omitir... tudo isso é mentira.\n\nAgora, a gente consegue falar sobre o assunto e, o mais importante, não mentir um pro outro.\nA gente segue, um dia de cada vez, por mais difícil que seja, sem deixar que isso volte a ser um hábito, sem deixar que mentir e ser desonesto um com o outro faça parte da nossa vida de novo.\n\n############\n\nCharles:\n\nA gente já mentiu tanto um pro outro, né? Combinamos e a gente mentiu, enganamos um ao outro, mentimos dizendo que não jogamos, que perdemos um valor X e era outro. Já mentimos muito, e não só eu menti pra você, mas menti pra mim mesmo.\n\nQuando a gente conta mentira o tempo inteiro, a gente é desonesto com nós mesmos também. Não é papo de coach nem clichê demais, mas eu acho que a gente estava vivendo uma mentira interna também, desonestos não só um com o outro, mas eu estava sendo desonesto comigo mesmo quando eu trabalhava e sabia que eu poderia perder meu salário ali.\n\nEu nunca, praticamente nunca, joguei acreditando que eu só ganharia, e principalmente nas últimas vezes eu tinha muito mais consciência de que eu poderia jogar meu salário inteiro fora e muito mais dinheiro, e mesmo assim eu fazia, pq eu mentia pra mim mesmo.\n\nE, pra mim, uma das piores mentiras também foi quando eu fui desonesto com você ao pegar o seu dinheiro pra jogar. Eu sei que você sempre falou que o dinheiro é nosso, e eu sei, o dinheiro é meu também, mas ali foi o ápice da desonestidade. Eu nunca toquei no dinheiro de ninguém sem permissão da pessoa, sabe? Inclusive, foi esse o motivo de eu ter parado ano passado, foi o maior baque que eu tive, porque foi uma coisa que feriu totalmente a minha ética, tudo em que eu acreditava. Foi por esse motivo que eu consegui parar durante tanto tempo no ano passado.\n\nHoje o meu dinheiro que está quieto lá pra eu fazer o que eu quiser: comprar uma casa, viajar, pagar minhas contas, comprar roupa, comida, enfim, fazer muita coisa. Então, hoje, se eu pegar o meu dinheiro pra jogar, eu considero que estou sendo desonesto comigo mesmo. E, se eu deixar você jogar, eu estou sendo desonesto com tudo o que eu falo pra você: que eu te amo, que eu quero cuidar de você, que a gente é parceiro, que a gente é amigo, que a gente vai prosperar juntos.\n\nO jogo traz um monte de desonestidades, um monte de mentiras. Por isso, eu tô muito feliz de hoje a gente estar conseguindo vencer, porque acredito que a gente está vivendo a vida de verdade. E a vida de verdade é difícil: é tomar decisões, enfrentar medos, enfrentar a ansiedade, planejar, ter calma e ter paciência; não fugir dos problemas, e sim encarar os problemas, que é o mais difícil.\n\nO jogo trazia um conforto, mesmo que fosse por algumas horas, ele trazia um alívio. Então, eu acho que é isso: voltar pro vício, voltar pro jogo, é viver uma vida de mentiras, de alívio temporário. E eu não quero isso mais.",
        "difficulty": "facil",
        "completedAt": "2025-10-20"
      },
      {
        "dayNumber": 53,
        "isCompleted": true,
        "reflection": "Welder:\n\nPra mim, uma grande vitória hoje também não resolveria nada, porque, como você disse, abriria a porta para o ciclo recomeçar. A realidade por trás disso é uma enganação, tentar se convencer de que esse dinheiro poderia ser usado para pagar uma conta ou amenizar nossas dívidas e despesas atuais. Mas a verdade é que qualquer dinheiro ganho seria ruim, porque abriria novamente a porta para o vício. E qualquer valor perdido hoje também pesa muito pra gente. Então é uma ilusão achar que uma vitória ou um ganho vai resolver o problema, ou mesmo uma parte dele. Não resolve. Na verdade, jogar, ganhando ou perdendo, só vai aumentar o problema. É uma ilusão por todos os lados, principalmente pra gente que já vem de tanto tempo jogando, acumulando tantas perdas e experiências ruins.\n\n####################\n\nCharles:\n\nÉ mais ou menos repetindo o que eu já te falei: a gente ganhar R$ 50.000, seria 10% do que a gente perdeu, 12% do que a gente perdeu… isso vai resolver alguma coisa? Cada um ganhar esse valor, embolsar e vida que segue? Agora a gente nunca mais vai jogar, nunca mais vai perder nada? Tudo isso não funciona. A gente vai voltar a jogar, vai abrir o ciclo de novo aqui. Então não resolve o nosso problema, cria novos problemas. A gente vai achar que tá permitido jogar, correr o risco de perder mais dinheiro pra isso de novo e abrir a porta do inferno nessa casa mais uma casa.\n\nPra mim, é uma falsa realidade, uma falsa sensação de que, se a gente jogar e ganhar, agora sim vai resolver. Porque é o que eu falo: se jogássemos e ganhássemos, pararíamos? Por que então a gente quer jogar no dia 53? E se a gente ganhar, vai parar de jogar daqui pra frente? É uma mentira que a gente conta pra nós mesmos.\n\nEntão, eu acho que isso não resolve nada, só cria novos problemas, principalmente pra pessoas que estão há muito tempo sem jogar. Porque eu acho que 53 dias é muita coisa. Mais 7 dias faz 2 meses, e isso é muito tempo. A gente nunca tinha ficado tanto tempo assim longe, desde que a gente voltou a jogar.\n\nEntão, eu não quero criar mais problema, não quero criar mais nada. Eu só quero prosperidade. Eu quero uma vitória através de trabalho, uma vitória devagar. E quando o dinheiro vem fácil, igual o jogo promete, ele vai embora muito mais rápido, e leva muito mais do que a gente ganhou ou supostamente \"ganhou\".\n\nEu acho que isso é uma realidade falsa, o que a gente quer acreditar é o que o jogo quer que a gente acredite. E a gente sabe que não é. A gente tá de olhos bem, bem abertos agora.",
        "difficulty": "facil",
        "completedAt": "2025-10-21"
      },
      {
        "dayNumber": 54,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 55,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 56,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 57,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 58,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 59,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 60,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 61,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 62,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 63,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 64,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 65,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 66,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 67,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 68,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 69,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 70,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 71,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 72,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 73,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 74,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 75,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 76,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 77,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 78,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 79,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 80,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 81,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 82,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 83,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 84,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 85,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 86,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 87,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 88,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 89,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 90,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      }
    ]
  }
]
    
    console.log(`📊 Restaurando ${journeysData.length} jornadas...`)
    
    // Restaurar cada jornada com seus dias
    for (const journeyData of journeysData) {
      const { days, ...journeyInfo } = journeyData
      
      // Criar jornada
      const journey = await prisma.journey.create({
        data: {
          id: journeyInfo.id,
          startDate: journeyInfo.startDate,
          totalDays: journeyInfo.totalDays,
          createdAt: new Date(journeyInfo.createdAt),
          updatedAt: new Date(journeyInfo.updatedAt)
        }
      })
      
      console.log(`📅 Jornada ${journey.id} restaurada (${days.length} dias)`)
      
      // Criar dias da jornada
      if (days.length > 0) {
        await prisma.day.createMany({
          data: days.map(day => ({
            journeyId: journey.id,
            dayNumber: day.dayNumber,
            isCompleted: day.isCompleted,
            reflection: day.reflection,
            difficulty: day.difficulty,
            completedAt: day.completedAt
          }))
        })
      }
    }
    
    const totalDays = journeysData.reduce((sum, j) => sum + j.days.length, 0)
    console.log(`✅ Backup restaurado com sucesso!`)
    console.log(`📊 Dados restaurados: ${journeysData.length} jornadas, ${totalDays} dias`)
    
  } catch (error) {
    console.error('❌ Erro durante a restauração:', error)
    throw error
  } finally {
    await prisma.$disconnect()
  }
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  restoreBackup()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

export { restoreBackup }