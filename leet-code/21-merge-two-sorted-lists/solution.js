/*
  You are given the heads of two sorted linked lists list1 and list2.

  Merge the two lists in a one sorted list. The list should be made by splicing
  together the nodes of the first two lists.

  Return the head of the merged linked list.

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

// const mergeTwoLists = (list1, list2) => {
//   if (!list1 && !list2) return null;

//   let currentValue = 0;
//   if (!list1 && list2) {
//     currentValue = list2.val;
//     list2 = list2.next;
//   } else if (list1 && !list2) {
//     currentValue = list1.val;
//     list1 = list1.next;
//   } else {
//     currentValue = list1.val <= list2.val ? list1.val : list2.val;
//     if (list1.val <= list2.val) {
//       list1 = list1.next;
//     } else {
//       list2 = list2.next;
//     }
//   }

//   return new ListNode(currentValue, mergeTwoLists(list1, list2));
// };

const mergeTwoLists = (list1, list2) => {
  if (!list1 && !list2) return null;

  if (!(list1 && list2)) return list1 || list2;

  const currentValue = list1.val <= list2.val ? list1.val : list2.val;

  if (list1.val <= list2.val)
    list1 = list1.next;
  else list2 = list2.next;

  return new ListNode(currentValue, mergeTwoLists(list1, list2));
};

module.exports = mergeTwoLists;
