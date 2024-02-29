function fetchUserData(userId, callback) {
    
    setTimeout(() => {
      const userData = { id: userId, name: `User ${userId}` };
      callback(userData);
    }, 1000);
  }
  
  function fetchAdditionalDetails(userData, callback) {
    
    setTimeout(() => {
      userData.email = `user${userData.id}@example.com`;
      callback(userData);
    }, 1000);
  }
  
  function displayResult(result) {
    console.log('Final Result:', result);
  }
  
  // Callback hell: Nested callbacks
  fetchUserData(1, user1 => {
    fetchAdditionalDetails(user1, user1WithDetails => {
      fetchUserData(2, user2 => {
        fetchAdditionalDetails(user2, user2WithDetails => {
            fetchUserData(3 ,user3 => {
                fetchAdditionalDetails(user3, user3WithDetails => {
          displayResult([user1WithDetails, user2WithDetails, user3WithDetails]);
        });
      });
    });
  });
});
 });
  //promise chain
  
  function fetchUserDataPromise(userId) {
    return new Promise(resolve => {
      
      setTimeout(() => {
        const userData = { id: userId, name: `User ${userId}` };
        resolve(userData);
      }, 1000);
    });
  }
  
  function fetchAdditionalDetailsPromise(userData) {
    return new Promise(resolve => {
      
      setTimeout(() => {
        userData.email = `user${userData.id}@example.com`;
        resolve(userData);
      }, 1000);
    });
  }
  
  // Promise chain with Promise.all
  Promise.all([
    fetchUserDataPromise(1).then(user1 => fetchAdditionalDetailsPromise(user1)),
    fetchUserDataPromise(2).then(user2 => fetchAdditionalDetailsPromise(user2))
  ])
    .then(results => {
      console.log('Final Result:', results);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  
//Asyn await
async function fetchData() {
    try {
      const user1 = await fetchUserDataPromise(1);
      const user1WithDetails = await fetchAdditionalDetailsPromise(user1);
  
      const user2 = await fetchUserDataPromise(2);
      const user2WithDetails = await fetchAdditionalDetailsPromise(user2);
  
      const finalResult = [user1WithDetails, user2WithDetails];
      console.log('Final Result:', finalResult);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the async function
  fetchData();
  
  