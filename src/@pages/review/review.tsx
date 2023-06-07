import { useContext, useState } from "react";
import * as S from "./style";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import {ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Nav from "../../@components/common/nav/nav";
import { AuthContext } from "../../context/authContext";
import { storageService } from "../../fbase";

export default function Review() {
  const userInfo = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);


  const handleTitleChange = (e:any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e:any) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e:any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if (!userInfo) {
      alert("로그인 후에 리뷰를 작성할 수 있습니다.");
      return;
    }

    // Firebase Firestore에 데이터 저장
    const db = getFirestore();
    const reviewRef = collection(db, "reviews");

    try {
      let imageUrl: string | null = null;
       // Upload the image to Firebase Storage if an image is selected
       if (image) {
        const storageRef = ref(storageService, `review_images/${image.name}`);
        await uploadBytes(storageRef, image);

        // Get the download URL of the uploaded image
        imageUrl = await getDownloadURL(storageRef);
      }



      // Save the review data including the image URL
      await addDoc(reviewRef, {
        title: title,
        content: content,
        userId: userInfo.uid,
        imageUrl: imageUrl,
      });

      // 성공적으로 저장되었음을 알리는 메시지 출력
      alert("리뷰가 성공적으로 저장되었습니다.");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("리뷰 저장 중 오류가 발생했습니다.");
    }

    // 제출 후 입력값 초기화
    setTitle("");
    setContent("");
    setImage(null);
  };

  return (
    <>
      <Nav />
      {userInfo ? (
        <S.ReviewHeaderWrapper>
          <S.ReviewHeader>후기 작성</S.ReviewHeader>
          <S.ReviewForm onSubmit={handleSubmit}>
            <S.ReviewInput
              type="text"
              placeholder="제목"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              placeholder="게시글 내용"
              value={content}
              onChange={handleContentChange}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
            />
            <S.ReviewButton type="submit">게시하기</S.ReviewButton>
          </S.ReviewForm>
        </S.ReviewHeaderWrapper>
      ) : (
        <>
          <S.ReviewHeader>로그인 후에 후기를 작성할 수 있습니다.</S.ReviewHeader>
        </>
      )}
    </>
  );
}
