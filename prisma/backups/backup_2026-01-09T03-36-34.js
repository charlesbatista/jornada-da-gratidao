import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

/**
 * 🗄️ BACKUP AUTOMÁTICO - 2026-01-09T03-36-34
 * 
 * Este arquivo foi gerado automaticamente pelo script de backup
 * Contém todos os dados do banco no momento do backup
 * 
 * Para restaurar: npm run restore
 */
async function restoreBackup() {
  try {
    console.log('🔄 Restaurando backup de 2026-01-09T03-36-34...')
    
    // Limpar dados existentes
    console.log('🗑️  Limpando dados existentes...')
    await prisma.day.deleteMany({})
    await prisma.journey.deleteMany({})
    
    const journeysData = [
  {
    "id": "cmjimt8ok0000xcea9sj8p823",
    "startDate": "2025-12-25",
    "totalDays": 90,
    "createdAt": "2025-12-23T13:39:41.493Z",
    "updatedAt": "2025-12-23T13:39:41.493Z",
    "days": [
      {
        "dayNumber": 1,
        "isCompleted": true,
        "reflectionCharles": "Eu falei pra você esses dias, inclusive eu tenho ficado, tenho estado grato pela minha vida, mesmo com tudo de ruim que acontece, né. A gente reclama demais, a gente realmente tem alguns problemas reais, mas quando a gente não tá apostando, quando a gente não tá envolvido naquilo ali, eu consigo ver o quanto a gente é abençoado. Não financeiramente apenas, né.\n\nA gente pode citar um monte de coisas da parte financeira, a gente fica aqui até a noite, né, do tanto que a gente é felizardo, que a gente é privilegiado, que você hoje tá colhendo os frutos que você plantou. E eu sempre falei isso, falei isso pra você, tanto que você tem que pegar leve com você, porque você foi uma pessoa que lutou muito, batalhou muito, sofreu muito, perdeu muito tempo, se dedicou bastante, passou por muita coisa, inclusive sozinho, pra você ter a tranquilidade que você tem hoje.\n\nE mesmo tendo jogado bastante, tendo perdido muito dinheiro, um dinheiro assim de uma vida, você ainda tem um dinheiro de uma vida também, de duas vidas, de três vidas, que algumas pessoas, às vezes, numa vida inteira, não vão chegar nem perto de tocar no que você tem, juntando dinheiro, juntando bens materiais, juntando bens, né, patrimônio. Então eu consigo enxergar isso com muita clareza hoje. Antes eu sempre enxerguei isso, mas fora do jogo, sem apostar, eu consigo ver o tanto que isso é maravilhoso, o quanto que a gente tem uma vida abundante.\n\nA gente vai no mercado, a gente não pensa no preço. Claro que a gente sabe o valor do dinheiro, que se for comprar um shampoo hoje você fala: não, não vou comprar aqui, tá muito caro. Não é nesse sentido que a gente não olha preço. É no sentido de que você quer, você precisa, você vai e compra, que seja num lugar mais barato, mas você não vai ficar sem. Você não tem que escolher como muitas pessoas escolhem, né.\n\nEntão a gente hoje lancha onde a gente quer, janta onde quer, no dia que quiser. Se quiser fazer um churrasco na casa da sua mãe, você faz. Se quiser viajar, você viaja. A gente foi de executivo, voltou de executivo, a gente viajou por quatro países, e isso é muito bonito de ver. Pessoas que vieram do nada.\n\nE você sabe que você me proporciona muita coisa, você sabe disso. Você sabe que eu não faço vista grossa, ah, porque ele é meu marido, ele me ama e tá fazendo isso aí, é obrigação dele. Não. Eu reconheço tudo que você faz. Muitas das coisas que eu conquistei hoje, que eu vivi, eu devo a você. Você sabe disso, que eu devo a você.\n\nEntão como é que eu não consigo ver o tanto de coisa boa que tem na minha vida? Na ceia do Natal, a sua mãe também, que foi um presente que você me deu. Tanto que é bom, tanto que a gente tem. Se a gente tirar o jogo, a gente só tem coisas boas pra falar. Ah, o vizinho de cima é complicado, Pedro errou no negócio, o Fernando me irrita e tal, a vizinha da frente, o carro que estragou, o carro que foi arranhado. Isso não é nada perto das coisas que a gente tem pra ser grato, sabe.\n\nE sua mãe falou uma coisa também no dia 24, que realmente a gente tá aqui de passeio. A gente não leva nada, nem brigas, nem bens materiais, nem dinheiro, nem nada.\n\nEntão por que a gente tá pautando a nossa vida ultimamente no dinheiro, como se o dinheiro fosse responsável pela felicidade? Eu tenho que focar nisso. Até isso aqui do vizinho ficar atrapalhando a gente. A gente tem um teto. É muito difícil ter calma, porque isso realmente irrita bastante e ele desrespeita a gente bastante, mas a gente tem que usar isso como combustível.\n\nE até mais uma coisa boa, né. A gente tem uma loja, a gente pode construir e a gente vai construir. A gente vai construir tudo que a gente quiser. Se a gente quer, a gente vai conseguir. Pra mim é isso. Só tem coisas boas pra falar.\n\nTirando as coisas difíceis que a gente tem lutado, tem muita coisa boa pela qual eu posso ser grato. E eu consigo enxergar isso quando eu não tô apostando, porque quando eu tô, pra mim eu quero que todos se lasquem e eu não quero pensar nisso mais.",
        "reflectionWelder": "Sem apostas, eu acho que eu também só tenho motivos pra agradecer, assim, pela vida, pelas pessoas que estão ao meu redor, por ter saúde, por poder ainda fazer muita coisa. Eu acho que o jogo, ele fez eu enxergar uma versão que nem existe em mim, uma versão medrosa, uma versão insegura, uma versão que se culpa demais por tudo que fez de errado. E eu acho que, por um lado, até faz sentido eu carregar essa culpa, porque foi uma situação muito complicada pra gente, pra mim, pra gente, e às vezes eu me fecho e não consigo ver coisas boas porque eu fico focado só nisso, só no que aconteceu.\n\nMas eu não posso negar que eu sou muito feliz de ter você na minha vida, de ter minha mãe, de poder ter condição financeira ainda. Ao mesmo tempo que eu sinto medo, né, que o jogo traz, eu vejo que eu ainda tenho muito combustível, que eu posso carregar o combustível pra seguir em frente. Às vezes tem dia que a gente tá mais confiante, tem dias que não, mas eu tô muito focado que o próximo ano vai ser um ano muito abençoado, assim, na nossa vida, e que a gente vai tá longe de jogo, que a gente vai poder fechar esse ciclo nesse ano que já tá acabando. Que ano que vem a gente poder começar a escrever uma nova história, a do ano que vem, mas a partir de agora já, a partir desse ano, a gente já tá escrevendo uma nova história. E ano que vem a gente vai conquistar grandes coisas, não só no financeiro, mas também do lado emocional.\n\nE é que nem eu postei ontem, aquele negócio de Natal. No final do próximo ano, eu quero um presente que o Papai Noel me dê, eu quero que as pessoas que estão presentes na minha vida hoje também estejam presentes ano que vem. E meu maior presente são essas pessoas, porque sem vocês eu não seria nada, não teria motivo de ter dinheiro, de querer prosperar, de querer conquistar, porque às vezes sozinho, por mais que eu sou uma pessoa ambiciosa, talvez sozinho eu não teria essa gana toda, essa vontade toda.\n\nEntão, resumindo, eu consigo ver muita coisa de bom, assim, na minha vida, além do dinheiro. Principalmente as pessoas, a minha capacidade de poder conversar, de poder fazer negócios, das pessoas acreditarem em mim, de passar credibilidade quando eu estou trabalhando, de poder saber que eu sou uma pessoa confiável, de que eu sou digno dessa confiança também.\n\nE o jogo, eu acho que é que nem o Stranger Things lá, quando o Vecna tampa a visão da pessoa e ela não consegue enxergar o outro mundo. E o jogo fazia isso comigo. E eu não quero voltar pra esse lugar. Eu quero ficar nesse mundo, nessa vida, conquistando coisas, coisas e pessoas, como eu sempre fiz. É isso.",
        "difficulty": "medio",
        "completedAt": "2025-12-29"
      },
      {
        "dayNumber": 2,
        "isCompleted": true,
        "reflectionCharles": "Eu também diria que essas pequenas escolhas que eu faço todos os dias, hoje, por exemplo, e nos dias em que a gente venceu, foi pensar justamente na minha cabeça, sabe, nos meus pensamentos, no que eu posso fazer rápido pra desviar desse pensamento, dessa vontade, pra que eu possa me proteger e te proteger.\n\nUm pensamento que eu até te falei no dia em que você foi na Mônia almoçar com a Amônia. Você foi almoçar e eu pensei em jogar. Eu pensei justamente nisso: eu não vou acabar com a paz dele, eu não vou deixar, eu não vou chamar ele pra jogar rapidinho aqui antes dele ir, pra que aconteça uma merda, ele desista de ir, ele fique puto de novo, ele queira desistir de tudo. Então, naquele momento, é muito rápido. Vem o pensamento e fala: não, eu não quero isso, eu quero paz, eu escolho a paz.\n\nE todas as vezes que a gente não escolheu a paz, a gente se deu muito mal. E quase todas as vezes que a gente jogou nas últimas vezes, né, nesse ano que já se passou, que tá terminando, foram momentos em que a gente vacilou muito fácil, sabe. Não foi um momento em que a gente pensou, raciocinou, sentou, conversou e decidiu. Geralmente foram escolhas rápidas, pequenas. Bora, bora. Tá, quer ir, vamos.\n\nE da mesma forma que isso vem pra gente pra destruir a gente, pra gente jogar, eu consigo usar essa mesma tática pra não jogar. Então eu fico tentando jogar esses pensamentos, igual você falou: não vai, não quero, não é legal, escolhe a paz. Que seja bloqueando contas. Aquele dia que a gente chegou na casa da sua mãe, bloqueia todas as contas que eu tinha aberto, que ali eram um dificultador também. São pequenos passos, né.\n\nEu acho, igual você falou, não é nada nosso, que grande esforço tem que ser feito. Não. Às vezes, com um pequeno esforço, você consegue decidir, pelo menos momentaneamente, a sua paz, e a gente tem que lembrar disso.\n\nE essa, eu acho que a jornada também, apesar de ela ser um grande passo, uma grande escolha, né, a gente fazer isso todo dia, o fato de fazer todo dia é uma pequena escolha também. É uma fração do nosso dia que a gente senta aqui e conversa. Uma fração, sei lá, às vezes 20 minutos, pra 24 horas é muito pouco. É uma escolha muito pequena, né, se for pensar no dia, mas que tem um grande impacto pra proteger a nossa paz.\n\nE a gente tinha esquecido disso. A gente parou de fazer e a gente sabe que não pode parar de forma alguma com isso aqui. E até no momento em que a gente se sentir seguro, a gente não pode parar, de verdade. Eu não quero correr esse risco de novo. O dia em que for chato, começar a ficar chato, a gente tem que lembrar por que a gente começou.\n\nE que seja a cada dois dias, a cada três dias, a cada uma semana, mas que não pare igual a gente parou. De fato, a gente parou em 15 dias. Não é legal. Mas eu ainda acho que a gente, durante um bom tempo, que seja o ano que vem inteiro, faça diariamente. E depois de um tempo, se quiser fazer a cada três dias ou a cada semana, mas nunca deixar 10 dias, 15 dias, um mês.\n\nPorque isso aqui é uma pequena escolha que tá protegendo, que protegeu a nossa paz e que precisa voltar a proteger. Porque o jogo tá rondando a nossa cabeça, o cão tá tentando, o inimigo tá tentando destruir a gente, a gente tá quase cedendo pra isso de novo. E eu não quero correr esse risco, sério.\n\nEu quero levar pro ano que vem uma versão do Welder e do Charles que realmente escolhem a paz, sabe. Que a nossa paz seja tirada por qualquer outro motivo que não seja esse, porque chega de se atormentar. A gente, de verdade, que seja por outros problemas, outras coisas, mas isso aqui chega.",
        "reflectionWelder": "Pra mim é uma pequena escolha, mas que na verdade não é pequena. É uma escolha grande, porque pelo menos pra mim, quando eu penso em jogar, o primeiro pensamento que eu mando pra esse pensamento que vem é assim: você não precisa jogar hoje. Você precisa vencer só o dia de hoje. Esse pensamento diminui muito essa força de vontade de jogar quando eu faço isso.\nEntão é uma atitude muito pequena, porque é um estímulo, é a resposta que eu mando pro meu pensamento, e isso diminui muito. Mas se vier esse pensamento e eu der uma migalha pra ele, falar assim: e se eu depositar tanto, e se eu fizer, e se eu chegar nele e falar assim, assim, assim, será que ele vai querer? Será que se eu me insinuar a isso ele vai? Aí ele vai criando uma bola de neve, aí o monstro vai crescendo e ficando cada vez maior.\nHoje foi um dia que eu falei que foi moderado, porque eu pensei em jogo, mas eu dei a resposta rápida pro estímulo. Eu falei não. Meu foco agora, pros próximos dias e pro próximo ano, é, além de recuperar todo o dinheiro que eu perdi, é poder falar tranquilamente que eu nunca mais mexi com isso, que eu tô longe disso.\nEntão, pra mim, é uma pequena escolha que funciona muito bem. É isso, é ter essa resposta assim e deixar muito claro, assim, pro meu subconsciente, não tem como, mas pro meu consciente, de que toda vez que esse pensamento surgir eu não posso prolongar ele, não posso levar ele adiante. É todo dia ir matando, capinando, todo dia capinando esse mato venenoso que vai crescendo. E pra mim isso funciona bastante. É uma atitude que às vezes pode parecer pequena, mas que me protege muito de tomar outras atitudes e deixar o pensamento crescer ao ponto de concretizar e começar a jogar.",
        "difficulty": "medio",
        "completedAt": "2025-12-29"
      },
      {
        "dayNumber": 3,
        "isCompleted": true,
        "reflectionCharles": "Eu lembro exatamente da sensação de todas as vezes que a gente ficou sem jogar nesses 90 dias, o quanto eu acordava aliviado, feliz, calmo, tranquilo, sem aquela ansiedade, sem aquela culpa de quando a gente jogava no dia anterior. Então eu começava o dia mais leve, mais tranquilo, com mais energia.\n\nTodas as vezes que a gente acordava sem ter jogado, eu acordava com uma gratidão muito grande, e a minha mente agradecia muito, porque eu tinha certeza de que aquele dia ia ser bom e de que o dia anterior tinha sido muito bom.\n\nE o meu corpo físico também sentia isso. A gente sabe como a ansiedade ataca, né. Às vezes a gente fica mal, não quer comer, ou então quer comer muito. Eu sentia muito isso na ansiedade. Meu corpo ficava fraco, eu me sentia indisposto, desfocado pra trabalhar, pra fazer qualquer coisa.\n\nEntão, pra mim, é uma série de coisas que eu sentia, que eu sinto, quando eu durmo com a consciência tranquila e quando eu acordo com a consciência tranquila. E nenhum dia eu me arrependi disso. Eu espero continuar assim, acordando todos os dias sem me arrepender, pelo menos, de ter jogado. Acho que a gente nunca se arrependeu de não ter jogado, com certeza não.\n\nE eu acredito que meu corpo agradece em todos os sentidos. Fisicamente, como eu falei, mas principalmente mentalmente. Eu me sinto mais pronto pro dia, me sinto mais confiante, mais feliz, mais animado pra fazer as coisas.\n\nQuando é o contrário, eu me sinto extremamente cansado, desmotivado, desanimado. Me sinto com uma exaustão gigantesca, que só o jogo tava conseguindo me dar. Qualquer outra coisa não conseguiria me dar tanta exaustão quanto esse assunto.\n\nEntão são vários motivos pra gente continuar sem jogar, continuar trilhando esse caminho, esse novo caminho que a gente tá trilhando agora.\n\nEu quero muito fazer essa jornada e terminar 100 por cento limpa, sem em nenhum momento a gente fraquejar ou deslizar. Tenho certeza de que, se a gente conseguir isso, a gente vai conseguir passar todo o resto do ano fazendo essa jornada 100 por cento limpa.\n\nEu falo 100 por cento limpa porque a gente jogou no cassino físico, né, então eu sinto que teve essa falha na outra vez. E eu não quero que isso aconteça de forma alguma. Pra mim, tem vários efeitos negativos, com certeza, e eu não quero sentir isso nunca mais.",
        "reflectionWelder": "Pra mim, o meu corpo agradece. Eu não sei se você lembra, né, de todas as vezes que, quando a gente tava nesse processo de não jogar, até mesmo antes da jornada, quando a gente tava ainda tentando se ajudar, tentando achar um meio, descobrir uma forma de não jogar. Às vezes, quando você falava, eu te falava isso, né, que a gente nunca se arrepende de não jogar no dia seguinte.\n\nPorque jogar, se a gente jogar hoje, a gente, independente do cenário, como a gente sempre fala, se ganhar ou perder, ganhando ou perdendo, amanhã, se a gente jogar agora e ganhar, amanhã a gente vai acordar com uma ressaca terrível. Porque não existe ganho que vai superar tudo que a gente perdeu nisso. Então, assim, ganhar hoje R$ 5.000, perante tudo que a gente já perdeu, é muito pequeno. Eu sei que é muito dinheiro, mas não vale o risco a gente correr qualquer tipo de risco pra recuperar qualquer valor ali, porque já é muita coisa.\n\nE quando a gente não joga e a gente acorda no dia seguinte sabendo que a gente não jogou, a gente não fica com essa ressaca moral, com a cabeça criando cenários, achando que pode fazer alguma coisa. Perdendo, a gente vai querer recuperar; ganhando, a gente vai querer usar o dinheiro que a gente ganhou pra ganhar mais. Então é uma dor, uma ressaca, um sentimento ruim que reverbera por dias. A gente jogou esses tempos aí pra trás e até hoje isso reverbera, só que numa intensidade um pouco menor, com um pesar menor ou com um pesar diferente.\n\nMas saber que hoje eu vou dormir e não vou ter jogado me faz ter mais esperança no dia de amanhã, de que vai dar tudo certo também, de que a gente vai conseguir. Se a gente conseguiu hoje, a gente consegue amanhã. E assim a gente vai levando, acordando todos os dias sabendo que, no dia anterior, a gente não jogou. E eu sei que é pouco, né, mas daqui a 365 dias praticamente vai ser um ano, então já tem uma relevância. Daqui 90 dias, mais três meses, então isso vai me dando um gás também, assim, de saber que o tempo vai passando e que a gente consegue.",
        "difficulty": "facil",
        "completedAt": "2025-12-29"
      },
      {
        "dayNumber": 4,
        "isCompleted": true,
        "reflectionCharles": "Eu acho muito louco ler essa frase “eu escolho a vida real”, porque eu acho que, se não for a primeira vez, foram pouquíssimas vezes que eu tive esse pensamento que eu tô tendo agora. Esse pensamento de olhar e falar: que merda que a gente tá fazendo ali, sabe? Que vida era aquela? Olhando de fora, como é que alguém vive uma vida assim? Que vida fantasiosa é essa, de achar que vai pegar um dinheiro pelo qual a pessoa trabalhou, que poderia usar em coisas reais, e acreditar que vai ganhar dinheiro do universo de graça, de forma mágica ou baseada em sorte.\n\nCara, a ideia do jogo é muito fantasiosa. E eu não entendo como a gente caiu nisso, como a gente continuou caindo nisso. Nesse sentido mesmo, sabe? Como que eu e você, pessoas extremamente lógicas, que recebem esse tipo de comentário o tempo inteiro, inteligentes, racionais, conseguimos entrar nisso. Eu sou programador, eu sei como funciona um jogo de computador. É literalmente um jogo de computador. Como que eu e você, com a cabeça que a gente tem, conseguimos colocar dinheiro ali, sabe? Colocar dinheiro ali com essa falsa esperança que o jogo cria. A gente sabe o motivo, mas ainda assim é algo que fica martelando na cabeça.\n\nAli não é vida real. Aquilo não é vida real. A vida real é aqui fora. É o que você falou: é dia que vai ter tédio, que vai ter problema, que você vai ter que trabalhar, que vai ficar sem dinheiro, que vai ter que gastar com alguma coisa. Pra ganhar dinheiro, você tem que trabalhar, e não é pouco, correr riscos e lidar com um monte de coisa. Isso é vida real.\n\nÉ muito estranho a gente ter continuado caindo naquele encanto, mesmo com todas as ferramentas que a gente sempre teve, escolhendo essa vida não real, essa vida da fantasia. Porque em nenhum momento, pelo menos hoje, a gente acredita que vai recuperar o dinheiro ali, que vai ganhar muito dinheiro e parar de jogar. Isso nunca aconteceu. Isso nunca vai acontecer.\n\nMuito pelo contrário, a gente só afasta a nossa prosperidade, só aumenta o rombo, como sempre aconteceu. Ganhando ou perdendo. E eu acho até que, perigosamente, quando a gente ganha é pior, porque dá essa falsa sensação de que aquilo funciona, de que dá pra recuperar o dinheiro. E não dá. Eu nunca vou esquecer do dia em que a gente ganhou praticamente duzentos mil reais em uma semana e, na semana seguinte, a gente perdeu o dobro disso. Ou dois meses depois perdeu o dobro disso. Cara, é muito louco.\n\nEntão, hoje eu realmente escolho a vida real. Eu quero escolher isso todos os dias. Eu acho que eu falei pra você ontem, né. Tem dias que é difícil, dias em que a gente tá triste, em que a gente quer fugir do problema, quer fazer alguma coisa pra escapar. Mas a vida real é essa. Tem dia que você vai sentir tédio, tem dia que não vai ter vontade de fazer nada, que vai sentir tristeza, que vai lembrar do jogo, que vai lembrar do dinheiro perdido. E vai ter dia que você nem vai lembrar do jogo, vai lembrar de outras coisas que também entristecem.\n\nA vida é isso. É altos e baixos. Vão ter momentos maravilhosos, como as viagens que a gente fez. A vida é essa montanha-russa mesmo. E, de forma muito grata, eu reconheço que a gente tem muito mais momentos felizes do que momentos ruins. A gente vive, na verdade, uma fase boa. Mesmo quando tem quedas, são momentos pontuais. O padrão da nossa vida é de momentos bons, de colher frutos, de ter uma vida confortável, financeiramente ou não.\n\nEu falo também do nosso relacionamento, que é muito bom. As pessoas veem isso. Você tem sua mãe, eu tenho meus pais, que, mesmo com os problemas deles, estão saudáveis. Não estão em hospital, e isso pode mudar a qualquer momento. Então a gente precisa aproveitar esses momentos em que a gente tá por cima, porque a vida vai colocar a gente pra baixo em algum momento.\n\nE eu não quero que o jogo faça parte disso mais. Eu não quero que o jogo me lembre o quanto a vida é ruim, o quanto eu invalido as coisas que eu faço quando jogo. Então eu escolho isso. Toda vez que surgir a vontade de jogar, seja hoje ou daqui a trezentos dias, eu quero lembrar que eu escolho a vida real.\n\nE a vida real é difícil mesmo. Vão existir momentos em que a gente vai querer fugir pro jogo, e a gente tem que abraçar esses momentos. Até porque, se eles não existissem, a gente não veria sentido nos momentos bons. Se tudo fosse maravilhoso o tempo inteiro, nada teria valor. Pra mim, é isso.",
        "reflectionWelder": "Eu escolho a vida real. Eu acho que eu até falei sobre isso ontem ou antes de ontem, que quando surge o pensamento de jogo, hoje uma tática que eu tenho utilizado é esquivar desse pensamento. Ao mesmo tempo que ele vem, eu já mostro pro meu pensamento o lado ruim disso e, ao mesmo tempo, falo pra mim mesmo internamente: não, você não vai, isso não é uma possibilidade. E isso me afasta, assim, do ato, né, ou de fazer com que esse pensamento cresça ao ponto de ele me chamar pra fazer insinuações, de criar conta, de chegar aqui em você já com a solução prontinha, criei uma conta, não sei o quê.\n\nEntão, quando o pensamento surge, eu jogo ele pro lixo, assim, na minha cabeça, como se eu estivesse realmente pegando ele, jogando no lixo e pisando, assim, no papel, sabe, como se fosse um papel escrito e eu tivesse pisando nele, diminuindo ele.\n\nEntão, pra mim, funciona muito. E a jornada também, saber que ontem eu fiz a jornada e que hoje eu vou fazer a jornada de novo, e que eu vou contando esses dias, faz com que a gente gere uma rotina, que faz com que isso vire um hábito, que faz com que a gente tenha mais disciplina também. Então isso ajuda, é uma cadeia, assim: surge o pensamento, eu jogo ele pro escanteio, ao mesmo tempo eu lembro disso aqui também que a gente tá fazendo, de não jogar fora.\n\nE também pensar na vida, né, no quanto a gente pode perder ainda, no quanto a gente pode deixar de ganhar, o quanto a gente pode deixar de aproveitar, o quanto a gente vai estar contaminando o momento sempre com alguma coisa negativa relacionada a jogo, a vícios. Então saber que eu quero uma vida limpa disso aqui, sem ter que associar as coisas que vão acontecer a isso, me dá uma motivação também. Por mais que hoje essa motivação tá muito pequena pelos fatos recentes, eu sei que eu sou capaz de me reerguer, que a gente vai se reerguer, e não só financeiramente falando, mas como um todo. E eu não quero que a gente tenha se reerguido, ou que tenham surgido oportunidades pra gente se reerguer, e a gente desperdiçou elas mais uma vez.\n\nEntão é um conjunto, assim, de pensamentos que a gente tem, que se concretizam com ações, que é a ação de não jogar, de não falar, de não provocar, que faz com que a gente viva a vida real hoje. Por mais que tem dias que são entediantes, tem momentos que a gente queria viajar, queria fazer coisas, que a gente não queria mais morar aqui, parece que as coisas vão acontecendo, até não sei se coincidentemente ou se pra gente aprender. Vão acontecendo coisas que a gente lembra de jogo, talvez porque foi uma coisa muito pesada. E com o dinheiro que a gente perdeu no jogo, a gente teria soluções mais rápidas, como, por exemplo, a questão do vizinho aqui de cima. Ter que engolir esses sapos das coisas que ele falou não foi fácil. E a gente automaticamente associa isso. Então, a gente não ter buscado uma fuga num lugar que só machuca a gente faz com que a gente escolha a vida real. E é isso que a gente tá fazendo todos esses dias.",
        "difficulty": "facil",
        "completedAt": "2025-12-29"
      },
      {
        "dayNumber": 5,
        "isCompleted": true,
        "reflectionCharles": "Eu acredito que a gente tá fazendo isso todos os dias e, modéstia à parte, eu sou a pessoa que mais tenta puxar isso pra gente. Porque, como eu falei, se a gente for pensar só no lado negativo, no quão grave foi, no quão ruim e triste foi, a gente se afunda nisso. Eu sou a primeira pessoa a entrar nesse buraco, porque eu conheço esse buraco muito bem.\n\nEntão eu acredito que seja uma atitude simples, mas muito importante, que é lembrar todos os dias de todos os nossos progressos. Pra mim é uma atitude simples lembrar todo dia que a gente venceu tantos dias, que a gente deixou de jogar tantos dias, que eram dias em que a gente poderia ter perdido muito dinheiro, poderia ter abandonado qualquer tipo de tentativa.\n\nÉ relembrar as vezes em que a gente conseguiu vencer. E não às vezes, mas todas as vezes em que a gente conseguiu vencer, nem que seja por um dia, nem que seja por uma hora. É celebrar essas vitórias, porque, se a gente não fizer isso, a gente desiste. A gente começa a pensar que não consegue, que vai se entregar, que vai ser internado, que vai perder todo o dinheiro e só vai parar quando não tiver mais nada. E não é bem assim.\n\nEntão eu acho que isso me traz muito orgulho. Saber que, mesmo diante de um problema tão grave, a gente conseguiu muitas vezes dizer não, muitas vezes parar antes da hora, muitas vezes não jogar. Muitas vezes celebrar parar com algum tipo de ganho ou parar ainda com algum dinheiro. Eu acho que isso é, sim, motivo de orgulho.\n\nMas, fora o jogo, eu acredito, como eu já falei pra você e venho falando, que hoje a gente vive uma vida muito boa. E não é em parte, é em grande parte, ou na maior parte. Uma parcela muito grande disso é graças ao que você fez no ano passado e ao que eu fiz também no ano passado, pra que a gente pudesse ter a vida que a gente tem hoje.\n\nEntão é impossível não sentir orgulho de ver a sua trajetória e de ver a minha trajetória. Mesmo que eu sinta que ainda não cheguei onde quero chegar, eu acredito que fiz uma trajetória bonita dentro do que foi possível. E não é só sobre dinheiro que a gente tá falando. Você também teve uma trajetória muito bonita.\n\nEntão é isso. É relembrar de onde a gente veio, onde a gente chegou e onde a gente ainda vai chegar. Isso faz a gente se sentir orgulhoso, e esse orgulho me dá força pra não jogar, pra não destruir tudo isso que a gente vem construindo.\n\nPra mim, esse é um dos passos mais importantes pra gente conseguir vencer essa luta todos os dias.",
        "reflectionWelder": "Acho pra mim também poder lembrar do que a gente tem tanto do tanto que a gente ainda pode perder Faz eu me sentir orgulhoso de mim e quando a gente tá longe do jogo a gente vê que é muita coisa ainda que a gente tem muita coisa mesmo e quando a gente tá ali a gente não consegue perceber então a gente começa perceber de novo tanto que a gente tava perdido ali o tanto que a gente enxergava as coisas grandes como pequenas as pequenas como grandes e uma visão totalmente distorcida de realidade do que era realidade do que era fantasia E Olhar pra pra pra isso com a sua ajuda tem feito com que a gente consiga viver um dia após o outro e fazendo com que isso realmente vira um passado É que nem eu falei pra você hoje a gente perdeu muito dinheiro mas talvez a gente poderia ter perdido tudo se em determinado momento a gente não tivesse falado que a gente ia parar e ter realmente parado durante os três meses Esse ano foi um ano que a gente realmente vacilou demais porque foi o ano que a gente mais perdeu dinheiro em relação ao jogo e também foi o ano que a gente mais tentou ficar longe do jogo foi o ano que a gente até conseguiu se eu for contar assim meses ficar muitos meses sem jogar talvez a gente jogou metade do ano se eu for colocar assim em dias seguidos né seis meses jogando e seis meses não jogando mas os seis meses que a gente jogou foi devastador mas poderia se a gente não tivesse ficado os outros seis meses ter hoje 0,0 então assim por mais que foi ruim que foi doloroso ainda tem uma perspectiva positiva de tudo isso de poder começar um ano e sabendo que a gente ainda tem dinheiro que a gente pode recomeçar que a gente pode montar um negócio que a gente tem o que a maioria das pessoas não tem que é dinheiro pra recomeçar Faz com que a gente é um pensamento que ao mesmo tempo que ele é simples porque é uma coisa factível que eu tenho nas minhas mãos que você tem também é é um pensamento grandioso também porque não é fácil conquistar o que eu conquistei conquistar o que você conquistou mas a gente conquistou e as coisas boas que a gente tem hoje na nossa vida foram conquistadas longe do jogo. Então a gente tem que lembrar disso todos os dias tem que falar disso todos os dias hoje é um dia por exemplo que ontem a gente não fez porque a gente chegou tarde em casa E hoje a gente tá fazendo é como se eu sentisse que o remédio tava passando um efeito já no meu corpo sabe do remédio de antijogo então a gente tem que fazer isso aqui todos os dias falar sobre isso todos os dias pra não acontecer o que aconteceu Eu acho que talvez seja o remédio que a gente tome aí o resto da vida por isso que eu falei que eu quero uma jornada de um ano que a gente vai entrar agora em um novo ano e eu não quero de forma alguma que esse ano que esse ano seja um ano só de bênçãos na nossa vida assim só de coisas boas que que os meses vão passando e a gente vá percebendo assim que Que a gente tá conseguindo e que as coisas tão voltando que você vai ter e daqui a pouco 20.000 30.000 na sua conta e com as coisas acontecendo pra mim também é um é o quero te ajudar também quero me ajudar também porque é ruim eu quero voltar pra onde eu tava eu quero poder te ajudar também a chegar onde você tava E a gente tá longe de de jogo eu tenho certeza que a gente vai conseguir e o próximo ano vai ser um ano muito abençoado na nossa vida muito eu não quero jogo presente aqui nessa casa nessa nada partir do ano que vem a gente vai começar a ter sonhos até maiores assim do que os que a gente tem hoje e a gente vai conseguir.",
        "difficulty": "facil",
        "completedAt": "2025-12-31"
      },
      {
        "dayNumber": 6,
        "isCompleted": true,
        "reflectionCharles": "Meio que repetindo o que eu respondi na pergunta anterior, eu acho que eu sou essa pessoa que tenta ver alegria em tudo, sabe? Até, ou principalmente, quando você tá triste, eu tento trazer esses momentos. E eu vejo alegria em tudo, na verdade. Na chuva hoje que eu assisti, na comida que sua mãe faz, que é tão gostosa que eu fico louco pra comer duas vezes, no pastel que eu falei que eu queria ter comido.\n\nEu sinto alegria, às vezes, quando eu tô aqui de manhã tomando meu café. Antes da jornada, inclusive, eu não sentia felicidade em fazer café. Eu tinha preguiça de fazer café. Era tipo: ah, lá vou eu fazer café, não sei o quê.\n\nE hoje eu consigo ver alegria no fato de fazer café. Primeiro porque eu tô em casa, porque eu tenho café. A gente tem condição de comprar cafés melhores, que muitas pessoas geralmente não têm condição de pagar quarenta reais em quinhentos gramas de café. E eu vou lá, pego e pronto. Então é uma alegria na compra, é uma alegria na hora de fazer, é uma alegria na hora em que eu vejo que eu tô tomando um café dentro da minha casa, assistindo televisão, uma série, um YouTube, no ar-condicionado, enquanto muitas pessoas estão no sol pra ganhar, às vezes, um salário, ou até seis vezes menos do que eu ganho, dependendo.\n\nEntão, hoje eu vejo alegria muito mais do que antes. E o jogo me ensinou a sentir essa alegria de novo, porque talvez antes a gente não tava com essa alegria toda, a gente não via isso. Eu lembro que a gente reclamava bastante de algumas coisas, eu lembro que a gente tava muito ingrato antes. Talvez até isso tenha levado a gente a essa questão de não reconhecer o quanto a gente era feliz. Eu era a pessoa que reclamava bastante e ainda reclamo bastante, mas eu quero muito melhorar isso esse ano.\n\nEntão, pra mim, é isso. Eu quero voltar a ver mais alegria nas coisas. Aliás, ver alegria em mais coisas, porque eu sempre fui essa pessoa. Você também sempre foi essa pessoa. A gente sempre riu de idiotices, a gente sempre gostou de observar a natureza, de observar coisas bonitas. Às vezes, passeios de graça são melhores do que passeios pagos, porque a gente vê alegria nas pequenas coisas. Um cachorro que parece a gente, um lugar bonito, um lugar que a gente viu na internet e agora vê pessoalmente.\n\nA gente vê alegria nas coisas de graça, nas coisas baratas, e até nas coisas mais caras, porque a gente sabe o valor das coisas, a gente sabe reconhecer o quanto a gente é felizardo. Eu consigo ver alegria em muita coisa, no carro, nas minhas relações, nas minhas amizades, na minha relação com a minha sogra, com você, no nosso relacionamento. Tem muita coisa que eu consigo ver.\n\nEntão eu nunca precisei daquela adrenalina pra ser feliz. Muito pelo contrário. Aquilo ali é o que me fazia ficar triste. E é muito louco isso, porque como algo que faz tão mal vicia tanto ao mesmo tempo.\n\nEntão, em vários momentos do meu dia, eu me sinto feliz. No meu trabalho, em casa, quando a gente acorda e dá um abraço, quando eu tomo um café, quando eu como a comida que sua mãe faz, quando a gente pega uma comida gostosa e come, quando a gente assiste a um filme ou a uma série e senta ali. A gente sempre viu alegria nessas coisinhas, sempre.\n\nE o jogo não tomou isso da gente e não vai tomar. Eu nunca precisei daquela adrenalina pra estar feliz, nunca, jamais. Aquilo realmente foi algo fora da realidade, não faz parte da nossa vida. Graças a Deus.",
        "reflectionWelder": "Eu achei esse tema até engraçado, porque eu acho que a gente criou um hábito. E nós dois somos duas pessoas que têm facilidade de criar hábito. Seja pra praticar uma atividade física, ir pra academia, a gente se propõe e faz. Pra um curso que você tem que fazer, pra uma coisa que eu tenho que fazer, quando a gente tem que fazer, a gente faz. Quando a gente se propõe a fazer, a gente faz.\n\nEntão eu acho que, com o jogo, a gente criou uma rotina, tipo assim, de horário, sabe? À noite, depois da novela, a gente vai jogar. Quando não tiver nada pra fazer, a gente vai jogar. E como a gente tem essa facilidade, a gente foi engolido por essa rotina. E a gente tá seis dias longe do jogo. Eu não estou sentindo falta de sentir aquilo no jogo, porque agora a gente tá com propósito, mas também porque eu vejo, eu sinto adrenalina e graça nas outras coisas que a gente faz. No videogame que a gente joga, nas brincadeiras que a gente faz um com o outro, até nas provocações, né, nas pirraças. São coisas que eu nem penso em jogo quando a gente tá vivendo isso.\n\nEu acho que são momentos bem específicos, porque a gente adaptou o nosso corpo e a nossa cabeça a lembrar de jogo nesses momentos específicos. Então eu consigo sentir alegria em coisas pequenas e em coisas grandes, assim, com muita facilidade.\n\nHoje eu tava feliz porque a gente foi junto, não ia, mas você pôde deixar seu trabalho. Dá uma alegriazinha, assim, uma coisa boa dentro da gente, tipo: nossa, eu posso ter isso. Por mais que a gente não verbalize isso o tempo todo, são coisas que, não sei se é adrenalina que me dá ou se é felicidade, ou se é os dois. Mas saber que todo problema que a gente tem a gente consegue resolver sem jogo, que nós somos pessoas boas, que as pessoas confiam na gente, que a gente é admirável, que a gente pode viajar se a gente quiser. Eu sei que não está nos nossos planos agora fazer uma grande viagem no próximo ano, mas se a gente quiser, a gente pode fazer.\n\nEntão, assim, dá uma certa adrenalina saber que a gente tem isso na palma da nossa mão. E até mesmo agora, tendo as lembranças da viagem, lembrar de tanta coisa boa que a gente viveu, ver outras pessoas lá agora, no mesmo lugar que a gente já foi, saber que a gente tá marcando esses lugares, criando memórias. Isso proporciona felicidade também.\n\nEntão, por isso que eu achei essa pergunta engraçada, porque, se a gente for parar pra analisar, eu e você, a gente nunca teria entrado em jogo, nunca teria caído naquilo ali, porque a gente nunca precisou daquilo ali. Desde quando a gente se conheceu, foram só coisas boas. Nosso encontro foi uma coisa, assim, de Deus mesmo. Então eu não consigo entender como isso entrou, e dessa maneira avassaladora que entrou.\n\nPorque, mesmo diante de tudo isso, os momentos que eu sinto tristeza profunda, mesmo assim, de vontade de não querer existir, é após um jogo. É após ter jogado, após ter perdido, às vezes até após ter ganhado. Porque eu sei que o dinheiro vai voltar. É como se tivesse uma obrigação, como se tivesse uma força puxando o dinheiro de volta pra aquele lugar e levando junto a sua paz, tudo, tudo que você construiu, sua saúde mental, sua esperança.\n\nE eu acho estranho por causa disso, porque eu consigo sentir felicidade, alegria e adrenalina em coisas que não estão relacionadas ao jogo. E por isso que eu quero um ano limpo a partir do próximo ano, pra gente, daqui seis meses, na metade da jornada, nem saber associar o emocional ao jogo, sabe? De se tornar uma coisa distante, ao ponto da gente não imaginar fazer o primeiro depósito.\n\nPorque hoje, se você falasse assim pra mim: ah, vamos jogar, nossa, só de lembrar da semana passada, da gente tentando, comprando funcionalidade, aquele jogo rindo da nossa cara, e a gente sabe que aquilo ali foi feito pra isso. E a gente fica com esperança de uma coisa milagrosa que não depende de Deus pra acontecer. E a gente fica perdido no mundo, porque a gente não tem controle, a gente não tem como acionar nada, porque a ferramenta foi feita pra isso. O jogo foi feito pra isso, pra gente perder, pra gente achar que tá no controle, pra achar que tá pagando um pouquinho, que se tivesse um valor maior tinha pagado, ou se tivesse um valor menor tinha pagado. Isso não tem nada a ver. O jogo foi feito só pra perder.\n\nE a gente, que nem eu falei no dia anterior, eu acho que a gente teve muita sorte de estar onde a gente tá hoje ainda. De poder estar aqui falando sobre isso, com o que a gente ainda tem, que é muito. Dá pra viver muitos anos. E eu sei que a gente nunca vai parar de trabalhar, então a gente vai construir cada vez mais.\n\nEntão eu sinto alegria nos momentos simples da minha vida, na minha rotina. Eu sinto alegria nela. Eu sinto a alegria de poder ir visitar um cliente, de poder trazer solução pra alguma coisa, de poder fazer até as vendas fáceis que eu faço, assim, de só entregar o que o cliente tá precisando e eu poder emitir a nota daqui de casa mesmo, sem eu ter que ir lá fazer o serviço. Porque isso foi uma coisa que eu construí. Não é uma coisa que eu, do dia pra noite, existiam essas pessoas na minha vida que eu podia contar, e que eu tinha um dinheiro pra pagar elas também. Porque se eu não tivesse, eu não teria, às vezes, essa rede.\n\nEntão, assim, o dinheiro vem e faz parte da minha vida. E, a partir de agora, ele vai vir fácil, porque eu sou merecedor. Ele vai ficar na minha vida, não vai sair. Ele vai vir, vai multiplicar, vai triplicar, como sempre foi. Na sua também.",
        "difficulty": "facil",
        "completedAt": "2025-12-31"
      },
      {
        "dayNumber": 7,
        "isCompleted": true,
        "reflectionCharles": "Nesses três meses em que a gente ficou longe daquilo, né, claro que não totalmente longe, pelo menos da minha parte, eu consegui fazer muita coisa. Eu consegui trabalhar num projeto pessoal, consegui focar mais na minha vida, consegui fazer mais coisas que a gente realmente perdia muito tempo ali.\n\nEu também senti a volta da calma, a volta de uma esperança de uma vida melhor, uma vida longe daquilo. A gente começou a ter menos estresse, menos medo, apesar de o vício estar ali rondando a gente o tempo todo, a gente tendo que ser forte. Mas eu tenho certeza de que não foi em vão. A gente acreditou em coisas que não acreditava mais, a gente sentiu coisas que não sentia há muito tempo.\n\nE, por mais que isso tenha ido embora porque a gente acabou falhando, eu acredito que isso não invalida tudo de bom que a gente ganhou quando decidiu parar de apostar. Agora eu tenho certeza de que, parando mais uma vez, a gente só tem bons frutos a colher.\n\nEu realmente quero que esse ano seja um ano diferente. E mais do que só querer, eu vou fazer a minha parte, porque a gente sabe que tem que fazer a nossa parte. Não é só falar, não é só desejar, não é só se arrepender e pedir perdão pra nós mesmos que as coisas vão mudar.\n\nEu acho que, todo dia, a gente fazendo a nossa parte vai ser primordial pra gente voltar a ter todo aquele sentimento bom que a gente teve. Fazer nossas viagens de forma tranquila, já que a gente tem esse privilégio. Pagar nosso carro, porque a gente ainda tem muita conta pra pagar. Quem sabe a gente consegue quitar esse carro até o final desse ano, de alguma forma.\n\nEntão eu quero muito focar nisso, sabe. Eu falei pra você, nem que a gente não viaje, nem que a gente faça só essa viagem de Gramado, que a gente tem o benefício da sua passagem, mas que a gente use todas as nossas forças pra quitar dívidas, quitar coisas que a gente comprou, juntar dinheiro de novo.\n\nEu quero sentir essa segurança de novo. Porque agora eu tô com medo. Eu queria comprar uma roupa pra virada do ano e não comprei, porque eu tô com medo de novo de não ter dinheiro, porque eu realmente vou receber menos no meu salário agora. E quando eu lembro que eu não tenho nenhuma segurança guardada, é muito ruim.\n\nEntão eu quero voltar a ter esse sentimento. Você também, juntar, ter uma meta de novo, saber o valor que você quer chegar e depois bater mais cinquenta mil, mais cem mil, mais cento e cinquenta mil. E sentir isso.\n\nE não é só a questão financeira. É sentir confiança de novo, sentir que você é inteligente, que seu dinheiro fica, que seu trabalho é válido, que você é uma pessoa de confiança, que Deus tá te honrando, e sentir a admiração por você mesmo de novo.\n\nPra mim, a gente só vai conseguir isso se ficar longe das apostas. Não tem outro caminho. Infelizmente, nós caímos numa estatística de pessoas que enfrentam esse problema, e eu não vejo nenhum futuro próspero nem um futuro feliz se a gente continuar apostando.\n\nEntão, mais do que nunca, vamos aproveitar essa nova chance de escrever novas histórias longe disso. E lembrar que a gente não pode falhar nem mais um dia. Não como um peso, não como medo constante. Não é viver pensando “ah, eu não posso falhar” e ficar naquela angústia pra sempre.\n\nÉ mais sobre decidir: beleza, eu não vou pra lá. É um lugar que eu não vou. Eu não compro essa passagem, eu não pego esse carro pra esse destino. E, nesse ponto, a decisão é fácil. Não comprar a passagem é fácil. Não pegar esse carro é fácil.\n\nUma vez que você vai, aí sim é difícil. A gente sabe que voltar pra aquilo é muito mais complicado. Mas eu acredito que a gente consegue, porque a gente já conseguiu.\n\nEu declaro que a gente vai conseguir esse ano. E que, quando esse ano passar, a gente vai olhar pra trás e falar: cara, como assim isso aconteceu e a gente conseguiu? Olha quanta coisa a gente escolheu.\n\nOlha, eu tô com cinquenta mil guardado de novo e nem esperava isso. No começo do ano passado… não, no começo desse ano, eu comecei com zero. E agora eu vou estar com cinquenta mil e sem dívidas. Amém.",
        "reflectionWelder": "Eu estou tão desanimado porque é o começo do ano e aí minha cabeça sabe que ela não pode errar mais, mas ao mesmo tempo fica aquela briga interna de tentar fazer com que a cabeça entenda que ali não é um lugar pra você estar. Mas você tá viciado, teve recaídas recentes, você lembra do jeito que você tava, do que você vai ter que pagar agora. Enfim, um começo de ano que era pra estar em outro cenário. E aí vai se criando uma série de pensamentos ruins.\n\nMas quando a gente decide não jogar, como foi na jornada anterior, eu comecei a ganhar confiança de novo, comecei a guardar dinheiro de novo, por mais que fosse pouco no volume que eu tô acostumado. Mas eu fui voltando a ter a rotina normal de um ser humano qualquer, que trabalha, faz as coisas, quando pode guardar dinheiro guarda, quando não pode paga as contas. Eu tava voltando a ter uma vida normal.\n\nE o jogo bagunça muito essa visão minha de dinheiro, de vida, de tudo. Aí tem dias que a gente tá confiante, tem dias que a gente tá nem pra paçoca. Por isso que é importante a gente estar firme, porque é nesses momentos que bate desânimo, bate raiva, bate um monte de coisa dentro da gente, que a gente recairia se não estivesse fazendo isso aqui.\n\nE é isso. Eu quero ficar longe das apostas pra eu ser eu, pra eu não ter que viver numa ilusão achando que dinheiro cai do céu, achando que as coisas são fáceis, achando que eu consigo tudo de novo. Sendo que recuperar todo o dinheiro que eu perdi em jogo é muito difícil. O que você perdeu é muito difícil. Vai ser muito difícil, mas a gente vai conseguir. Mas é trabalhoso, vai ser trabalhoso pra duas pessoas que estavam acostumadas a ver dinheiro entrar e sair com facilidade. Agora é um trabalho de formiguinha. E a gente vai voltar a isso porque decidimos estar longe das apostas.\n\nVoltar a ver o dinheiro, ver graça no dinheiro, ver graça na vida, ver graça nas relações. Poder construir as coisas sem ter medo do dinheiro estar na sua mão. Antes, quando o dinheiro entrava na minha conta, eu já ficava com medo. E recentemente eu voltei a ter esse medo, e eu já não tava tendo mais. Enfim, é isso. Quero voltar a ter a minha vida como ela sempre foi.",
        "difficulty": "facil",
        "completedAt": "2026-01-02"
      },
      {
        "dayNumber": 8,
        "isCompleted": true,
        "reflectionCharles": "Então, a gente tava tendo essa sensação de novo. Eu tava muito feliz, inclusive, todo feliz com meu salário caindo, com as coisas. Mas não vou falar de coisa ruim, não. E aí, infelizmente, a gente teve essa recaída, e essa sensação de controle foi embora.\n\nHoje eu tô sem dinheiro. Porém, eu quero reconstruir isso. Eu não vou mentir, eu ainda não tô positivo em nada. Tá muito recente, tá muito machucado. Mais uma vez, eu tô sem dinheiro de novo. Então essa sensação de ter controle ainda não existe. Infelizmente, não existe.\n\nMas eu quero voltar a ter essa sensação de controle do meu salário, do que eu gasto, do que eu não tô gastando, do que eu não posso gastar, do que eu preciso juntar. De pedir desconto, de fazer ótimas compras, como a gente sempre fez. Eu sempre fui uma pessoa que comprou bem e, quando eu te conheci, eu passei a comprar melhor ainda. E você também sempre foi essa pessoa de ficar feliz porque a gente economizou duzentos reais numa passagem, por exemplo.\n\nHoje isso, pra mim, não faz sentido nenhum. E isso só o tempo pra voltar a fazer sentido. Então esse controle, pra mim, ainda é algo que eu preciso construir. Eu não tenho essa sensação de controle ainda.\n\nMeu sentimento tá misto. A virada do ano também me deixou mais sensível, mais melancólico. Mas eu amo ter essa sensação de controle, de saber pra onde meu dinheiro tá indo, do que eu posso gastar, do que eu não posso. Eu quero voltar a ter isso. E só longe das apostas eu vou conseguir.\n\nEu quero voltar no dia 1º de janeiro do ano que vem e responder essa mesma pergunta de novo, com a sensação de que eu realmente tenho controle, de que eu tive controle. E eu declaro que, mais uma vez, eu vou ter esse controle esse ano.\n\nE essa pergunta vai fazer 100% sentido lá na frente. Amém.",
        "reflectionWelder": "Eu amo o teu controle, não só do dinheiro, mas em tudo, assim, na minha vida. E eu tô tentando aprender a não querer controlar tanto, não só o dinheiro, mas aqui a pergunta é sobre dinheiro. Eu gosto da sensação de ver o dinheiro crescer todo ano, quando eu vou fazer o imposto de renda e vejo a evolução de patrimônio, de ver que eu tô conseguindo guardar dinheiro. Essa questão da Heco fez também eu perder muito o controle das coisas, porque eu vi que eu não tinha controle de bosta nenhuma.\n\nE aí o dinheiro que tava na minha mão já não podia estar mais, sabe, essa coisa de posse, assim, que eu gosto. Eu não tinha, não tava, não podia ter. Mas até hoje eu tô perdendo o medo, sabe. Quando o dinheiro voltar a entrar, eu acredito que eu vou ou manter ele comigo ou ir te passando parte, porque isso que aconteceu não vai me trazer um tipo de prejuízo. Deus já me falou isso e eu acredito nisso.\n\nEntão eu gosto de ter controle do meu dinheiro pra justamente sentir isso que você falou, essa segurança. Mas hoje eu aprendi também que dinheiro não é tudo, porque, que nem você falou agora há pouco, a gente poderia às vezes nem estar aqui. E o dinheiro ia fazer o quê com ele, quem ia gastar esse dinheiro não era eu, às vezes não poderia ser você também. Então, se a gente tivesse sofrido algum acidente, a vida é muito mais do que isso. A gente se apega muito a esse número que a gente perdeu, mas tanta gente perde tanto dinheiro, perde tanta coisa, perde a vida, perde um filho, perde a mãe, perde o pai, perde a saúde, não consegue trabalhar. E mesmo assim a pessoa não desiste. Então quem somos nós pra nos queixar de um número só, que é grande, mas poderia ser pequeno e afetar a gente do mesmo jeito.\n\nEntão a gente tem todas as ferramentas à mão. A gente tem dinheiro pra recomeçar, montar um negócio, muito dinheiro. A gente tem saúde, a gente tem cabeça, a gente tem inteligência. Então a gente não sabe os planos de Deus pra nossa vida, né. Mas vai que foi necessário acontecer tudo o que aconteceu pra gente ter noção do dinheiro, porque ali na frente vai ter uma oportunidade em que a gente vai ganhar muito dinheiro, seja num negócio nosso. Até pra gente estar mais preparado pra esse negócio também, pra gente poder fazer e acontecer. A gente não sabe.\n\nA gente sabe que, estando longe do jogo, a gente constrói, a gente não destrói nada. E é isso que a gente tá planejando agora, que a gente vai fazer, que a gente vai realizar. E com o dinheiro voltando, entrando tanto na sua conta como na minha, você sabe que, quando as coisas boas acontecem pra mim, não são só pra mim, nunca. O que eu posso fazer pra te ajudar, tipo, ah, vou fazer essa viagem, eu pago. Às vezes você fala até que eu jogo na cara, mas nunca foi minha intenção. As coisas que eu faço pra você, eu faço de coração, é como se eu estivesse fazendo pra mim.\n\nÉ que nem as coisas que eu faço com a minha mãe. Eu não sinto peso nenhum. Pra vocês dois são pessoas que é como se eu estivesse fazendo pra mim mesmo. Então a gente vai continuar tendo, a gente tem e vai continuar tendo muito mais dinheiro, paz, tranquilidade, capacidade de recomeçar. Porque esse foi um tombo que a gente teve, mas a gente vai ter outros tombos também na vida, a gente não sabe. Então a gente vai voltar a ter essa percepção de controle e de pertencimento também, porque as coisas vão permanecer, elas não vão embora fácil.",
        "difficulty": "facil",
        "completedAt": "2026-01-02"
      },
      {
        "dayNumber": 9,
        "isCompleted": true,
        "reflectionCharles": "Eu acho que é isso que você falou. O nosso maior compromisso hoje, dentro dessas 24 horas, é superar essas 24 horas sem jogar, porque a gente sabe que a gente consegue, mas ao mesmo tempo a gente também sabe que é muito fácil a gente se entregar. É uma palavrinha, é uma atitude, porque os dois querem. É uma coisa que um sabe exatamente como chegar no outro pra que isso se transforme numa ação e deixe de ser só um pensamento.\n\nEntão fazer o que a gente tá fazendo agora, de trabalhar o nosso pensamento quando ele surge, porque eu acho que ele surge todo dia, nem que seja um pensamento pequeno, às vezes um pensamento maior, mas sempre surge. E aí você colocar esse pensamento no automático, descartar esse pensamento, é muito bom. Tipo não fazer ele ficar perdurando tanto tempo na sua cabeça, você pensando se vai, se não vai, se cria cenário, se você vai jogar tanto. Você só descarta, porque você sabe que é um lugar que você não tem que estar.\n\nE agora o nosso maior desafio é justamente isso, ir superando essas 24 horas de 24 em 24 horas. A gente já tá aí há oito dias, nove dias, e é assim que a gente constrói um mês, dois, três, quatro, cinco. Quando a gente vai ver, um ano. Por isso que eu te falei que eu queria que a jornada tivesse esse número aqui, de 365, e até me mostrasse um percentual de quanto a gente concluiu já.\n\nPorque a gente vê que vai subindo todos os dias. É como se fosse um dinheiro. E é exatamente isso que vai refletir essa atitude, é isso que vai refletir no nosso dinheiro, que, guardado, vai crescendo um pouquinho todo dia. E fora o dinheiro também, a gente vai construindo outras coisas que a gente ainda não sabe, mas que vão aparecer, como apareceu no ano passado e no ano retrasado.\n\nE dessa vez as coisas vêm pra ficar, porque a gente tá construindo um terreno pra elas ficarem, e não pra irem embora.",
        "reflectionWelder": "Eu acho que é isso que você falou. O nosso maior compromisso hoje, dentro dessas 24 horas, é superar essas 24 horas sem jogar, porque a gente sabe que a gente consegue, mas ao mesmo tempo a gente também sabe que é muito fácil a gente se entregar. É uma palavrinha, é uma atitude, porque os dois querem. É uma coisa que um sabe exatamente como chegar no outro pra que isso se transforme numa ação e deixe de ser só um pensamento.\n\nEntão fazer o que a gente tá fazendo agora, de trabalhar o nosso pensamento quando ele surge, porque eu acho que ele surge todo dia, nem que seja um pensamento pequeno, às vezes um pensamento maior, mas sempre surge. E aí você colocar esse pensamento no automático, descartar esse pensamento, é muito bom. Tipo não fazer ele ficar perdurando tanto tempo na sua cabeça, você pensando se vai, se não vai, se cria cenário, se você vai jogar tanto. Você só descarta, porque você sabe que é um lugar que você não tem que estar.\n\nE agora o nosso maior desafio é justamente isso, ir superando essas 24 horas de 24 em 24 horas. A gente já tá aí há oito dias, nove dias, e é assim que a gente constrói um mês, dois, três, quatro, cinco. Quando a gente vai ver, um ano. Por isso que eu te falei que eu queria que a jornada tivesse esse número aqui, de 365, e até me mostrasse um percentual de quanto a gente concluiu já.\n\nPorque a gente vê que vai subindo todos os dias. É como se fosse um dinheiro. E é exatamente isso que vai refletir essa atitude, é isso que vai refletir no nosso dinheiro, que, guardado, vai crescendo um pouquinho todo dia. E fora o dinheiro também, a gente vai construindo outras coisas que a gente ainda não sabe, mas que vão aparecer, como apareceu no ano passado e no ano retrasado.\n\nE dessa vez as coisas vêm pra ficar, porque a gente tá construindo um terreno pra elas ficarem, e não pra irem embora.",
        "difficulty": "facil",
        "completedAt": "2026-01-03"
      },
      {
        "dayNumber": 10,
        "isCompleted": true,
        "reflectionCharles": "Acho que o principal hábito, não necessariamente pequeno, que tá me ajudando a fortalecer a minha recuperação é fazer um controle mental de não me apegar ao passado. Porque, se eu ficar pensando no que eu perdi, no que eu poderia ter, no que eu poderia ter feito, e vice-versa, você também, eu não ia ter força pra continuar, de verdade. Isso estoura a nossa cabeça, sabe.\n\nO nosso pensamento fica louco. Ficar pensando que tudo o que eu ganhar daqui pra frente, por algum tempo, durante alguns anos, talvez, vai ser só pra recuperar o que eu perdi. Isso é enlouquecedor, porque a gente não acha sentido em trabalhar, em fazer as coisas, em juntar dinheiro, em ter algum tipo de controle, em buscar desconto, em fazer uma boa compra.\n\nEntão eu acho que esse é o principal hábito que eu tô tentando fazer todo dia. Tentar não pensar no passado, tentar pensar daqui pra frente. O que foi, já foi. Não ficar pensando mais no que eu perdi, porque realmente é desanimador demais viver nessa linha de raciocínio.\n\nEntão, pra mim, esse é o principal hábito. Não ficar me apegando ao passado e fazer esse tipo de raciocínio lógico pra que as coisas voltem a fazer sentido.",
        "reflectionWelder": "Pra mim também, eu acho que trabalhar a nossa mente pra acreditar que o que aconteceu tinha que acontecer, não tinha jeito, e foi, e passou. E ir relembrando isso todos os dias. Além disso, também tem outra coisa, não é algo pequeno, mas que tem ajudado, que é a gente não brincar igual a gente tava brincando. Ah, eu tô sentindo, ah, não sei o quê, ah, que eu sonhei, ah, que agora vai, ah, vamos recuperar um pouco. Então esse tipo de armadilha que a gente criava era muito fácil da gente cair. Então a gente não fazendo isso já ajuda.\n\nE a jornada também é um hábito que a gente tem que fazer todos os dias, que se torna um hábito e reforça todos os dias. É bom a gente ver os dias aqui sendo preenchidos, né, a gente mostrando que a gente tá conseguindo, que a gente tá falando sobre isso.\n\nE é isso. O que for vir agora é consequência dessa boa escolha que a gente tá tendo agora, que vai ajudar na nossa recuperação futura.",
        "difficulty": "facil",
        "completedAt": "2026-01-05"
      },
      {
        "dayNumber": 11,
        "isCompleted": true,
        "reflectionCharles": "Eu acredito que eu também seja essa pessoa que consegue lidar melhor com tudo. Não só porque eu tô em paz, mas porque eu sei que as coisas fazem sentido. Realmente, o jogo tirou o sentido das coisas.\n\nHoje, quando eu não tô em paz, eu lembro do que aconteceu com o jogo, do que o jogo fez comigo e com a gente. E aí a minha paz vai embora. Eu quero voltar a sentir essa paz plena de verdade, pra que eu volte a sentir sentido nas coisas, nas compras, nos passeios, nas viagens, no relacionamento.\n\nQuando alguém me pergunta como eu tô, hoje eu lembro muito do jogo. Quando perguntam como tem sido minha vida, como estão as coisas, isso sempre me remete a isso. Mas quando eu tô em paz, eu consigo ver com clareza o quanto a vida é boa, o quanto as coisas são bonitas. Eu consigo ver que, até nas dificuldades, a vida tem sido boa comigo. Eu consigo me divertir mais, aproveitar mais, sentir coisas positivas até quando tem algo negativo acontecendo.\n\nEntão, pra mim, eu acho que eu sou essa pessoa. Sempre fui essa pessoa. No meio do caos, eu sempre fico em pé, sempre tento ver o lado bom e correr atrás de resolver o problema. Mas quando a gente tá numa vida com jogo, eu não quero fazer nada. Eu tenho medo, eu tenho ansiedade.\n\nQuando eu penso nas coisas boas, eu penso também no quanto o jogo me tirou. E aí fica essa batalha interna e externa entre duas forças grandes. Uma força que quer ser grata, que quer ser feliz, e outra que fica dizendo que você é burro, que você não consegue, que a vida não faz sentido, que as coisas não têm mais graça, que dinheiro é algo fútil pra você, algo que você nunca pode ter.\n\nEu não quero sentir isso. Eu quero sentir essa paz. A paz de estar trabalhando, recebendo meu dinheiro, meu salário, e saber que posso fazer muita coisa com ele.\n\nInclusive, a gente tá ficando mais velho, o tempo tá passando, eu preciso ter uma reserva, e hoje eu não tenho nada. É muito ruim sentir isso, isso me tira a paz.\n\nEntão eu quero muito continuar vencendo essa jornada, porque só assim eu vou conseguir sentir essa paz de novo, ser quem eu sou de novo. Quando eu realmente vencer o jogo e puder falar: beleza, tô há anos sem jogar, isso não faz mais parte da minha vida.\n\nEu não quero que aquilo faça parte de mim. E o dia em que eu não sentir mais medo de aquilo voltar pra minha vida, pra mim, é isso.",
        "reflectionWelder": "Eu acho que, quando eu tô em paz em relação ao jogo e eu tenho problemas de trabalho, problemas que me trazem algum tipo de resultado, minha cabeça funciona muito melhor. Então eu tenho mais disponibilidade física e mental pra lidar com as coisas.\nQuando eu tô no jogo, eu não tenho isso, eu perco toda a minha paz. Então acho que, quando eu tô em paz, eu consigo tomar decisões melhores, eu consigo ouvir mais a intuição, eu consigo focar realmente no que precisa ser feito. Eu consigo ficar mais calmo, eu consigo ajudar mais as pessoas. E consigo ser mais eu, assim.\nPor mais que eu seja nervoso com algumas coisas da minha vida, o jogo foi a única coisa que me tirou, assim, do eixo real. As outras coisas eu posso até falar, ah, não sei o quê, fico bravo, mas no fundo, quando é pra coisa acontecer mesmo, eu tô calmo, eu tô conseguindo tomar uma decisão boa.\nE quando eu estava no jogo, eu tinha meio que perdido isso, esse senso de direção, sabe, do que fazer. Tudo baseado no medo. Então essa paz aqui me faz voltar pro eixo, voltar pra onde eu não devia ter saído, e pra um lugar que eu sou eu de verdade, sem medo por trás, sem um vício, sem algo que me prenda e que faça sempre eu achar que tô tomando decisões ruins, que eu não sou capaz. Que é nesse lugar que o jogo coloca a gente, de pessoas que não têm controle sobre si mesmas.\nEntão essa paz aqui é o que eu quero. E eu dou todo o dinheiro do mundo pra ter essa paz de volta, assim, na minha vida. Porque dinheiro a gente consegue tudo de novo.",
        "difficulty": "facil",
        "completedAt": "2026-01-05"
      },
      {
        "dayNumber": 12,
        "isCompleted": true,
        "reflectionCharles": "Tá, vou começar pelos lugares que me fazem bem. Toda vez que a gente tá ali na sala, assistindo televisão, assistindo a um filme ou a uma série, comendo uma besteira e abraçadinhos, é um lugar que me faz bem, me faz sentir bem e me ajuda a esquecer um pouco dos problemas.\n\nQuando a gente tá viajando, obviamente, mas mais especificamente quando a gente pega o carro e sai andando por aí, passeando em alguns lugares, são momentos em que a gente consegue desligar um pouco dos problemas e das coisas ruins.\n\nPessoas que me fazem bem merecem mais espaço. Você, na verdade, só não merece mais espaço porque já tem demais, né, tá grudado. Mas você me faz bem. A Ana Paula, sua mãe. Poucas pessoas realmente estão me fazendo bem hoje, na minha convivência. Pessoas que merecem mais espaço, eu não consigo identificar agora alguém que eu diga que poderia fazer mais parte da minha vida porque me faz muito bem e não está fazendo. Eu não sinto isso.\n\nInfelizmente, eu não tenho outra pessoa. É um pouco triste falar isso, inclusive, mas é isso.\n\nHorários que me fazem bem: o café da manhã. Eu aprendi a valorizar o café da manhã. Hoje em dia eu acordo e agradeço a Deus por estar vivo, por ter o café, por ter coisas pra fazer. Antes eu acordava e já queria jogar, sentia uma vontade imensa de jogar, e muitas vezes eu jogava até a gente parar. Eu sentia essa vontade e não conseguia trabalhar. Eu tinha que abrir aquelas quatro telas de jogo, você lembra das telas, e eu não conseguia fazer nada enquanto não abrisse o jogo. Nem que eu estivesse fazendo café, tinha que estar rolando aposta automática ali.\n\nHoje, acordar e não pensar nisso, e realmente não pensar nisso, é muito bom. Eu faço meu café, vejo televisão, mexo um pouquinho no celular, sei que isso do celular ainda precisa melhorar, mas é isso. São momentos, são horários em que eu faço coisas que me dão prazer.\n\nDepois eu venho pro computador e fico tranquilo. As minhas manhãs hoje são assim. Eu não lembro de jogo, e isso é muito bom. Virar essa chave era uma coisa que eu achei que não ia cessar nunca. Então, pra mim, é isso.",
        "reflectionWelder": "Lugares que me fazem bem e que merecem mais a minha atenção. Eu acho que é o que você falou mesmo. Lugares que me fazem bem hoje são quando a gente tá abraçadinho no sofá, vendo filminho, vendo uma seriezinha, comendo nossas coisinhas. Quando a gente vai no Carrefour comprando nossas coisinhas. Quando a gente sai pra comer uma pizza num lugar fora, num lugar diferente. As viagens também, por mais que seja uma viagem simples, Caldas Novas é sempre muito bom. A gente sair daqui do apartamento, só a questão do barulho mesmo, que parece que persegue a gente, mas são lugares que são bons, assim, pra gente estar. Viagens, nem se fala.\n\nPessoas que me fazem bem: você, minha mãe, Ana Paula, Amanda também me faz bem na medida do possível. Ela não é uma pessoa ruim, ela é engraçada. Tô aprendendo a valorizar mais o lado bom que ela tem. Hoje a Amanda tá acima do José nessas amizades, assim. Eu sinto mais preocupação dela do que do José. O José fala bem, mas ela faz mais do que o José.\n\nE acho que o que me faz bem mesmo são essas pessoas de convívio diário. As outras pessoas, que o convívio é mais relação de trabalho, não tem amizade, não tem tanta conversa. Até mesmo em Iara eu acho meio fútil algumas coisas dela e horários, eu acabei de falar, né. À noite pra mim era um problema. Toda noite, acabava a novela, pra mim era um problema, eu já pensava automaticamente em jogo.\n\nParece que meu cérebro tava condicionado a vir pra cá e já fazer o depósito. E agora a gente tá ressignificando isso, né, com as tentativas de parar. Aí consegue muito tempo, depois recai, mas a gente tá tentando, tá conseguindo. Talvez, se a gente não tivesse caminhado até onde a gente caminhou até a última recaída, a gente não teria estabelecido essa rotina de não ter tanta dependência, de meio que aceitar, e realmente isso que a gente tem que fazer, aceitar que a gente perdeu e bola pra frente, e fazer o que a gente tá fazendo hoje.\n\nEu tô com muito sangue nos olhos pra ganhar dinheiro esse ano. Tô com muita determinação. Dá até um comichão aqui, porque eu sei que as coisas vão acontecer.\n\nPessoas que merecem mais espaço na minha rotina. Você já tá na minha rotina, igual eu tô na sua. Eu não sei se minha mãe precisa de mais espaço, porque minha mãe tem os defeitos dela também, de não deixar a gente falar, de querer reprimir. Então, às vezes, eu não sei se precisa de mais espaço, não. Porque eu compreendo o jeito dela, mas eu acho que ela não compreende muito o meu, de querer sofrer, de às vezes precisar falar, chorar um pouco. Eu sei que, quando eu preciso dela, ela tá ali sempre pra mim, vai ser sempre o melhor colo do mundo.\n\nMas espaço, talvez, mereça mais espaço no sentido de eu ter um coração menos fechado, conversar mais com ela. Tipo hoje, ela mandou um monte de áudio e eu nem respondi direito, porque eu realmente não gosto de ficar de conversinha com ninguém, nem com você. Eu fico na minha, não fico de conversinha com ninguém. Aí, às vezes, eu tenho que ter mais paciência. Então, nesse sentido, eu acho que minha mãe merece mais espaço na minha vida. Você tem muito mais paciência do que eu.\n\nE só porque as outras pessoas não querem ter espaço na minha vida, eu também não faço questão delas terem na minha. É só pro ha ha ha. Eu vou usar só pro ha ha ha também.",
        "difficulty": "facil",
        "completedAt": "2026-01-06"
      },
      {
        "dayNumber": 13,
        "isCompleted": true,
        "reflectionCharles": "Quando eu tô estressado no jogo, eu ativo a pior versão de mim, né, como você sabe. Falo absurdos, brigo, fico triste, fico mal. Mas o principal disso tudo é que essa versão minha pensa que todo o dinheiro que eu tenho tem que ser jogado fora, que ele não vale nada. Nada vale nada. Nem o dinheiro, nem a minha palavra, nem nada.\n\nEssa é a minha versão estressada quando eu tô jogando, quando eu tô no jogo ali. É uma versão que só quer se destruir. Enquanto eu não destruir tudo, eu não paro. Eu nem sei como é que a gente conseguiu parar tantas vezes. Não faz o menor sentido, realmente. É só Deus mesmo.\n\nE a minha versão sóbria, falando agora de forma mais positiva, é justamente o que a gente viu hoje. A gente teve que gastar, você teve que gastar, e você ficou com dó de ter gasto trinta reais no conserto de um pneu. Por mais que valha pelo horário, pelo serviço do cara e tudo mais, e que você saiba que é um dinheiro que não vai te fazer falta, o dinheiro ainda tem esse valor diferente, né. Quando a pessoa tem muito, trinta reais é uma coisa. Quando a pessoa tem muito pouco, trinta reais é muita coisa.\n\nE eu sei que, pra gente, por mais que a gente tenha uma condição boa, a gente sabe que é dinheiro, que trinta reais é dinheiro.\n\nEntão essa versão minha, quando eu tô sóbrio, mesmo estressado, consegue ver essas coisas. Eu consigo pensar nas coisas boas, resolver as coisas. Mas a minha versão sóbria e estressada também tem esse lado ruim, que é achar que nada presta, que nada funciona, que a vida é ruim, que a vida não tá legal. Eu começo a colocar um peso muito grande nas coisas, e eu não acho isso legal.\n\nTanto é que isso é uma coisa que eu quero melhorar esse ano, esse estresse. Porque essa versão sóbria e estressada só vê o lado ruim das coisas, só quer reclamar, começa a pensar em jogo, fica pensando em se destruir. E é isso.",
        "reflectionWelder": "A minha versão sóbria, quando ela fica estressada, é o Hélder normal, que fica estressado, acha ruim as coisas, mas entende que tem que passar por aquilo e pronto. Diferente de quando eu tô no jogo, né, que Deus me livre, é realmente, eu acho, a pior versão minha que já existiu no mundo. De querer morrer, de achar que o mundo não vale a pena, que nem você falou, de achar que todo dia que a gente tem a gente não é merecedor, que a gente tem que jogar fora, que a gente só vai sossegar quando parar.\n\nE quando eu tô sóbrio, eu dou valor a cada centavo que a gente tem, mesmo nos meses de estresse. Hoje, por exemplo, a gente tá muito estressado com o vizinho de cima, a gente quer muito ir pra algum lugar, comprar alguma casa, fazer alguma coisa, ganhar dinheiro esse ano pra isso. A minha versão estressada foca nisso. Quando acontece um barulho de cima, eu não penso no jogo. Pode até ser que eu pense pela raiva, mas eu tô direcionando a raiva e o estresse pra uma coisa que vai trazer algum tipo de resultado pra gente.\n\nPorque quando a gente se estressa com alguma coisa, na maioria das vezes é porque algo saiu do controle ou porque não saiu como planejado. E a gente tem ferramentas pra contornar isso estando fora do jogo. Porque dentro do jogo a gente fica totalmente cego. Tanto que nós dois, aqui, ninguém queria trabalhar mais durante um tempo. Aí a gente até melhorou muito, mesmo tendo recaídas, mesmo jogando, a gente melhorou muito.\n\nVocê não perdeu a vontade de trabalhar, eu também não, mesmo diante de tantas quedas. Mas isso também é graças ao que a gente construiu. Mesmo quando a gente caiu, a gente levantou e tentou de novo. Aí parava um tempo, infelizmente voltava em outros momentos. E toda vez que a gente firma um propósito de verdade, assim, a gente consegue. E dessa vez o propósito é longo, né, de um ano. Então eu acredito, não, eu tenho certeza que a gente vai conseguir.\n\nE a gente vai passar por estresses, porque a vida tem estresse. Igual a psicóloga falou, você tem que se permitir sentir triste. Eu também tenho que me permitir. Eu até me permito às vezes. Você e minha mãe tentam me tirar um pouco da tristeza, conseguem, mas eu não deixo de viver minha tristeza, mesmo que seja sozinho, calado, chorando sozinho. Porque é necessário. Até pra gente sair, dar a volta por cima, a gente tem que sentir tudo mesmo.\n\nE é isso. Eu quero viver. Posso viver estressado esse ano inteiro, eu não jogando. Eu sei que vai ser um estresse bom, que não vai me trazer nenhum tipo de prejuízo.",
        "difficulty": "facil",
        "completedAt": "2026-01-07"
      },
      {
        "dayNumber": 14,
        "isCompleted": true,
        "reflectionCharles": "Pra mim, eu posso resumir tudo em uma frase só, que é aquela música da Sarah, né, que fala pra gente lembrar de onde a gente veio e aonde a gente chegou, e que não era nem pra gente estar aqui. Então, pra mim, essa é a frase que resume tudo, pra eu poder ficar tranquilo, ser feliz e ser grato, mesmo com essas coisas acontecendo comigo de novo, né, sem dinheiro de novo.\n\nMas eu sei que é por pouco tempo. Eu sei que eu já conquistei muita coisa e que eu não preciso ficar nessa ambição de conquistar o tempo inteiro, de estar bem o tempo inteiro. A vida é isso mesmo. Ali, o jogo foi uma ilusão. A gente sabe que foi uma mentira, uma mentira muito bem contada, e a gente caiu nisso.\n\nEntão que, daqui pra frente, a gente sofra e tenha problemas com coisas reais, com coisas palpáveis, com coisas que a gente consiga resolver, com Deus no caminho junto com a gente. Pra mim, é isso. É lembrar de onde eu vim, das coisas que eu não tive e das coisas que eu fui conquistando, e que a gente tá conquistando.\n\nA gente tá onde a gente tá porque a gente merece de alguma forma. E talvez nem era pra eu estar aqui mesmo. Mesmo eu tendo sofrido, eu poderia ter perdido a minha vida.\n\nNão só por incidentes, igual a gente comenta às vezes, de coisas que quase aconteceram, de coisas ruins que poderiam ter acontecido, mas por tanta coisa que eu já quis fazer contra mim mesmo, por coisas que eu já passei. Tem muita gente que não tem esse privilégio de chegar aos 30 anos, quase 31. Tem gente que morre tão cedo, com tanta injustiça na vida. A gente vê tanta gente indo embora.\n\nEntão é só Deus mesmo. Mesmo tendo acontecido tanta coisa difícil, ano passado teve muita coisa boa. Eu tô vivo. A gente consegue tudo de novo. Igual você falou, a gente vai conseguir, eu tenho certeza. É só parar de jogar que as coisas voltam ao normal.\n\nE é olhar realmente de onde eu vim, aonde eu cheguei, e saber que eu ainda vou chegar muito mais longe. Não só em termos financeiros, mas em ajudar outras pessoas, em ser feliz, em aproveitar a vida e em ser mais grato também.",
        "reflectionWelder": "Eu acho que uma frase que cairia bem, assim, pra eu ouvir hoje, especialmente hoje, é que as coisas vão ficar bem daqui a um tempo. Aliás, elas já estão bem. Só que a gente vai construir, da maneira certa, muita coisa daqui pra frente. E que as coisas vão funcionar desse jeito, que a gente não precisa disso mais nas nossas vidas, que a gente vai conseguir ter um ano limpo disso aqui. Não só um ano, mas poder ir comemorando cada ciclo, assim, cada ano que for passando, e a gente lembrar disso na nossa história e ficar tão distante disso ao ponto de a gente ter conquistado coisas que a gente nem imaginava ter conquistado.\n\nOuvir que eu sou inteligente, que eu sou capaz, que eu tenho força de vontade, que eu sou abençoado, que Deus quer o melhor pra mim. Que as oportunidades vão vir até mim, que tudo vai se encaixar, que tudo vai funcionar, que as coisas vão fluir sem jogo na nossa vida. Que a gente tá indo muito bem, que Deus foi muito bondoso com a gente por a gente ainda estar aqui e ter a vida que a gente ainda tem. Porque, sinceramente, não era pra gente ter nada.\n\nEntão eu acho que seriam essas frases, assim, hoje, que eu preciso ouvir e que você fala pra mim. A gente fala essas frases todos os dias. Eu sei que vão vir oportunidades pra você também, no seu trabalho e fora dele também. O ano tá só começando e a gente já fez tanta coisa, se for parar pra pensar. Tipo, sete dias, vai fazer oito, e eu já corri atrás de um monte de coisa, já tem prospecção de um monte de coisa. Eu tô com sangue nos olhos de querer fazer as coisas acontecerem.\n\nEntão acho que seria essa frase, assim: as coisas vão se encaixar, e você vai ver que vai chegar num lugar muito melhor do que você pensou. Com saúde, tanto mental quanto física, conquistando todos os sonhos que a gente imaginou e até os que a gente nem imaginou. E que Deus tá do nosso lado.",
        "difficulty": "facil",
        "completedAt": "2026-01-08"
      },
      {
        "dayNumber": 15,
        "isCompleted": true,
        "reflectionCharles": "Eu acho que uma vitória silenciosa que a gente teve recentemente foi a compra desse carro também, acrescentando coisas que você falou. A gente quase não valorizou isso. Por mais que hoje a gente esteja mais grato com o carro, eu até devo isso à jornada anterior. A gente meio que não sentiu praticamente nada na troca do carro, acho que isso incentiva um sentimento ruim, né.\n\nE a gente sabe que precisa valorizar isso, porque a gente tem que respeitar a nossa história, o nosso dinheiro, a nossa luta. Mesmo que, às vezes, tenha acontecido no momento errado por causa do jogo, ainda assim é uma vitória.\n\nEu acredito que a gente vai ver algumas vitórias também até quando a gente tava jogando. Momentos em que a gente poderia ter parado com zero ou com ainda menos dinheiro e, mesmo tendo perdido muito, a gente decidiu parar com alguma coisa, com algum dinheiro, e não continuar. Isso é uma vitória.\n\nUma vitória que você teve recente foi ter recebido um dinheiro que você não tava esperando há muito tempo. E eu não acho que você valorizou o tanto quanto deveria, eu olhando de fora, né. Talvez porque você não se expressou, porque você tava triste por causa do jogo. Mas eu pensei: cara, como que alguém ganha o dinheiro de um ano de trabalho e não tá festejando, não tá comemorando, não tá pulando de alegria? Parece que simplesmente caiu um dinheiro ali e pronto, toma aí.\n\nEu sei que o jogo causou isso em você, né. Como que eu vou estar feliz ganhando um dinheiro desse se eu perdi um dinheiro parecido com esse? Mas ainda assim é uma vitória, é uma grande vitória. Você poderia ter muito menos do que você tem hoje. Então é uma vitória que eu acho que você quase não valorizou.\n\nVoltando pra mim agora, eu acho que é isso. São essas pequenas vitórias que a gente foi tendo durante o ano passado inteiro. Mesmo diante de tantas perdas, a gente conseguiu ter momentos de sanidade, momentos em que a gente segurou a onda, momentos em que você quis parar e eu quis parar de jogar mesmo quando a gente tava jogando. Pra mim, isso são vitórias silenciosas, porque a gente quase não percebe esse tipo de coisa boa diante de tanta coisa ruim.\n\nE eu tenho certeza de que a gente evitou perder muito mais dinheiro do que poderia ter perdido. Por mais que a sensação seja de que foi muito, eu acredito que teria sido muito mais. E não só dinheiro, mas a vida também. Tentando voltar um pouco pra realidade, não só falar de morte, mas entender que a gente teve essas mini vitórias que, inclusive, levaram a gente a ser as pessoas que somos hoje.\n\nEu acho que, mesmo com tanta coisa ruim que a gente falou, fez e pensou um sobre o outro, a gente tá bem. Isso é uma vitória muito grande e que a gente também não tá valorizando tanto quanto deveria. Porque a gente tá vivo, a gente tá bem, a gente ainda tem dinheiro. Mesmo eu estando com zero hoje, eu sei que era pra eu estar devendo. Você me ajudou, você teve condição, e a gente tá correndo atrás, tá indo atrás de recuperar dinheiro de forma honesta, trabalhando, e não de forma ilusória.\n\nA gente também teve essa viagem maravilhosa, que a gente amou. Mas talvez a gente também não tenha dado o valor que essa viagem merecia. Eu tô aqui reclamando que tô sem dinheiro, que tô triste, mas, cara, eu viajei e não tô devendo nada dessa viagem.\n\nSão várias vitórias que a gente teve. Se a gente parar pra pensar e olhar com mais calma, a gente tem mini vitórias como consequência de outras mini vitórias, vitórias médias e vitórias grandes. E a gente acaba preferindo olhar só pro lado ruim das coisas.\n\nHoje, nesse dia 15, a gente tá conseguindo ter um pouco mais de clareza de novo. Eu tô voltando a sentir aquela clareza, aquela calma, sem aquele desespero, aquela ansiedade, aquele medo. E focar mais forte ainda do que na jornada anterior nessa nova fase, pra que a gente realmente faça um ano limpo.\n\nAs coisas boas vão continuar acontecendo. Eu não vejo nada de ruim pela frente, porque até quando algo ruim acontece, a gente consegue resolver. A gente sempre conseguiu resolver as coisas ruins. Então, pra mim, só tem coisa boa pra colher fora do jogo. Se você não joga, não tem coisa ruim na colheita.\n\nÉ nesse sentido que eu falo de não ter coisa ruim. As coisas boas vão vir. Deus vai continuar abençoando, eu tenho certeza. E a colheita boa vai continuar acontecendo também. Tenho certeza disso.",
        "reflectionWelder": "Uma vitória silenciosa recente que eu quase não valorizei Eu acho que eu acho que foram muitas Eu não sei se a palavra certa é eu quase não valorizei porque é que nem eu tô sempre falando dessa jornada eu tô valorizando até as recaídas que a gente teve.  Ao longo de um tempo sem jogar porque se não tivesse sido seu longo tempo sem jogar E a gente não fosse podando isso assim com o tempo talvez a gente não teria tido a capacidade de parar de jogar algumas vezes até com dinheiro mesmo que fosse pequeno relativamente ao valor que a gente tinha postado a gente parava a gente cansava a gente esgotava a gente já tava tomando nojo daquilo ali. Então eu acho que durante esse tempo que a gente foi aprendendo isso eu fui começando a voltar a dar valor em algumas coisas. Vou dar um exemplo uma vitória silenciosa que eu quase não valorizei que eu acho que eu não valorizei mas eu hoje eu tenho a convicção de que eu valorizei porque que nem eu falei que a gente tá aprendendo.  O material da Cult era o material que eu achei que ele ia gastar uns R$8000 eu achei que eles não iam aprovar o que a gente entregou lá de amostra E eles aprovaram então assim o gasto vai ser bem menor do que o que eu tinha imaginado que eu ia ter que gastar pra recuperar o material então acaba prestando um serviço que eu ainda vou ter um lucro não tanto quanto eu desejava mas ainda vai ter É outra coisa também no Natal e no Ano Novo né eu fiz a ceia lá na minha mãe paguei paguei pra gente cê não teve que pagar nada e minha mãe também não. Então são pequenas coisas assim que eu vejo que a gente tem condição de fazer Que é bom sabe saber que a gente vai dormir acordar amanhã a gente tem o dinheiro pra pagar nossas contas que a gente tem capacidade de recomeçar de correr atrás E tem dias que são mais fáceis e dias que são são mais difíceis hoje eu tô num dia mais tranquilo. Então eu tô eu tô valorizando mais as pequenas coisas mas eu tô automaticamente também com muita ambição pra esse ano e a gente já chegou a falar muitas vezes que a gente tava com sentimentos que ia acontecer coisas boas né e essas coisas boas aconteceram só que a gente tava no lugar errado né fazendo coisas erradas e agora a gente vai estar mais preparado pra que essas coisas boas cheguem de uma maneira que a gente dê valor pra elas de verdade porque a gente tá com um propósito muito firme de não jogar esse ano e eu tô muito apegado a isso não se a gente falar de jogo hoje eu tô com o meu pensamento tão firme nesse propósito que eu não quero eu não vou e a gente não vai fazer isso também a gente não vai brincar com isso Então graças a Deus que a gente com tudo que aconteceu de ruim a gente ainda conseguiu parar depois voltava mas parava de novo.  Então mostra que a gente não somos completos viciados nós somos viciados porque o jogo mostrou isso Mas eu acho que nossas últimas jogadas elas não foram nem de avango nos divertiram vontade de recuperar alguma coisa porque surgia algum imprevisto em que pagar alguma conta que a gente lembra do dinheiro mas agora a gente já tá criando uma maturidade de saber que a gente não recupera nada ali. E que o que a gente precisa pra viver o hoje do jeito que a gente vive e o futuro a gente já tem então eu tô mais grato até com isso com a vida mesmo no geral.",
        "difficulty": "facil",
        "completedAt": "2026-01-09"
      },
      {
        "dayNumber": 16,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 17,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 18,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 19,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 20,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 21,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 22,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 23,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 24,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 25,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 26,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 27,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 28,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 29,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 30,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 31,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 32,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 33,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 34,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 35,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 36,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 37,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 38,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 39,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 40,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 41,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 42,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 43,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 44,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 45,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 46,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 47,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 48,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 49,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 50,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 51,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 52,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 53,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 54,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 55,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 56,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 57,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 58,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 59,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 60,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 61,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 62,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 63,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 64,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 65,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 66,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 67,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 68,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 69,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 70,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 71,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 72,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 73,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 74,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 75,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 76,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 77,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 78,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 79,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 80,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 81,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 82,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 83,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 84,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 85,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 86,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 87,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 88,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 89,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
        "difficulty": null,
        "completedAt": null
      },
      {
        "dayNumber": 90,
        "isCompleted": false,
        "reflectionCharles": null,
        "reflectionWelder": null,
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
            reflectionCharles: day.reflectionCharles ?? (day.reflection ? day.reflection : null),
            reflectionWelder: day.reflectionWelder ?? null,
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