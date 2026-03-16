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

test("876. Middle of the Linked List", () => {
  const l1 = new LinkedList([1, 2, 3, 4, 5]);
  const l2 = new LinkedList([3, 4, 5]);
  expect(solution(l1)).toEqual(l2);

  const l4 = null;
  expect(solution(l4)).toEqual(l4);

  const l5 = new LinkedList([1, 2, 3, 4, 5, 6]);
  const l6 = new LinkedList([4, 5, 6]);
  expect(solution(l5)).toEqual(l6);

  const l7 = new LinkedList([4]);
  expect(solution(l7)).toEqual(l7);

  const l8 = new LinkedList([1, 2]);
  const l9 = new LinkedList([2]);
  expect(solution(l8)).toEqual(l9);
});
