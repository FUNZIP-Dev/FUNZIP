import { addDoc, collection, deleteDoc, doc, getFirestore, onSnapshot, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import * as S from "./style";

import Nav from "../../@components/common/nav/nav";
import { AuthContext } from "../../context/authContext";
import { storageService } from "../../fbase";

export default function Review() {
  const userInfo = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);

  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedContent, setUpdatedContent] = useState("");

  useEffect(() => {
    const db = getFirestore();
    const reviewRef = collection(db, "reviews");

    // snapshot으로 데이터베이스의 변화를 실시간으로 감지
    const unsubscribe = onSnapshot(reviewRef, (snapshot) => {
      // 데이터베이스에서 받아온 데이터를 배열로 변환
      const reviewsData: any[] = [];
      // snapshot의 데이터를 순회하며 배열에 추가
      snapshot.forEach((doc) => {
        // doc.data() 함수를 통해 데이터를 가져올 수 있음
        reviewsData.push({ id: doc.id, ...doc.data() });
      });
      // reviews state를 업데이트
      setReviews(reviewsData);
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  const handleEdit = (reviewId: string, currentTitle: string, currentContent: string) => {
    setEditingReviewId(reviewId);
    setUpdatedTitle(currentTitle);
    setUpdatedContent(currentContent);
  };
  const handleUpdate = async (reviewId: string) => {
    try {
      const db = getFirestore();
      const reviewDoc = doc(db, "reviews", reviewId);

      // Update the review document
      await updateDoc(reviewDoc, {
        title: updatedTitle,
        content: updatedContent,
      });

      alert("리뷰가 성공적으로 업데이트되었습니다.");
      setEditingReviewId(null);
    } catch (error) {
      console.error("Error updating document: ", error);
      alert("리뷰 업데이트 중 오류가 발생했습니다.");
    }
  };

  const handleTitleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: any) => {
    setContent(e.target.value);
  };

  const handleImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e: any) => {
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

  const handleDelete = async (reviewId: string) => {
    if (window.confirm("정말로 리뷰를 삭제하시겠습니까?")) {
      try {
        const db = getFirestore();
        const reviewDoc = doc(db, "reviews", reviewId);

        // Delete the review document
        await deleteDoc(reviewDoc);

        alert("리뷰가 성공적으로 삭제되었습니다.");
      } catch (error) {
        console.error("Error deleting document: ", error);
        alert("리뷰 삭제 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <>
      <Nav />
      {userInfo ? (
        <S.ReviewHeaderWrapper>
          <S.ReviewHeader>후기 작성</S.ReviewHeader>
          <S.ReviewForm onSubmit={handleSubmit}>
            <S.ReviewInput type="text" placeholder="제목" value={title} onChange={handleTitleChange} />
            <textarea placeholder="게시글 내용" value={content} onChange={handleContentChange} />
            <input type="file" accept="image/*" onChange={handleImageChange} required />
            <S.ReviewButton type="submit">게시하기</S.ReviewButton>
          </S.ReviewForm>
        </S.ReviewHeaderWrapper>
      ) : (
        <>
          <S.ReviewHeader>로그인 후에 후기를 작성할 수 있습니다.</S.ReviewHeader>
        </>
      )}

      {/* Display the reviews */}
      <S.ReviewHeader>후기 목록</S.ReviewHeader>
      {reviews.map((review) => (
        <div key={review.id}>
          {editingReviewId === review.id ? (
            <>
              <p>{review.userId}</p>
              <input
                type="text"
                value={updatedTitle}
                onChange={(e) => setUpdatedTitle(e.target.value)}
                style={{ border: "1px solid black" }}
              />
              <textarea value={updatedContent} onChange={(e) => setUpdatedContent(e.target.value)} />
              이미지는 업데이트 불가
              {review.imageUrl && <img src={review.imageUrl} style={{ width: 100 }} alt="Review Image" />}
              <div>
                <button onClick={() => handleUpdate(review.id)}>저장</button>
                <button onClick={() => setEditingReviewId(null)}>취소</button>
              </div>
            </>
          ) : (
            <>
              <h3 style={{ color: "black", fontSize: "40px" }}>{review.title}</h3>
              <p>{review.userId}</p>
              <p>{review.content}</p>
              {review.imageUrl && <img src={review.imageUrl} style={{ width: 100 }} alt="Review Image" />}
              {userInfo && userInfo.uid === review.userId && (
                <div>
                  <button onClick={() => handleDelete(review.id)}>삭제</button>
                  <button onClick={() => handleEdit(review.id, review.title, review.content)}>수정</button>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </>
  );
}
