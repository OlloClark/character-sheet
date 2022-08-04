import {Form, Input} from './'
import { useForm } from "react-hook-form";

function CharacterCreationSheet() {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
            Character Creation Sheet Placeholder
            </h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
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

                <Input register={register} field={"strength"} label={"Strength (STR)"}/>
                <br />
                <Input register={register} field={"dexterity"} label={"Dexterity (DEX)"}/>
                <br />
                <Input register={register} field={"constitution"} label={"Constitution (CON)"}/>
                <br />
                <Input register={register} field={"intelligence"} label={"Intelligence (INT)"}/>
                <br />
                <Input register={register} field={"wisdom"} label={"Wisdom (WIS)"}/>
                <br />
                <Input register={register} field={"charisma"} label={"Charisma (CHA)"}/>
                <br /><br />

            </Form>
        </div>
    );
}

export default CharacterCreationSheet;
