树的定义：n(n >= 0)个节点构成的有限集合

树结构的优点：
    ① 增删查改速率相当比较高（综合速率，当然优点不足以盖过其他数据结构，比如效率一般情况下没有哈希表高）
    ② 空间利用率高
    ③ 数据模式呈一对多（一个父节点可以对应n个子节点）的状态

二叉树的定义：每个节点最多只能有2个子节点的树

二叉树的特性：
    ① 一个二叉树第i层的最大节点数为：2^(i-1)
    ② 深度为k的二叉树的最大节点总数为：2^k - 1
    ③ 对任何非空二叉树T,若n0表示叶节点的个数，n2是度为2的非叶节点个数，则：n0=n2+1

完美二叉树（满二叉树）：除了最后一层节点外，其余每个节点都有两个子节点

二叉搜索树（二叉排序树或者二叉查找树）：
    ① 非空左子树的所有键值小于其根节点的键值
    ② 非空右子树的所有键值大于其根节点的键值
    ③ 左右子树本身也都是二叉搜索树