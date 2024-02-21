function getUserData(callback) {
    setTimeout(function() {
        const user = {
            id: 1,
            username: 'john_doe',
            email: 'john@example.com'
        };
        callback(user);
    }, 1000);
}

// Example usage
getUserData(function(user) {
    console.log('User data received:', user);
});