# Exercício 1 - Componente de Alerta ⭐ Fácil
### _Crie um componente \<Alerta> que muda de cor baseado no tipo._
## Uso esperado:<br>
\<Alerta tipo="sucesso" mensagem="Cadastro realizado com sucesso!"><br>
\<Alerta tipo="erro" mensagem="Erro ao salvar dados!"><br>
\<Alerta tipo="aviso" mensagem="Atenção: campos obrigatórios!"><br>
## Comportamento:<br>
tipo="sucesso" → fundo verde claro, texto verde escuro<br>
tipo="erro" → fundo vermelho claro, texto vermelho escuro<br>
tipo="aviso" → fundo amarelo claro, texto amarelo escuro<br>
## Cores sugeridas:<br>
Sucesso: fundo #d4edda , texto #155724<br>
Erro: fundo #f8d7da , texto #721c24<br>
Aviso: fundo #fff3cd , texto #856404<br>

# Exercício 2 - Card de Contato ⭐⭐ Médio
### _Crie um componente reutilizável \<CardContato> e mostre 3 contatos._
Props do componente:<br>
CardContato<br>
nome="João Silva"<br>
telefone="(11) 99999-9999"<br>
email="joao@email.com"<br>
foto="https: /i.pravatar.cc/80?img=1"

Requisitos:<br>
Componente em arquivo separado ( components/CardContato.js )<br>
Exibir foto, nome, telefone e email<br>
Estilo de card com sombra<br>
Mostrar 3 contatos diferentes na tela

# Exercício 3 - Lista de Tarefas Visual ⭐⭐⭐
## Desafio
### Crie um componente \<Tarefa> que mostra visualmente se está concluída.
Props:
\<Tarefa texto="Estudar React Native" concluida={true} > <br>
\<Tarefa texto="Fazer lista de exercícios" concluida={false} > <br> 
\<Tarefa texto="Enviar trabalho" concluida={true} > <br>

### Comportamento: <br>
Se concluida={true} : <br>
✅ Checkbox verde preenchido <br>
Texto com riscado __(textDecorationLine: 'line-through')__ <br>
Cor do texto cinza <br>
Se concluida={false} : <br>
⬜ Checkbox vazio/outline <br>
Texto normal <br>
Cor do texto preta <br>
