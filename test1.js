const candidate = {
  name: "Pavel Liasetski",
  welcome() {
    console.log(`Welcome ${this.name} to Inspectorio`);
  },
};

const welcome = candidate.welcome;
welcome();
// Actual result: it prints 'Welcome  to Inspectorio'
// Expected result: it prints 'Welcome name of candidate to Inspectorio'
