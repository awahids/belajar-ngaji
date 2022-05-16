const KEY_TES = "tes";
const KEY_BOOKMARK = "bookmark";

function checkForStorage() {
  return typeof (Storage) !== "undefined";
}

const set = (data) => {
  localStorage.setItem(KEY_BOOKMARK, JSON.stringify(data));

};

const get = () => {
  if (checkForStorage) {
    return JSON.parse(localStorage.getItem(KEY_BOOKMARK)) || [];
  } else {
    return [];
  }
};


const addData = (data)=>{
  storageData = get();
  storageData.unshift(data);
  set(storageData);
};

const readData = () => {
  return get();
};

const deleteData = (i) =>{
  storageData = get();
  storageData.splice(i);
  set(storageData);
};