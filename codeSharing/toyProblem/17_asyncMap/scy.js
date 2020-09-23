const asyncMap = async function (tasks, callback) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];
  for (let task of tasks) {
    result.push(
      await new Promise((resolve, reject) => {
        task(resolve);
      })
    );
  }
  callback(result);
};
