const solution = require('../solution');

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
};

function LinkedList(list) {
  let linkedList = new ListNode(list[0]);

  let currentNode = linkedList;

  for (let i = 1; i < list.length; i++) {
    currentNode.next = new ListNode(list[i]);

    currentNode = currentNode.next;
  };

  return linkedList;
}

test("21. Merge Two Sorted Lists", () => {
  const l1 = new LinkedList([1, 2, 4]);
  const l2 = new LinkedList([1, 3, 4]);
  const l3 = new LinkedList([1, 1, 2, 3, 4, 4]);

  expect(solution(l1, l2)).toEqual(l3);

  const l4 = null;
  expect(solution(l4, l4)).toEqual(l4);

  const l5 = new LinkedList([0]);
  expect(solution(l4, l5)).toEqual(l5);
});
