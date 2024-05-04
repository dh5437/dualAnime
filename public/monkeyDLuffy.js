const monkeyDLuffy = new Character(
    "Monkey D. Luffy",
    100, // HP
    100,  // MP
    [
        createSkill("고무고무 피스톨", 15, (user, target, attack) => {
            target.hp -= attack;
            user.resetDamageMultiplier()
        }, 10, "상대에게 15의 피해를 주고, 자신의 MP를 10 소모", "Monkey D. Luffy uses 고무고무 피스톨. ${target.name} takes 15 damage."),
        createSkill("고무고무 개틀링", 20, (user, target, attack) => {
            target.hp -= attack;
            user.hp -= 5;
            user.resetDamageMultiplier()
        }, 0, "상대에게 20의 피해를 주고, 자신의 HP를 5 소모", "Monkey D. Luffy uses 고무고무 개틀링. ${target.name} takes 20 damage."),
        createSkill("기어 세컨드", 15, (user, target, attack) => {
            target.hp -= attack
            user.hp += 15;
            user.resetDamageMultiplier()
        }, 0, "상대에게 15의 피해를 주고, 자신의 HP를 15 회복", "Monkey D. Luffy uses 기어 세컨드. ${target.name} takes 15 damage. Monkey D. Luffy's hp increases by 15."),
        createSkill("기어 V", 0, (user, target, attack) => {
            user.hp += 20;
            // 다음 공격 x2 //
            user.prepareNextAttackMultiplier(2);
        }, 40, "자신의 MP를 40 소모하고, 자신의 HP를 20 회복하며, 다음 턴에 사용하는 스킬의 데미지가 2배 상승", "Monkey D. Luffy uses 기어 V. Monkey D. Luffy's hp increases by 20.")
    ]
);

// 스킬 사용 예시
// monkeyDLuffy.useSkill(0, monkeyDLuffy);