/*
  You are given two non-empty linked lists representing two non-negative
  integers. The digits are stored in reverse order, and each of their nodes
  contains a single digit. Add the two numbers and return the sum as a linked
  list.

  You may assume the two numbers do not contain any leading zero, except the
  number 0 itself.

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

// const addTwoNumbers = (l1, l2) => {
//   let nodeL1 = l1;
//   let reversedL1InString = '';

//   while (nodeL1 !== null) {
//     reversedL1InString = String(nodeL1.val) + reversedL1InString;
//     nodeL1 = nodeL1.next;
//   }

//   let nodeL2 = l2;
//   let reversedL2InString = '';

//   while (nodeL2 !== null) {
//     reversedL2InString = String(nodeL2.val) + reversedL2InString;
//     nodeL2 = nodeL2.next;
//   }

//   const sumInString = String(Number(reversedL1InString.padEnd('0', reversedL2InString.length))
//     + Number(reversedL2InString.padEnd('0', reversedL1InString.length)));

//   let result = new ListNode(Number(sumInString[sumInString.length - 1]));

//   let currentNode = result;

//   for (let i = sumInString.length - 2; i > -1; i--) {
//     currentNode.next = new ListNode(Number(sumInString[i]));

//     currentNode = currentNode.next;
//   };

//   return result;
// };

const addTwoNumbers = (l1, l2) => {
  const linkedList = new ListNode();

  let carryIn = 0;
  let currentNode = linkedList;

  while (l1 || l2) {
    const nodesSum = (l1?.val || 0) + (l2?.val || 0) + carryIn;

    currentNode.val = nodesSum % 10;
    carryIn = nodesSum >= 10 ? 1 : 0;

    l1 = l1?.next;
    l2 = l2?.next;

    if (l1 || l2) {
      currentNode.next = new ListNode();
      currentNode = currentNode.next;
    }
  }

  if (carryIn) currentNode.next = new ListNode(carryIn);

  return linkedList;
};

module.exports = addTwoNumbers;
