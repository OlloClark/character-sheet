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
                <br /><br />
                <Input register={register} field={"characterName"} label={"Character Name*"} validations={{required: true}}/>
                {errors.characterName?.type === 'required' && <p className={"text-red-800"}>Character name is required</p>}
                <br /><br />
                <Input register={register} field={"class"} label={"Class*"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"subclass"} label={"subclass*"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"level"} label={"Level"}/>
                <br />
                <Input register={register} field={"background"} label={"Background*"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"race"} label={"Race*"} validations={{required: true}}/>
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
                <Input register={register} field={"healthMax"} label={"out of maximum*"}/>
                <br />
                <Input register={register} field={"tempHP"} label={"Temporary HP"}/>
                <br />
                <Input register={register} field={"hitDiceType"} label={"Hit dice die*"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"hitDiceCurrent"} label={"Remaining hit dice"}/>
                <Input register={register} field={"hitDiceMax"} label={"out of maximum*"} validations={{required: true}}/>
                <br /><br />

                <Input register={register} field={"AC"} label={"Armor Class*"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"initiative"} label={"Initiative*"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"speed"} label={"Speed*"} validations={{required: true}}/>
                <br /><br />

                <p>Ability Scores*:</p>
                <br />
                <Input register={register} field={"strength"} label={"Strength (STR)"} validations={{required: true}}/>
                <Input register={register} field={"strMod"} label={"Mod"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"dexterity"} label={"Dexterity (DEX)"} validations={{required: true}}/>
                <Input register={register} field={"dexMod"} label={"Mod"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"constitution"} label={"Constitution (CON)"} validations={{required: true}}/>
                <Input register={register} field={"conMod"} label={"Mod"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"intelligence"} label={"Intelligence (INT)"} validations={{required: true}}/>
                <Input register={register} field={"intMod"} label={"Mod"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"wisdom"} label={"Wisdom (WIS)"} validations={{required: true}}/>
                <Input register={register} field={"wisMod"} label={"Mod"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"charisma"} label={"Charisma (CHA)"} validations={{required: true}}/>
                <Input register={register} field={"chaMod"} label={"Mod"} validations={{required: true}}/>
                <br /><br />

                <Input register={register} field={"proficiencyBonus"} label={"Proficiency Bonus*"} validations={{required: true}}/>
                <br /><br />

                <p>Skills*:</p>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"animalHandling"} label={"Animal Handling (Wis)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"arcana"} label={"Arcana (Int)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"athletics"} label={"Athletics (Str)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"deception"} label={"Deception (Cha)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"history"} label={"History (Int)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"insight"} label={"Insight (Wis)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"intimidation"} label={"Intimidation (Cha)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"investigation"} label={"Investigation (Int)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"medicine"} label={"Medicine (Wis)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"nature"} label={"Nature (Int)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"perception"} label={"Perception (Wis)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"performance"} label={"Performance (Cha)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"persuasion"} label={"Persuasion (Cha)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"religion"} label={"Religion (Int)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"slightOfHand"} label={"Sleight of Hand (Dex)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"stealth"} label={"Stealth (Dex)"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"survival"} label={"Survival (Wis)"} validations={{required: true}}/>
                <br /><br />
                <Input register={register} field={"passivePerception"} label={"Passive Perception*"} validations={{required: true}}/>
                <br /><br />

                <p>Saving Throws*:</p>
                <br />
                <Input register={register} field={"strengthST"} label={"Strength"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"dexterityST"} label={"Dexterity"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"constitutionST"} label={"Constitution"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"intelligenceST"} label={"Intelligence"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"wisdomST"} label={"Wisdom"} validations={{required: true}}/>
                <br />
                <Input register={register} field={"charismaST"} label={"Charisma"} validations={{required: true}}/>
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
