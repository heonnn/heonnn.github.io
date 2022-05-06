/* 장단점 버튼 클릭 시 */
window.addEventListener('load', () => {
    negative.classList.remove('on');
    positive.classList.add('on');

    const positiveData = ['집중력이 높아 오랜 시간 한 가지 일에 몰두가 가능하다.', '승부욕이 강하다.', '도전적인 정신을 가지고 일단 시도해보고자 한다.', '사교성이 좋아 상대방과 짧은 시간에 친밀해진다.'];

    inputData(positiveData);
});
positive.addEventListener('click', () => {
    negative.classList.remove('on');
    positive.classList.add('on');

    const positiveData = ['집중력이 높아 오랜 시간 한 가지 일에 몰두가 가능하다.', '승부욕이 강하다.', '도전적인 정신을 가지고 일단 시도해보고자 한다.', '사교성이 좋아 상대방과 짧은 시간에 친밀해진다.'];

    inputData(positiveData);
});
negative.addEventListener('click', () => {
    positive.classList.remove('on');
    negative.classList.add('on');

    const negativeData = ['쓸데없는 걱정이 많다.', '거절을 잘 못해 곤란한 상황을 겪을 때가 종종 있다.', '노는 것을 좋아한다.', '일의 우선순위를 잘못 세워 정작 중요한 일을 처리못할 때가 있다.'];

    inputData(negativeData);

});

/* 데이터 랜덤하게 스타일 적용하여 render */
const inputData = (data) => {
    const pn = document.getElementById('PorN');
    pn.innerHTML = data.reduce((html, _data) => {
        let rnd = Math.floor(Math.random() * 4) + 1;
        return html + `<li class="random${rnd}">${_data}&nbsp;&nbsp;</li>`;
    }, "");
};

/* about me - language */
window.addEventListener('load', () => {
    const starScores = Array.from(document.getElementsByClassName('star-score'));
    starScores.map((starScore) => {
        for(let i = 0; i < 10; i++) {
            starScore.innerHTML += '<span class="star" onclick="beforeCheck(this);">&#9733;</span>';
        }
    })

    const starCnt = JSON.parse(localStorage.getItem('star')) || [];
    
    for(let i = 0; i < starCnt.length; i++) {
        let star = starScores[i].children;
        for(let j = 0; j < starCnt[i]; j++) {
            star[j].classList.add('on');
        }
    }
});

const beforeCheck = (e) => {
    
    
    const childrenObj = e.parentElement.children;
    // 특정 언어 별점 class명 on 제거
    Array.from(childrenObj).map((child) => {
        child.classList.remove('on');
    })

    for(let i = 0; i < childrenObj.length; i++) {
        childrenObj[i].classList.add('on');
        if(childrenObj[i] === e) break;
    }
};

save.addEventListener('click', () => {
    const starCnt = [];

    const starScores = document.querySelectorAll('.star-score');
    for(let i = 0; i < starScores.length; i++) {
        let star = starScores[i].children;
        let cnt = 0;
        for(let j = 0; j < star.length; j++) {
            if(star[j].classList.contains('on')) cnt++;
        }
        starCnt.push(cnt);
    }
    console.log(starCnt);
    localStorage.setItem('star', JSON.stringify(starCnt));
});
