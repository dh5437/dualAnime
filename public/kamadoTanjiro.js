const kamadoTanjiro = new Character(
    "Kamado Tanjiro",
    100, // HP
    100,  // MP
    [
        createSkill("물의 호흡 - 물방아", 15, (user, target, attack) => {
            target.hp -= attack;
            user.resetDamageMultiplier()
        }, 5, "상대에게 15의 피해를 주고, 자신의 MP를 5 소모", "Kamado Tanjiro uses 물의 호흡 - 물방아. ${target.name} takes 15 damage."),
        createSkill("물의 호흡 - 생생유전", 20, (user, target, attack) => {
            target.hp -= attack;
            user.resetDamageMultiplier()
        }, 10, "상대에게 20의 피해를 주고, 자신의 MP를 10 소모", "Kamado Tanjiro uses 물의 호흡 - 생생유전. ${target.name} takes 20 damage."),
        createSkill("내비치는 세계", 0, (user, target, attack) => {
            user.mp += 20;
            // 다음 턴 공격 x1.5//
            user.prepareNextAttackMultiplier(1.5)
        }, 0, "자신의 MP를 20 회복하고, 다음 턴에 사용하는 스킬의 데미지가 1.5배 상승", "Kamado Tanjiro uses 내비치는 세계. Kamado Tanjiro's mp increases by 20."),
        createSkill("히노카미 카구라", 40, (user, target, attack) => {
            target.hp -= attack;
            user.resetDamageMultiplier()
        }, 80, "상대에게 40의 피해를 주고, 자신의 MP를 80 소모", "Kamado Tanjiro uses 히노카미 카구라. ${target.name} takes 40 damage.")
    ]
);

// 스킬 사용 예시
// kamadoTanjiro.useSkill(0, kamadoTanjiro);