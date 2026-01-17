/**
 * A wizard can cast a spell if they have the spell prepared.
 * They can also cast it from a scroll even if it is not prepared.
 * @param {boolean} isSpellPrepared - whether the spell is prepared
 * @param {boolean} hasScroll - whether the wizard has a scroll of the spell
 * @returns {boolean} whether the wizard can cast the spell
 */
function canCastSpell(isSpellPrepared, hasScroll) {
  // TODO
  if (hasScroll && isSpellPrepared) {
    return "has scroll AND spell is prepared";
  } else if(hasScroll) {
    return "has scroll";
  } else if (isSpellPrepared) {
    return "spell prepared";
  } else {
    return "no action";
  }
}
console.log(canCastSpell(true, true));
console.log(canCastSpell(true, false));
console.log(canCastSpell(false, true));
console.log(canCastSpell(false, false));

/**
 * A creature is hidden from an observer if it is actively hiding
 * or if the observer is not aware of it.
 * @param {boolean} hiding - whether the creature is actively hiding
 * @param {boolean} aware - whether the observer is aware of the creature
 * @returns {boolean} whether the creature is hidden from the observer
 */
function isHidden(hiding, aware) {
  // TODO
  if(hiding || !aware) {
    return `creature is hidden`;
  } else {
    return `creature is not hidden`;
  } 
}

console.log(isHidden(true, false)); 
console.log(isHidden(true, true)); 
console.log(isHidden(false, true));

/**
 * A strike hits if the attack value is greater than or equal
 * to the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike hits
 */
function doesStrikeHit(attack, ac) {
  // TODO
  if (attack >= ac) {
    return `hit`;
  } else {
    return `miss`;
  }
}

console.log(doesStrikeHit(10, 20)); //miss
console.log(doesStrikeHit(10, 5)); //hit
console.log(doesStrikeHit(10, 10)); //hit



/**
 * A strike is a critical hit if the attack value is at least
 * 10 greater than the target's armor class (AC).
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @returns {boolean} whether the strike is a critical hit
 */
function doesStrikeCrit(attack, ac) {
  // TODO
  const isTenOver = attack - ac;
  
  if (isTenOver >= 10) {
    return `crit!`
  } else if (attack >= ac) {
    return `hit`
  } else {
    return `miss`;
  }
}

console.log(`CRIT?`, doesStrikeCrit(10, 20)); //miss
console.log(`CRIT?`, doesStrikeCrit(10, 5)); //hit
console.log(`CRIT?`, doesStrikeCrit(10, 10)); //hit
console.log(`CRIT?`, doesStrikeCrit(20, 20)); //hit
console.log(`CRIT?`, doesStrikeCrit(20, 5)); //crit
console.log(`CRIT?`, doesStrikeCrit(20, 10)); //crit

/**
 * A creature can restore hit points (HP) by healing,
 * but its total HP cannot exceed its maximum HP.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} healAmount - amount to heal
 * @returns {number} total hit points after healing
 */
function heal(maxHp, currentHp, healAmount) {
  // TODO
  const healthGain = currentHp+healAmount;
  let leftOver = 0;
  if (healthGain >= maxHp) {
    leftOver = healthGain-maxHp;
    return healthGain-leftOver;
  } else {
    return healthGain;
  }
}

//         maxHp, currentHp, healAmount)
console.log(heal(100, 50, 25)); 
console.log(heal(100, 100, 25)); // 100
console.log(heal(100, 100, 80)); // 100
console.log(heal(200, 100, 80)); // 180


/**
 * When a character uses a skill they have proficiency in,
 * they get to add a bonus to their attempt.
 *
 * | Rank       | Bonus     |
 * | ---        | ---       |
 * | untrained  | 0         |
 * | trained    | level + 2 |
 * | expert     | level + 4 |
 * | master     | level + 6 |
 * | legendary  | level + 8 |
 *
 * @param {number} level - level of the character
 * @param {string} rank - character's proficiency rank
 * @returns {number} the character's proficiency bonus
 */
function getProficiencyBonus(level, rank) {
  // TODO
  let bonus = 0;
  if(rank === 'legendary') {
    bonus += 8;
    return level+bonus;
  } else if(rank === 'master') {
    bonus += 6;
    return level+bonus;
  } else if(rank === 'expert') {
    bonus += 4;
    return level+bonus;
  } else if(rank === 'trained') {
    bonus += 2;
    return level+bonus;
  } else {
    return level+bonus;
  }
}

console.log(getProficiencyBonus(10, `legendary`));
console.log(getProficiencyBonus(10, `master`));
console.log(getProficiencyBonus(10, `expert`));
console.log(getProficiencyBonus(10, `trained`));
console.log(getProficiencyBonus(10, `untrained`));


/**
 * A creature can get a bonus to its armor class (AC) by taking cover.
 * If the creature is behind an obstacle, it gets a +2 bonus to its AC,
 * unless the creature is actively taking cover, in which case it gets
 * a +4 bonus to its AC.
 * A creature that is not behind an obstacle gets no bonus to its AC.
 * @param {boolean} behindObstacle - whether the creature is behind an obstacle
 * @param {boolean} takingCover - whether the creature is actively taking cover
 * @returns {number} the cover bonus to AC
 */
function getCoverBonus(behindObstacle, takingCover) {
  // TODO
  let bonus = 0;
  if (behindObstacle) {
    return bonus+=2
  } else 
  if (takingCover) {
    return bonus+=4
  } else {
    return bonus;
  }
}

console.log(getCoverBonus(true, false));
console.log(getCoverBonus(true, true));
console.log(getCoverBonus(false, false));
console.log(getCoverBonus(false, true));


/**
 * A creature's current hit points (HP) is reduced by taking damage.
 * If the damage taken is greater than or equal to double its maximum
 * HP, the creature dies instantly.
 * A creature's HP cannot go below 0 unless it is dead.
 * @param {number} maxHp - maximum hit points
 * @param {number} currentHp - current hit points
 * @param {number} damage - damage taken
 * @returns {number} -1 if the creature dies instantly
 * @returns {number} 0 if the creature's HP drops to 0 or below
 * @returns {number} the creature's remaining HP after taking damage
 */
function getRemainingHp(maxHp, currentHp, damage) {
  // TODO
}

/**
 * All creatures can see in bright light.
 * Creatures with low-light vision can also see in dim light.
 * Creatures with darkvision can see in all light conditions.
 * @param {string} light - light condition: "bright", "dim", or "dark"
 * @param {string} vision - vision type: "average", "low-light", or "dark"
 * @returns {boolean} whether the creature can see
 */
function canSee(light, vision) {
  // TODO
}

/**
 * A strike deals damage if it hits, unless the strike is a critical hit,
 * in which case it deals double damage.
 * If the strike does not hit, it deals 0 damage.
 * Hint: you can use the functions you wrote above :)
 * @param {number} attack - the attack value
 * @param {number} ac - the armor class to beat
 * @param {number} damage - damage on a normal hit
 * @returns {number} damage dealt by the strike
 */
function getStrikeDamage(attack, ac, damage) {
  // TODO
}
