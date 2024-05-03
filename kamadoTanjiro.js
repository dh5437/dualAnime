const kamadoTanjiro = new Character(
    "Kamado Tanjiro",
    100, // HP
    100,  // MP
    [
        createSkill("물의 호흡 - 물방아", (user, target) => {
            const attack = 15;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 5;
        }),
        createSkill("물의 호흡 - 생생유전", (user, target) => {
            const attack = 20;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 10;
        }),
        createSkill("내비치는 세계", (user, target) => {
            user.mp += 20;
            // 다음 턴 공격 x1.5//
            console.log(`${user.name}'s mp increases.`);
        }),
        createSkill("히노카미 카구라", (user, target) => {
            const attack = 40;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 80;
        })
    ]
);

// 스킬 사용 예시
kamadoTanjiro.useSkill(0, kamadoTanjiro);