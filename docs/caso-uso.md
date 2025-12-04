# 4. Diagrama de Caso de Uso

👉 Cole aqui a imagem do diagrama:  
`![Diagrama de Caso de Uso](./images/diagrama-caso-uso.png)`

---

# 4.1 Descrição dos Casos de Uso

## Caso de Uso 01 — Matricular-se
**Atores:** Aluno  
**Descrição:** O aluno realiza o cadastro no sistema e escolhe um plano.  
**Fluxo Principal:**  
1. O aluno acessa o sistema e abre o formulário de matrícula.  
2. Preenche dados pessoais.  
3. Escolhe um plano.  
4. O sistema valida informações.  
5. O cadastro é concluído.  

---

## Caso de Uso 02 — Reservar Aula Coletiva
**Atores:** Aluno  
**Descrição:** Permite reservar uma aula caso haja vaga disponível.  
**Fluxo Principal:**  
1. O aluno acessa a lista de aulas disponíveis.  
2. O sistema mostra número de vagas restantes.  
3. O aluno solicita reserva.  
4. O sistema valida disponibilidade.  
5. Reserva é confirmada.  

**Fluxo Alternativo — Vagas esgotadas:**  
1. O aluno tenta reservar.  
2. O sistema detecta lotação.  
3. Exibe mensagem de erro.  

---

## Caso de Uso 03 — Registrar Treino
**Atores:** Instrutor  
**Descrição:** O instrutor registra ou atualiza o treino do aluno.  

---

## Caso de Uso 04 — Registrar Pagamento
**Atores:** Administrador  
**Descrição:** Pagamento registrado e aluno tem status atualizado para ativo.  

---
