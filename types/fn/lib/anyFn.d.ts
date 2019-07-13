declare type anyFn<T> = (this: T, ...args: any[]) => any;
export { anyFn };
