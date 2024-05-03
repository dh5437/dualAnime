class Character {
    constructor(name, hp, mp, skills) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.skills = skills;
        this.damageMultiplier = 1;  // 초기 데미지 배율
    }

    applyDamageMultiplier(damage) {
        return damage * this.damageMultiplier;  // 데미지에 배율 적용
    }

    prepareNextAttackMultiplier(multiplier) {
        this.damageMultiplier = multiplier;  // 다음 공격의 배율 설정
    }

    resetDamageMultiplier() {
        this.damageMultiplier = 1;  // 배율 초기화
    }
}

function createSkill(name, baseDamage, effect, mpCost, description, logTemplate) {
    return {
        name,
        baseDamage,
        effect: function(user, target) {
            const attack = user.applyDamageMultiplier(baseDamage);
            effect(user, target, attack);  // effect 함수를 수정하여 attack도 인자로 받음
            user.mp -= mpCost;  // 스킬 사용 시 MP 감소 로직을 여기로 이동
        },
        mpCost,
        description,
        logTemplate,
        getLogEffect: function(user, target, attack) {  // attack 값을 로그 템플릿에 포함
            return this.logTemplate.replace('${target.name}', target.name)
                                   .replace('${user.name}', user.name)
                                   .replace('${attack}', attack);
        }
    };
}