<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD041 -->
<p align="center">
<img src="https://cdn.suseejs.org/logo/mmdevs.webp" width="160" height="160" alt="mmdevs" style="border-radius:50%" />
</p>
<p align="center">Community-managed subdomains for developers from Myanmar.</p>

---

This repository is where you can request, update, or remove a `*.mmdevs.org` subdomain.Contributors submit a pull request with a JSON file in `subdomains/`, then maintainers review and apply DNS changes.

## At a glance

1. Follow the steps in [Quit Start](#quick-start).
2. Add or edit one JSON file in `subdomains/`.
   [See detail about using mmsd cli to add a new JSON file](https://github.com/phothinmg/mmdevs.org/wiki/MMSD-CLI)
3. Open a pull request.
4. Maintainers validate and apply DNS on approval.

## Who can request a subdomain

1. You are a GitHub user from Myanmar.
2. You are requesting a real project or personal page with reasonable content.
3. You can prove ownership or control of the target site.

Requests for empty, misleading, or abusive pages are rejected.

## Supported CNAME targets

Only these targets are accepted:

1. GitHub Pages user domain: `<username>.github.io`
2. Vercel default CNAME: `cname.vercel-dns.com`
3. Vercel project CNAME: `<code>.vercel-dns-<number>.com`

Validation is enforced by [schema/mmdevs.json](schema/mmdevs.json).

## Repository structure

```text
schema/
  mmdevs.json          # JSON schema used for validation
subdomains/
  <name>.json          # One file per requested subdomain
example.jsonc          # Full guide and example format
scripts/
  commit.js            # Interactive helper for commit message + push
  hooksInstall.js      # Install git hooks path and permissions
```

## Quick start

1. Fork this repository.
2. Create a branch.
3. Add or edit one file in `subdomains/`.
4. Open a pull request.

## Request format

Each request file must be JSON and match this shape:

```json
{
  "$schema": "../schema/mmdevs.json",
  "sub_domain": "example",
  "cname_value": "example.github.io",
  "request_type": "register",
  "cfp": false
}
```

### Field reference

1. `sub_domain` (required)
   The name part of `<sub_domain>.mmdevs.org`.
2. `cname_value` (required)
   Must be one of the supported CNAME targets.
3. `request_type` (required)
   One of: `register`, `update`, `remove`.
4. `cfp` (optional)
   Cloudflare proxy flag. In current validation flow, this is treated as `false`.

## Naming rules

1. File extension must be `.json`.
2. Filename should match `sub_domain`.
   Example: `sub_domain: "foo"` -> `subdomains/foo.json`.

## Workflows

### Register a new subdomain

1. Create `subdomains/<sub_domain>.json`.
2. Set `request_type` to `register`.
3. Set `cname_value` to your GitHub Pages or Vercel target.
4. Open a pull request.

### Update an existing subdomain

1. Edit the existing file in `subdomains/`.
2. Update `cname_value`.
3. Set `request_type` to `update`.
4. Open a pull request.

### Remove a subdomain

1. Edit the existing file in `subdomains/`.
2. Set `request_type` to `remove`.
3. Open a pull request.

## GitHub Pages setup notes

If your target is GitHub Pages:

1. Use `<username>.github.io` as `cname_value`.
2. Configure your repository Pages settings correctly.
3. If you use branch-based publishing, include a `CNAME` file with your subdomain.
4. If you use workflow-based publishing, set the custom domain in repository Pages settings.

## Vercel setup notes

If your target is Vercel:

1. Use the CNAME target shown by Vercel.
2. Supported values include `cname.vercel-dns.com` and `<code>.vercel-dns-<number>.com`.

## Local helper scripts

Install hook configuration:

```bash
npm run hooks:install
```

Interactive commit helper:

```bash
node scripts/commit.js
```

The commit helper will:

1. Ask for request type (`Register`, `Update`, `Remove`).
2. Ask for a commit message value (usually your subdomain name).
3. Commit with format: `<Type> : <name>.mmdevs.org`.
4. Push to your current branch.

## Review and validation process

### Automated checks (GitHub Actions)

1. Pull request template/format checks.
2. Contributor location checks.
3. JSON/request validation for changed files.

### Maintainer review

1. Verify site/repository ownership and content.
2. Approve valid requests.
3. Merge and apply DNS updates.

## Notes

1. Keep requests focused: one subdomain change per PR is preferred.
2. Make sure your requested subdomain points to active content before submitting.

## Related docs

1. Full example and detailed notes: [example.jsonc](example.jsonc)
2. JSON schema: [schema/mmdevs.json](schema/mmdevs.json)

## License

This project uses a split-license model:

1. Code and automation
   Licensed under Apache License 2.0 (Apache-2.0). See [LICENSE](LICENSE).
2. Subdomain registry data and request records in `subdomains/`
   Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0). See [LICENSE-DATA](LICENSE-DATA).

In short: source code is Apache-2.0, and subdomain JSON request data is CC BY 4.0.

### SPDX

Use these SPDX identifiers for tooling and scans:

1. Default repository code: `Apache-2.0`
2. Data files in `subdomains/`: `CC-BY-4.0`

<!-- [Fork](https://github.com/phothinmg/mmdevs.org/fork) this repository -->
