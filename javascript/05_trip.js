let newWindow = null;
friendList.addEventListener('click', () => {
    
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const popupWidth = 200;
    const popupHeight = 300;
    const left = (screenWidth - popupWidth) / 4;
    const top = (screenHeight - popupHeight) / 4;
    
    newWindow = open('../06_trip_friendList.html', 'popup', `width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);
    
    
});

const episodes = [
    `여행 기간이 2018 월드컵 중이었습니다. 독일과의 경기를<br>
    보려고 계획을 수정해 근처 호프집에서 치맥을 했습니다.<br>
    승리로 경기가 종료되고, 저희를 좋게 봐주신 손님 한 분이<br>
    저희 자리까지 모두 계산하시고 응원해주시고 가셨습니다.`,
    `여행 중에 머물렀던 포항 기계면이 대학교 후배의<br>
    고향이었습니다. 후배 부모님께서 먹을 것을 잔뜩 사들고,<br>
    우리가 머무르던 마을 회관에 찾아오셔서 마을의 몇몇<br>
    어르신들과 함께 술과 음식을 즐겼습니다.`,
    `장마철이라 비가 많이 쏟아졌지만, 계획이 빠듯하여<br>
    강행을 했는데 길이 미끄러웠던 내리막길에서 친구 3명이<br>
    충돌해서 크게 다쳐 구급차를 타고 병원에 가야했습니다.<br>
    처음 15일 계획했던 여정이 12일이 되고 말았습니다.`
];

// 클릭한 에피소드 내용만 조회
const showEpisode = (e) => {
    const epTag = e.nextElementSibling;
    if(epTag.innerHTML) {
        epTag.innerHTML = '';
        return;
    }
    
    // innerHTML 삭제
    const epContents = Array.from(document.getElementsByClassName('epContent'));
    epContents.map((content) => {
        content.innerHTML = '';
    });


    const epNames = document.getElementsByClassName('epName');
    for(let i = 0; i < epNames.length; i++) {
        if(e === epNames[i]) {
            epContents[i].innerHTML = episodes[i];
        }
    }
};

showRoute.addEventListener('click', () => {
    const locations = Array.from(document.getElementsByClassName('location'));
    const pins = Array.from(document.getElementsByClassName('pin'));
    
    locations.map(_location => _location.classList.remove('on'));
    pins.map(_pin => _pin.classList.remove('on'));

    for(let i = 0; i < locations.length; i++) {
        setTimeout(() => {
            locations[i].classList.add('on');
            pins[i].classList.add('on');
        }, i * 1000);
    }
    console.log(locations, pins);
});