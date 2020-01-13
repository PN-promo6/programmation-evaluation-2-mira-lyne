let fishList = [
  ["Aulopiformes", "Synodontidae", "Poisson lézard", "Synodus saurus"]
  ["Aulopiformes", "Anguilliformes", "Anguille", "Anguilla anguilla"]
  ["Aulopiformes", "Congridae", "Congre", "Conger conger"]
  ["Atheriniformes", "Atherinidae", "Joël", "Atherina boyeri"]
]
displayTab(fishList)



function displayTab(array) {
  let i = 0
  let currentElement
  let table = document.createElement(table)
  document.body.appendChild(table)
  let thead = document.createElement(thead)
  table.appendChild(thead);

  while (i < array.length) {
    currentElement = array[i]
    
    i++

  }

}
