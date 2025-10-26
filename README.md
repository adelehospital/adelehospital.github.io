# Blog Adèle

## Requirements

- [pnpm](https://pnpm.io/installation)

## Develop

### Start dev server

Open a terminal, move to the `adelehospital.github.io` repository, and run the command:

```bash
pnpm dev --open
```

It will open the website in a new browser tab.

### Start CMS

Open another terminal window, and run this command:

```bash
pnpm cms
```

You can then access the CMS at this address:

`http://localhost:5173/admin/index.html`

You can now edit the content of the website locally!

## Ready to publish?

### Build the website

Run that command to build the website

```bash
pnpm build
```

### Preview

Then preview the built website by running:

```bash
pnpm preview --open
```

It will open the website in a new broser tab. You can then test if it behaves the way you want it to. Users will see exactly that website when published.

### Push to Github

If you are happy with the end result, you can now send your code to Github.

#### Add files to git

```bash
git add --all
```

#### Create a commit

```bash
git commit -m "<describe what your commit does (i.e. the changes you made in the code)>"
```

#### Push your code to Github

```bash
git push
```

#### Enjoy

Give it a few minutes, and you should be able to admire your updated website at `https://www.adelehospital.fr`.
