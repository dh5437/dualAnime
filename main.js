document.querySelectorAll('.characterBtn').forEach(btn => {
    btn.addEventListener('click', function() {
      const selectedCharacter = this.getAttribute('data-character');
      const characters = ['Ryomen Sukuna', 'Kamado Tanjiro', 'Monkey D. Luffy'];
      const remainingCharacters = characters.filter(c => c !== selectedCharacter);
      const randomCharacter = remainingCharacters[Math.floor(Math.random() * remainingCharacters.length)];
      startBattle(selectedCharacter, randomCharacter);
    });
  });
  