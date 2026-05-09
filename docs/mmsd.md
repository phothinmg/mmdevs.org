# MMSD CLI

## Features

1. Check whether the subdomain you want to register is available.
2. Generate a registration JSON file.

## CLI Usage

```text

MMSD CLI.

Usage:

    mmsd <sub_domain>            Check subdomain availability and generate subdomains/<sub_domain>.json

```

### CLI Examples

- **Argument Error:**

Run:

```sh
npx mmsd
```

Return:

```text
[Error]
One CLI argument is required. Example: npx mmsd <sub_domain>.
```

Run:

```sh
npx mmsd foo bar biz
```

Return:

```text
[Error]
Only one CLI argument is allowed. Example: npx mmsd <sub_domain>.
```

- **Subdomain Not Available:**

Run:

```sh
npx mmsd example
```

Return:

```text
[Subdomain Not Available]
Subdomain "example" is registered by another user. Please try another name.
```

Run:

```sh
npx mmsd doc
```

Return:

```text
[Subdomain Not Available]
Subdomain "doc" is reserved by MMDEVS.ORG. Please try another name.
```

- **Available Subdomain:**

Run:

```sh
npx mmsd phowa
```

Return:

```text
[Success]
Register JSON file "subdomains/phowa.json" was created.
```

- **Existing File:**

Run:

```sh
npx mmsd phowa
```

Return:

```text
[Error]
File "subdomains/phowa.json" already exists.
```

- **Network Error:**

Run:

```sh
npx mmsd example
```

Return:

```text
[Network Error]
fetch failed. Please try again later.
```
