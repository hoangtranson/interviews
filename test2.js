(function () {
  const listOfStudents = [
    { id: 1, firstName: "John", age: 25, score: 80.5, class: 'A1' },
    { id: 2, firstName: "Anna", lastName: "Cameron", age: 32, score: 83.0, class: 'A2' },
    { id: 3, firstName: "Jeffrey", lastName: "Way", age: 28, score: null, class: 'A1' },
    { id: 4, firstName: "Ava", lastName: "Brown", age: 30, score: 94.27, class: 'A3'},
    { id: 5, firstName: "Abraham", lastName: "Doe", age: 36, score: 63.1, class: 'A2' },
  ];

  // #1. Calculate total score
  const totalScore = (students) => {
    // TODO: Implement
  };

  // #2. Attach uppercased `fullName` property to every student
  // e.g. { firstName: "John", lastName: "Doe", age: 25, score: 80.5, fullName: 'JOHN DOE' }
  // IMPORTANT NOTE: You're not allowed to mutate the input array
  const appendFullNameProperty = (students) => {
    // TODO: Implement
  };

  /* #3. Group students by their class name, in an object, which key is the class name.
  e.g.
    {
      A1: [
        { id: 1, firstName: "John", lastName: "Doe", age: 25, score: 80.5, class: 'A1' },
        { id: 3, firstName: "Jeffrey", lastName: "Way", age: 28, score: 79.13, class: 'A1' }
      ],
      A2: [
        { id: 2, firstName: "Anna", lastName: "Cameron", age: 32, score: 83.0, class: 'A2' },
        { id: 5, firstName: "Abraham", lastName: "Doe", age: 36, score: 63.1, class: 'A2' }
      ],
      A3: [
        { id: 4, firstName: "Ava", lastName: "Brown", age: 30, score: 94.27, class: 'A3'}
      ]
    }
  */
  const groupByClass = (students) => {
    // TODO: Implement
  }

  /* #4. find the student who has the highest score in his/her class.
  To reduce the complexity, let's assume that all students have different scores.
  e.g.
    findStudentWithHighestScore(students, 'A2')
    => { id: 2, firstName: "Anna", lastName: "Cameron", age: 32, score: 83.0, class: 'A2' }
  */
  const findStudentWithHighestScore = (students, className) => {
    // TODO: Implement
  }
  
  console.log("#1", totalScore(listOfStudents));
  console.log("#2", appendFullNameProperty(listOfStudents));
  console.log("#3", groupByClass(listOfStudents));
  console.log("#4", findStudentWithHighestScore(listOfStudents, 'A2'));
})();