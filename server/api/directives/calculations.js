const formatter = new Intl.NumberFormat('en-US',
    {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }
);

const sum = function (a) {
    return (a.length && parseFloat(a[0]) + sum(a.slice(1))) || 0;
}

module.exports = {
    formatter,
    sum
}