# 5. Diagrama de Classes

👉 Cole aqui a imagem do diagrama:  
`![Diagrama de Classes](./images/diagrama-classes.png)`

---

## Descrição Geral

### Classe Aluno
- id: int  
- nome: string  
- rg: int  
- dataNascimento: date  
- endereco, email, telefone  
- status: string  
- Métodos: reservarAula(), cancelarReserva()

### Classe Instrutor
- id, nome, especialidade  
- Métodos: reservarAula(), registrarAula()

### Classe AulaColetiva
- id, reserva_id, aluno_id  
- Método: verificarVagas()

### Classe Reserva
- id, data, hora, vagas, alunoId, instrutorId  
- status: string  

### Classe Plano
- tipo, valor, duracaoMeses  

### Classe Pagamento
- id, data, valor, status  

---

(Deixe a imagem no documento, ela vale mais pontos do que a descrição.)

---
