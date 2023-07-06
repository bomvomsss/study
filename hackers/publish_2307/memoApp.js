const AddmemoButton = document.getElementById("add-memo"),
  RemoveAllButton = document.getElementById("remove-all"),
  memoList = document.querySelector(".memos");

class Item {
  constructor(memoName) {
    this.newmemo(memoName);
  }

  newmemo(memo) {
    const div = document.createElement("div");
    const Input = document.createElement("input");
    Input.value = memo;
    Input.disabled = true;

    const DeleteButton = document.createElement("button");
    
    DeleteButton.innerText = "삭제";
    DeleteButton.addEventListener("click", () => {
      memoList.removeChild(div); // memoList.remove(div)로 하면 한 번 삭제 버튼 누른 뒤에 메모추가가 안됨
    });
    DeleteButton.classList.add("delete-button");

    div.append(Input, DeleteButton);
    memoList.appendChild(div); // memoList.append(div); 도 가능
  }
}

const checkInput = () => {
  const input = document.getElementById("memo-text");
  if (input.value !== "") {
    new Item(input.value);
  }
  input.value = "";
};

const deletememos = () => {
  while (memoList.hasChildNodes()) {
    memoList.removeChild(memoList.firstChild);
  }
};

RemoveAllButton.addEventListener("click", deletememos);
AddmemoButton.addEventListener("click", checkInput);