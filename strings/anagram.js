function AnagramOne(s, t) {
  let res1 = s.split("").sort().join("");
  let res2 = t.split("").sort().join("");
  return res1 == res2;
}

function AnagramTwo(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}

function AnagramThree(s, t) {
  let obj = {};
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    //O(s)
    obj[s[i]] = !obj[s[i]] ? 1 : obj[s[i]] + 1;
  }

  for (let j = 0; j < t.length; j++) {
    //O(t)
    if (!obj[t[j]] || obj[t[j]] < 0) return false;
    else {
      obj[t[j]]--;
    }
  }

  return true;
}
console.log(AnagramOne("anagram", "gramana"));
console.log(AnagramTwo("night", "thing"));
console.log(AnagramThree("rat", "car"));
