import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema/type-defs.js";
import { resolvers } from "./schema/resolvers.js";
import mongoose from "mongoose";

const MONGODB = "mongodb+srv://lokesh:lokesh@cluster0.toebowq.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0";

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(MONGODB, {})
    .then(()=>{
        console.log("MongoDB Connection Successful");
        return server.listen({port: 4000});
    })
    .then((res)=>{
        console.log(`Server running at ${res.url}`);
    })
    .catch(err=>console.log(`error: ${err}`));
