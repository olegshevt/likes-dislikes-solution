function solution(string) {
    var freq = {};
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
            count++;
        }
    }
    return count;
}

solution("<><<<");