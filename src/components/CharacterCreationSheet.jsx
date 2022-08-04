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
                <Input register={register} field={"firstName"} label={"First Name"}/>
                <Input register={register} field={"lastName"} label={"Last Name"}/>
            </Form>
        </div>
    );
}

export default CharacterCreationSheet;
