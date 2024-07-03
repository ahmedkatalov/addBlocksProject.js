const buttonAdd = document.getElementById("button");
const container = document.getElementById("container");
const colors = ["#000000","#1E90FF", "SlateGray","#0000CD", "#2F4F4F", "#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#0000CD", "#DA70D6", "#4B0082", "#8B4513", "#00FF00", "#00FA9A", "#008080",];
const mainCharacter = document.getElementById("main-character-container")


const removeColors = document.createElement("button")
removeColors.classList.add("remove-colors")
removeColors.textContent = "Remove colors"
mainCharacter.prepend(removeColors)



// Блоки по умолчанию
function autoBlocks (count) {
  for(let i = 0; i < count; i++){
    const block = document.createElement("div");
    block.classList.add("block");
    container.appendChild(block);
    block.addEventListener("mouseover", () => {
      const randomIndex = Math.floor(Math.random() * colors.length)
      const randomColor = colors[randomIndex]
    
      block.style.backgroundColor = randomColor;

      //Удаляет все цвета и задает цвет по умолчанию
      removeColors.addEventListener("click", () => {
        block.style.backgroundColor = "#fff";
      })
    })
  }
}
autoBlocks(16)







buttonAdd.addEventListener("click", (e) => {
  const getDate = prompt("Введите количество колонок:");
  // Проверка ввода
  if (isNaN(getDate) || parseInt(getDate) <= 0 ) {
    alert("Некорректный ввод. Введите целое положительное число.");
    return;
  } else if (parseInt(getDate) >= 100){
    alert("Максикмальное значение должно быть ниже 100")
  return;
  }
  const columnCount = parseInt(getDate);
  container.style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
  // Создаем блоки
  addBlock(columnCount * columnCount ); // Передаем количество колонок в addBlock
});
    //создаем блоки столько сколько было указано в промпте, а уже с верху умножаем на самого себя это количество 
function addBlock(count) {
    container.innerHTML = ""
  for (let i = 0; i < count; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    container.appendChild(block);
    //создаеь рандомные цвета при ховере
    block.addEventListener("mouseover", () => {
      const randomIndex = Math.floor(Math.random() * colors.length)
      const randomColor = colors[randomIndex]
    
      block.style.backgroundColor = randomColor;
    })
  }
}