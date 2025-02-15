import collections
from itertools import zip_longest

# 给定一个字符串S，检查是否能重新排布其中的字母，使得两相邻的字符不同。


# 如果最多的字符不超过一半，可以进行排布
# 按counter.most_common()将字符push进，然后half切片前一半大
class Solution:
    def reorganizeString(self, s: str) -> str:

        counter = collections.Counter(s)
        tops = counter.most_common()
        max_count = tops[0][1]
        half = (len(s) + 1) >> 1
        if max_count > half:
            return ''

        sb = []
        for char, count in tops:
            for _ in range(count):
                sb.append(char)

        # 分成两半，交叉插入数组,前一半长度不少于后一半
        left, right = sb[:half], sb[half:]
        res = [''] * len(sb)
        res[::2], res[1::2] = left, right
        # for s1, s2 in zip_longest(left, right, fillvalue=''):
        #     res.append(s1)
        #     res.append(s2)

        return ''.join(res)


print(Solution().reorganizeString('aabb'))
print(Solution().reorganizeString('aaab'))
