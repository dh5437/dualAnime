const ryomenSukuna = new Character(
    "Ryomen Sukuna",
    100, // HP
    100,  // MP
    [
        createSkill("해", (user, target) => {
            const attack = 20;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 10;
        }, "상대에게 20의 피해를 주고, 자신의 MP를 10 소모"),
        createSkill("팔", (user, target) => {
            const attack = 15;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp += 5;
        }, "상대에게 15의 피해를 주고, 자신의 MP를 5 회복"),
        createSkill("반전 술식", (user) => {
            user.hp += 20;
            user.mp += 20;
            console.log(`${user.name}'s hp, mp increases.`);
        }, "자신의 HP와 MP를 20씩 증가"),
        createSkill("영역전개", (user, target) => {
            const attack = 50;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 80;
        }, "상대에게 50의 피해를 주고, 자신의 MP를 80 소모")
    ]
);

// 스킬 사용 예시
ryomenSukuna.useSkill(0, ryomenSukuna);