import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 🗄️ BACKUP AUTOMÁTICO - 2025-10-13T03-27-03
 * 
 * Este arquivo foi gerado automaticamente pelo script de backup
 * Contém todos os dados do banco no momento do backup
 * 
 * Para restaurar: npm run restore
 */
async function restoreBackup() {
  try {
    console.log('🔄 Restaurando backup de 2025-10-13T03-27-03...')
    
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
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 47,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 48,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 49,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 50,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 51,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 52,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 53,
        "isCompleted": false,
        "reflection": null,
        "difficulty": null,
        "completedAt": null
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