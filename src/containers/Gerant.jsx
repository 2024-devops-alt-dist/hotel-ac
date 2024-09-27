import React from "react";
import { useState, useEffect } from "react";
import { storage } from "../firebase/firebase-config";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

function Gerant() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imgList, setImgList] = useState([]);
  const imgListRef = ref(storage, "images/");
  const uploadImg = () => {
    if (!imageUpload) return;
    const imgRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imgRef, imageUpload).then((snapshot) => {
      console.log("HEY HEY HEY LA PHOTO A ETE UPLOADEE");
      getDownloadURL(snapshot.ref).then((url) => {
        setImgList((prev) => [...prev, url]);
      });
    });
  };

  useEffect(() => {
    console.log(imageUpload);
    listAll(imgListRef).then((res) => {
      console.log(res);
      res.items.forEach((itemRef) => {
        getDownloadURL(itemRef).then((url) => {
          setImgList((prev) => [...prev, url]);
        });
      });
    });
  }, []);

  return (
    <div className="gerantContainer">
      <h1>Page du Gérant</h1>
      <div className="uploadImg">
        <input
          type="file"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
          id="img"
          name="img"
          accept="image/*"
        />
        <label for="img"></label>
        <button onClick={uploadImg}>Envoyer</button>
      </div>

      <div className="uploadForm">
        {/* <form>
          <label for="name">Nom de l'établissement</label>
          <input type="text" id="name" name="name" />
          <label for="desc">Description</label>
          <textarea id="desc" name="desc"></textarea>
          <label for="price">Prix</label>
          <input type="number" id="price" name="price" />
          <label for="stars">Nombre d'étoiles</label>
          <input type="number" id="stars" name="stars" />
          <label for="address">Adresse</label>
          <input type="text" id="address" name="address" />
          <label for="ville">Ville</label>
          <input type="text" id="ville" name="ville" />
          <label for="pays">Pays</label>
          <input type="text" id="pays" name="pays" />
          <button type="submit">Envoyer</button>
        </form> */}
      </div>
      <div className="imgList">
        {/* {imgList.map((img, index) => (
          <img src={img} key={index} alt="hotel" />
        ))} */}
        {imgList.map((url) => {
          return <img src={url} alt="hotel" />;
        })}
      </div>
    </div>
  );
}

export default Gerant;
