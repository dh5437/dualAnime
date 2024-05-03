document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const character = urlParams.get('character');

    console.log('Selected character for battle:', character);
    // 여기에서 배틀 로직을 초기화
});

function startBattle(playerCharacter, opponentCharacter) {
    document.getElementById('playerName').textContent = playerCharacter;
    document.getElementById('opponentName').textContent = opponentCharacter;
  
    document.querySelector('.skillBtn').addEventListener('click', function() {
      performAttack('player', 'opponent');
      setTimeout(() => performAttack('opponent', 'player'), 1000); // AI 응답 지연
    });
  }
  
  function performAttack(attackerId, defenderId) {
    const defenderHP = document.getElementById(`${defenderId}HP`);
    let currentHP = parseInt(defenderHP.textContent);
    currentHP -= 10; // 공격력 가정
    defenderHP.textContent = currentHP;
  
    if (currentHP <= 0) {
      alert(`${attackerId} wins!`);
      location.reload(); // 게임 재시작
    }
  }
  