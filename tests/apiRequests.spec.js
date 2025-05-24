import { test, expect, request } from '@playwright/test';

// GET: Get user
/*test('GET: Fetch a user', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users?page=2');
  expect(response.status()).toBe(200);
  const text = await response.text();
  expect(text).toContain('Michael')
  console.log(await response.json()) 
});


test('POST: Create user on ReqRes with API key', async ({ request }) => {
  const response = await request.post('https://reqres.in/api/users', {
    headers: {
      'Authorization': 'Bearer your_api_key_here',
      'Content-Type': 'application/json'
    },
    data: {
      name: 'John',
      job: 'developer'
    }
  });

  const body = await response.json();
  console.log(body); // for debugging

  expect(response.status()).toBe(201);
  expect(body).toHaveProperty('id');
  expect(body).toHaveProperty('createdAt');
});

// POST: Create a user



// PUT: Update user completely
test('PUT: Update a user', async ({ request }) => {
  const response = await request.put('https://reqres.in/api/users/2', {
    data: {
      name: 'Jane',
      job: 'manager'
    }
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.name).toBe('Jane');
});

// PATCH: Partially update a user
test('PATCH: Partially update a user', async ({ request }) => {
  const response = await request.patch('https://reqres.in/api/users/2', {
    data: {
      job: 'senior developer'
    }
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.job).toBe('senior developer');
});

// DELETE: Delete a user
test('DELETE: Remove a user', async ({ request }) => {
  const response = await request.delete('https://reqres.in/api/users/2');
  expect(response.status()).toBe(204); // No content
});
*/
test('GET: Retrieve a post', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.id).toBe(1);
});

test('POST: Create a new post', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'foo',
      body: 'bar',
      userId: 1
    }
  });
  expect(response.status()).toBe(201);
  const data = await response.json();
  expect(data).toHaveProperty('id');
});

test('PUT: Update a post', async ({ request }) => {
  const response = await request.put('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      id: 1,
      title: 'updated title',
      body: 'updated body',
      userId: 1
    }
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.title).toBe('updated title');
})

test('PATCH: Partially update a post', async ({ request }) => {
  const response = await request.patch('https://jsonplaceholder.typicode.com/posts/1', {
    data: {
      title: 'patched title'
    }
  });
  expect(response.ok()).toBeTruthy();
  const data = await response.json();
  expect(data.title).toBe('patched title');
})
test('DELETE: Remove a post', async ({ request }) => {
  const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
});

