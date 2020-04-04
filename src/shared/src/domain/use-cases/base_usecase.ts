export interface IUseCase<TInput, TOutput> {
    execute(input: TInput): Promise<TOutput>
}

export interface IUseCaseEmpty<TOutput> {
    execute(): Promise<TOutput>
}