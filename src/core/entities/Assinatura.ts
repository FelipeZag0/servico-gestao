import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Plano } from "./Plano";

@Entity()
export class Assinatura {
    @PrimaryGeneratedColumn()
    codigo!: number;

    @ManyToOne(() => Plano)
    @JoinColumn({ name: "codPlano" })
    plano!: Plano;

    @ManyToOne(() => Cliente)
    @JoinColumn({ name: codCli })
    cliente!: Cliente;

    @Column("date")
    inicioFidelidade!: Date;

    @Column("date")
    fimFidelidade!: Date;

    @Column("date", { nullable: true })
    dataUltimoPagamento!: Date | null;

    @Column("float")
    custoFinal!: number;

    @Column()
    descricao!: string;

    @Column({ default: "ATIVO" })
    status!: "ATIVO" | "CANCELADO";
}