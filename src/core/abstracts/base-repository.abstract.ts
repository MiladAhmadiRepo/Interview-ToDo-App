export abstract class IBaseRepository<T> {
  abstract getAll(): Promise<T[]>;

  abstract get(id: number): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(id: string, item: T);
}