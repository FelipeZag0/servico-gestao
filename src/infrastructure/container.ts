import { container } from "tsyringe";
import { AppDataSource } from "./db/data-source";
import { ClienteRepository } from "./repositories/ClienteRepository";
import { PlanoRepository } from "./repositories/PlanoRepository";
import { AssinaturaRepository } from "./repositories/AssinaturaRepository";
import { IClienteRepository } from "../../core/interfaces/IClienteRepository";
import { IPlanoRepository } from "../../core/interfaces/IPlanoRepository";
import { IAssinaturaRepository } from "../../core/interfaces/IAssinaturaRepository";
import { ListarClientesUseCase } from "../../core/use-cases/ListarClientesUseCase";
import { ListarPlanosUseCase } from "../../core/use-cases/ListarPlanosUseCase";
import { CriarAssinaturaUseCase } from "../../core/use-cases/CriarAssinaturaUseCase";
import { AtualizarCustoPlanoUseCase } from "../../core/use-cases/AtualizarCustoPlanoUseCase";
import { ListarAssinaturasUseCase } from "../../core/use-cases/ListarAssinaturasUseCase";

// Registro dos Repositórios
container.registerSingleton<IClienteRepository>(
    "IClienteRepository",
    ClienteRepository
);

container.registerSingleton<IPlanoRepository>(
    "IPlanoRepository",
    PlanoRepository
);

container.registerSingleton<IAssinaturaRepository>(
    "IAssinaturaRepository",
    AssinaturaRepository
);

// Registro dos Casos de Uso
container.register("ListarClientesUseCase", {
    useClass: ListarClientesUseCase,
});

container.register("ListarPlanosUseCase", {
    useClass: ListarPlanosUseCase,
});

container.register("CriarAssinaturaUseCase", {
    useClass: CriarAssinaturaUseCase,
});

container.register("AtualizarCustoPlanoUseCase", {
    useClass: AtualizarCustoPlanoUseCase,
});

container.register("ListarAssinaturasUseCase", {
    useClass: ListarAssinaturasUseCase,
});

// Exporta o container configurado
export { container };
