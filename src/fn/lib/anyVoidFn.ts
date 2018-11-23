type anyVoidFn<T> = (this: T, ...args: any[]) => void;

export { anyVoidFn };
