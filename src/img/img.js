import { storage } from "../firebase/firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

// récupérer liste "imagesvignettes/"
export const getImgVignettesList = async () => {
  const imgListRef = ref(storage, "imagesvignettes/");
  const imgList = [];

  const res = await listAll(imgListRef);
  for (const itemRef of res.items) {
    const url = await getDownloadURL(itemRef);
    imgList.push(url);
  }

  return imgList;
};

// uploader dans "imagesvignettes/"
export const uploadImgVignette = async (imageUpload) => {
  if (!imageUpload) return;

  const imgRef = ref(storage, `imagesvignettes/${imageUpload.name + v4()}`);
  await uploadBytes(imgRef, imageUpload);
  const url = await getDownloadURL(imgRef);

  return url;
};

// recuperer liste "images/"
export const getImgPrincipaleList = async () => {
  const imgListRef = ref(storage, "images/");
  const imgList = [];

  const res = await listAll(imgListRef);
  for (const itemRef of res.items) {
    const url = await getDownloadURL(itemRef);
    imgList.push(url);
  }

  return imgList;
};

// uploader dans"images/"
export const uploadImgPrincipale = async (imageUpload) => {
  if (!imageUpload) return;

  const imgRef = ref(storage, `images/${imageUpload.name + v4()}`);
  await uploadBytes(imgRef, imageUpload);
  const url = await getDownloadURL(imgRef);

  return url;
};
