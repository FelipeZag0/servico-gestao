import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/**
 * Entidade que representa um cliente
 * Seguindo os princípios da Clean Architecture, esta classe contém apenas
 * as propriedades e lógica de negócio relacionada ao cliente
 */
@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  codigo!: number; // Identificador único do cliente

  @Column()
  nome!: string; // Nome completo do cliente

  @Column()
  email!: string; // E-mail de contato do cliente
}