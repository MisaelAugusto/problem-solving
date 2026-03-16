/*
  Given the head of a linked list, return the node where the cycle begins. If
  there is no cycle, return null.

  There is a cycle in a linked list if there is some node in the list that can
  be reached again by continuously following the next pointer. Internally, pos
  is used to denote the index of the node that tail's next pointer is connected
  to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as
  a parameter.

  Do not modify the linked list.

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

// const detectCycle = (head) => {
//   const visitedNodes = [];

//   let currentNode = head;
//   while (currentNode && !visitedNodes.includes(currentNode)) {
//     visitedNodes.push(currentNode);
//     currentNode = currentNode.next;
//   }

//   return currentNode;
// };

// const detectCycle = (head) => {
//   const visitedNodes = new Set();

//   let currentNode = head;
//   while (currentNode && !visitedNodes.has(currentNode)) {
//     visitedNodes.add(currentNode);
//     currentNode = currentNode.next;
//   }

//   return currentNode;
// }

const detectCycle = (head) => {
  let slow = head, fast = head;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      let temp = head;

      while (slow !== temp) {
        temp = temp.next;
        slow = slow.next;
      }

      return slow;
    }
  }

  return null;
};

module.exports = detectCycle;
