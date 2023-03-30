import MakeQuestion from "../../model/MakeQuestion";
import MakeAnswer from "../../model/MakeAnswer";

const allQuestions: MakeQuestion[] = [
  new MakeQuestion(306, "Qual bicho transmite a Doença de Chagas?", [
    MakeAnswer.wrong("Abelha"),
    MakeAnswer.wrong("Barata"),
    MakeAnswer.wrong("Pulga"),
    MakeAnswer.right("Barbeiro"),
  ]),
  new MakeQuestion(
    202,
    'Qual fruto é conhecido no Norte e Nordeste como "jerimum"?',
    [
      MakeAnswer.wrong("Caju"),
      MakeAnswer.wrong("Côco"),
      MakeAnswer.wrong("Chuchu"),
      MakeAnswer.right("Abóbora"),
    ]
  ),
  new MakeQuestion(203, "Qual é o coletivo de cães?", [
    MakeAnswer.wrong("Manada"),
    MakeAnswer.wrong("Alcateia"),
    MakeAnswer.wrong("Rebanho"),
    MakeAnswer.right("Matilha"),
  ]),
  new MakeQuestion(
    204,
    "Qual é o triângulo que tem todos os lados diferentes?",
    [
      MakeAnswer.wrong("Equilátero"),
      MakeAnswer.wrong("Isóceles"),
      MakeAnswer.wrong("Trapézio"),
      MakeAnswer.right("Escaleno"),
    ]
  ),
  new MakeQuestion(205, "Quem compôs o Hino da Independência?", [
    MakeAnswer.wrong("Castro Alves"),
    MakeAnswer.wrong("Manuel Bandeira"),
    MakeAnswer.wrong("Carlos Gomes"),
    MakeAnswer.right("Dom Pedro I"),
  ]),
  new MakeQuestion(206, 'Qual é o antônimo de "malograr"?', [
    MakeAnswer.wrong("Perder"),
    MakeAnswer.wrong("Fracassar"),
    MakeAnswer.wrong("Desprezar"),
    MakeAnswer.right("Conseguir"),
  ]),
  new MakeQuestion(207, "Em que país nasceu Carmen Miranda?", [
    MakeAnswer.wrong("Argentina"),
    MakeAnswer.wrong("Espanha"),
    MakeAnswer.wrong("Brasil"),
    MakeAnswer.right("Portugal"),
  ]),
  new MakeQuestion(
    208,
    "Qual foi o último Presidente do período da ditadura militar no Brasil?",
    [
      MakeAnswer.wrong("Costa e Silva"),
      MakeAnswer.wrong("Emílio Médici"),
      MakeAnswer.wrong("Ernesto Geisel"),
      MakeAnswer.right("João Figueiredo"),
    ]
  ),
  new MakeQuestion(
    209,
    "Seguindo a sequência do baralho, qual carta vem depois do dez?",
    [
      MakeAnswer.wrong("Ás"),
      MakeAnswer.wrong("Nove"),
      MakeAnswer.wrong("Rei"),
      MakeAnswer.right("Valete"),
    ]
  ),
  new MakeQuestion(210, 'O adjetivo "venoso" está relacionado a:', [
    MakeAnswer.wrong("Vela"),
    MakeAnswer.wrong("Vento"),
    MakeAnswer.wrong("Vênia"),
    MakeAnswer.right("Veia"),
  ]),
  new MakeQuestion(211, "Que nome se dá à purificação por meio da água?", [
    MakeAnswer.wrong("Abrupção"),
    MakeAnswer.wrong("Abolição"),
    MakeAnswer.wrong("Abnegação"),
    MakeAnswer.right("Ablução"),
  ]),
  new MakeQuestion(
    212,
    "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
    [
      MakeAnswer.wrong("Monte Branco"),
      MakeAnswer.wrong("Monte Fuji"),
      MakeAnswer.wrong("Monte Carlo"),
      MakeAnswer.right("Monte Everest"),
    ]
  ),
  new MakeQuestion(213, "Em que parte do corpo se encontra a epiglote?", [
    MakeAnswer.wrong("Estômago"),
    MakeAnswer.wrong("Pâncreas"),
    MakeAnswer.wrong("Rim"),
    MakeAnswer.right("Pescoço"),
  ]),
  new MakeQuestion(214, "A compensação por perda é chamada de...", [
    MakeAnswer.wrong("Déficit"),
    MakeAnswer.wrong("Indexação"),
    MakeAnswer.wrong("Indébito"),
    MakeAnswer.right("Indenização"),
  ]),
  new MakeQuestion(
    215,
    "Que personagem do folclore brasileiro tem uma perna só?",
    [
      MakeAnswer.wrong("Cuca"),
      MakeAnswer.wrong("Curupira"),
      MakeAnswer.wrong("Boitatá"),
      MakeAnswer.right("Saci-pererê"),
    ]
  ),
  new MakeQuestion(216, 'Quem é o "patrono" do Exército Brasileiro?', [
    MakeAnswer.wrong("Marechal Deodoro"),
    MakeAnswer.wrong("Barão de Mauá"),
    MakeAnswer.wrong("Marquês de Pombal"),
    MakeAnswer.right("Duque de Caxias"),
  ]),
];

export default allQuestions;
