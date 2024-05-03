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
        }, "상대에게 15의 피해를 주고, 자신의 MP를 5 소모"),
        createSkill("물의 호흡 - 생생유전", (user, target) => {
            const attack = 20;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 10;
        }, "상대에게 20의 피해를 주고, 자신의 MP를 10 소모"),
        createSkill("내비치는 세계", (user, target) => {
            user.mp += 20;
            // 다음 턴 공격 x1.5//
            console.log(`${user.name}'s mp increases.`);
        }, "자신의 MP를 20 회복하고, 다음 턴에 사용하는 스킬의 데미지가 1.5배 상승"),
        createSkill("히노카미 카구라", (user, target) => {
            const attack = 40;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 80;
        }, "상대에게 40의 피해를 주고, 자신의 MP를 80 소모")
    ]
);

// 스킬 사용 예시
kamadoTanjiro.useSkill(0, kamadoTanjiro);