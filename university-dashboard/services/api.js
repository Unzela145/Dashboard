export const fetchStudentData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: 'unzela',
          id: '123',
        },
        {
          name: 'umaima',
          id: '456',
        },
        {
          name: 'rabia',
          id: '789',
        },
      ]);
    }, 2000); // Simulate 2 seconds network latency
  });
};

