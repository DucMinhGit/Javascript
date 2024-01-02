var users = [
    {
        id: 1,
        name: 'Duc Minh',
    },
    {
        id: 2,
        name: 'Minh Hoang',
    },
    {
        id: 3,
        name: 'Cong Minh',
    }
];

var comments = [
    {
        id: 1,
        user_id: 2,
        content: 'What are your goals for 2024?',
    },
    {
        id: 2,
        user_id: 1,
        content: 'I have two goals',
    },
];

function getComments() {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(comments);
        }, 1000);
    })
}

function getUsersByIds(userIds) {
    return new Promise((resolve) => {
        var result = users.filter((user) => userIds.includes(user.id));
        setTimeout(() => {
            resolve(result);
        }, 1000);
    })
}

getComments()
    .then((comments) => {
        var userIds = comments.map((comment) => comment.id);
        return getUsersByIds(userIds)
                .then((users) => {
                    return {
                        users: users,
                        comments: comments
                    };
                });
    })
    .then((data) => {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(comment => {
            var user = data.users.find((user) => user.id === comment.user_id);
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;
    })