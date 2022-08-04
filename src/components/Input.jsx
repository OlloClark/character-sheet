function Input({register, field, label}) {
    return (
        <label>
            {label}
            <input {...register(field)} />
        </label>

    );
}

export default Input;
