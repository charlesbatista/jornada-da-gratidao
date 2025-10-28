import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 🗄️ BACKUP AUTOMÁTICO - 2025-10-28T03-14-20
 * 
 * Este arquivo foi gerado automaticamente pelo script de backup
 * Contém todos os dados do banco no momento do backup
 * 
 * Para restaurar: npm run restore
 */
async function restoreBackup() {
  try {
    console.log('🔄 Restaurando backup de 2025-10-28T03-14-20...')
    
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
        "isCompleted": true,
        "reflection": "Charles:\n\nAcho que, pra mim, de todas as perguntas, essa é uma das principais.\nDesses 54 temas, pra mim, até hoje, as apostas online conseguem distorcer o que é dinheiro de verdade, o que é dinheiro em números virtuais e o que é dinheiro real.\n\nEu poderia ficar a noite inteira aqui falando só sobre o quanto o jogo distorceu a minha percepção e a minha realidade sobre o dinheiro e muitas outras coisas. Mas hoje o tema é sobre o dinheiro.\n\nPra mim, ele acabou com tudo.\nR$100 não era dinheiro, R$1.000 não era dinheiro, R$10.000 não era dinheiro, ao ponto de a gente apostar R$20.000, perder R$20.000 em 10 minutos e ainda falar assim: “Vamos tentar mais?”, como se R$20.000 não fosse porcaria nenhuma.\n\nTalvez a sua mãe tenha que trabalhar dois anos pra ganhar R$20.000, e a gente jogou fora em 10 minutos. Olha a discrepância que o jogo cria na nossa cabeça.\n\nEu passei a ganhar muito dinheiro, depois perdi esse dinheiro, depois ganhei de novo, depois perdi de novo.\nE hoje, pra mim, sei lá, quase 30 dias atrás, quando meu dinheiro caiu , que era R$20.000, esse dinheiro valia R$20 pra mim.\n\nOlha o nível da loucura que esse jogo cria na nossa cabeça, a ponto de você falar: “Se não tiver dinheiro, tá tudo bem.”\nPorque você se vê numa situação em que tinha, depois não tinha, depois tinha, depois não tinha.\nEntão, você começa a achar que dinheiro não vale nada, que são só números mesmo, um dinheiro virtual.\n\nParece um joguinho online, com moedinhas que não valem nada, sendo que, na vida real, a gente trabalha pra ganhar dinheiro, dá o tempo de vida que temos pra isso, pra depois jogar tudo fora.\n\nEu tô aqui perdendo o tempo da minha vida pra trabalhar pro TJ, pra fazer as coisas, e você também.\nE a gente joga fora como se a nossa vida não fosse nada, como se o seu trabalho não fosse nada, a sua inteligência não fosse nada, o seu esforço não fosse nada.\n\nComo se o trabalho da Ana Paula não fosse nada, por exemplo, quando ela precisa juntar R$5.000 pra poder mudar de vida, e a gente jogando esse dinheiro fora.\n\nSua mãe trabalhando o mês inteiro pra ganhar talvez R$2.000 líquidos (ou menos do que isso, pelo que ela fala), todo dia vendendo, todo dia molhando planta, passando por aquilo ali, vivendo a vida dela naquilo, pra depois a gente chegar aqui e falar: “Ah, o que é R$5.000? O que é R$10.000?”\n\nVocê chegou a perder R$200.000 num dia, tem noção do nível de LOUCURA que é isso?\nAí vem aquele arrependimento: “Como eu devia ter te escutado, como eu devia ter feito diferente, como eu devia ter protegido meu dinheiro.”\n\nE você ainda tem esse dinheiro pra proteger.\nVocê tá no processo, já tá fazendo isso há 54 dias.\nVocê tá provando pra você mesmo que respeita o seu dinheiro.\n\nEntão, pra mim, essa distorção é muito grave, porque a gente acha que é só uma questão de dinheiro, mas ela distorce a noção de trabalho, de vida, de valores, de merecimento, de inteligência, de amor-próprio e de um monte de outras coisas.\n\nPra mim, minha relação com dinheiro real e dinheiro virtual ficou totalmente bagunçada, totalmente invertida, de tanto jogar fora dinheiro. Aí você vai comprar qualquer coisa, sei lá, uma água de garrafinha que custa R$10 e pensa: “Nossa, caríssimo, não vou comprar.” Mas porque jogar R$ 10.000 é de boa??? É muito louco o que isso faz na nossa cabeça.\n\nEu não quero voltar a ter esse tipo de pensamento.\nNão quero me alimentar nesse tipo de lugar.\n\nVoltar pra um tipo de lugar que só piora minha relação comigo mesmo, com você, com o dinheiro, com o meu trabalho e com o trabalho das pessoas que a gente ama é muito triste. É triste ver família, amigos e a gente mesmo trabalhando duro, lutando, pra jogar fora o dinheiro em minutos.\n\nÉ uma ilusão que o jogo cria, um dinheiro que você acha que ganhou, mas sabe que não ganhou, porque volta a jogar e joga todo o dinheiro que “ganhou”, e ainda coloca mais um monte depois porque não consegue parar.\n\nO jogo é feito pra isso.\nNinguém aqui é idiota.\nNão é porque é burro que não para, é porque caiu numa armadilha criada propositalmente pra isso.\n\nEntão, eu quero sair dessa armadilha.\nEu quero sair dessa vida que me tira a consciência, que me tira a razão, porque, senão, minha vida não faz sentido. \nPra mim, é isso.\n\n##########################\n\nWelder:\n\nEu acho que pra mim falar hoje sobre esse tema, o dinheiro virtual versus o dinheiro real, é muito difícil. Nesse momento passa um filme na minha cabeça. Eu lembro do dinheiro que eu tinha, do quanto eu estava tranquilo, do quanto eu poderia ter investido e feito tantas coisas boas, e ainda assim fiquei preso numa realidade que eu nem sei como entrei, nem como permaneci nela por tanto tempo.\n\nAgora eu preciso fazer um pagamento de 7.000 reais pro Vinícius. O dinheiro que eu tinha guardado comigo eu já usei. O que tenho agora é pra pagar minhas contas, e vou ter que pedir o dinheiro que está com você, que eu não ia utilizar, pra conseguir fazer esse pagamento. E é muito difícil, porque eu lembro de quando eu tinha muito mais dinheiro comigo, sozinho, rendendo bonitinho todo mês, e eu destruí isso. Hoje eu me sinto muito culpado, principalmente agora que preciso fazer esse pagamento. É como se eu estivesse procurando uma fonte e vendo ela secar, mesmo sabendo que não é bem assim, mas é essa a sensação. Eu tinha tudo nas mãos e deixei tudo escorrer pelos meus dedos. É assim que eu me sinto agora: culpado, como se eu tivesse destruído o nosso futuro. Como se eu tivesse jogado gasolina e acendido um fósforo, e agora eu consigo ver o tamanho do dano que isso causou.\n\nAntes eu não enxergava, como você mesmo disse, quando a gente colocava vinte mil reais no jogo como se fosse vinte reais. A gente perdeu completamente a noção do que era dinheiro. E o pior é que, naquele momento, a gente nem estava mais buscando dinheiro no jogo. O jogo fez o trabalho dele: deixou a gente enfeitiçado, alucinado, transtornado, com raiva, com todos os sentimentos ruins que nos faziam voltar cada vez mais pra ele. Eu perdi totalmente a noção do que era o dinheiro de verdade.\n\nHoje, eu sei o valor que sete mil reais têm. Eu sei o peso que esse dinheiro carrega. Mas no jogo, eu não sabia. Eu tinha perdido completamente esse entendimento. E agora que eu preciso desse dinheiro, eu me sinto muito mal por perceber que tinha tudo na palma da mão e deixei escapar. Que destruí algo que estava construindo.\n\nMas eu também entendo que a gente estava sob o efeito de um vício, e que estamos em um processo de cura. Mesmo assim, é difícil aceitar. Porque, em algum lugar dentro da gente, parece que existe essa busca por recompensa, por uma compensação pelos danos causados, uma vontade de reparar tudo.\n\nEu fico muito pensativo sobre isso, mas eu sei que não devo voltar pra aquele lugar. Basta ver como eu me sinto agora por causa do que fiz. Voltar pra lá pra quê? Se eu jogasse agora e ganhasse os sete mil do Vinícius, depois eu perderia de novo. É melhor lidar com esse sofrimento agora e deixar o tempo curar, do que reabrir feridas, sentimentos e o vício que me destruíram.\n\nRespondendo ao tema, durante o período em que a gente jogava eu perdi totalmente a noção do que era dinheiro. Agora eu voltei a ter essa noção. E, mesmo sofrendo por isso, acho que é um sofrimento necessário, porque quando eu tiver muito dinheiro de novo  e eu acredito que a gente vai ter  eu vou saber dar valor. Talvez o vício tenha me deixado doente, talvez eu ainda carregue essa culpa, mas é difícil se livrar completamente dela. Às vezes fico pensando que, se um único passo tivesse sido diferente, o destino poderia ter sido outro pra melhor ou pra pior.\n\nEntão é isso. Eu perdi totalmente a noção do que era o dinheiro.\n",
        "difficulty": "facil",
        "completedAt": "2025-10-22"
      },
      {
        "dayNumber": 55,
        "isCompleted": true,
        "reflection": "Welder:\nPra mim, o tilt é quando eu perco completamente a noção da realidade. É aquele momento em que estou jogando, perdendo dinheiro ou até ganhando, e deixo de perceber o que o dinheiro realmente representa. Fico viciado na sensação, na expectativa de ganhar, e hoje eu entendo que nem era sobre o dinheiro em si, mas sobre a emoção. O dinheiro não era o foco; era a adrenalina.\n\nO tilt me fez perder o controle, principalmente nos momentos de perda. Eu me desconectava da realidade, como se o jogo bugasse o cérebro, fazendo a gente acreditar que ainda havia alguma chance de recuperar o que foi perdido. Só que essa recuperação nunca vinha. Era um ciclo: acreditávamos que podíamos controlar algo que, na verdade, nunca esteve sob nosso controle.\n\nO jogo moldava nosso comportamento, nos fazia aumentar as apostas, mudar estratégias, achar que estávamos aprendendo, quando, na verdade, estávamos sendo manipulados. Cada perda parecia um convite para apostar mais, e o efeito alucinógeno disso tudo era devastador.\n\nHoje, fora desse ciclo, eu consigo enxergar a ilusão. Sei que nada se recupera ali dentro. O que passou, passou. Já são 55 dias longe do jogo, 55 dias que poderiam ter sido o fim de tudo, mas viraram um recomeço. Estamos firmes, falando sobre isso todos os dias, com a seriedade que o tema merece. É assim que a gente se mantém longe dessa ilusão que destrói, que faz perder a cabeça e sair de si.\n\nO jogo causa uma espécie de pane mental. É como naquele vídeo do passarinho que experimenta pequenas doses de droga: no começo parece inofensivo, mas, aos poucos, ele vai perdendo a capacidade de voar até não conseguir mais sair do chão. Era assim que estávamos.\n\nMas, graças a Deus, estamos há 55 dias longe disso. E eu reafirmo: o jogo não vai mais fazer parte da nossa vida. Vamos reconstruir tudo, comprar nossa casa, voltar a ganhar dinheiro, reconquistar o que perdemos. Os planos de Deus são muito maiores que qualquer perda.\n\nEu achava que era um caso perdido, cheguei a dizer que queria ser internado se voltasse a jogar. Mas hoje estou provando, e você também, que conseguimos. Cinquenta e cinco dias de força e consciência. O jogo nos destruiu, mas também nos ensinou. Hoje somos mais maduros, mais conscientes, sabemos quem realmente está do nosso lado e o que queremos da vida.\n\nMesmo com todo o mal que ele causou, o jogo nos deixou lições. Ele mostrou nossos limites e nos fez enxergar o valor da paz e da sobriedade. A tentação ainda aparece, especialmente quando falamos de dinheiro, mas agora eu sei lidar. Não precisamos mais disso. Temos o que precisamos pra viver bem.\n\nEstamos plantando, e os frutos vão vir. Somos pessoas boas, de coração limpo, que ajudam os outros. Não somos desonestos, não somos bandidos. Somos sobreviventes de algo que quase nos destruiu, e hoje estamos mais fortes, mais conscientes e mais vivos do que nunca. Parabéns pra nós.\n\nLINK DO VIDEO QUE MENCIONEI: https://www.youtube.com/watch?v=OTajcdvMe1g\n\n##########\n\nCHARLES:\n\nEu acredito que esse tema de hoje, entre todos os que eu costumo falar, é um dos mais importantes. Porque, sinceramente, quando a gente joga e entra nesse tilt, parece que tudo foge do controle. A gente perde a consciência, a sabedoria, e simplesmente não consegue parar. É como se o cérebro bugasse mesmo, e, nesse estado, a gente perde a noção do tempo, da vida, da realidade, do dinheiro. E foi exatamente isso que aconteceu com a gente. Foi isso que fez a gente perder tanto.\n\nEu lembro daquele dia em que você me chamou pra jogar e pediu pra eu prometer que, se a gente perdesse dinheiro, iria parar. E eu disse que não dava pra prometer. Porque, quando a gente começa a jogar, parece que não é mais a gente ali. A gente perde o controle das próprias ações. E desde então, a gente decidiu se unir pra nunca mais cair nessa armadilha. Porque a gente sabe o quanto aquele lugar é perigoso. É como se hipnotizasse a gente. A gente perde o sentido de tudo, e o dinheiro vai embora, junto com a paz.\n\nMas hoje eu fico muito feliz por ter tido, lá no dia 0, essa ideia de refletir diariamente. Porque foi ali que a gente começou a pensar em enfrentar isso um dia de cada vez. Eu tinha visto um vídeo que dizia algo simples, mas profundo: a gente toma banho todo dia, se alimenta todo dia, bebe água todo dia... então por que não falar dos nossos problemas e agir todos os dias também?\n\nA gente achava que pra vencer o jogo precisava parar de falar sobre ele, fingir que o assunto não existia. Mas toda vez que a gente tentou fazer isso... a gente só se deu mal. Dessa vez foi diferente. A gente abraçou a minha ideia, você aprimorou ela, e juntos a gente se comprometeu de verdade. E olha só: já são 55 dias sem jogar. É um marco. Um recorde. Faz quase um ano que a gente não ficava tanto tempo limpo. E agora estamos chegando ao segundo mês.\n\nEu tô muito orgulhoso da gente. Porque, apesar de tudo que o jogo destruiu, a autoconfiança, o amor-próprio, o nosso patrimônio... a gente tá reconstruindo, passo a passo. E tá mostrando que não é só força que vence isso, mas também paciência, persistência e união. Quando um tá fraco, o outro apoia.\n\nCriar esse site também foi um passo enorme. Ele nos ajuda a colocar pra fora, a escrever, registrar, acompanhar cada dia. Porque o ser humano precisa disso, de ver o progresso, de enxergar a própria jornada. E quando a gente olha e vê que já se passaram 55 dias, vê tudo que escrevemos, tudo que superamos, e ainda vê esses quadradinhos verdinhos mostrando o quanto a gente avançou… dá uma sensação boa. Uma força nova.\n\nA gente finalmente tá seguindo na luz, num trilho certo, sem se perder. Antes, a gente tentava de todo jeito e nunca dava certo. Agora, não, agora a gente tá comprometido, firme, e os resultados estão vindo.\n\nE é por isso que eu tô feliz. De verdade.\nPorque dessa vez, é diferente MESMO.",
        "difficulty": "facil",
        "completedAt": "2025-10-23"
      },
      {
        "dayNumber": 56,
        "isCompleted": true,
        "reflection": "Welder:\nA gente tem que falar sobre tempo. Com esse tempo, eu poderia ter cuidado mais de mim, poderia ter empreendido, arriscado em outros negócios, aceitado oportunidades que apareceram e que eu recusei porque estava iludido com o jogo. A gente poderia ter viajado, proporcionado mais coisas para os nossos pais.\n\nE aí entra o dinheiro também. Não só o tempo, mas o quanto o tempo se mistura com o dinheiro. Se a gente não estivesse preso naquele ciclo, teria sobrado os dois: tempo e dinheiro. A gente poderia ter vivido mais, se cuidado mais, reformado esse apartamento, comprado uma casa. Perdemos tudo isso, tempo e dinheiro, e é triste pensar que foi um tempo tão valioso, jogado fora.\n\nA gente ficou ali, jogando, vivendo um dia após o outro, enfeitiçados, vidrados numa ilusão, numa possibilidade que parecia mudar nossa vida, mas só afastou a gente dos nossos sonhos. Além de perder tempo e dinheiro, isso fez com que agora a gente precise batalhar o dobro para conquistar o que já tinha nas mãos e perdeu.\n\nMais do que o dinheiro, a gente realmente perdeu muito tempo. Mesmo nos últimos dias, quando jogávamos menos, bastava começar que o dia inteiro se perdia, sem almoço, sem jantar, sem fazer nada além daquilo.\n\nÉ difícil enxergar tudo isso agora, de fora, e ver o tanto de coisas que a gente deixou para trás. Não foi só tempo, foi vida.\n\n################\n\nCHARLES:\n\nPra mim, esse assunto de horas perdidas jogando, olhando pra tela ali, né, que eu poderia ter feito, me traz à memória um monte de coisas, um monte de coisas que eu deixei de fazer, que eu perdi tempo por causa do jogo e que eu poderia estar em outro patamar hoje. Eu acredito que, muitas vezes, deixei de trabalhar pra jogar, deixei de trabalhar pra ficar vidrado na tela, e muita coisa que eu poderia ter feito nesse meio tempo, ou nesse tempo todo, por exemplo, ter focado na minha carreira internacional, ter estudado, ter corrido atrás, eu perdi a vontade porque gastei muito tempo naquilo, tomava muito a nossa energia.\n\nTeve momentos em que a gente deixou de ir pra academia, deixou de se cuidar, de fazer coisas interessantes, de ter trabalhado, de ter gasto esse tempo em estudo, em novas ideias. Hoje a gente não tem mais a casa que já era pra gente estar vivendo, então é mais um tempo perdido, um tempo em que a gente está vivendo no apartamento, sendo que já poderia estar colhendo esses frutos, que meio que se misturam com dinheiro. Tempo e dinheiro, né? Tempo é dinheiro e vice-versa.\n\nEntão, a gente perdeu muito tempo de vida mesmo nesse sentido, muita coisa que já era pra estar sendo vivida. Um patamar de vida hoje que já era pra gente estar colhendo. Esse tempo que a gente vai ter que gastar de novo, eu vou ter que gastar mais anos da minha vida pra juntar o dinheiro que eu tinha, você vai ter que gastar mais anos da sua vida pra juntar o dinheiro que você tinha, e já era pra gente estar vivendo um ótimo momento. Eu sei que a gente ainda está muito bem, mas era pra gente estar vivendo outro tempo, com casa, com viagens, talvez com um corpo melhor pros dois.\n\nA gente parou no tempo mesmo, literalmente. Eu acho que a gente jogou fora dois anos da nossa vida, que o jogo tirou. Por mais que a gente tenha vivido muita coisa nesses dois anos, a gente parou no tempo pra muita coisa também, durante esse período, que já era pra gente estar vivendo muito mais do que vive hoje, e a gente não está, porque o jogo tirou. Eu lembro das vezes que eu não dormia, que ficava até 5h, 6h da manhã, às vezes virava a noite jogando aquilo pra ter que trabalhar no dia seguinte. Como que trabalhava, né?\n\nA gente mergulhou muito naquele mundo, e o fato de ter ficado tanto tempo ali foi crucial pra que a gente viciasse tanto e perdesse a noção da realidade, de tudo, de dinheiro. E pra mim, eu não quero perder mais nem um minuto ali. Eu quero, igual tô fazendo agora, correr atrás do meu dinheiro, do meu trabalho. Isso dá mais ânimo pra você fazer as coisas, gastar seu tempo com pessoas que você gosta, com viagens, com trabalho, com estudo, com coisas interessantes pra você fazer, em vez de ficar enfornado ali, gastando seu tempo de vida e o dinheiro que você ganhou, que pra você ter ganhado aquele dinheiro, você perdeu tempo de vida. ",
        "difficulty": "medio",
        "completedAt": "2025-10-24"
      },
      {
        "dayNumber": 57,
        "isCompleted": true,
        "reflection": "CHARLES:\n\nAcho que, pra mim, o jogo trazia realmente essa adrenalina, essa coisa do inesperado e do legal, do que poderia vir. E quando a gente ganhava muito dinheiro, a gente ficava numa euforia muito grande, que, quando a gente parou de jogar ou não jogava todo dia, claro, a gente sentia falta dessas emoções. Então a vida começou a ficar sem graça. Eu buscava essa adrenalina, aquela emoção ali, aquela coisa toda que o jogo traz. Independentemente de ser algo bom ou ruim, eram sentimentos muito fortes, e quando você vem pra vida real, que é uma vida sem graça, que você tem que trabalhar, lavar vasilhas, lavar roupa, sabe, as coisas acabam perdendo a graça.\n\nE foi isso que aconteceu com a gente. A gente se tornou muito viciado nisso justamente porque ali a vida era mais interessante, fosse algo muito ruim ou algo muito bom. Tinha uma adrenalina, tinha uma emoção. E na vida real não é assim, né? As coisas são mais lentas, mais devagar, mais monótonas. Tudo tem um tempo. Não é algo que acontece a todo momento e que libera essas emoções, essa endorfina, essa dopamina.\n\nEntão a gente viciou nessa substância aí, e o cérebro, a gente já estudou muito sobre isso, né, é viciado em química, em substâncias, em sensações, e não só em razões. Aliás, o cérebro nem é viciado em razão, é em emoção. Então a gente acaba ficando muito preso naquilo ali, e ficou extremamente viciado naqueles sentimentos. Por isso eu acho que hoje o nosso tédio está muito pior do que antes. A gente tinha tédio antes, mas era um tédio que a gente recorria a coisas legais, e não a jogos. Está sendo um processo difícil de desmame, por assim dizer, mas acho que a gente está vencendo.\n\n######################\n\nWELDER:\n\nPra mim, a adrenalina da aposta é, como te falei hoje ou talvez ontem, muito mais sobre a sensação de jogar do que sobre querer ganhar dinheiro. Nos momentos em que sinto tédio, quando já fiz tudo o que tinha pra fazer, quando dependo de outras pessoas e não posso resolver nada por mim mesmo, é aí que o jogo vem à cabeça. Ele preenchia o dia, as horas, de alguma forma.\n\nEssa mistura de fatores, a adrenalina, o tédio, a vontade de recuperar dinheiro e a busca por uma desculpa pra jogar, fazia o jogo se tornar uma fuga. Pra mim, o jogo sempre esteve ligado a esse sentimento de vazio, de falta de propósito no momento. Hoje percebo que, muitas vezes, eu queria jogar não só pelo dinheiro, mas também pra preencher aquele tédio, aquela sensação de estar parado. Tipo hoje, que é feriado, todo mundo com quem eu precisava falar não podia resolver nada, e o jogo parecia uma saída pra ocupar o tempo, pra fazer alguma coisa, mesmo que fosse algo destrutivo.\n\nA adrenalina era o sentimento que a gente buscava o tempo todo. Tudo era muito intenso, não existia meio-termo. Ou a gente estava muito feliz, ou muito triste. Quando a gente ganhava, era uma euforia absurda, quase inacreditável, e ao mesmo tempo vinha a vulnerabilidade de perder tudo logo depois. E é justamente isso que o jogo quer: confundir corpo e mente, fazer a gente voltar sempre em busca daquela dose de adrenalina que é difícil sentir em outras coisas da vida.\n\nNa academia, por exemplo, a gente também libera adrenalina e endorfina, mas nunca na mesma intensidade nem com a mesma rapidez. No jogo, tudo acontece em segundos, o alto e o baixo, o bom e o ruim. E é isso que acaba viciando, a velocidade com que a emoção vem e vai. Um dos principais mecanismos que o jogo usa pra prender a gente é justamente esse, essa montanha-russa emocional, essa sensação extrema que a gente fica querendo reviver, mesmo sabendo o quanto nos destrói.\n\n",
        "difficulty": "medio",
        "completedAt": "2025-10-25"
      },
      {
        "dayNumber": 58,
        "isCompleted": true,
        "reflection": "WELDER:\n\nProfissionalmente falando, o jogo me afastou do meu trabalho, da minha cabeça e da minha capacidade de ganhar dinheiro. Me afastou até da minha capacidade de entender as coisas. Eu simplesmente não queria mais trabalhar. Durante muito tempo, acreditei que o jogo era uma fonte de renda, principalmente no começo. Achei que não precisaria mais trabalhar, que não precisaria de mais nada.\n\nE o mais curioso é que, fora do jogo, eu estava em um momento muito bom da minha vida. Eu ainda tinha contrato com a Saúde, tinha várias frentes de trabalho e estava construindo o que eu realmente queria pra minha vida: ter várias fontes de renda, estabilidade, crescimento.\n\nTenho certeza de que, se eu não tivesse me envolvido com o jogo, ou pelo menos uma grande probabilidade, hoje eu estaria em um lugar muito maior. Com 31 anos, poderia estar em uma posição que muita gente com 60 ainda não alcançou. Porque, aos 30, eu já tinha conquistado coisas que muitas pessoas não conseguem na vida inteira.\n\nTer tido esse downgrade foi muito prejudicial pra mim. O jogo me fez desacreditar de mim mesmo. Eu me sentia incapaz de investir, de ganhar dinheiro, de fazer qualquer negócio com qualquer pessoa, porque o destino do dinheiro era sempre o mesmo: o jogo, a perda.\n\nMas eu acredito que é possível reconstruir o caminho que a gente perdeu. Do mesmo jeito que conseguimos ir longe, podemos voltar. O dinheiro vai voltar, a cabeça vai voltar. Só que pra isso, a gente não pode recair. Precisamos provar pra nós mesmos que somos capazes, que tudo isso vai ficar no passado. Vai doer, sim, mas precisamos lidar com essa dor, com essas frustrações, e continuar. Porque a verdade é que a gente está, finalmente, no caminho certo.\n\n##################\n\nCHARLES:\n\nEu acredito que, pra mim, foi devastador o efeito do jogo, o impacto do jogo na minha vida profissional, principalmente porque eu estagnei muito na questão de procurar novas oportunidades. Porque naquela época eu tava começando a ganhar dinheiro em euro, né? Tava começando a participar de vários processos. Mesmo que eu não passasse em alguns, eu poderia ter continuado, poderia ter tido um ótimo trabalho, eu poderia estar ganhando 20 mil por mês. Não duvido de nada. Eu tava numa frente muito boa. Tinha conseguido meu primeiro trabalho fora, né? Meu primeiro, depois o meu segundo.\n\nE depois que eu comecei a jogar, comecei a perder dinheiro lá, as coisas não faziam sentido. Naturalmente, eu comecei a entrar em depressão, comecei a desacreditar. Igual você falou também, né? A gente começa a desacreditar que é capaz. Você começa a ter medo de ter dinheiro, porque até pouco tempo você falou que tinha medo de o dinheiro cair na sua conta. Que merda é essa? Você ganhou, você trabalhou, você mereceu aquele dinheiro. Mas você tem medo do dinheiro, porque o jogo criou esse medo. Esse medo de que tudo que você tem, você vai perder.\n\nEntão, pra que que eu vou trabalhar? Pra que que eu vou correr atrás? Pra que que eu vou ficar 30 dias trabalhando como CLT se, no final do mês, eu não vou ter o dinheiro do meu salário, porque eu preciso usar ele pra pagar dívida de jogo? Então é uma merda. A gente trava muito. A gente estagnou. Esses dias eu tive um pensamento muito ruim: pensar que eu trabalhei quatro anos no Bradesco e joguei todo o dinheiro que eu ganhei lá fora, sendo que foi um dos meus maiores traumas que eu carrego na minha vida.\n\nEntão é muito ruim você pensar que jogou fora esse dinheiro. Eu sei que dinheiro foi feito pra ser gasto, mas eu e você entramos numa situação em que a gente tava jogando fora o nosso dinheiro, não gastando. É diferente. Você comparar quatro anos de trabalho no Bradesco e dizer: “ah, eu comprei um lote, comprei um carro, viajei”, é uma coisa. Agora dizer “joguei fora, não aproveitei nada, todo o esforço que eu tive, tudo que eu passei, toda a raiva que eu vivi ali foi meio que inutilizado”, é muito triste pensar assim.\n\nPor isso que, a partir de agora, a gente tem que criar novos momentos pra não se arrepender, pra não sentir o que a gente tá sentindo hoje, que é algo muito doloroso, muito dolorido, que machuca demais. Eu acho que a gente perdeu muito tempo. A gente poderia estar muito mais à frente. Mas a gente tem que pensar também que poderia estar pior do que tá hoje. E hoje a gente tá criando dias diferentes, momentos que eu tenho certeza de que a gente não vai se arrepender.\n\nA gente vai se orgulhar dessa trajetória. Se eu recaísse hoje, ainda assim eu teria orgulho dessa trajetória que a gente criou. Mas eu não quero parar aqui, sabe? Eu quero continuar. Eu quero me orgulhar de tudo que eu fiz até agora, de tudo que a gente fez, inclusive de quando a gente recaiu antes, porque a gente sempre fala isso, né? Era pra ter perdido muito mais dinheiro, era pra ter perdido a nossa vida talvez... vai saber.\n\nEntão a gente tá muito bem. A gente tá trilhando um caminho lindo. E é através do trabalho, de dar valor ao trabalho, de pegar nossa vida profissional, valorizar ela e fazer uma história bonita daqui pra frente. ",
        "difficulty": "medio",
        "completedAt": "2025-10-26"
      },
      {
        "dayNumber": 59,
        "isCompleted": true,
        "reflection": "WELDER:\n\ndurante muito tempo a gente associou o jogo a algum tipo de lógica, algum mecanismo que nos fizesse acreditar que poderíamos ter controle sobre ele. Usávamos músicas para “chamar pagamento”, cores, dias da semana, ou até lembranças de vezes em que o jogo tinha pago em determinado dia ou mês. Coisas totalmente fora da lógica, baseadas na ilusão de que seria possível decifrar o momento em que o jogo iria pagar.\n\nA gente se apegava muito a esses mecanismos, jogar de madrugada porque “de madrugada paga”, trocar de jogo porque “aquele já pagou”, e assim criamos várias superstições e pensamentos sem sentido para justificar continuar jogando. Quando uma desculpa não funcionava, buscávamos outra, tipo “você tá sem sorte, vamos na minha conta”, e assim por diante. Hoje, no dia 59, olho pra trás e penso: por que eu fiz tudo isso?\n\nMas eu tô nesse processo de me perdoar, de te perdoar, de nos perdoarmos, de reconstruir. E é assim que tem que ser. Não me arrependo de não ter jogado ontem, muito pelo contrário, me arrependeria se tivesse jogado. Se eu tivesse zerado tudo de novo, talvez perdesse o pouco ânimo que ainda tenho pra reconstruir e reconquistar as coisas. Ficar longe disso é realmente o melhor remédio.\n\nTenho feito esse exercício todos os dias, lembrar que ainda temos muito a perder, muito a construir. A gente tem uma vida perfeita nas mãos e vai encontrar a forma certa de viver com mais segurança pra realizar nossos maiores sonhos. Longe do jogo, estamos cada vez mais próximos disso, porque não existe outro caminho. Jogando, a gente só se afasta do que quer.\n\nDurante dois anos criamos barreiras, traumas, vivemos muita coisa. E, pensando sobre o tema, percebo que realmente vivíamos sob esse “pensamento mágico”, acreditando ter algum tipo de controle, alguma sorte especial, dentro de algo que, pelo próprio nome, já diz tudo: jogo de azar. Essa é a minha opinião.\n\n########\n\nCHARLES:\n\nEu poderia começar dizendo que foi o que fez com que a gente ficasse e se tornasse cada vez mais viciado no jogo. Porque eu e você somos muito supersticiosos com números, com datas, com horários, com sinais. Ou talvez a gente tenha ficado ainda mais assim por causa do vício. Não sei o que levou o quê, o que veio antes, mas isso aí, eu tenho certeza, foi uma das coisas que mais fez a gente perdurar no vício.\n\nPorque dependendo do dia, dependendo do sonho, das cartas do tarô, do número, da data de nascimento, do dia, do mês, tudo a gente colocava como um sinal divino pra jogar. Um sinal do universo pra jogar. Eu acho que eles usam muito isso no jogo também, quando é roleta, quando é cor, né? “Ah, é minha cor preferida, meu número preferido.” E quando acontece, a gente renova aquele sinal de que “tá vendo? minha cor é melhor, meu número é melhor”. E aí você começa a acreditar que tem sorte.\n\nMas é tudo um bando de programas de computador extremamente sofisticados pra fazer com que todos percam, ou que 98% percam. Então, acho que me enganou demais, me enganou por muito tempo. E talvez tenha te enganado também, porque você fica com essa superstição, com esse sentimento de que vai ganhar um dinheiro. Isso também é uma superstição, né? Você acreditar que está recebendo um sinal de Deus, que Deus vai te devolver um dinheiro, como a gente sempre falou: “Deus quer que a gente ganhe uma parte do nosso dinheiro pra gente poder parar”. Tudo enganação, tudo superstição.\n\nE tudo isso fez com que a gente caísse muitas vezes. Então eu acho que esse é um papel muito importante pra quem é viciado em jogo: a gente precisa prestar atenção pra que isso não engane a gente. Pra que ocasiões, lugares, dias e qualquer outra coisa não façam a gente acreditar que é um sinal divino pra voltar a jogar.\n\nA sorte a gente já sabe de onde vem, né? Do trabalho, da persistência, da paciência, e de valorizar o que a gente tem. Porque não adianta nada você ganhar muito dinheiro e, na mesma medida, jogar todo ele fora e desvalorizar.\n\nA gente tá muito esperto pra isso hoje. Por mais que você fale, no fundo você sabe que é mentira. A sua cabeça tenta te enganar pra você JOGAR sem pensar, mas você sabe que é uma tentativa de enganação, e você logo descarta. Pra mim, é muito importante a gente manter esse alerta, pra que nenhuma superstição, nenhum ritual, venha fazer com que a gente volte a jogar. Nunca mais.",
        "difficulty": "facil",
        "completedAt": "2025-10-27"
      },
      {
        "dayNumber": 60,
        "isCompleted": true,
        "reflection": "WELDER:\n\nPra mim é impossível, não existe isso. Eu acredito que pra um viciado, a partir do momento em que ele começa, nos primeiros segundos já fica totalmente enfeitiçado, antes mesmo de jogar. Acho que a partir do momento em que você decide que realmente vai jogar, você já começa a ficar enfeitiçado. Pra mim, nos primeiros segundos eu já fico enfeitiçado. Aí eu lembro de tudo o que perdi e qualquer ganho ali vai ser irrisório perto do que já perdi. Então, pra mim, um viciado não tem nenhuma forma de jogar de maneira responsável. A gente viveu isso jogando no cassino físico lá em Curaçao e viu que isso realmente não existe. A gente estava num cenário extremamente favorável, ganhando, e mesmo assim chegou a brigar por causa disso. Então, pra mim, tanto o cassino online quanto o físico são perigosos. O físico, na verdade, acabou sendo bom em certo sentido, porque me fez descobrir algo mais interessante, mais imersivo que o online, e isso acabou diminuindo minha vontade de jogar pela internet. Talvez, como eu te disse lá na viagem, ter jogado lá foi uma coisa de Deus mesmo. Deus permitiu que acontecesse pra que a gente conseguisse superar os 30 dias, que era um marco decisivo pra gente, porque da outra vez a gente já tinha quebrado. Então, por mais que a gente tenha \"recaído\", uma recaída lá, foi algo diferente. Era um jogo de azar, como o psicólogo falou, uma modalidade que a gente nunca tinha experimentado na vida e que a gente viu que é muito mais prazerosa do que o online. Mesmo assim, se tornou perigosa, muito perigosa, porque pra um viciado como a gente, que já perdeu tanto dinheiro, não tem como jogar de forma responsável.\n Por isso eu fico indignado com esses artistas e famosos que falam “joguem com responsabilidade”, sendo que nos primeiros segundos do jogo já é decisivo pra você. Pra mim foi assim. Quando eu comecei a jogar lá naquele dia com a Gabriela, eu coloquei oito reais e aquilo durou sei lá, duzentos. Aquilo libera uma dopamina muito forte na sua cabeça. Como é que você quer cobrar responsabilidade de uma atitude que já é, por natureza, irresponsável? A gente tá lidando com a perda de dinheiro, com impulso, com vício. Não tem como ser responsável com isso. Pra mim, não existe maneira. Eu não tenho nenhum medo de afirmar que não tem como jogar de maneira responsável sendo um viciado. E é perigoso até pra quem não é viciado, porque o risco de se viciar é muito grande. O que a gente mais vê são relatos de pessoas que entraram e não conseguiram sair. A gente não vê relatos de pessoas que entraram, ganharam muito dinheiro e pararam. Isso não existe. Se você entra e ganha, quer ganhar mais. Se você entra e perde, quer voltar pra recuperar. É um ciclo vicioso que te deixa cada vez mais dependente, como uma droga. É uma droga, né? É isso. Não existe nenhuma forma de jogar de maneira responsável. Dizer “ah, vou jogar duzentos reais e parar por aí” não funciona. Se a gente perder duzentos hoje, vai querer voltar pra recuperar, porque sempre foi assim e provavelmente sempre vai ser. Aí os duzentos viram quatrocentos, que viram dois mil, que viram três mil, que viram dez mil, e por aí vai. Não tem nenhuma forma de jogar isso de maneira responsável. Eu quero aproveitar e deixar registrado que no dia de hoje a Ana Paula nos trouxe muita alegria. Ela trouxe para comemorarmos os 60 dias bolo, refri e salgadinhos. Isso deu um quentinho no coração muito bom. Obrigado, amiga! Você é muito especial pra mim. Você faz parte dessa jornada. Obrigado por todo apoio e suporte. Conte comigo sempre. \n\n####################\n\nCHARLES:\n\nEu também não acredito nessa questão de jogo responsável. Não existe isso! Eu diria que pra maioria, ou quase todas, isso não existe. Eu acho que até quando as pessoas apostam em apostas esportivas, pelos relatos que a gente já viu na internet, são pessoas que não sabiam que eram viciadas e que passaram a perder o prazer de assistir ao jogo de futebol, por exemplo, pra apostar, pra ficar acompanhando ali. Perdeu a graça do jogo. Já não queria mais assistir, só queria que o resultado fosse o resultado da aposta.\n\nE quando a gente fala de jogos de cassino, de jogos de slot, desses que a gente vê, tipo Tigrinho ou qualquer coisa parecida, a gente vê que é pior ainda, porque o resultado é imediato, tá a um clique. A rapidez com que você ganha ou perde o dinheiro determina o grau de vício que você vai ter.\n\nEntão, pra gente, principalmente pra gente, que se declara viciado, em tratamento, em remissão, é totalmente verdade que a gente não tem como, não consegue mais jogar de forma responsável. Isso não existe. A gente já provou isso centenas de vezes: nas vezes que a gente se propôs a parar, nas promessas que a gente fez, nas vezes que a gente colocou nosso amor em prova, que eu coloquei a vida em jogo, que você colocou a vida da sua mãe, a história da sua mãe, a sua história. A gente já fez promessa pra Deus, pra não sei quem, e nunca conseguiu cumprir.\n\nA gente não consegue jogar de forma responsável, porque uma vez que a gente tá imerso na droga, no vício, é muito difícil ter esse controle. E jogar lá, no cassino físico em Curaçao, foi muito importante, porque a gente percebeu, e eu repeti isso várias vezes lá (graças a Deus eu tava bem lúcido) que foi importante ter jogado lá pra entender que não existe “um pouco”, não existe “tentar”, não existe “controle”. Não existe mais isso, só mais uma vez. Porque a gente perde o controle.\n\nVocê perdeu o controle muito rápido, eu demorei um pouco mais, mas também perdi. E aí, quem vai controlar a gente se, depois do dia 60, a gente decidir jogar de novo de forma “controlada”? Um valor menor, recuperar pouco a pouco, como você sugeriu esses dias… não existe.\n\nA partir do momento que a gente coloca o pé ali, já é dominado por um monte de sentimentos que são resgatados, sentimentos que controlam a nossa cabeça. Eu acho que a gente fica hipnotizado antes mesmo de depositar. Só de abrir o site, pegar o dinheiro pra depositar e pensar no jogo, a gente já tá totalmente dominado. O coração dispara, os batimentos aumentam, o nervosismo aumenta, o medo aumenta, e vem um monte de sentimentos: de euforia, de medo, de ansiedade, um monte de sensações horríveis que bagunçam a nossa cabeça.\n\nComo é que a gente vai ter controle, ainda mais sabendo o tanto que a gente já perdeu? Porque, independente do valor que a gente ganhar, não vai se equiparar, não vai nem chegar perto. Nem de longe vai dar pra ver o fundo do poço que a gente chegou, o quanto a gente perdeu.\n\nPra mim, isso não existe. Qualquer falácia de responsabilidade, de controle, de sensação de que “agora a gente tá melhor”, “agora a gente tá mais inteligente”, não funciona. É melhor a gente nunca testar, nunca apostar, literalmente, pra ver até onde a gente é capaz de chegar com a nossa força.\n\nPorque é um tipo de lugar que infelizmente já dominou a nossa cabeça. Ele só precisa de uma chance pra destruir tudo de novo, e eu não quero dar nem um pingo de chance. O dia que a gente quase jogou lá, no dia 41, eu me senti muito mal. Eu pensei: “cara, eu tô abrindo a porta do inferno pra minha vida de novo”. Será que é isso mesmo que a gente quer?\n\nE tenho vários arrependimentos. E um dos arrependimentos que eu não vou levar é que, nesse dia 41, eu consegui ser forte o bastante pra segurar. Porque nesse dia específico você tava realmente disposto a tudo, e eu consegui dizer não, consegui ter sabedoria. Deus me ajudou, alguém me deu força, as orações da sua mãe, da Ana Paula, do meu pai, as nossas… alguém me deu força aquele dia pra falar não.\n\nPorque a gente não estaria aqui hoje! Literalmente. A gente não estaria no dia 60. Teria voltado, teria aberto de novo a porta do inferno pra essa casa, trazendo todos aqueles sentimentos, mais perdas, mais dor.\n\nEntão, não existe isso. A gente tem que colocar isso na cabeça de uma vez por todas. Não existe jogo responsável, nem pra quem tá começando, nem pra quem acha que ainda não tem tanto vício, e principalmente pra pessoas como a gente, que já... nem sei se dá pra dizer “nível máximo de vício”, mas que são pessoas extremamente machucadas com isso.\n\nQualquer coisa dali abre uma ferida enorme, e o descontrole vem na mesma proporção. Então, não existe isso. E a gente vai continuar com esse pensamento até o dia que eu morrer. Aquilo ali não é lugar pra gente entrar, pra tentar, pra achar que tem controle. Porque não teve.",
        "difficulty": "medio",
        "completedAt": "2025-10-28"
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