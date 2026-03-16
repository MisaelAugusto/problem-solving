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

test("206. Reverse Linked List", () => {
  const l1 = new LinkedList([1, 2]);
  const l2 = new LinkedList([2, 1]);

  expect(solution(l1)).toEqual(l2);

  const l3 = null;
  expect(solution(l3)).toEqual(l3);

  const l4 = new LinkedList([1, 5, 3, 2, 4, 4, 0, -9]);
  const l5 = new LinkedList([-9, 0, 4, 4, 2, 3, 5, 1]);
  expect(solution(l4)).toEqual(l5);
});
