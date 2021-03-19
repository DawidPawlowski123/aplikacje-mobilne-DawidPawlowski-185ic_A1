function* genItems() {
    let cnt = 0;
    while (true) {
        yield `${cnt++}. ${Math.random().toString(36).substring(3,9)}`;
    }
}
const items = genItems();
export function fetchItems() {
    return Promise.resolve({
        json: () =>
            Promise.resolve({
                items: new Array(20).fill(null).map(() => items.next().value)
            })
    });
}
