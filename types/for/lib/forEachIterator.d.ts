import { forEachMapper } from "./forEachMapper";

declare type forEachIterator<T> = forEachMapper<T, void>;
export { forEachIterator };
