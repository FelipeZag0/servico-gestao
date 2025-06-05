import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Plano } from "./Plano";

/**
 * Entidade que representa a associação entre um cliente e um plano
 * Contém informações sobre o período de fidelidade e status da assinatura
 */
@Entity()
export class Assinatura {
  @PrimaryGeneratedColumn()
  codigo!: number; // Identificador único da assinatura

  @ManyToOne(() => Plano)
  @JoinColumn({ name: "codPlano" })
  plano!: Plano; // Plano associado (relacionamento Many-to-One)

  @ManyToOne(() => Cliente)
  @JoinColumn({ name: "codCli" })
  cliente!: Cliente; // Cliente associado (relacionamento Many-to-One)

  @Column("date")
  inicioFidelidade!: Date; // Data de início do período de fidelidade

  @Column("date")
  fimFidelidade!: Date; // Data de término do período de fidelidade

  @Column("date", { nullable: true })
  dataUltimoPagamento!: Date | null; // Data do último pagamento realizado

  @Column("float")
  custoFinal!: number; // Valor final com descontos aplicados

  @Column()
  descricao!: string; // Descrição da assinatura (ex: motivo do desconto)

  @Column({ default: "ATIVO" })
  status!: "ATIVO" | "CANCELADO"; // Status atual da assinatura
}