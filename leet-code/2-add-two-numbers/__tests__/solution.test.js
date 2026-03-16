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

test("2. Add Two Numbers", () => {
  const l1 = new LinkedList([2, 4, 3]);
  const l2 = new LinkedList([5, 6, 4]);
  const l3 = new LinkedList([7, 0, 8]);

  expect(solution(l1, l2)).toEqual(l3);

  const l4 = new LinkedList([0]);
  expect(solution(l4, l4)).toEqual(l4);

  const l5 = new LinkedList([9, 9, 9, 9, 9, 9, 9]);
  const l6 = new LinkedList([9, 9, 9, 9]);
  const l7 = new LinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
  expect(solution(l5, l6)).toEqual(l7);

  const l8 = new LinkedList([1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
  const l9 = new LinkedList([5,6,4]);
  const l10 = new LinkedList([6,6,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);
  expect(solution(l8, l9)).toEqual(l10);
});
