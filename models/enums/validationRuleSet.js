// Dummy RuleSet

const dummyRuleSet = {
    name: 'dummy',
    method: 'POST',
    endpoint: '/dummy/',
    body: [
        {
            name: 'dummyField',
            type: 'string',
            required: true,
            minLength: 3,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/
        }
    ],
    query: null
}

// Authentication RuleSet

const loginRuleSet = {
    name: 'login',
    method: 'POST',
    endpoint: '/login',
    body: [
        {
            name: 'username',
            type: 'string',
            required: true,
            minLength: 3,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
        {
            name: 'password',
            type: 'string',
            required: true,
            minLength: 8,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        }
    ],
    query: null
}

const registerRuleSet = {
    name: 'register',
    method: 'POST',
    endpoint: '/register',
    body: [
        {
            name: 'username',
            type: 'string',
            required: true,
            minLength: 3,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
        {
            name: 'password',
            type: 'string',
            required: true,
            minLength: 8,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
    ],
    query: null
}


// ToDo RuleSet

const readTodoRuleSet = {
    name: 'readTodo',
    method: 'GET',
    endpoint: '/todo',
    body: null,
    query: [
        {
            name: 'id',
            type: 'number',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: null,
        }
    ]
}

const createTodoRuleSet = {
    name: 'createTodo',
    method: 'POST',
    endpoint: '/todo',
    body: [
        {
            name: 'title',
            type: 'string',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
        {
            name: 'description',
            type: 'string',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
        {
            name: 'status',
            type: 'string',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
    ],
    query: null
}

const updateTodoRuleSet = {
    name: 'updateTodo',
    method: 'PUT',
    endpoint: '/todo',
    body: [
        {
            name: 'id',
            type: 'number',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: null,
        },
        {
            name: 'title',
            type: 'string',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
        {
            name: 'description',
            type: 'string',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: /^[a-zA-Z0-9]+$/,
        },
        {
            name: 'status',
            type: 'number',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: null
        },
    ],
    query: [
        {
            name: 'id',
            type: 'number',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: null
        }
    ]
}

const deleteTodoRuleSet = {
    name: 'deleteTodo',
    method: 'DELETE',
    endpoint: '/todo',
    body: null,
    query: [
        {
            name: 'id',
            type: 'number',
            required: true,
            minLength: 1,
            maxLength: 20,
            regex: null
        }
    ]
}



module.exports = {
    ValidationRuleSet: [
        dummyRuleSet,
        loginRuleSet,
        registerRuleSet,
        readTodoRuleSet,
        createTodoRuleSet,
        updateTodoRuleSet,
        deleteTodoRuleSet
    ]
}


