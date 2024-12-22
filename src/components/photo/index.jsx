import PhotoAlbum from "./PhotoAlbum";
import PhotoSwipe from "./PhotoSwipe";
import PhotoList from "./PhotoList";

const PhotoSection = ({
  type,
  text,
  dataImg,
  modal,
  setModal,
  currentImg,
  setCurrentImg,
}) => {
  switch (type) {
    case "album":
      return (
        <PhotoAlbum
          text={text}
          dataImg={dataImg}
          modal={modal}
          setModal={setModal}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
        />
      );
      break;
    case "list":
      return (
        <PhotoList
          text={text}
          dataImg={dataImg}
          modal={modal}
          setModal={setModal}
          currentImg={currentImg}
          setCurrentImg={setCurrentImg}
        />
      );
      break;
    default:
      return <PhotoSwipe text={text} dataImg={dataImg} />;
  }
};

export { PhotoSection };
