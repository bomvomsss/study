//로컬스토리지 설정
const getAllMemoData = () => {
  const memoDataString = localStorage.getItem("memoData");
  if(memoDataString){
    return JSON.parse(memoDataString);
  }else{
    return[];
  }
};

const memoData = getAllMemoData();

//로컬스토리지에 저장
const saveMemoData = (memoData) => {
  const memoDataString = JSON.stringify(memoData);
  localStorage.setItem("memoData", memoDataString);
};
//로컬스토리지에 데이터 더하고 더했다고 업데이트하기
const addMemoToStorage = (memoText) => {
  memoData.push(memoText);
  saveMemoData(memoData);
}
//로컬스토리지에서 데이터 지우고 지웠다고 업데이트하기
const removeMemoFromStorage = (memoText) => {
  const updateMemoData = memoData.filter((memo) => memo !== memoText);
  saveMemoData(updateMemoData);
};
//새로고침 해도 로컬스토리지에 있는거 계속 불러오기
const loadMemoDataOnPageLoad = () => {
  memoData.forEach((memo) => {
    new Item(memo);
  })
}
window.addEventListener("load", loadMemoDataOnPageLoad);