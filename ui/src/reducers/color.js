export const currentColor = (state = '#47E5BC', action) => {
  switch (action.type) {
    case 'UPDATE_COLOR':
      return action.payload;
    default:
      return state;
  }
};

export default currentColor;
