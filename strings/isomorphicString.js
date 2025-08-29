var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    let mapStoT = {};
    let mapTtoS = {};
    for(let i=0; i<s.length; i++){
        if(!mapStoT[s[i]] && !mapTtoS[t[i]]){
            mapStoT[s[i]] = t[i];
            mapTtoS[t[i]] = s[i];
        }
        else if(mapTtoS[t[i]] !== s[i] || mapStoT[s[i]] !== t[i]) return false;
    }
    return true;
};
isIsomorphic("egg", "add") //T=O(n) S=O(n)