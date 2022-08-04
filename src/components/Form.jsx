
function Form({children, onSubmit}) {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <input type="submit" />
        </form>
    );
}

export default Form;
