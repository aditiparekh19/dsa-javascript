var arr = [
    {
        key: "Key1",
        value: "Value1A"
    },
    {
        key: "Key2",
        value: "Value2A"
    },
    {
        key: "Key3",
        value: "Value3A"
    },
    {
        key: "Key2",
        value: "Value2B"
    },
    {
        key: "Key3",
        value: "Value3B"
    },
];

const result = arr.reduce((acc, curr) => {
    if(acc[curr.key]){
        acc[curr.key].push(curr);
    }
    else{
        acc[curr.key] = [curr];
    }
    return acc;
}, {});

console.log(result);

const res = {};
arr.forEach(item => {
    if(res[item.key]){
        res[item.key].push(item);
    }
    else{
        res[item.key] = [item];
    }
    return res;
});
console.log(res);