export default function addAction(todo) {
  return {
    type: 'ADD_A_TODO',
    payload: {
      text: todo,
      completed: false
    },
  };
}
