import axios from "axios";

export const payKakao = async (params: any) => {
  console.log(params);
  try {
    // post 요청의 json 데이터는 null로 처리하고
    const data = await axios.post("/api/v1/payment/ready", null, {
      params, // config 설정에 데이터를 담아 넘겨준다.
      headers: {
        // withCredentials: true,
        Authorization: `KakaoAK ${import.meta.env.VITE_APP_KAKAO_API_KEY}`,
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    });

    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
