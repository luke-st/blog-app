const defaultStoreData = JSON.parse(JSON.stringify({
    "users": {
      "usertwo": {
        "name": "John",
        "posts": [
          null,
          {
            "body": "another random block of test",
            "createdAt": 1596568462,
            "subtitle": "test2",
            "title": "Test"
          },
          {
            "body": "this is another block of text",
            "createdAt": 159656005,
            "subtitle": "another subtitle",
            "title": "How to breathe fire"
          },
          {
            "body": "wow",
            "createdAt": 1596568460,
            "subtitle": "Firebreathing was a mistake",
            "title": "another title"
          }
        ]
      },
      "userone": {
        "name": "Luke",
        "posts": [
          null,
          {
            "body": "this is a body of text that would appear on the website",
            "createdAt": 1596568449,
            "subtitle": "Test Subtitle",
            "title": "Something else"
          }
        ]
      }
    }
}))

export default defaultStoreData