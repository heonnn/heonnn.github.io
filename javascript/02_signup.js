/* User Class */
class User {
   constructor(userId, userPw, _userName, userGender, userBirth) {
      this.userId = userId;
      this.userPw = userPw;
      this._userName = _userName;
      this.userGender = userGender;
      this.userBirth = userBirth;
   }
}

/* 버튼 체크 여부 */
/* value 값 실시간 감지하여 false로 변환 */
let idOverlap = false;
id.addEventListener('change', () => idOverlap = false);

/* 아이디 중복 체크*/

idCheck.addEventListener('click', () => {
   // 입력안했을 시
   if(!id.value) {
      alert('아이디를 입력해주세요.');
      return;
   }

   // 중복 체크
   const userList = JSON.parse(localStorage.getItem('user')) || [];

   for(let i = 0; i < userList.length; i++) {
      if(userList[i].userId === id.value) {
         alert('이미 사용중인 아이디입니다.');
         id.select();
         return;
      }
   }

   // 유효성 검사
   const idRegexp = [/^[a-z0-9]{4,12}$/, /\d/, /[a-z]/];
   for(let i = 0; i < idRegexp.length; i++) {
      if(!idRegexp[i].test(id.value)) {
         alert('영문, 숫자를 포함하여 4~12자리로 입력해주세요.');
         id.select();
         return;
      }
   }

   alert('사용 가능한 아이디입니다.');
   idOverlap = true;
});


/* ------------------------------------------------------------------------------------------------------- */
/* 회원가입 버튼 클릭 시 */
document.userFrm.addEventListener('submit', (e) => {
   if(!idOverlap) {
      alert('아이디 중복 체크 해주세요.');
      e.preventDefault();
      return;
   }
   
   console.log(showSpanMsg());
   if(!showSpanMsg()) {
      alert('필수 항목을 입력해주세요.');
      e.preventDefault();
      return;
   }
   
   if(!pwCheck()) {
      alert('영문, 숫자, 특수문자를 포함하여 8~15자리로 비밀번호를 입력해주세요.');
      e.preventDefault();
      return;
   } else if(pw.value !== pw2.value) {
      alert('비밀번호가 틀립니다.');
      pw2.select();
      e.preventDefault();
      return;
   }
});

const saveUser = () => {
   const userId = id.value;
   const userPw = pw.value;
   const _userName = userName.value;
   const userGender = gender.value;

   const user = new User(userId, userPw, _userName, userGender, userBirthday);

   const userList = JSON.parse(localStorage.getItem('user')) || []; 
   userList.push(user);

   localStorage.setItem('user', JSON.stringify(userList));

   alert('회원가입을 축하합니다.');
   history.go(-1);
}


/* ----------------------------------------------------------------------- */

const pwCheck = () => {
   const pwRegexp = [/^.{8,15}$/, /\d/, /[a-zA-Z]/, /[\*!&/]/]; 

   for(let i = 0; i < pwRegexp.length; i++) {
      if(!pwRegexp[i].test(pw.value)) {
         pw.select();
         return false;
      }
   }
   return true;

};

/* ----------------------------------------------------------------------- */
/* 입력 필드에 값 없을 경우 경고 메시지 */
const showSpanMsg = () => {
   document.querySelector('input[type=hidden]').value = '';
   let bool = true;

   // birth value 검사
   if(birthCheck() !== false) {
      document.querySelector('input[type=hidden]').value = 'on';
   }

   const inputMsgArr = document.getElementsByClassName('inputVal');
   const spanMsgArr = document.getElementsByClassName('spanMsg');
   
   // spanMsg 불투명도 0으로 재설정
   for(let i = 0; i < spanMsgArr.length; i++) {
      spanMsgArr[i].style.opacity = 0;
   }
   
   // value false인 input 태그에 spanMsg
   for(let i = 0; i < inputMsgArr.length; i++) {
      if(!inputMsgArr[i].value) {
         spanMsgArr[i].style.opacity = 1;
         bool = false;
      }
   }
   // 값 입력 완료 시 bool = true
   return bool;
};



/* 생년월일 변수 */
let userBirthday;

/* brith 유효성 검사 */
const birthCheck = () => {
   const birthArr = document.getElementsByClassName('birthValue');

   /* 값이 다 들어있는지 */
   for(let i = 0; i < birthArr.length; i++) {
      if(!birthArr[i].value) return false;
   }

   /* 값 범위를 만족하는지 */
   for(let i = 0; i < birthArr.length; i++) {
      if(parseInt(birthArr[i].value) < parseInt(birthArr[i].min) || parseInt(birthArr[i].value) > parseInt(birthArr[i].max)) return false;
   }

   const f = function(n) {
      return n < 10 ? "0" + n : n;
   }

   userBirthday = Array.from(birthArr).reduce((birthSum, _birth) => {
      return birthSum += f(parseInt(_birth.value));
   }, '');

   return userBirthday;
};
/* ----------------------------------------------------------------------- */

/* birth year 입력값 제한 */
const birthHandler = (el, maxlength) => {
   if(el.value.length > maxlength) {
      el.value = el.value.substr(0, maxlength);
   }
};
