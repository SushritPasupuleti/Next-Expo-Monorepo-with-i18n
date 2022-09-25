# Next Expo Monorepo with i18n

Using i18n for internationalization in a Solito Monorepo with a Next and Expo app.

Repo was bootstrapped using `create-solito-app` and then modified to include i18n.

> Pull Requests are welcome!

## Getting Started

The locales used for this example are stored in the `locales` directory. This directory will then be copied into the `next` and `expo` apps later.

In `next`, copy to `public/locales` and in `expo`, copy to `locales`.

Supported locales are `en` and `kl` which stand for English and Klingon respectively (PS Klingon translations may not be perfect).

Please ensure that you always pass `I18nProvider` to a component being imported from your `packages` and pass the current `i18n` instance down..

