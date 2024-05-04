let playerCharacter, opponentCharacter;

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const characterName = decodeURIComponent(urlParams.get('character')); // URL 매개변수 디코드

    // `characters` 객체에서 캐릭터 인스턴스 생성
    // 캐릭터 객체를 저장하는 객체
    const characters = {
        "Ryomen Sukuna": ryomenSukuna,
        "Kamado Tanjiro": kamadoTanjiro,
        "Monkey D. Luffy": monkeyDLuffy
    };
    
    playerCharacter = characters[characterName];
    if (!playerCharacter) {
        console.error('Character not found:', characterName);
        return;
    }

    const opponentCharacters = ['Ryomen Sukuna', 'Kamado Tanjiro', 'Monkey D. Luffy'].filter(name => name !== characterName);
    const randomOpponentName = opponentCharacters[Math.floor(Math.random() * opponentCharacters.length)];
    opponentCharacter = characters[randomOpponentName];

    if (!opponentCharacter) {
        console.error('Opponent not found:', randomOpponentName);
        return;
    }

    startBattle();
});

function startBattle() {
    if (!playerCharacter || !opponentCharacter) {
        console.error('One of the characters is not defined');
        return;
    }

    document.getElementById('playerName').textContent = playerCharacter.name;
    document.getElementById('opponentName').textContent = opponentCharacter.name;
    document.getElementById('playerImage').src = characterImages[playerCharacter.name]; // 플레이어 이미지 업데이트
    document.getElementById('opponentImage').src = characterImages[opponentCharacter.name]; // 상대방 이미지 업데이트
    document.getElementById('playerHP').textContent = playerCharacter.hp;
    document.getElementById('opponentHP').textContent = opponentCharacter.hp;
    document.getElementById('playerMP').textContent = playerCharacter.mp;
    document.getElementById('opponentMP').textContent = opponentCharacter.mp;

    // 스킬 버튼 할당
    const playerSkillButtons = document.querySelectorAll('.playerSkillBtn');
    playerCharacter.skills.forEach((skill, index) => {
        if (playerSkillButtons[index]) {
            playerSkillButtons[index].innerHTML = `<span style="font-size: 14px; font-weight:600;">${skill.name}</span><br><br><span style="font-size: 10px;">${skill.description}</span>`;
            playerSkillButtons[index].addEventListener('click', () => executeSkill(skill, index));
        }
    });

    const opponentSkillButtons = document.querySelectorAll('.oponentSkillDiv');
    opponentCharacter.skills.forEach((skill, index) => {
        if (opponentSkillButtons[index]) {
            opponentSkillButtons[index].innerHTML = `<span style="font-size: 14px; font-weight:600;">${skill.name}</span><br><br><span style="font-size: 10px;">${skill.description}</span>`;
        }
    });
    
}

function logEvent(skill, user, target) {
    const message = skill.logTemplate.replace('${attack}', skill.attack).replace('${target.name}', target.name).replace('${user.name}', user.name);
    const logList = document.getElementById('logList');
    const newLogEntry = document.createElement('li');
    newLogEntry.textContent = message;
    logList.appendChild(newLogEntry);
    logList.scrollTop = logList.scrollHeight; // 항상 최신 로그가 보이도록 스크롤
}


function executeSkill(skill, index) {

    // 스킬 사용 전 MP 체크
    if (playerCharacter.mp < skill.mpCost) {
        alert("Not enough MP to use this skill!");
        return; // MP가 부족하면 여기서 함수 종료
    }

    skill.effect(playerCharacter, opponentCharacter);

    // HP와 MP가 최대 200을 초과하지 않도록 조정
    if (playerCharacter.hp > 200) {
        playerCharacter.hp = 200; // HP가 200을 초과할 경우 200으로 설정
        alert("HP cannot exceed 200.");
        return;
    }

    if (playerCharacter.mp > 200) {
        playerCharacter.mp = 200; // MP가 200을 초과할 경우 200으로 설정
        alert("MP cannot exceed 200.");
        return;
    }

    logEvent(skill, playerCharacter, opponentCharacter);
    updateHealth();
    updateMana();

    setTimeout(aiUseSkill, 500);
}

function aiUseSkill() {
    // 사용 가능한 스킬 필터링: 충분한 MP가 있는 스킬만 선택
    const usableSkills = opponentCharacter.skills.filter(skill => opponentCharacter.mp >= skill.mpCost);

    // 사용 가능한 스킬이 없을 경우
    if (usableSkills.length === 0) {
        console.log("Opponent has not enough MP to use any skills!");
        return; // 스킬 사용을 건너뛰기
    }

    // 무작위로 하나의 스킬 선택
    const skill = usableSkills[Math.floor(Math.random() * usableSkills.length)];

    // 스킬 효과 실행
    skill.effect(opponentCharacter, playerCharacter);

    // 상태 업데이트
    updateHealth();
    updateMana();

    // 로그 이벤트
    logEvent(skill, opponentCharacter, playerCharacter);
}


// 캐릭터와 해당 이미지 경로 매핑
const characterImages = {
    "Ryomen Sukuna": "assets/ryomenSukuna.jpeg",
    "Kamado Tanjiro": "assets/kamadoTanjiro.jpg",
    "Monkey D. Luffy": "assets/monkeyDLuffy.webp"
};

function updateCharacterImage(characterName) {
    const imagePath = characterImages[characterName];
    const characterImageElement = document.getElementById('characterImage');
    characterImageElement.src = imagePath;  // 이미지 경로 업데이트
}

function updateHealth() {
    document.getElementById('playerHP').textContent = playerCharacter.hp;
    document.getElementById('opponentHP').textContent = opponentCharacter.hp;

    checkGameOver();
}

function updateMana() {
    document.getElementById('playerMP').textContent = playerCharacter.mp;
    document.getElementById('opponentMP').textContent = opponentCharacter.mp;
}

function checkGameOver() {
    if (playerCharacter.hp <= 0) {
        alert('Opponent wins!');
        location.reload();
    } else if (opponentCharacter.hp <= 0) {
        alert('Player wins!');
        location.reload();
    }
}
