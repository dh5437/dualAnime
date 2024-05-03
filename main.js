document.querySelectorAll('.characterBtn').forEach(btn => {
    btn.addEventListener('click', function() {
      const selectedCharacter = this.getAttribute('data-character');
      const characters = ['Ryomen Sukuna', 'Kamado Tanjiro', 'Monkey D. Luffy'];
      const remainingCharacters = characters.filter(c => c !== selectedCharacter);
      const randomCharacter = remainingCharacters[Math.floor(Math.random() * remainingCharacters.length)];
      window.location.href = `battle.html?character=${selectedCharacter}`;
      startBattle(selectedCharacter, randomCharacter);
    });
});

// 캐릭터 객체를 저장하는 객체
const characters = {
    "Ryomen Sukuna": ryomenSukuna,
    "Kamado Tanjiro": kamadoTanjiro,
    "Monkey D. Luffy": monkeyDLuffy
};

// 캐릭터 정보 업데이트 함수
function updateModal(character) {
    console.log("Updating modal for:", character.name);  // 디버깅을 위한 로그 추가
    document.getElementById('modalCharacterName').innerText = character.name;
    document.getElementById('modalCharacterHp').innerText = `HP: ${character.hp}`;
    document.getElementById('modalCharacterMp').innerText = `MP: ${character.mp}`;

    const skillsList = document.getElementById('modalCharacterSkills');
    skillsList.innerHTML = '';
    character.skills.forEach(skill => {
        let listItem = document.createElement('li');
        listItem.textContent = `${skill.name} ---> ${skill.description}`;
        skillsList.appendChild(listItem);
    });

    document.getElementById('characterModal').style.display = 'block';
}

// 정보 버튼 이벤트 리스너
document.querySelectorAll('.informationBtn').forEach(button => {
    button.addEventListener('click', function() {
        const characterName = this.getAttribute('data-character');
        const character = characters[characterName];
        updateModal(character);
    });
});

// 모달 닫기 이벤트
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('characterModal').style.display = 'none';
});

window.onclick = function(event) {
    if (event.target == document.getElementById('characterModal')) {
        document.getElementById('characterModal').style.display = 'none';
    }
}

