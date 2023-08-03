export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;

    abstract createItem(item: T): Promise<T>;

    abstract updateItem(id: string, item: T);
}
