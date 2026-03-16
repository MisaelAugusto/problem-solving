/*
  Given the head of a singly linked list, return the middle node of the linked
  list.

  If there are two middle nodes, return the second middle node.

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

// const middleNode = (head) => {
//   let temp = head, size = 0;
//   while (temp) {
//     temp = temp.next;
//     size++;
//   }

//   let middleIndex = Math.floor(size / 2);

//   let middleNode = head;
//   while (middleIndex > 0) {
//     middleNode = middleNode.next;
//     middleIndex--;
//   }

//   return middleNode;
// };

const middleNode = (head) => {
  let middle = head, end = head;

  while (end && end.next) {
    middle = middle.next;
    end = end.next.next;
  }

  return middle;
};

module.exports = middleNode;
