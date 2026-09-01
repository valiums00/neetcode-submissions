class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // 3, 4, 5, 6
    // 7 - 3 = 4, {4: 0}
    // 7 - 4 = 3, {3: 1, 4: 0}
    // 7 - 5 = 2, {2: 2, 3: 1, 4: 0}
    // 7 - 6 = 1, {1: 3, 2: 2, 3: 1, 4: 0}
    twoSum(nums, target) {
        const m = {};

        for (let i = 0; i < nums.length; i++) {
            m[target-nums[i]] = i;
        }

        for (let i = 0; i < nums.length; i++) {
            // nums[i] = 3, m[nums[i]] = 1
            if (nums[i] + nums[m[nums[i]]] === target && i !== m[nums[i]]) {
                return [i, m[nums[i]]];
            }
        }

        return null;
    }
}
