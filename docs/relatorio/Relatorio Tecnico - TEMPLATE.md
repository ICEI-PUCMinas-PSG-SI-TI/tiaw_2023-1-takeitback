# Informações do Projeto
`TÍTULO DO PROJETO`  

Take It Back

`CURSO` 

Sistemas de Informação

## Participantes

Os membros do grupo são: 
 - Pedro Melo
 - Rafael Mendes
 - Samuel Leite Diniz
 - Wesley Henrique de Lima

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas](#personas)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
- [Projeto da Solução](#projeto-da-solução)
  - [Wireframes](#wireframes)
  - [Mapa de navegação](#mapa-de-navegação)
- [Conclusões](#avaliação-da-aplicação)
  
# Introdução

## Problema

Devido à correria do dia a dia, muitas pessoas acabam esquecendo seus objetos no trabalho, faculdade, transporte público, etc. Na PUC-Minas São Gabriel, os alunos, professores e funcionários são afetados diretamente por esse problema. Objetos, muitas vezes de valor, são esquecidos em toda a área do campus, principalmente nas salas de aula. Apesar do problema, não existe um meio fácil e prático de procurar, recuperar ou anunciar o achado de itens perdidos.

## Objetivos

Nosso objetivo é criar uma ferramenta em que possa ajudar e tornar mais prática a procura por objetos perdidos na PUC-Minas São Gabriel. Gostaríamos de criar um site de forma simples que possa disponibilizar acesso aos itens perdidos e cadastrados na PUC, solicitar um item perdido ou adicionar algo que tenha achado e também facilitar a comunicação entre quem perdeu, quem achou e o setor de achados e perdidos presencial.

## Público-Alvo

 Público alvo de modo geral, são todas as pessoas que frequentam e trabalham na PUC-Minas São Gabriel, que por um acaso podem acabar perdendo algum objeto pessoal e que futuramente necessitaram de ajudar para reencontrar seus objetos perdidos. Especificamente, as pessoas são os alunos, professores e funcionários que estarão sempre por todo campos, seja um aluno ou professor que estará sempre participando de aulas em diferentes salas e horários ou funcionário que atuara em setor especifica da sua função.
 
# Especificações do Projeto

O projeto será basicamente um site com sistema de login e cadastro de todos membros da PUC-Minas São Gabriel, que depois de autenticado poderá realizar cadastro de objetos perdidos ou encontrados e também realizar buscas em nossas listas de objetos cadastrados no sistema. Estes objetos contaram com as descrição, especificações do objeto, bem como o contato para devolução e um possível local de busca.

## Personas

![Persona 1](images/persona1.jpeg)
![Persona 2](images/persona2.jpeg)
![Persona 3](images/persona3.jpeg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Aluno (Perdeu)     | De uma lista com objetos encontrados na faculdade| Encontrar meu objeto perdido|
| Aluno (Perdeu)     | Divulgar meu objeto pessoal perdido| Encontrar alguém que tenha achado|
| Funcionário (Achou)| Informar que achei um objeto| Pessoa que perdeu recuperar direto comigo|
| Funcionário        | Preciso registrar os objetos perdidos na faculdade| Ter controle da saída e entrada de objetos no achados e perdidos|

## Requisitos

A tabela que segue apresenta os requisitos funcionais do projeto. 

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Cadastro de objetos perdidos e encontrados | ALTA | 
|RF-002| Lista de objetos perdidos e encontrados | ALTA |
|RF-003| Marcação para retirar da lista objetos já devolvidos | MÉDIA |
|RF-004| Sistema de login e autenticação de usuários | ALTA |
|RF-005| Disponibilizar um canal de contato para suporte ou dúvidas | BAIXA |
|RF-006| Adicionar informações de contato para devolução do objeto | ALTA |
|RF-007| Incluir descrição e especificações do objeto perdido ou encontrado | MÉDIA |
|RF-008| Criar uma página de perfil do usuário | ALTA |

# Projeto da Solução

O projeto é desenvolvido em linguagens Html, Css , JavaScript e também com o framework Bootstrap. Além do Font Awesome um conjunto de ferramentas de ícones e fontes.

## Wireframes

**Pagina de apresentação**:
![Wireframe 1](images/wireframe1.png)
Contém apresentação do site e sua função.

**Cadastro de objetos**:
![Wireframe 2](images/wireframe2.png)
Contém formulário necessário para cadastro de um objeto.

**Lista de objetos**:
![Wireframe 3](images/wireframe3.png)
Contém categorias e lista de objetos.

## Mapa de navegação

![Diagrama de Navegação](images/usernav.PNG)

# Conclusões

O projeto Take It Back teve como objetivo criar uma ferramenta prática e eficiente para auxiliar na busca e recuperação de objetos perdidos na PUC-Minas São Gabriel. Foi possível alcançar a criação de um site simples, com sistema de login, cadastro de objetos perdidos e encontrados, listagem de itens, busca por objetos e promover comunicação entre os usuários.
Durante o desenvolvimento, foram enfrentadas algumas dificuldades, como a garantia da privacidade das informações pessoais dos usuários e a necessidade de equilibrar a simplicidade da interface com as funcionalidades da ferramenta. No entanto, essas dificuldades foram contornadas através de uma análise cuidadosa dos requisitos. No geral, o projeto Take It Back foi capaz de proporcionar uma solução eficiente para o problema de objetos perdidos na PUC-Minas São Gabriel, oferecendo uma plataforma acessível, fácil de usar e que facilita a comunicação e a recuperação dos itens perdidos.