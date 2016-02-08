'use strict';

function BinaryTree() {
	this.root = null;
	this._size = 0;
	
	// public methods
	this.insert = function (value) {
		var node = {
				data: value,
				left: null,
				right: null,
		};
		
		if (this.root === null) {
			this.root = node;
		} else {
			insertR(this.root, node);
		}
		
		this._size += 1;
	}	

	this.remove = function () {
		if (this.root === null) {
			return;
		}
				
		this._size -= 1;
	}

	this.contains = function (value) {
		if (this.root === null) {
			return false;
		} else {
			return containsR(this.root, value);
		}
	}
	
	this.size = function () {
		return this._size;
	}

	this.isEmpty = function() {
		return (this.root === null);
	}

	// private methods
	var insertR = function (curNode, newNode) {
		if (curNode.data > newNode.data) {
			if (curNode.left === null) {
				curNode.left = newNode;
			} else {
				insertR(curNode.left, newNode);
			}
		} else {
			if (curNode.right === null) {
				curNode.right = newNode;
			} else {
				insertR(curNode.right, newNode);
			}
		}
	}
	
	var containsR = function (node, value) {
		if (node === null) {
			return false;
		} else if (node.data === value) {
			return true;
		} else if (node.data > value) {
			return containsR(node.left, value);
		} else {
			return containsR(node.right, value);	
		}
	}
}
