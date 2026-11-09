<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

Legal documents live in `src/content/legal` and use `LegalMarkdownPage` with `legalHead` in dedicated routes; the DPA is linked from the CGV and shared footer so contractual annexes remain directly accessible.
Brand identity (name, contacts, legal identifiers) is read from `src/lib/company.ts`; brand artwork is served through `src/assets/*.asset.json` pointers, and the browser-tab icon is a square crop kept in `public/favicon.png`.
