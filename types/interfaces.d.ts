interface IGenericClass {
    new (): any;
}
interface IGenericObject<T> {
    [key: string]: T;
}
export { IGenericClass, IGenericObject };
