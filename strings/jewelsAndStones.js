var numJewelsInStones = function(jewels, stones) {
    // let count = 0;
    // for(let i=0; i<jewels.length; i++){
    //     for(let j=0; j<stones.length; j++){
    //         if(stones[j] == jewels[i]) count++;
    //     }
    // }
    // return count; //T=O(n*m), S=O(1)

    let count = 0;
    let s = new Set(); //removes deuplicates //set{52 elements} //O(1))
    for(i=0; i<jewels.length; i++){
        s.add(jewels[i]);
    }
    console.log(s);
    for(j=0; j<stones.length; j++){
        if(s.has(stones[j])) count++ //O(1) //includes - O(n)
    }
    return count; //T=O(n), S=O(1)
};
numJewelsInStones("aA", "aAAbbbb");