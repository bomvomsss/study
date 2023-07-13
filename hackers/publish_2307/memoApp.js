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
    
    //수정버튼
    const ChangeButton = document.createElement("button");
    ChangeButton.innerText = "수정";
    ChangeButton.addEventListener("click", () => {
      if(Input.disabled){
        Input.disabled = false;
        ChangeButton.innerText = "완료";
      }else{
        Input.disabled = true;
        ChangeButton.innerText = "수정";
      }
    });

    //라벨 추가
    const AddLabelButton = document.createElement("button");
    AddLabelButton.innerText = "라벨 추가";
    AddLabelButton.addEventListener("click", () => {
      console.log('click');
      const AddLabelText = document.createElement("input");
      
      const SubmitLabelText = document.createElement("button");
      SubmitLabelText.innerText = "확인";

      SubmitLabelText.addEventListener("click", () => {
        //라벨입력했을때
        
      })

      div.append(AddLabelText, SubmitLabelText);
      // AddLabelText.disabled = false;
      // AddLabelText.setAttribute("placeholder","라벨을 입력하세요");
    })

    div.append(Input, DeleteButton, ChangeButton, AddLabelButton);
    memoList.appendChild(div); // memoList.append(div);도 가능
  }
};
//우선순위 속성

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