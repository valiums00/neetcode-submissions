class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        if (s.length === 0 || t.length === 0) return false;

        const ma = {};
        const mb = {};

        for (let i = 0; i < s.length; i++) {
            ma[s[i]] = (ma[s[i]] ?? 0) + 1;
            mb[t[i]] = (mb[t[i]] ?? 0) + 1;
        }

        for (let i = 0; i < s.length; i++) {
            if (ma[s[i]] !== mb[s[i]]) {
                return false;
            }
        }

        return true;
    }
}
