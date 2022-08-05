function Input({register, field, label, validations = {}}) {
    return (
        <label>
            {label}
            <input {...register(field, validations)} />
        </label>

    );
}

export default Input;
