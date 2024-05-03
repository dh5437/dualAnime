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
        }, "상대에게 15의 피해를 주고, 자신의 MP를 10 소모"),
        createSkill("고무고무 개틀링", (user, target) => {
            const attack = 20;
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack;
            user.hp -= 5;
        }, "상대에게 20의 피해를 주고, 자신의 HP를 5 소모"),
        createSkill("기어 세컨드", (user, target) => {
            const attack = 15
            console.log(`${target.name} takes ${attack} damage.`);
            target.hp -= attack
            user.hpp += 15;
            console.log(`${user.name}'s hp increases.`);
        }, "상대에게 15의 피해를 주고, 자신의 HP를 15 회복"),
        createSkill("기어 V", (user, target) => {
            // 다음 공격 x2 //
            user.hp += 20;
            user.mp -= 40;
            console.log(`${user.name}'s hp increases.`);
        }, "자신의 MP를 40 소모하고, 자신의 HP를 20 회복하며, 다음 턴에 사용하는 스킬의 데미지가 2배 상승")
    ]
);

// 스킬 사용 예시
monkeyDLuffy.useSkill(0, monkeyDLuffy);