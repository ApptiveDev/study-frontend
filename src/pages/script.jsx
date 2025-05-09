function changeTab(tab) {
    // 모든 탭 버튼에 active 클래스를 제거
    const buttons = document.querySelectorAll('.navbar button');
    buttons.forEach(button => button.classList.remove('active'));

    // 클릭한 버튼에 active 클래스를 추가
    const clickedButton = Array.from(buttons).find(button => button.innerText === tab);
    clickedButton.classList.add('active');

    // 모든 탭 내용을 숨김
    const contents = document.querySelectorAll('.ranking-list-container');
    contents.forEach(content => content.classList.remove('active'));

    // 선택된 탭을 활성화
    const activeTab = document.getElementById(tab);
    activeTab.classList.add('active');
}

// 기본적으로 '주간 조회수 순위' 탭을 활성화
document.addEventListener('DOMContentLoaded', () => {
    changeTab('weekly');
});
