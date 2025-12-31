function isAnagram(str1,str2){
    if(str1.length!=str2.length) return false;

    const sorted_str1=str1.split('').sort().join('')
    const sorted_str2=str2.split('').sort().join('')

    return sorted_str1==sorted_str2;
}

console.log(isAnagram("hello","jelly"));
console.log(isAnagram("listen","silent"));