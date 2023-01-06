const winner3X3 = (board) => {
  if (board[0] === board[1] && board[0] === board[2] && board[0] !== "empty")
    return `${board[0]} is Winner`;
  else if (
    board[3] === board[4] &&
    board[3] === board[5] &&
    board[3] !== "empty"
  )
    return `${board[3]} is Winner`;
  else if (
    board[6] === board[7] &&
    board[6] === board[8] &&
    board[6] !== "empty"
  )
    return `${board[6]} is Winner`;
  else if (
    board[0] === board[3] &&
    board[0] === board[6] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[1] === board[4] &&
    board[1] === board[7] &&
    board[1] !== "empty"
  )
    return `${board[1]} is Winner`;
  else if (
    board[2] === board[5] &&
    board[2] === board[8] &&
    board[2] !== "empty"
  )
    return `${board[2]} is Winner`;
  else if (
    board[0] === board[4] &&
    board[0] === board[8] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[2] === board[4] &&
    board[2] === board[6] &&
    board[2] !== "empty"
  )
    return `${board[2]} is Winner`;
  else if (
    board[0] !== "empty" &&
    board[1] !== "empty" &&
    board[2] !== "empty" &&
    board[3] !== "empty" &&
    board[4] !== "empty" &&
    board[5] !== "empty" &&
    board[6] !== "empty" &&
    board[7] !== "empty" &&
    board[8] !== "empty"
  )
    return "Its Draw";
  else return "";
};
const winner4X4 = (board) => {
  if (
    board[0] === board[1] &&
    board[0] === board[2] &&
    board[0] === board[3] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[4] === board[5] &&
    board[4] === board[6] &&
    board[4] === board[7] &&
    board[4] !== "empty"
  )
    return `${board[4]} is Winner`;
  else if (
    board[8] === board[9] &&
    board[8] === board[10] &&
    board[8] === board[11] &&
    board[8] !== "empty"
  )
    return `${board[8]} is Winner`;
  else if (
    board[12] === board[13] &&
    board[12] === board[14] &&
    board[12] === board[15] &&
    board[12] !== "empty"
  )
    return `${board[12]} is Winner`;
  else if (
    board[0] === board[4] &&
    board[0] === board[8] &&
    board[0] === board[12] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[1] === board[5] &&
    board[1] === board[9] &&
    board[1] === board[13] &&
    board[1] !== "empty"
  )
    return `${board[1]} is Winner`;
  else if (
    board[2] === board[6] &&
    board[2] === board[10] &&
    board[2] === board[14] &&
    board[2] !== "empty"
  )
    return `${board[2]} is Winner`;
  else if (
    board[3] === board[7] &&
    board[3] === board[11] &&
    board[3] === board[14] &&
    board[3] !== "empty"
  )
    return `${board[3]} is Winner`;
  else if (
    board[0] === board[5] &&
    board[0] === board[10] &&
    board[0] === board[15] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[3] === board[6] &&
    board[3] === board[9] &&
    board[3] === board[12] &&
    board[3] !== "empty"
  )
    return `${board[3]} is Winner`;
  else if (
    board[0] !== "empty" &&
    board[1] !== "empty" &&
    board[2] !== "empty" &&
    board[3] !== "empty" &&
    board[4] !== "empty" &&
    board[5] !== "empty" &&
    board[6] !== "empty" &&
    board[7] !== "empty" &&
    board[8] !== "empty" &&
    board[9] !== "empty" &&
    board[10] !== "empty" &&
    board[11] !== "empty" &&
    board[12] !== "empty" &&
    board[13] !== "empty" &&
    board[14] !== "empty" &&
    board[15] !== "empty"
  )
    return "Its Draw";
  else return "";
};
const winner5X5 = (board) => {
  if (
    board[0] === board[1] &&
    board[0] === board[2] &&
    board[0] === board[3] &&
    board[0] === board[4] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[5] === board[6] &&
    board[5] === board[7] &&
    board[5] === board[8] &&
    board[5] === board[9] &&
    board[5] !== "empty"
  )
    return `${board[5]} is Winner`;
  else if (
    board[10] === board[11] &&
    board[10] === board[12] &&
    board[10] === board[13] &&
    board[10] === board[14] &&
    board[10] !== "empty"
  )
    return `${board[10]} is Winner`;
  else if (
    board[15] === board[16] &&
    board[15] === board[17] &&
    board[15] === board[18] &&
    board[15] === board[19] &&
    board[15] !== "empty"
  )
    return `${board[15]} is Winner`;
  else if (
    board[20] === board[21] &&
    board[20] === board[22] &&
    board[20] === board[23] &&
    board[20] === board[24] &&
    board[20] !== "empty"
  )
    return `${board[20]} is Winner`;
  else if (
    board[0] === board[5] &&
    board[0] === board[10] &&
    board[0] === board[15] &&
    board[0] === board[20] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[1] === board[6] &&
    board[1] === board[11] &&
    board[1] === board[16] &&
    board[1] === board[21] &&
    board[1] !== "empty"
  )
    return `${board[1]} is Winner`;
  else if (
    board[2] === board[7] &&
    board[2] === board[12] &&
    board[2] === board[17] &&
    board[2] === board[22] &&
    board[2] !== "empty"
  )
    return `${board[2]} is Winner`;
  else if (
    board[3] === board[8] &&
    board[3] === board[13] &&
    board[3] === board[18] &&
    board[3] === board[23] &&
    board[3] !== "empty"
  )
    return `${board[3]} is Winner`;
  else if (
    board[4] === board[9] &&
    board[4] === board[14] &&
    board[4] === board[19] &&
    board[4] === board[24] &&
    board[4] !== "empty"
  )
    return `${board[4]} is Winner`;
  else if (
    board[0] === board[6] &&
    board[0] === board[12] &&
    board[0] === board[18] &&
    board[0] === board[24] &&
    board[0] !== "empty"
  )
    return `${board[0]} is Winner`;
  else if (
    board[4] === board[8] &&
    board[4] === board[12] &&
    board[4] === board[16] &&
    board[4] === board[20] &&
    board[4] !== "empty"
  )
    return `${board[4]} is Winner`;
  if (
    board[0] !== "empty" &&
    board[1] !== "empty" &&
    board[2] !== "empty" &&
    board[3] !== "empty" &&
    board[4] !== "empty" &&
    board[5] !== "empty" &&
    board[6] !== "empty" &&
    board[7] !== "empty" &&
    board[8] !== "empty" &&
    board[9] !== "empty" &&
    board[10] !== "empty" &&
    board[11] !== "empty" &&
    board[12] !== "empty" &&
    board[13] !== "empty" &&
    board[14] !== "empty" &&
    board[15] !== "empty" &&
    board[16] !== "empty" &&
    board[17] !== "empty" &&
    board[18] !== "empty" &&
    board[19] !== "empty" &&
    board[20] !== "empty" &&
    board[21] !== "empty" &&
    board[22] !== "empty" &&
    board[23] !== "empty" &&
    board[24] !== "empty"
  )
    return "Its Draw";
  else return "";
};
export { winner3X3, winner4X4, winner5X5 };
