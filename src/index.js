module.exports = function solveSudoku(matrix) {
  // your solution

  /*// проверка на наличие пустых ячеек
  for (let i = 0; i < 9; i++)
  {
    for (let j = 0; j < 9; j++)
    {
      if (matrix[i][j] === 0)
      {
        row = i;
        col = j;
      }
      else return matrix;
    }
  }*/

  /*for (var tempR = 0; tempR < 9; tempR++)
  {
    for (var tempC = 0; tempC < 9; tempC++)
    {
      if (matrix[tempR][tempC] === 0)
      {
        for (var num = 1; num < 10; num++)
        {
          if (checkAll(matrix, tempR, tempC, num))
          {
            matrix[tempR][tempC] == num;

            if (solveSudoku(matrix))
              return matrix;
            else matrix[tempR][tempC] == 0;
          }
        }
        
      }
    }
  }*/

  for (let tempR = 0; tempR < 9; tempR++)
  {
    for (let tempC = 0; tempC < 9; tempC++)
    {
      if (matrix[tempR][tempC] === 0)
      {
        for (let num = 1; num < 10; num++)
        {
          if (checkAll(matrix, tempR, tempC, num))
          {
            matrix[tempR][tempC] = num;

            if (solveSudoku(matrix))
              return matrix;
            else matrix[tempR][tempC] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;

  function checkRow(matrix, row, val)
  {
    for (let c = 0; c < 9; c++)
    {
      if (matrix[row][c] === val)
        return false;   // если есть совпадения
    }
     
    return true; // если нет совпадений
  }

  function checkCol(matrix, col, val)
  {
    for (let r = 0; r < 9; r++)
    {
      if (matrix[r][col] === val)
        return false;   // есть совпадения
    }
    return true; // нет совпадений
  }

  function checkCurrSquare(matrix, row, col, val)
  {
    //начало текущего квадрата
    currR = Math.floor(row/3)*3;
    currC = Math.floor(col/3)*3;

    for (let r = 0; r < 3; r++)
    {
      for (let c = 0; c < 3; c++)
      {
        if (matrix[currR + r][currC + c] === val)
          return false;   // есть совпадения
      }
    }
    return true; // нет совпадений
  }

  function checkAll(matrix, row, col, val)
  {
    if (checkRow(matrix, row, val) && checkCol(matrix, col, val) && checkCurrSquare(matrix, row, col, val))
      return true;
    
    return false;
  }
  
}
