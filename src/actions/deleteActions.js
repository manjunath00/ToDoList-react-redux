export default function deleteAction(id) {
  return {
    type: 'DELETE_A_TODO',
    payload: id,
  };
}
