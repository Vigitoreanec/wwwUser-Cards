export function User({user}) {
    const { id, name, email, phone} = user;
    return <fieldset className="fieldset">

        <ol>
            <li>id:{id}</li>
            <li>name:{name}</li>
            <li>email:{email}</li>
            <li>phone:{phone}</li>
        </ol>
    </fieldset>
}