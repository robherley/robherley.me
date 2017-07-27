export const currentWidth = (state = window.innerWidth, action) => {
  switch (action.type) {
    case 'UPDATE_WIDTH':
      return action.payload;
    default:
      return state;
  }
};

export default currentWidth;
