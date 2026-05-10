# ID CARD Store

Мінімалістичний сайт для продажу колекційних ID-карток. Покупець обирає картку, вводить ім'я, прізвище та телефон, після чого заявка надсилається в Telegram-бот.

## Запуск

```powershell
npm start
```

Сайт відкриється за адресою:

```text
http://localhost:3000
```

## Настройка Telegram

1. Створіть бота через `@BotFather` і отримайте `TELEGRAM_BOT_TOKEN`.
2. Дізнайтеся `TELEGRAM_CHAT_ID`, куди мають приходити заявки.
3. Скопіюйте `.env.example` у `.env`.
4. Заповніть значення:

```env
PORT=3000
TELEGRAM_BOT_TOKEN=1234567890:your_bot_token_here
TELEGRAM_CHAT_ID=123456789
```

Після цього перезапустіть сервер. У Telegram буде приходити вибрана картка, ім'я, прізвище та номер телефону.

## Перед хостингом

Скопіюйте фотографії карток у проект:

```powershell
npm run prepare:assets
```

Після цього у папці `public/assets` мають з'явитися файли:

```text
gojo-front.jpg
gojo-back.png
naruto-front.jpg
naruto-back.png
luffy-front.png
luffy-back.png
```

Файл `.env` не потрібно завантажувати в GitHub або на хостинг. На хостингу ці значення додаються як Environment Variables.

## Хостинг на Render

1. Створіть репозиторій на GitHub і завантажте туди проект.
2. У Render створіть новий Blueprint або Web Service з цього репозиторію.
3. Build command: `npm install`
4. Start command: `npm start`
5. Додайте Environment Variables:

```env
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=-1003766248840
```

Після деплою Render видасть публічне посилання на сайт.
