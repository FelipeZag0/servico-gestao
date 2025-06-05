import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Entidade que representa um plano de assinatura
 * Contém todas as propriedades essenciais de um plano comercial
 */
@Entity()
export class Plano {
  @PrimaryGeneratedColumn()
  codigo!: number; // Identificador único do plano

  @Column()
  nome!: string; // Nome comercial do plano

  @Column("float")
  custoMensal!: number; // Valor mensal da assinatura

  @Column("date")
  data!: Date; // Data de criação ou última atualização

  @Column()
  descricao!: string; // Descrição detalhada do plano
}