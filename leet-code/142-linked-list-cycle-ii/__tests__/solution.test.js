const solution = require('../solution');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};

function LinkedList(list) {
  let linkedList = new ListNode(list[0]);

  let currentNode = linkedList;

  for (let i = 1; i < list.length; i++) {
    if (list[i]?.val) {
      currentNode.next = list[i];
    } else {
      currentNode.next = new ListNode(list[i]);
    }

    currentNode = currentNode.next;
  };

  return linkedList;
}
// FIX THIS
test("142. Linked List Cycle II", () => {
  const l1 = new LinkedList([2, 0, -4]);
  const l2 = new LinkedList([3, 2, 0, -4, l1]);
  expect(solution(l2)).toEqual(l1);

  const l4 = new LinkedList([1, 2]);
  let l5 = l4;
  l5.next.next = l4;
  expect(solution(l4)).toEqual(l5);

  const l6 = new LinkedList([1]);
  expect(solution(l6)).toEqual(null);

  const l7 = null;
  expect(solution(l7)).toEqual(null);
});
