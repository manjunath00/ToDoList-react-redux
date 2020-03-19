/* eslint-disable */
// const todo = [
//   {
//     userId: 1,
//     id: 1,
//     title: "delectus aut autem",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 2,
//     title: "quis ut nam facilis et officia qui",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 3,
//     title: "fugiat veniam minus",
//     completed: false
//   },
//   {
//     userId: 1,
//     id: 4,
//     title: "et porro tempora",
//     completed: true
//   },
// ]


const reducer = (state = [], action) => {
  switch (action.type) {
    case 'DELETE_A_TODO':
      return state.filter((todo) => todo.id !== action.payload);
      break;

    case 'ADD_A_TODO':
      return [...state, action.payload];
      break;

    case 'TOGGLE_A_TODO':
      const todos = state.map((todo) => {
        if (todo.id === action.payload) {
          const completed = { completed: !todo.completed };
          return { ...todo, ...completed };
        }
        return todo;
      });
      todos.sort((a, b) => a.completed - b.completed);
      return todos;
      break;
  }

  return state;
}
export default reducer;
