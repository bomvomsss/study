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
    Input.value = memo || localStorage.getItem("memoData") || "";
    Input.disabled = true;

    const DeleteButton = document.createElement("button");
    
    DeleteButton.innerText = "삭제";
    DeleteButton.addEventListener("click", () => {
      memoList.removeChild(div); // memoList.remove(div)로 하면 한 번 삭제 버튼 누른 뒤에 메모추가가 안됨
    });
    DeleteButton.classList.add("delete-button");
    
    const CorrectButton = document.createElement("button");
    CorrectButton.innerText = "수정";
    CorrectButton.addEventListener("click", () => {
      if(CorrectButton.disabled){
        Input.disabled = false;
        CorrectButton.innerText = "완료";
      }else{
        Input.disabled = true;
        CorrectButton.innerText = "수정";                                                            
      }
      
    })

    div.append(Input, DeleteButton, CorrectButton);
    memoList.appendChild(div); // memoList.append(div);도 가능

  }
}

const checkInput = () => {
  const input = document.getElementById("memo-text");
  if (input.value !== "") {
    //로컬스토리지에 저장
    localStorage.setItem("memoData", input.value);
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