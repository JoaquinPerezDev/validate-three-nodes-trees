// You're given three nodes that are contained in the same Binary Search Tree:
// nodeOne, nodeTwo, and nodeThree. Write a function that returns a boolean
// representing whether one of nodeOne or nodeThree is an ancestor of nodeTwo
// and the other node is a descendant of nodeTwo. For example, if your
// function determines that nodeOne is an ancestor of nodeTwo, then it needs
// to see if nodeThree is a descendant of nodetwo. If your function determines
// that nodeThree is an ancestor, then it needs to see if nodeOne is a descendant.

// A descendant of a node N is defined as a node contained in the tree rooted
// at N. A node N is an ancestor of another node M if M is a descendant of N.

// It isn't guaranteed that nodeOne or nodeThree will be ancestors or
// descendants of nodeTwo, but it is guaranteed that all three nodes will
// be unique and will never be None / null. In other words, you'll be given
// valid input nodes.

// Each BST node has an integer value, a left child nore and a right child node.
// A node is said to be a valid BST node if and only if it satisfies the BST
// property: its value is strictly greater than the values of every node to its
// left; its value is less than or equal to the values of every node to its right;
// and its children nodes are either valid BST nodes themselves or None / null.

// Same input: tree =        5
//                      /       \
//                     2        7
//                  /    \    /   \
//                 1     4   6    8
//                /         /
//               0         3
// This tree won't actually be passed as an input; it's here as a visual
// representation.

// nodeOne = 5, nodeTwo = 2, nodeThree = 3
// Sample output: true (nodeOne is an ancestor of nodeTwo,
// and nodeThree is a descendant of nodeTwo.)

//naive approach: This question has several steps to it. Once is having to use 
//some searching helper function to determine whether the nodes are ascendants 
//or descendants of each other. There are several edge cases to take care of, 
//like the possibility that there is no root node, as well as if the ascendancy
//and descendancy don't match up, we'd want to return false for all of these
//scenarios. Then we can use recursion to do a depth-first-search(DFS, I have a 
//dedicated repository titled 'depth-first-search' you can reference to 
//understand how that algorithm works). Using DFS we can then determine if 
//a node is a descendant of its parent node. This helper function, which will
//use DFS recursively, can return a conditional whether the current node's value
//is greater than or less than the target node. 


//Runtime complexity analysis: With this approach of using DFS recursively, the 
//time complexity will be O(h) where h is equal to the height of the tree itself.
//This is linear as we have to traverse the depth of the tree to check for 
//descendancy. The space complexity in this case is also O(h) given that h 
//is the height of the tree. 

// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(h) time | O(h) space complexity
function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
  if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);
  if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);
  return false;
}

//Helper function to determine whether 'target' is a descendant of the 'node'.
function isDescendant(node, target) {
  if (node === null) return false;

  if (node === target) return true;

  return target.value < node.value
    ? isDescendant(node.left, target)
    : isDescendant(node.right, target);
}
