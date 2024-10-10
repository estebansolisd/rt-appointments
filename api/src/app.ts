import { userRouter } from './routes/userRoutes';
import sequelize from './config/database';
import dealsRoutes from './routes/dealRoutes';
import customersRoutes from './routes/customerRoutes';
import todosRoutes from './routes/todoRoutes';
import express from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schema';
import { resolvers } from './graphql/resolvers';


const app = express();
const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', userRouter);
app.use('/api', dealsRoutes);
app.use('/api', customersRoutes);
app.use('/api', todosRoutes);


sequelize.sync().then(() => {
  console.log('Database synced');
}).catch((err) => {
  console.error('Failed to sync database:', err);
});


app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true, // Enable GraphiQL interface for testing
}));

export default app;


