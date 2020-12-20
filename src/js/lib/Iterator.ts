export interface ForwardIterator<T> {
    next(): boolean;
    value(): T;
    update(newVal: T): void;
}

export interface BackwardIterator<T> {
    prev(): boolean;
    value(): T;
    update(newVal: T): void;
}

export interface BidirectionalIterator<T>
    extends ForwardIterator<T>,
        BackwardIterator<T> {}
