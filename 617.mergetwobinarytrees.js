/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if(t1!==null&&t2!==null) {
        console.log(t1.val+t2.val);
        tree = new TreeNode(t1.val+t2.val);
    }
    else if(t1&&!t2) {
        tree.val = t1.val
    }
    else if(!t1&&t2) {
        tree.val = t2.val
    }
    if(t1.left||t2.left) {
        //tree.left = new TreeNode(t1.left.val + t2.left.val);
        console.log(tree.left);
        tree.left = mergeTrees(t1.left,t2.left);
        console.log(tree.left);
    }
    if(t1.right||t2.right) {
       // tree.right = new TreeNode(t1.right.val + t2.right.val)
        tree.right = mergeTrees(t1.right,t2.right)
    }
    return tree;
};


