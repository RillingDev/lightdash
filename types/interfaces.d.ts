interface IGenericObject<T> {
    [key: string]: T;
}
interface IGenericClass {
    new (): any;
}
export { IGenericObject, IGenericClass };
