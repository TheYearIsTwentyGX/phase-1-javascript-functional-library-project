function myEach(collection, callback) {
    const vals = Object.values(collection);
    for (const key of vals) {
        callback(key);
    }
    return collection;
} 

function myMap(collection, callback) {
    let returnArray = [];
    const vals = Object.values(collection);
    for (const key of vals) {
        returnArray.push(callback(key));
    }
    return returnArray;
}

function myReduce(coll, callback, acc) {
    if (acc == undefined)
        acc = -2;
    const vals = Object.values(coll);
    for (const key of vals) {
       acc = callback(acc, key, coll);
    }
    return acc;
}

function myFind(coll, pred) {
    const vals = Object.values(coll);
    for (const key of vals) {
        if (pred(key))
            return key;
    }
    return undefined;
}

function myFilter(coll, pred) {
    const retArr = [];
    const vals = Object.values(coll);
    for (const key of vals) {
        if (pred(key))
            retArr.push(key);
    }
    return retArr;
}

function mySize(coll) {
    const vals =  Object.values(coll);
    let size = 0;
    for (const key of vals) {
        size++;
    }
    return size;
}

function myFirst(coll, n) {
    return (n == null) ? coll[0] : coll.slice(0, n);
}

function myLast(coll, n) {
    return (n == null) ? coll[coll.length - 1] : coll.slice(-n);
}

function myKeys(obj) {
    let retArr = [];
    for (let key in obj) {
        retArr.push(key);
    }
    return retArr;
}

function myValues(obj) {
    let retArr = [];
    for (let key in obj) {
        retArr.push(obj[key]);
    }
    return retArr;
}