interface IGenericClass {
    new (): any;
}
interface ITypedObject<T> {
    [key: string]: T;
}
export { IGenericClass, ITypedObject };
