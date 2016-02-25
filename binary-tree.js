'use strict';
 
class BinaryTree {
    constructor() {
        this.root = null;
    }
 
    insert(data) {
        var node = new Node(data, null, null);
        if (this.root == null) {
            this.root = node;
        } else {
            return insertR(this.root, data);
        }
    }
 
    contains(data) {
        if (this.root == null) {
            return false;
        } else {
            return containsR(this.root, data);
        }
    }
 
    remove(data) {
        if (this.contains(data) == true) {
            this.root = removeR(this.root, data);
        }
    }
 
    size() {
        function iter(node) {
            if (!node) {
                return 0;
            } else {
                return 1 + iter(node.left) + iter(node.right);
            }
        }
 
        return iter(this.root);
    }
 
 
    isEmpty() {
        return (this.root === null);
    }
}
 
// private methods
var insertR = function (node, value) {
    if (node.data > value) {
        if (node.left == null) {
            node.left = new Node(value);
        } else {
            insertR(node.left, value);
        }
    } else {
        if (node.right == null) {
            node.right = new Node(value);
        } else {
            insertR(node.right, value);
        }
    }
};
 
var containsR = function (node, value) {
    if (node == null) {
        return false;
    } else if (node.data == value) {
        return true;
    } else if (node.data > value) {
        return containsR(node.left, value);
    } else {
        return containsR(node.right, value);
    }
};
 
var removeR = function (node, value) {
    function nodeValues(node) {
        if (node) {
            return [node.data].concat(nodeValues(node.right)).concat(nodeValues(node.left));
        } else {
            return [];
        }
    }
 
    function extend(node1, node2) {
        nodeValues(node2).forEach(function (val) {
            insertR(node1, val);
        });
 
        return node1;
    }
 
    if (node.data === value) {
        if (node.right || node.left) {
            if (node.right) {
                return extend(node.right, node.left);
            } else {
                return extend(node.left, node.right);
            }
        } else {
            return null;
        }
    } else if (value > node.data) {
        node.right = removeR(node.right, value);
    } else {
        node.left = removeR(node.left, value);
    }
 
    return node;
};