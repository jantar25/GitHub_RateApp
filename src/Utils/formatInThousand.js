export function formatK(n) {
    return n >= 1e3 ? +(n / 1e3).toFixed(1) + "K" : n;
}