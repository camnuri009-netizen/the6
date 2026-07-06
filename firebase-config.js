// Firebase 설정 파일입니다.
// Firebase 콘솔에서 복사한 firebaseConfig 값을 아래에 붙여넣으세요.
const firebaseConfig = {
  apiKey: "여기에_apiKey",
  authDomain: "여기에_authDomain",
  projectId: "여기에_projectId",
  storageBucket: "여기에_storageBucket",
  messagingSenderId: "여기에_messagingSenderId",
  appId: "여기에_appId"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
