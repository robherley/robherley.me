/* eslint-disable no-dupe-key */
export const headerStyle = (name) => {
  let theme = null;
  switch(name){
    case 'dawn':
      theme = ['#3B4371','#F3904F']
      break;
    case 'vice':
      theme = ['#3494E6','#EC6EAD']
      break;
    case 'dark-wine':
      theme = ['#3a6186','#89253e']
      break;
    default:
      theme = ['#191654','#43C6AC']
  }
  return {
      height: '50px',
      color: 'white',
      boxShadow: '0 6px 12px 0 rgba(0,0,0,0.10)',
      background: theme[0],
      background: `-webkit-linear-gradient(to right, ${theme[0]}, ${theme[1]})`,
      background: `linear-gradient(to right, ${theme[0]}, ${theme[1]})`
  }
};
