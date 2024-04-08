import { FrogFieldType, Schema } from "frogdb";

const UserSchema = await Schema({
    name: "User",
    fields: [
        {
            name: "name",
            type: FrogFieldType.String,
            required: true,
        },
        {
            name: "email",
            type: FrogFieldType.String,
            required: true,
        },
        {
            name: "password",
            type: FrogFieldType.String,
            required: true,
        },
        {
            name: "age",
            type: FrogFieldType.Number,
            required: true,
        },
    ]
})

export default UserSchema