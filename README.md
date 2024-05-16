# Test README.md

This is an example of workflow that builds Rust projects for multiple platforms.
This idea and workflow was taken from https://github.com/BurntSushi/ripgrep. Great repository! Thanks.

## Notes

In the `release.yml` change the package name in this example from `clap_cli` to `<YOUR_PROJECT_NAME>`
Add `README.md`, `GUIDE.md` and `FAQ` to the root of the repository
Add `description` and `licence` to Cargo.toml this is something that your project needs in general and `build-release-debian` will fail.
Change directory for various files you want to ship with project:
```bash
    - name: Creating directory for archive
      shell: bash
      run: |
        mkdir -p "$ARCHIVE"/{complete,doc}
        cp "$BIN" "$ARCHIVE"/
        cp {README.md,LICENSE-MIT} "$ARCHIVE"/
        cp {FAQ.md,GUIDE.md} "$ARCHIVE"/doc/
```
Add `Debian` profile to your `Cargo.toml`:
```bash
[profile.deb]
inherits = "release"
debug = false
```
For `Debian` build we need to add:
```bash
clap-cli # with dash even though our project name is clap-cli, it is just the way how build is built clap-cli_0.20.0-1_amd64.deb
```

## Publishing new version

Step 1:
Change `Cargo.toml` version field `version = "0.18.0"`

Step 2: 
Push version change to remote master branch

Step 3:
Add `Release` tag
```bash
git tag -a 0.18.0 -m "Release version 0.18.0"
```

Step 4:
Push the release tag to remote.
```bash
git push origin 0.18.0 
```
Release workflow is triggered by `tag` push.

# How to remove tags 

Locally:
```bash
git tag -d 0.20.0
```

Remote:
```bash
git push origin --delete 0.20.0
```
