const ryomenSukuna = new Character(
    "Ryomen Sukuna",
    100, // HP
    100,  // MP
    [
        createSkill("해", (user, target) => {
            const damage = 20;
            console.log(`${target.name} takes ${damage} damage.`);
            target.hp -= damage;
            user.mp -= 10;
        }),
        createSkill("팔", (user, target) => {
            const damage = 15;
            console.log(`${target.name} takes ${damage} damage.`);
            target.hp -= damage;
            user.mp += 5;
        }),
        createSkill("반전 술식", (user) => {
            user.hp += 20;
            user.mp += 20;
            console.log(`${user.name}'s hp, mp increases.`);
        }),
        createSkill("영역전개", (user, target) => {
            const damage = 50;
            console.log(`${target.name} takes ${damage} damage.`);
            target.hp -= damage;
            user.mp -= 80;
        })
    ]
);

// 스킬 사용 예시
ryomenSukuna.useSkill(0, ryomenSukuna);