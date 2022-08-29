const store = require("./rtk/app/store");
const { fetchPost } = require("./rtk/features/post/postSlice");
const ejs = require('ejs');

store.subscribe(() => {
     // console.log(store.getState());
});

// store.dispatch(fetchPost(10));
const express = require('express')
const app = express()
const port = 9000

app.get('/', async (req, res) => {
     res.send('Search post by id at the end of url . For example - /2 (Here 2 is post_id)')
})

app.get('/:postId', async (req, res) => {
  await store.dispatch(fetchPost(req.params.postId))
  let templateFile = __dirname + '/PostById/postById.ejs';
    let data = store.getState();
    let html = await ejs.renderFile(templateFile, data);
  res.send(html)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
