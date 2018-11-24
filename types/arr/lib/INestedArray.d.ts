interface INestedArray<T> extends Array<T | INestedArray<T>> {
    [key: number]: T | INestedArray<T>;
}
export { INestedArray };
