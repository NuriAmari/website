import { BidirectionalIterator } from './Iterator';

export class ListNode<T> {
    val: T;
    next: ListNode<T> | null;
    prev: ListNode<T> | null;

    constructor(
        val: T,
        next: ListNode<T> | null = null,
        prev: ListNode<T> | null = null
    ) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

export interface ListIterator<T> extends BidirectionalIterator<T> {
    currNode: ListNode<T>;
}

export default class List<T> {
    size: number;
    front: ListNode<T> | null;
    back: ListNode<T> | null;

    constructor() {
        this.size = 0;
        this.front = null;
        this.back = null;
    }

    pushFront(val: T): void {
        const newNode = new ListNode<T>(val, this.front, null);
        if (this.front !== null) {
            this.front.prev = newNode;
        }
        this.front = newNode;
        if (this.back === null) {
            this.back = this.front;
        }
        this.size++;
        this.print();
    }

    pushBack(val: T): void {
        const newNode = new ListNode<T>(val, null, this.back);
        if (this.back !== null) {
            this.back.next = newNode;
        }
        this.back = newNode;
        if (this.front === null) {
            this.front = this.back;
        }
        this.size++;
    }

    popFront(): T | null {
        if (this.front !== null) {
            const retval: T = this.front.val;
            this.front = this.front.next;
            if (this.front === null) {
                this.back = null;
            } else {
                this.front.prev = null;
            }
            this.size--;
            return retval;
        } else {
            return null;
        }
    }

    popBack(): T | null {
        if (this.back !== null) {
            const retval: T = this.back.val;
            this.back = this.back.prev;
            if (this.back === null) {
                this.front = null;
            } else {
                this.back.next = null;
            }
            this.size--;
            return retval;
        } else {
            return null;
        }
    }

    // TODO: Invalidate iterators when appropriate
    private getIterator(startNode: ListNode<T>): ListIterator<T> {
        const iterator: ListIterator<T> = {
            currNode: startNode,
            next: function () {
                if (this.currNode.next !== null) {
                    this.currNode = this.currNode.next;
                    return false;
                }
                return true;
            },
            prev: function () {
                if (this.currNode.prev !== null) {
                    this.currNode = this.currNode.prev;
                    return false;
                }
                return true;
            },
            value: function () {
                return this.currNode.val;
            },
            update: function (newVal: T) {
                this.currNode.val = newVal;
            },
        };
        return iterator;
    }

    begin(): ListIterator<T> | null {
        if (this.front !== null) {
            return this.getIterator(this.front);
        }
        return null;
    }

    end(): ListIterator<T> | null {
        if (this.back !== null) {
            return this.getIterator(this.back);
        }
        return null;
    }

    print(): void {
        let currNode = this.front;
        while (currNode !== null) {
            console.log(currNode.val);
            currNode = currNode.next;
        }
        console.log('--------------------------');
    }
}
