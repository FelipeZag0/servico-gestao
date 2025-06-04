import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Plano {
  @PrimaryGeneratedColumn()
  codigo!: number;

  @Column()
  nome!: string;

  @Column("float")
  custoMensal!: number;

  @Column("date")
  data!: Date;

  @Column()
  descricao!: string;
}
