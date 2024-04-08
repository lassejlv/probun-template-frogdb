// Import the necessary modules
import { FrogDB } from "frogdb";
import { ProBun } from "probun";
import UserSchema from "./schemas/User";

// Generate the schema
FrogDB().generate([UserSchema])

// Create the app
const app = new ProBun({
    port: parseInt(process.env.PORT as string) || 3000,
    routes: "routes",
    logger: true,
})

// Start the app
app.start()