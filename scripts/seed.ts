import { AppDataSource } from "../src/infrastructure/db/data-source";
import { Cliente } from "../src/core/entities/Cliente";
import { Plano } from "../src/core/entities/Plano";

/**
 * Script para popular o banco de dados com dados iniciais
 * Cria 10 clientes e 5 planos para testes
 */
async function seedDatabase() {
  await AppDataSource.initialize(); // Inicializa conexão com banco

  const clienteRepo = AppDataSource.getRepository(Cliente);
  const planoRepo = AppDataSource.getRepository(Plano);

  // Cria 10 clientes
  for (let i = 1; i <= 10; i++) {
    const cliente = new Cliente();
    cliente.nome = `Cliente ${i}`;
    cliente.email = `cliente${i}@email.com`;
    await clienteRepo.save(cliente);
  }

  // Cria 5 planos
  const planos = [
    { nome: "Básico", custo: 99.90, descricao: "Internet 100Mbps" },
    { nome: "Intermediário", custo: 149.90, descricao: "Internet 300Mbps + TV" },
    { nome: "Avançado", custo: 199.90, descricao: "Internet 500Mbps + TV + Telefone" },
    { nome: "Premium", custo: 299.90, descricao: "Internet 1Gbps + TV + Telefone" },
    { nome: "Ultimate", custo: 399.90, descricao: "Internet 2Gbps + TV + Telefone" },
  ];

  for (const planoData of planos) {
    const plano = new Plano();
    plano.nome = planoData.nome;
    plano.custoMensal = planoData.custo;
    plano.data = new Date();
    plano.descricao = planoData.descricao;
    await planoRepo.save(plano);
  }

  console.log("Dados iniciais criados com sucesso!");
  process.exit(0); // Finaliza o processo
}

// Executa o script e trata erros
seedDatabase().catch(console.error);