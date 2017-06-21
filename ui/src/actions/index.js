export const ADD_WINDOW = 'ADD_WINDOW';
export const DELETE_WINDOW = 'DELETE_WINDOW';
export const CHANGE_LAYOUT = 'CHANGE_LAYOUT';

export function addWindow(newWindow) {
  return {
    type: ADD_WINDOW,
    payload: newWindow
  };
}

export function deleteWindow(windowID) {
  return {
    type: DELETE_WINDOW,
    payload: windowID
  };
}

export function changeLayout(newLayout) {
  return {
    type: CHANGE_LAYOUT,
    payload: newLayout
  };
}
