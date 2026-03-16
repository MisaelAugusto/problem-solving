/*
  Given the head of a singly linked list, reverse the list, and return the
  reversed list.

  Definition for singly-linked list:

  function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
*/

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};

const reverseList = (head) => {
  let previousNode = null;
  while (head) {
    const tempNode = head.next;
    head.next = previousNode;
    previousNode = head;
    head = tempNode;
  }

  return previousNode;
};

module.exports = reverseList;
