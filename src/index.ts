import "reflect-metadata";
import chalk from "chalk";
import { validateSync } from 'class-validator';

import { Model } from 'class-validator-test-common';

// Create models
const models = { valid: new Model, invalid: new Model };

// Insert data
models.valid.id = 1;
models.invalid.id = <any>'invalid';

// Execute validation
for ( const key in models ) {
    const model = models[key];
    
    // Validate model
    console.log(chalk.black.bgWhite(`Validating models[${key}]...`), model);
    const errors = validateSync(model);

    // Output validation results
    if (errors.length > 0) {
        console.log(chalk.redBright("validation failed. errors: "), errors);
    } else {
        console.log(chalk.green("validation succeed"));
    }
    console.log("\n");          
}  