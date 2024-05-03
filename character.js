class Character {
    constructor(name, hp, mp, skills) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.skills = skills;
    }

    // 스킬 사용 메소드
    useSkill(skillIndex, target) {
        const skill = this.skills[skillIndex];
        console.log(`${this.name} uses ${skill.name} on ${target.name}`);
        skill.effect(this, target);
    }
}

// 스킬 객체 생성 함수
function createSkill(name, effect, description) {
    return { name, effect, description };
}