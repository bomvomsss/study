const AddmemoButton = document.getElementById("add-memo"),
  RemoveAllButton = document.getElementById("remove-all"),
  memoList = document.querySelector(".memos");

class Item {
  constructor(memoName) {
    this.newmemo(memoName);
  }

  newmemo(memo) {
    const div = document.createElement("div");
    div.classList.add("memo-wrap");
    const Input = document.createElement("input");
    Input.classList.add('memo-cont')
    Input.value = memo;
    Input.disabled = true;

    const DeleteButton = document.createElement("button");
    
    DeleteButton.innerText = "삭제";
    DeleteButton.addEventListener("click", () => {
      memoList.removeChild(div); // memoList.remove(div)로 하면 한 번 삭제 버튼 누른 뒤에 메모추가가 안됨
      saveMemos();
    });
    DeleteButton.classList.add("delete-button");
    
    //수정버튼
    const EditButton = document.createElement("button");
    EditButton.innerText = "수정";
    EditButton.addEventListener("click", () => {
      if(Input.disabled == false){
        EditButton.innerText = "수정";
        Input.disabled = true;
        saveMemos();
        return false;
      }
      EditButton.innerText = "완료";
      Input.disabled = false;
      saveMemos();
    });

    //라벨 추가
    const AddLabelButton = document.createElement("button");
    AddLabelButton.innerText = "라벨 추가";
    
    AddLabelButton.addEventListener("click", () => {
      const AddLabelText = document.createElement("input");
      AddLabelText.classList.add("label-input");
      
      const SubmitLabelText = document.createElement("button");
      SubmitLabelText.innerText = "확인";
      
      SubmitLabelText.addEventListener("click", () => {
        //라벨입력했을때
        if(AddLabelText.value !== ""){
          const Label = document.createElement("span");
          Label.classList.add("label");

          const MemoWrap = document.querySelector(".memo-wrap");

          MemoWrap.append(Label);

          AddLabelText.style.display = "none";
          SubmitLabelText.style.display = "none";

          const labelContent = AddLabelText.value;
          Label.innerText = labelContent;
        }//라벨입력
      })

      div.append(AddLabelText, SubmitLabelText);
      AddLabelText.disabled = false;
      AddLabelText.setAttribute("placeholder","라벨을 입력하세요");
    })

    div.append(Input, DeleteButton, EditButton, AddLabelButton);
    memoList.appendChild(div); // memoList.append(div);도 가능
  }
};

//우선순위 속성 필요

const checkInput = () => {
  const input = document.getElementById("memo-text");
  if (input.value !== "") {
    new Item(input.value);
    saveMemos();
  }
  input.value = "";
};

const deletememos = () => {
  while (memoList.hasChildNodes()) {
    memoList.removeChild(memoList.firstChild);
  }
  // saveMemos(); -> 'memos'라는 key값은 남아있는 상태
  localStorage.removeItem("memos"); // key와 value 모두 삭제하기
};

// local storage에 저장하기
const saveMemos = () => {
  const memoItems = Array.from(memoList.children);
  const memos = memoItems.map((item) => {
    const memo = item.querySelector("input").value;
    return memo;
  });
  localStorage.setItem("memos", JSON.stringify(memos));
};

// local storage에서 불러오기
const loadMemos = () => {
  const savedMemos = localStorage.getItem("memos");
  if (savedMemos) {
    const memos = JSON.parse(savedMemos);
    memos.forEach((memo) => {
      new Item(memo);
    });
  }
};

RemoveAllButton.addEventListener("click", deletememos);
AddmemoButton.addEventListener("click", checkInput);
// 새로고침하면 local storage에 저장된 메모리 불러오기
window.addEventListener("load", loadMemos);