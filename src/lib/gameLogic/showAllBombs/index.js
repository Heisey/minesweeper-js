// ????????????????????????????????????????????????????????????????
// ?????????????????????? Show All Bombs ??????????????????????????
// ????????????????????????????????????????????????????????????????

const showAllBombs = (board) => {
  const tempBoard = board.slice()

  return tempBoard.map(row => {
    return row.map(cell => {
      if (cell.bomb && !cell.flagged) {
        cell.clicked = true
        return cell
      }

      return cell
    })
  })
}

export default showAllBombs