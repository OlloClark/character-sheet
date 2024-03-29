import {Form, Input} from './'
import { useForm } from "react-hook-form";

function CharacterCreationSheet() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
            Character Creation Sheet for Dungeons & Dragons 5e
            </h1>
            <p>Fields marked with an asterisk (*) are required</p>
            <br /><br />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <p>Basic Info:</p>
                <br />
                <Input register={register} field={"playerName"} label={"Player Name*"} validations={{required: true}} />
                {errors.playerName?.type === 'required' && <p className={"text-red-800"}>Player Name is required</p>}

                <Input register={register} field={"characterName"} label={"Character Name*"} validations={{required: true}}/>
                {errors.characterName?.type === 'required' && <p className={"text-red-800"}>Character name is required</p>}
                <br /><br />
                <Input register={register} field={"class"} label={"Class*"} validations={{required: true}}/>
                {errors.class?.type === 'required' && <p className={"text-red-800"}>Class is required</p>}
                <br />
                <Input register={register} field={"subclass"} label={"Subclass*"} validations={{required: true}}/>
                {errors.subclass?.type === 'required' && <p className={"text-red-800"}>Subclass is required</p>}
                <br />
                <Input register={register} field={"level"} label={"Level*"} validations={{required: true}}/>
                {errors.level?.type === 'required' && <p className={"text-red-800"}>Level is required</p>}
                <br />
                <Input register={register} field={"background"} label={"Background*"} validations={{required: true}}/>
                {errors.background?.type === 'required' && <p className={"text-red-800"}>Background is required</p>}
                <br />
                <Input register={register} field={"race"} label={"Race*"} validations={{required: true}}/>
                {errors.race?.type === 'required' && <p className={"text-red-800"}>Race is required</p>}
                <br />
                <Input register={register} field={"alignment"} label={"Alignment"}/>
                <br />
                <Input register={register} field={"experiencePoints"} label={"Experience Points"}/>
                <br /><br />

                <Input register={register} field={"age"} label={"Character Age"}/>
                <br />
                <Input register={register} field={"wisdomST"} label={"Character Height"}/>
                <br />
                <Input register={register} field={"wisdomST"} label={"Character Weight"}/>
                <br />
                <Input register={register} field={"wisdomST"} label={"Character Appearance"}/>
                <br /><br />



                <Input register={register} field={"personalityTraits"} label={"Personality Traits"}/>
                <br />
                <Input register={register} field={"ideals"} label={"Ideals"}/>
                <br />
                <Input register={register} field={"bonds"} label={"Bonds"}/>
                <br />
                <Input register={register} field={"flaws"} label={"Flaws"}/>
                <br /><br />

                <p>Health:</p>
                <Input register={register} field={"healthCurrent"} label={"Remaining HP"}/>
                <Input register={register} field={"healthMax"} label={"out of maximum*"} validations={{required: true}}/>
                {errors.healthMax?.type === 'required' && <p className={"text-red-800"}>Maximum health is required</p>}
                <br />
                <Input register={register} field={"tempHP"} label={"Temporary HP"}/>
                <br />
                <Input register={register} field={"hitDiceType"} label={"Hit dice die*"} validations={{required: true}}/>
                {errors.hitDiceType?.type === 'required' && <p className={"text-red-800"}>Hit dice die is required</p>}
                <br />
                <Input register={register} field={"hitDiceCurrent"} label={"Remaining hit dice"}/>
                <Input register={register} field={"hitDiceMax"} label={"out of maximum*"} validations={{required: true}}/>
                {errors.hitDiceMax?.type === 'required' && <p className={"text-red-800"}>Maximum hit dice is required</p>}
                <br /><br />

                <Input register={register} field={"AC"} label={"Armor Class*"} validations={{required: true}}/>
                {errors.AC?.type === 'required' && <p className={"text-red-800"}>Armor Class is required</p>}
                <br />
                <Input register={register} field={"initiative"} label={"Initiative*"} validations={{required: true}}/>
                {errors.initiative?.type === 'required' && <p className={"text-red-800"}>Initiative is required</p>}
                <br />
                <Input register={register} field={"speed"} label={"Speed*"} validations={{required: true}}/>
                {errors.speed?.type === 'required' && <p className={"text-red-800"}>Speed is required</p>}
                <br /><br />

                <p>Ability Scores*:</p>
                <br />
                <Input register={register} field={"strength"} label={"Strength (STR)"} validations={{required: true}}/>
                <Input register={register} field={"strMod"} label={"Mod"} validations={{required: true}}/>
                {errors.strength?.type === 'required' && <p className={"text-red-800"}>Strength is required</p>}
                {errors.strMod?.type === 'required' && <p className={"text-red-800"}>Strength Mod is required</p>}
                <br />
                <Input register={register} field={"dexterity"} label={"Dexterity (DEX)"} validations={{required: true}}/>
                <Input register={register} field={"dexMod"} label={"Mod"} validations={{required: true}}/>
                {errors.dexterity?.type === 'required' && <p className={"text-red-800"}>Dexterity is required</p>}
                {errors.dexMod?.type === 'required' && <p className={"text-red-800"}>Dexterity Mod is required</p>}
                <br />
                <Input register={register} field={"constitution"} label={"Constitution (CON)"} validations={{required: true}}/>
                <Input register={register} field={"conMod"} label={"Mod"} validations={{required: true}}/>
                {errors.constitution?.type === 'required' && <p className={"text-red-800"}>Constitution is required</p>}
                {errors.conMod?.type === 'required' && <p className={"text-red-800"}>Constitution Mod is required</p>}
                <br />
                <Input register={register} field={"intelligence"} label={"Intelligence (INT)"} validations={{required: true}}/>
                <Input register={register} field={"intMod"} label={"Mod"} validations={{required: true}}/>
                {errors.intelligence?.type === 'required' && <p className={"text-red-800"}>Intelligence is required</p>}
                {errors.intMod?.type === 'required' && <p className={"text-red-800"}>Intelligence Mod is required</p>}
                <br />
                <Input register={register} field={"wisdom"} label={"Wisdom (WIS)"} validations={{required: true}}/>
                <Input register={register} field={"wisMod"} label={"Mod"} validations={{required: true}}/>
                {errors.wisdom?.type === 'required' && <p className={"text-red-800"}>Wisdom is required</p>}
                {errors.wisMod?.type === 'required' && <p className={"text-red-800"}>Wisdom Mod is required</p>}
                <br />
                <Input register={register} field={"charisma"} label={"Charisma (CHA)"} validations={{required: true}}/>
                <Input register={register} field={"chaMod"} label={"Mod"} validations={{required: true}}/>
                {errors.charisma?.type === 'required' && <p className={"text-red-800"}>Charisma is required</p>}
                {errors.chaMod?.type === 'required' && <p className={"text-red-800"}>Charisma Mod is required</p>}
                <br /><br />

                <Input register={register} field={"proficiencyBonus"} label={"Proficiency Bonus*"} validations={{required: true}}/>
                {errors.proficiencyBonus?.type === 'required' && <p className={"text-red-800"}>Proficiency Bonus is required</p>}
                <br /><br />

                <p>Skills*:</p>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"} validations={{required: true}}/>
                {errors.acrobatics?.type === 'required' && <p className={"text-red-800"}>Acrobatics is required</p>}
                <br />
                <Input register={register} field={"animalHandling"} label={"Animal Handling (Wis)"} validations={{required: true}}/>
                {errors.animalHandling?.type === 'required' && <p className={"text-red-800"}>Animal Handling is required</p>}
                <br />
                <Input register={register} field={"arcana"} label={"Arcana (Int)"} validations={{required: true}}/>
                {errors.arcana?.type === 'required' && <p className={"text-red-800"}>Arcana is required</p>}
                <br />
                <Input register={register} field={"athletics"} label={"Athletics (Str)"} validations={{required: true}}/>
                {errors.athletics?.type === 'required' && <p className={"text-red-800"}>Athletics is required</p>}
                <br />
                <Input register={register} field={"deception"} label={"Deception (Cha)"} validations={{required: true}}/>
                {errors.deception?.type === 'required' && <p className={"text-red-800"}>Deception is required</p>}
                <br />
                <Input register={register} field={"history"} label={"History (Int)"} validations={{required: true}}/>
                {errors.history?.type === 'required' && <p className={"text-red-800"}>History is required</p>}
                <br />
                <Input register={register} field={"insight"} label={"Insight (Wis)"} validations={{required: true}}/>
                {errors.insight?.type === 'required' && <p className={"text-red-800"}>Insight is required</p>}
                <br />
                <Input register={register} field={"intimidation"} label={"Intimidation (Cha)"} validations={{required: true}}/>
                {errors.intimidation?.type === 'required' && <p className={"text-red-800"}>Intimidation is required</p>}
                <br />
                <Input register={register} field={"investigation"} label={"Investigation (Int)"} validations={{required: true}}/>
                {errors.investigation?.type === 'required' && <p className={"text-red-800"}>Investigation is required</p>}
                <br />
                <Input register={register} field={"medicine"} label={"Medicine (Wis)"} validations={{required: true}}/>
                {errors.medicine?.type === 'required' && <p className={"text-red-800"}>Medicine is required</p>}
                <br />
                <Input register={register} field={"nature"} label={"Nature (Int)"} validations={{required: true}}/>
                {errors.nature?.type === 'required' && <p className={"text-red-800"}>Nature is required</p>}
                <br />
                <Input register={register} field={"perception"} label={"Perception (Wis)"} validations={{required: true}}/>
                {errors.perception?.type === 'required' && <p className={"text-red-800"}>Perception is required</p>}
                <br />
                <Input register={register} field={"performance"} label={"Performance (Cha)"} validations={{required: true}}/>
                {errors.performance?.type === 'required' && <p className={"text-red-800"}>Performance is required</p>}
                <br />
                <Input register={register} field={"persuasion"} label={"Persuasion (Cha)"} validations={{required: true}}/>
                {errors.persuasion?.type === 'required' && <p className={"text-red-800"}>Persuasion is required</p>}
                <br />
                <Input register={register} field={"religion"} label={"Religion (Int)"} validations={{required: true}}/>
                {errors.religion?.type === 'required' && <p className={"text-red-800"}>Religion is required</p>}
                <br />
                <Input register={register} field={"slightOfHand"} label={"Sleight of Hand (Dex)"} validations={{required: true}}/>
                {errors.slightOfHand?.type === 'required' && <p className={"text-red-800"}>Sleight of Hand is required</p>}
                <br />
                <Input register={register} field={"stealth"} label={"Stealth (Dex)"} validations={{required: true}}/>
                {errors.stealth?.type === 'required' && <p className={"text-red-800"}>Stealth is required</p>}
                <br />
                <Input register={register} field={"survival"} label={"Survival (Wis)"} validations={{required: true}}/>
                {errors.survival?.type === 'required' && <p className={"text-red-800"}>Survival is required</p>}
                <br /><br />
                <Input register={register} field={"passivePerception"} label={"Passive Perception*"} validations={{required: true}}/>
                {errors.passivePerception?.type === 'required' && <p className={"text-red-800"}>Passive Perception is required</p>}
                <br /><br />

                <p>Saving Throws*:</p>
                <br />
                <Input register={register} field={"strengthST"} label={"Strength"} validations={{required: true}}/>
                {errors.strengthST?.type === 'required' && <p className={"text-red-800"}>Strength is required</p>}
                <br />
                <Input register={register} field={"dexterityST"} label={"Dexterity"} validations={{required: true}}/>
                {errors.dexterityST?.type === 'required' && <p className={"text-red-800"}>Dexterity is required</p>}
                <br />
                <Input register={register} field={"constitutionST"} label={"Constitution"} validations={{required: true}}/>
                {errors.constitutionST?.type === 'required' && <p className={"text-red-800"}>Constitution is required</p>}
                <br />
                <Input register={register} field={"intelligenceST"} label={"Intelligence"} validations={{required: true}}/>
                {errors.intelligenceST?.type === 'required' && <p className={"text-red-800"}>Intelligence is required</p>}
                <br />
                <Input register={register} field={"wisdomST"} label={"Wisdom"} validations={{required: true}}/>
                {errors.wisdomST?.type === 'required' && <p className={"text-red-800"}>Wisdom is required</p>}
                <br />
                <Input register={register} field={"charismaST"} label={"Charisma"} validations={{required: true}}/>
                {errors.charismaST?.type === 'required' && <p className={"text-red-800"}>Charisma is required</p>}
                <br /><br />

                <p>Attacks & Spellcasting:</p>
                <br />
                <Input register={register} field={"weaponOrSpell1"} label={"Weapon/Spell"}/>
                <Input register={register} field={"attackBonus1"} label={"Attack Bonus"}/>
                <Input register={register} field={"damageAndType1"} label={"Damage and Type"}/>
                <br />
                <Input register={register} field={"weaponOrSpell2"} label={"Weapon/Spell"}/>
                <Input register={register} field={"attackBonus2"} label={"Attack Bonus"}/>
                <Input register={register} field={"damageAndType2"} label={"Damage and Type"}/>
                <br />
                <Input register={register} field={"weaponOrSpell3"} label={"Weapon/Spell"}/>
                <Input register={register} field={"attackBonus3"} label={"Attack Bonus"}/>
                <Input register={register} field={"damageAndType3"} label={"Damage and Type"}/>
                <br /><br />

                <Input register={register} field={"featuresAndTraits"} label={"Features & Traits"}/>
                <br /><br />
                <Input register={register} field={"otherProficiencies"} label={"Other Proficiencies & Languages"}/>
                <br /><br />
                <Input register={register} field={"equipment"} label={"Equipment & Treasure"}/>
                <br />
                <Input register={register} field={"copper"} label={"Copper Pieces"}/>
                <br />
                <Input register={register} field={"silver"} label={"Silver Pieces"}/>
                <br />
                <Input register={register} field={"electrum"} label={"Electrum Pieces"}/>
                <br />
                <Input register={register} field={"gold"} label={"Gold Pieces"}/>
                <br />
                <Input register={register} field={"platinum"} label={"Platinum Pieces"}/>
                <br /><br />

                <Input register={register} field={"allies"} label={"Allies & Organizations"}/>
                <br /><br />
                <Input register={register} field={"backstory"} label={"Character Backstory"}/>
                <br /><br />

                <p>Spellcasting:</p>
                <br />
                <Input register={register} field={"spellcastingAbility"} label={"Spellcasting Ability"}/>
                <br />
                <Input register={register} field={"spellSaveDC"} label={"Spell Save DC"}/>
                <br />
                <Input register={register} field={"spellAttackBonus"} label={"Spell Attack Bonus"}/>
                <br /><br />

                <p>Cantrips (0):</p>
                <Input register={register} field={"cantrips"} label={"All Cantrips"}/>
                <br /><br />
                

                <p>Spell Level 1:</p>
                <Input register={register} field={"slotsLevel1"} label={" Total Slots"}/>
                <Input register={register} field={"slotsRemainingLevel1"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level1Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level1Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level1Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level1Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level1Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level1Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level1Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level1Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level1Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level1Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level1Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level1Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level1Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level1Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />
            

                <p>Spell Level 2:</p>
                <Input register={register} field={"slotsLevel2"} label={" Total Slots"}/>
                <Input register={register} field={"slotsRemainingLevel2"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level2Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level2Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level2Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level2Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level2Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level2Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level2Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level2Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level2Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level2Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level2Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level2Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level2Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level2Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />

                <p>Spell Level 3:</p>
                 <Input register={register} field={"slotsLevel3"} label={" Total Slots"}/>
                 <Input register={register} field={"slotsRemainingLevel3"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level3Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level3Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level3Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level3Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level3Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level3Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level3Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level3Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level3Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level3Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level3Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level3Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level3Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level3Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />

                <p>Spell Level 4:</p>
                 <Input register={register} field={"slotsLevel4"} label={" Total Slots"}/>
                 <Input register={register} field={"slotsRemainingLevel4"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level4Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level4Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level4Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level4Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level4Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level4Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level4Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level4Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level4Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level4Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level4Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level4Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level4Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level4Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />

                <p>Spell Level 5:</p>
                 <Input register={register} field={"slotsLevel5"} label={" Total Slots"}/>
                 <Input register={register} field={"slotsRemainingLevel5"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level5Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level5Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level5Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level5Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level5Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level5Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level5Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level5Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level5Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level5Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level5Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level5Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level5Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level5Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />

                <p>Spell Level 6:</p>
                 <Input register={register} field={"slotsLevel6"} label={" Total Slots"}/>
                 <Input register={register} field={"slotsRemainingLevel6"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level6Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level6Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level6Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level6Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level6Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level6Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level6Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level6Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level6Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level6Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level6Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level6Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level6Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level6Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />

                <p>Spell Level 7:</p>
                 <Input register={register} field={"slotsLevel7"} label={" Total Slots"}/>
                 <Input register={register} field={"slotsRemainingLevel7"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level7Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level7Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level7Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level7Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level7Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level7Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level7Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level7Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level7Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level7Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level7Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level7Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level7Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level7Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />

                <p>Spell Level 8:</p>
                 <Input register={register} field={"slotsLevel8"} label={" Total Slots"}/>
                 <Input register={register} field={"slotsRemainingLevel8"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level8Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level8Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level8Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level8Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level8Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level8Spell3Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level8Spell4"} label={"Spell Name"}/>
                <Input register={register} field={"level8Spell4Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level8Spell5"} label={"Spell Name"}/>
                <Input register={register} field={"level8Spell5Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level8Spell6"} label={"Spell Name"}/>
                <Input register={register} field={"level8Spell6Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level8Spell7"} label={"Spell Name"}/>
                <Input register={register} field={"level8Spell7Prepared"} label={"Prepared?"}/>
                <br /><br />

                <p>Spell Level 9:</p>
                 <Input register={register} field={"slotsLevel9"} label={" Total Slots"}/>
                 <Input register={register} field={"slotsRemainingLevel9"} label={"Slots Remaining"}/>
                <br /><br />
                <Input register={register} field={"level9Spell1"} label={"Spell Name"}/>
                <Input register={register} field={"level9Spell1Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level9Spell2"} label={"Spell Name"}/>
                <Input register={register} field={"level9Spell2Prepared"} label={"Prepared?"}/>
                <br />
                <Input register={register} field={"level9Spell3"} label={"Spell Name"}/>
                <Input register={register} field={"level9Spell3Prepared"} label={"Prepared?"}/>
                <br /><br />




            </Form>
        </div>
    );
}

export default CharacterCreationSheet;
