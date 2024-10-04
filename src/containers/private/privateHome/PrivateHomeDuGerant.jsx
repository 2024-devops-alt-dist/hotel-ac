import React, { useState, useEffect } from "react";
import { getImgPrincipaleList, uploadImgPrincipale } from "../../../img/img";
import { getImgVignettesList, uploadImgVignette } from "../../../img/img";
import "../../../style/PrivateGerantStyle.css";

function PrivateHomeDuGerant() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imgList, setImgList] = useState([]);

  const [imageVignettesUpload, setImageVignettesUpload] = useState(null);
  const [imgVignettesList, setImgVignettesList] = useState([]);

  // USEEFFECT POUR IMG PRINCIPALE
  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImgPrincipaleList();
      setImgList(images);
    };

    fetchImages();
  }, []);

  // USEEFFECT POUR IMG VIGNETTES
  useEffect(() => {
    const fetchImages = async () => {
      const images = await getImgVignettesList();
      setImgVignettesList(images);
    };

    fetchImages();
  }, []);

  // UPLOAD POUR IMG PRINCIPALE
  const handleUpload = async () => {
    if (imageUpload) {
      const uploadedUrl = await uploadImgPrincipale(imageUpload);
      setImgList((prev) => [...prev, uploadedUrl]);
    }
  };

  // UPLOAD POUR IMG VIGNETTES
  const handleVignettesUpload = async () => {
    if (imageVignettesUpload) {
      const uploadedUrl = await uploadImgVignette(imageVignettesUpload);
      setImgVignettesList((prev) => [...prev, uploadedUrl]);
    }
  };

  return (
    <div className="privateGerantContainer">
      <h1>Page du Gérant</h1>
      <div className="uploadImg">
        <input
          type="file"
          onChange={(e) => setImageUpload(e.target.files[0])}
          accept="image/*"
        />
        <button onClick={handleUpload}>Envoyer l'image principale</button>
      </div>
      <div className="imgList">
        {imgVignettesList.map((url, index) => (
          <img src={url} key={index} alt="hotel" />
        ))}
      </div>

      <div className="uploadImgVignette">
        <input
          type="file"
          onChange={(e) => setImageVignettesUpload(e.target.files[0])}
          accept="image/*"
        />
        <button onClick={handleVignettesUpload}>Envoyer la vignette</button>
      </div>
      <div className="imgList">
        {imgList.map((url, index) => (
          <img src={url} key={index} alt="hotel" />
        ))}
      </div>
    </div>
  );
}

export default PrivateHomeDuGerant;
