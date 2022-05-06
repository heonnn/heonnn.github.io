/* login */
document.loginFrm.addEventListener('submit', (e) => {
   const userList = JSON.parse(localStorage.getItem('user')) || [];

   for(let i = 0; i < userList.length; i++) {
      if((id.value === userList[i].userId && pw.value == userList[i].userPw)) {
         alert(`${userList[i]._userName}님 반갑습니다.`);
         indexSubMenu();
         e.preventDefault();
         return;
      }
   }
   if(!id.value) {
      alert('아이디를 입력해주세요.');
      e.preventDefault();
      return;
   } else if(!pw.value) {
      alert('비밀번호를 입력해주세요.');
      e.preventDefault();
      return;
   } else {
      alert('존재하지 않는 아이디입니다.');
      e.preventDefault();
      id.select();
      return;
   }
});

/* homepage subMenu */
const indexSubMenu = () => {
   document.querySelector('article.loginBox').classList.add('subMenu');
   
   /* 로그인 시 html 덮어쓰기 */
   document.querySelector('article.subMenu').innerHTML =
`<div class="slider">
<input type="radio" name="slide" id="slide1" checked>
<input type="radio" name="slide" id="slide2">
<input type="radio" name="slide" id="slide3">
<ul class="subMenuList">
<li><a href="./03_about_me.html" id="about-me" target="_blank">about me</a></li>
<li><a href="./04_road_map.html" id="road-map" target="_blank">road map</a></li>
<li><a href="./05_trip.html" id="trip" target="_blank">trip</a></li>
</ul>
<div class="bullets">
<label for="slide1">&nbsp;</label>
<label for="slide2">&nbsp;</label>
<label for="slide3">&nbsp;</label>
</div>
</div>
<nav class="logoutBox">
<ul>
<li><a href="a" id="setting" target="_blank">개인정보설정</a></li>
<li><a href="./01_index.html" id="logout" onclick="alert('로그아웃 하셨습니다.');">로그아웃</a></li>
</ul>
</nav>`;
}
