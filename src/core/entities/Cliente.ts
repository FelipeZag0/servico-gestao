import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// Criação da tabela do banco de dados para Cliente (colunas de código, nome e email)
@Entity()
export class Cliente {
    @PrimaryGeneratedColumn() // ID automático
    codigo!: number;

    @Column()
    nome!: string;

    @Column()
    email!: string;
}