const ryomenSukuna = new Character(
    "Ryomen Sukuna",
    100, // HP
    100,  // MP
    [
        createSkill("해", 20, (user, target, attack) => {
            target.hp -= attack;
        }, 10, "상대에게 20의 피해를 주고, 자신의 MP를 10 소모", "Ryomen Sukuna uses 해. ${target.name} takes 20 damage."),
        createSkill("팔", 15, (user, target, attack) => {
            target.hp -= attack;
            user.mp += 5;
        }, -5, "상대에게 15의 피해를 주고, 자신의 MP를 5 회복", "Ryomen Sukuna uses 팔. ${target.name} takes 15 damage."),
        createSkill("반전 술식", 0, (user, target, attack) => {
            user.hp += 20;
            user.mp += 20;
        }, 0, "자신의 HP와 MP를 20씩 증가", "Ryomen Sukuna uses 반전술식. Ryomen Sukuna's hp, mp increases by 20."),
        createSkill("영역전개", 50, (user, target, attack) => {
            target.hp -= attack;
        }, 80, "상대에게 50의 피해를 주고, 자신의 MP를 80 소모", "Ryomen Sukuna uses 영역전개. ${target.name} takes 50 damage.")
    ]
);

// 스킬 사용 예시
// ryomenSukuna.useSkill(0, ryomenSukuna);