const monkeyDLuffy = new Character(
    "Monkey D. Luffy",
    100, // HP
    100,  // MP
    [
        createSkill("고무고무 피스톨", (user, target) => {
            const attack = 15;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.mp -= 10;
        }),
        createSkill("고무고무 개틀링", (user, target) => {
            const attack = 20;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.hp -= 5;
        }),
        createSkill("기어 세컨드", (user, target) => {
            const attack = 15
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack
            user.hpp += 15;
            console.log(`${user.name}'s hp increases.`);
        }),
        createSkill("기어 V", (user, target) => {
            // 다음 공격 x2 //
            user.hp += 20;
            user.mp -= 40;
            console.log(`${user.name}'s hp increases.`);
        })
    ]
);

// 스킬 사용 예시
monkeyDLuffy.useSkill(0, monkeyDLuffy);