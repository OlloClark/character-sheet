import {Form, Input} from './'
import { useForm } from "react-hook-form";

function CharacterCreationSheet() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
            Character Creation Sheet for Dungeons & Dragons 5e
            </h1>
            <br /><br />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <p>Basic Info:</p>
                <br />
                <Input register={register} field={"playerName"} label={"Player Name"}/>
                <br />
                <Input register={register} field={"characterName"} label={"Character Name"}/>
                <br />
                <Input register={register} field={"classLevel"} label={"Class & Level"}/>
                <br />
                <Input register={register} field={"background"} label={"Background"}/>
                <br />
                <Input register={register} field={"race"} label={"Race"}/>
                <br />
                <Input register={register} field={"alignment"} label={"Alignment"}/>
                <br />
                <Input register={register} field={"experiencePoints"} label={"Experience Points"}/>
                <br /><br />

                <Input register={register} field={"personalityTraits"} label={"Personality Traits"}/>
                <br />
                <Input register={register} field={"ideals"} label={"Ideals"}/>
                <br />
                <Input register={register} field={"bonds"} label={"Bonds"}/>
                <br />
                <Input register={register} field={"flaws"} label={"Flaws"}/>
                <br /><br />

                <p>Ability Scores:</p>
                <br />
                <Input register={register} field={"strength"} label={"Strength (STR)"}/>
                <Input register={register} field={"strMod"} label={"Mod"}/>
                <br />
                <Input register={register} field={"dexterity"} label={"Dexterity (DEX)"}/>
                <Input register={register} field={"dexMod"} label={"Mod"}/>
                <br />
                <Input register={register} field={"constitution"} label={"Constitution (CON)"}/>
                <Input register={register} field={"conMod"} label={"Mod"}/>
                <br />
                <Input register={register} field={"intelligence"} label={"Intelligence (INT)"}/>
                <Input register={register} field={"intMod"} label={"Mod"}/>
                <br />
                <Input register={register} field={"wisdom"} label={"Wisdom (WIS)"}/>
                <Input register={register} field={"wisMod"} label={"Mod"}/>
                <br />
                <Input register={register} field={"charisma"} label={"Charisma (CHA)"}/>
                <Input register={register} field={"chaMod"} label={"Mod"}/>
                <br /><br />

                <Input register={register} field={"proficiencyBonus"} label={"Proficiency Bonus"}/>
                <br /><br />

                <p>Skills:</p>
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />
                <Input register={register} field={"acrobatics"} label={"Acrobatics (Dex)"}/>
                <br />



            </Form>
        </div>
    );
}

export default CharacterCreationSheet;
