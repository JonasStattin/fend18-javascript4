function localFunction1 (param) { // Function
  let returnVal = false; // Statement
  if (param === 'a') { // Statement and branch
    returnVal = true; // Statement
  }
  
  return returnVal; // Statement
}


function localFunction2 (param) { // Function
  if (param === 'a') { // Statement and branch
    return true; // Statement
  } else { // Branch
    return false; // Statement
  }
}

export function functionWithBranches(param) { // Function
  let returnValue = false; // Statement
  switch(param) { // Statement
    case 'a': // Branch
      returnValue = localFunction1(param); // Statement
      break;
    case 'b': // Branch
      returnValue = localFunction2(param); // Statement
    default: // Branch, even if empty
      break;
  }
  return returnValue; // Statement
}
