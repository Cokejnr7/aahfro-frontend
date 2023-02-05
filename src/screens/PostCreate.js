import { useRef, useState } from "react";

const PostCreate = () => {
  const [rotate, setRotate] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const [data, setData] = useState({
    title: "",
    author: "",
    contributors: "",
    main_image: "",
    sections: [],
    tags: [],
  });

  const ref = useRef(null);

  const handleRotate = () => {
    setRotate(!rotate);
  };

  const handleSubmit = (e) => {
    const data = new FormData();
  };

  // const handleImageUpload = () => {
  //   file = document.createElement("input");
  // };

  const handleImageChange = (e) => {
    const newData = { ...data };
    newData["main_image"] = e.target.files[0];
    setData(newData);
    const src = URL.createObjectURL(newData.main_image);
    const imagePlaceholder = document.querySelector(".image-placeholder");
    const checkImage = document.querySelector(".main-image");

    if (checkImage) {
      checkImage.src = src;
    } else {
      const image = document.createElement("img");
      image.src = src;
      image.classList.add("main-image");
      setUploaded(!uploaded);
      ref.current.prepend(image);
    }

    // console.log(newData);
  };

  const handleTitleChange = (e) => {
    const newData = { ...data };
    newData[e.target.name] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <main className="post-create" ref={ref}>
      {/* <div> */}
      <label
        className={`image-placeholder ${uploaded ? "hidden" : "visible"}`}
        htmlFor="add-image"
        ref={ref}
      >
        <i className="fa fa-image"></i>
      </label>
      <span
        className={`add-more${rotate ? "-rotate" : ""}`}
        onClick={handleRotate}
      ></span>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={data.title}
        onChange={(e) => handleTitleChange(e)}
      />
      <input
        type="text"
        name="author"
        onChange={(e) => handleTitleChange(e)}
        placeholder="author"
      />
      <input
        type="text"
        name="contributors"
        onChange={(e) => handleTitleChange(e)}
        placeholder="Contributors"
      />

      <input
        className="hidden"
        id="add-image"
        type="file"
        placeholder="Title"
        onChange={(e) => handleImageChange(e)}
      />
      {/* </div> */}
    </main>
  );
};

export default PostCreate;
