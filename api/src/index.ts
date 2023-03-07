import 'dotenv/config';
import { CONSOLE_COLOR } from './constant';
import { connectDB } from './config/mongodb';
import app from './app';


async function main() {
  try {
    await connectDB();
  } catch (err) {
    process.exit(1);
  }

  app.set('port', process.env.PORT || 2000);
  app.listen(app.get('port'), () => {
    console.log(
      CONSOLE_COLOR.cyan,
      `Server Running on PORT:  ${app.get('port')} by worker ${process.pid}`
    );
  });
}
main();
export default app;


