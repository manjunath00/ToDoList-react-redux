export default function toggleAction(id) {
  return {
    type: 'TOGGLE_A_TODO',
    payload: id,
  };
}
