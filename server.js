import app from './app.js';
import chalk from 'chalk';

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(chalk.green("Server is running on port 3000: Success"));
});