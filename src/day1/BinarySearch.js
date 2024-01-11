const binarySearch = (arr, target) => {
    let low = 0;
    let high = arr.length;

    do {

    const m = Math.floor(low + (high - low) / 2)
    const value = arr[m]
    if (value === target) {
        return true;
    } else if (value > target) {
        high = m
    } else {
        low = m + 1
    }

    } while (low < high)

    return false;
}